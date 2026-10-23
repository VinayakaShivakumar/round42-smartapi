// ROUND42_CLOUDFLARE_DAILY_HEALTH_V1; purely informational.
// Never infer READY from website availability, fixed dates or a demo object.
(() => {
  'use strict';
  const dateEl = document.getElementById('dailyHealthDate');
  const checkedEl = document.getElementById('dailyHealthChecked');
  const badgeEl = document.getElementById('dailyHealthOverall');
  const rowsEl = document.getElementById('dailyHealthRows');
  const noteEl = document.getElementById('dailyHealthNote');
  if (!dateEl || !checkedEl || !badgeEl || !rowsEl || !noteEl) return;

  const dayFmt = new Intl.DateTimeFormat('en-GB', {
    timeZone:'Asia/Kolkata', weekday:'long', day:'numeric', month:'long', year:'numeric'
  });
  const machineDayFmt = new Intl.DateTimeFormat('en-CA', {
    timeZone:'Asia/Kolkata', year:'numeric', month:'2-digit', day:'2-digit'
  });
  const timeFmt = new Intl.DateTimeFormat('en-GB', {
    timeZone:'Asia/Kolkata', hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false
  });
  const mandatory = ['r3','futures','r7','context'];
  const rowLabels = {
    r3:'R3 market data', futures:'NIFTY futures', r7:'Plan17 R7 paper',
    context:'Previous-session context', p4:'Plan18 P4', handoff:'EOD context handoff'
  };

  function ymdIST(now) {
    const p = Object.fromEntries(machineDayFmt.formatToParts(now).map(x=>[x.type,x.value]));
    return `${p.year}-${p.month}-${p.day}`;
  }
  function setOverall(label, tone) {
    badgeEl.textContent = label;
    badgeEl.className = `daily-health-badge dh-${tone}`;
  }
  function addRow(label, value, tone, detail) {
    const item = document.createElement('div');
    item.className = 'daily-health-item';
    const name = document.createElement('span');
    name.textContent = label;
    const status = document.createElement('strong');
    status.className = `dh-${tone}`;
    status.textContent = value;
    if (detail) status.title = String(detail);
    item.append(name,status);
    rowsEl.appendChild(item);
  }
  function tone(status) {
    const value = String(status ?? 'UNKNOWN').toUpperCase();
    if (['RUNNING','PASS'].includes(value)) return 'good';
    if (['FAILED','STOPPED','STALE'].includes(value)) return 'bad';
    if (['PENDING','STARTING','WARNING','UNKNOWN','CHECK_HISTORY'].includes(value)) return 'warn';
    return 'neutral';
  }
  function unverified(message) {
    const now = new Date();
    dateEl.textContent = dayFmt.format(now);
    checkedEl.textContent = `Last attempted check: ${timeFmt.format(now)} IST`;
    setOverall('UNVERIFIED', 'warn');
    rowsEl.replaceChildren();
    for (const id of mandatory) addRow(rowLabels[id], 'NOT VERIFIED', 'warn');
    addRow('Plan18 P4', 'SHADOW', 'neutral', 'Research-only, not a live trading engine');
    noteEl.textContent = `${message} · No READY badge without current OCI health evidence.`;
  }

  function render(snapshot) {
    const now = new Date();
    dateEl.textContent = dayFmt.format(now);
    if (!snapshot || snapshot.schema !== 'ROUND42_DAILY_READINESS_R1' ||
        snapshot.display_only !== true || snapshot.real_orders !== false ||
        !Array.isArray(snapshot.rows)) {
      unverified('The backend returned an unsupported health report');
      return;
    }
    const checked = Date.parse(snapshot.checked_at_ist);
    const age = (Date.now()-checked)/1000;
    const maxAge = Math.min(40,Number(snapshot.snapshot_max_age_seconds)||40);
    if (!Number.isFinite(checked) || !Number.isFinite(age) || age>maxAge || age< -20 ||
        snapshot.date_ist !== ymdIST(now) || snapshot.date_ist !== ymdIST(new Date(checked))) {
      unverified('The OCI health report is stale or dated for another session');
      return;
    }
    const byId = new Map(snapshot.rows.filter(x=>x && typeof x.id==='string').map(x=>[x.id,x]));
    const allCriticalPass = mandatory.every(id => byId.get(id)?.status === (id==='context' ? 'PASS':'RUNNING'));
    const isReady = snapshot.overall==='READY' && allCriticalPass;
    const hasCriticalFailure = mandatory.some(id=>['FAILED','STOPPED','STALE'].includes(byId.get(id)?.status));
    let label=snapshot.overall||'UNVERIFIED';
    let color='warn';
    if (isReady) color='good';
    else if (hasCriticalFailure || label==='FAILED') { label='FAILED'; color='bad'; }
    else if (label==='READY') label='UNVERIFIED';
    else if (['SESSION_COMPLETE','SCHEDULED','STARTING'].includes(label)) color='neutral';
    setOverall(String(label).replaceAll('_',' '),color);
    checkedEl.textContent = `Verified ${timeFmt.format(new Date(checked))} IST · ${String(snapshot.phase||'UNKNOWN').replaceAll('_',' ')}`;
    rowsEl.replaceChildren();
    for (const id of [...mandatory,'p4','handoff']) {
      const r=byId.get(id);
      const status=String(r?.status||'UNKNOWN');
      const detail=r?.detail ?? (r?.previous_day ? `Previous day: ${r.previous_day}` : '');
      addRow(rowLabels[id],status.replaceAll('_',' '),tone(status),detail);
    }
    noteEl.textContent = isReady
      ? 'Verified from OCI service states, fresh market ticks and the R7 freshness check · PAPER ONLY · read-only display.'
      : 'Status is based on the OCI snapshot. Scheduled and pending checks are not failures; missing/stale evidence never shows READY.';
  }

  async function poll() {
    try {
      const ctl=new AbortController();
      const timer=setTimeout(()=>ctl.abort(),3500);
      try {
        const r=await fetch('/api/v1/system-health?_r42='+Date.now(),{
          credentials:'same-origin',cache:'no-store',signal:ctl.signal,
          headers:{Accept:'application/json'}
        });
        if (!r.ok) throw Error('Health feed unavailable (HTTP '+r.status+')');
        render(await r.json());
      } finally {clearTimeout(timer);}
    } catch (_err) {
      unverified('The protected OCI health feed is not reachable through Cloudflare Pages');
    }
  }
  unverified('Checking connection to the protected OCI health feed');
  poll();
  setInterval(poll,10000);
})();
