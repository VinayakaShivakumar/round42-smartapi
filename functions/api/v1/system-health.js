// ROUND42_CLOUDFLARE_DAILY_HEALTH_V1
// Read-only Pages Function: retrieve the already-generated OCI health snapshot
// through the existing PRIVATE Cloudflare service binding (not public OCI access).
// This does not call the broker or modify files, timers, or strategy state.

const POSSIBLE_PATHS = [
  '/round42-system-health.json',
  '/dashboard/round42-system-health.json',
  '/ui/round42-system-health.json',
  '/round42/round42-system-health.json',
  '/static/round42-system-health.json',
  '/round42_dashboard_v2/round42-system-health.json'
];
let rememberedPath = null;

function respond(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'X-Content-Type-Options': 'nosniff'
    }
  });
}

function schemaLooksRight(x) {
  return x && typeof x === 'object' && !Array.isArray(x) &&
    x.schema === 'ROUND42_DAILY_READINESS_R1' &&
    typeof x.checked_at_ist === 'string' &&
    typeof x.date_ist === 'string' &&
    Array.isArray(x.rows) &&
    x.display_only === true && x.real_orders === false;
}

export async function onRequestGet({ request, env }) {
  if (!env?.ROUND42_PROXY || typeof env.ROUND42_PROXY.fetch !== 'function') {
    return respond({ ok:false, reason:'PRIVATE_PROXY_BINDING_UNAVAILABLE' },503);
  }
  // Try known paths concurrently, bounded by a two-second timeout.
  // A deployment can serve the OCI dashboard at /, /dashboard/, /ui/, etc.
  const paths = rememberedPath
    ? [rememberedPath,...POSSIBLE_PATHS.filter(x=>x!==rememberedPath)]
    : POSSIBLE_PATHS;

  async function findSnapshot(path) {
    const u = new URL(request.url);
    u.pathname = path;
    u.search = '_r42_health='+Date.now();
    const upstream = await env.ROUND42_PROXY.fetch(new Request(u.toString(), {
      method:'GET',
      // Preserve the caller's existing Access/session credentials when invoking
      // the same private Worker binding used by the rest of the dashboard.
      headers: request.headers,
      signal: AbortSignal.timeout(2200)
    }));
    if (!upstream.ok) throw new Error('Snapshot not found');
    const ct = (upstream.headers.get('content-type')||'').toLowerCase();
    if (!ct.includes('json')) throw new Error('Not JSON');
    const data = await upstream.json();
    if (!schemaLooksRight(data)) throw new Error('Unexpected schema');
    return {path, data};
  }

  try {
    const result=await Promise.any(paths.map(findSnapshot));
    rememberedPath=result.path;
    return respond(result.data);
  } catch (_) {
    rememberedPath=null;
    return respond({ok:false,reason:'OCI_READINESS_SNAPSHOT_NOT_EXPOSED_BY_PRIVATE_PROXY'},503);
  }
}

export async function onRequest({ request, env }) {
  if (request.method !== 'GET') {
    return respond({ok:false, reason:'METHOD_NOT_ALLOWED'},405);
  }
  return onRequestGet({request,env});
}
