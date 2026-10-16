window.ROUND42_CONFIG = {
  // Leave empty until the Cloudflare-protected OCI read-only API is deployed.
  apiBaseUrl: window.location.origin,
  mode: "PAPER",
  strategy: "Plan17 R7",
  capitalX: 20000,
  refreshMs: 5000,
  endpoints: {
    summary: "/api/v1/summary",
    daily: "/api/v1/daily",
    trades: "/api/v1/trades",
    health: "/api/v1/health",
    profile: "/api/v1/profile",
    market: "/api/v1/market/context",
    options: "/api/v1/market/options",
    futures: "/api/v1/market/futures"
  }
};
