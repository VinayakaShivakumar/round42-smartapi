window.ROUND42_CONFIG = {
  // Leave empty until the Cloudflare-protected OCI read-only API is deployed.
  apiBaseUrl: window.location.origin,
  mode: "PAPER",
  strategy: "Plan17 R7",
  capitalX: 20000,
  refreshMs: 180000, // Defensive default: market-hours main dashboard = 3 minutes
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


// ROUND42_MARKET_SESSION_POLLING_R4 (DISPLAY ONLY)
// A single fetch on page load is still allowed, even after hours, for EOD review.
// Background requests are ONLY allowed on regular NSE F&O sessions 09:15-15:30 IST.
// The listed exchange holidays are 2026 F&O holidays (NSE/FAOP/71777).
// For years beyond 2026 background polling intentionally fails CLOSED until the
// annual trading calendar is updated; manual page reloads still work normally.
window.ROUND42_POLL_POLICY = (() => {
  'use strict';
  const clock = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata', weekday: 'short', year: 'numeric',
    month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false
  });
  const fnoHolidays2026 = new Set([
    '2026-01-26','2026-03-03','2026-03-26','2026-03-31',
    '2026-04-03','2026-04-14','2026-05-01','2026-05-28',
    '2026-06-26','2026-09-14','2026-10-02','2026-10-20',
    '2026-11-10','2026-11-24','2026-12-25'
  ]);
  function isMarketSession(now = new Date()) {
    const p = Object.fromEntries(clock.formatToParts(now).map(x => [x.type,x.value]));
    if (p.year !== '2026' || ['Sat','Sun'].includes(p.weekday)) return false;
    if (fnoHolidays2026.has(`${p.year}-${p.month}-${p.day}`)) return false;
    const minutes = Number(p.hour)*60 + Number(p.minute);
    return minutes >= 9*60+15 && minutes < 15*60+30;
  }
  function shouldAutoPoll(lastAtMs, intervalMs, now = new Date(), isVisible = true) {
    return isVisible && isMarketSession(now) &&
      (now.getTime() - Number(lastAtMs || 0)) >= intervalMs;
  }
  return Object.freeze({
    mainRefreshMs: 180000, healthRefreshMs: 30000, localClockMs: 10000,
    isMarketSession, shouldAutoPoll
  });
})();
