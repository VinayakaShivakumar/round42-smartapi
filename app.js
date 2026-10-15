const cfg = window.ROUND42_CONFIG || {};

const demo = {
  profile: { mode: "PAPER", strategy: "Plan17 R7", capitalX: 20000 },
  health: [
    ["Strategy", "READY", "good"],
    ["Execution", "PAPER", "good"],
    ["Real orders", "DISABLED", "good"],
    ["Greeks", "SHADOW", "warn"],
    ["Live controls", "LOCKED", "good"]
  ],
  daily: [
    { date: "2026-10-12", net: 820, gross: 910, charges: 90, trades: 1 },
    { date: "2026-10-13", net: -430, gross: -340, charges: 90, trades: 1 },
    { date: "2026-10-14", net: 0, gross: 0, charges: 0, trades: 0 },
    { date: "2026-10-15", net: 0, gross: 0, charges: 0, trades: 0 }
  ],
  trades: [
    { id: "DEMO-001", date: "2026-10-12", side: "CE", symbol: "NIFTY DEMO CE", qty: 65, entryTime: "10:06", entry: 118.40, exitTime: "10:42", exit: 132.40, gross: 910, charges: 90, net: 820, mfe: 18.6, mae: -3.1, exitReason: "TRAIL_EXIT" },
    { id: "DEMO-002", date: "2026-10-13", side: "PE", symbol: "NIFTY DEMO PE", qty: 65, entryTime: "11:18", entry: 105.20, exitTime: "11:33", exit: 99.97, gross: -340, charges: 90, net: -430, mfe: 2.2, mae: -7.4, exitReason: "PROTECTIVE_STOP" }
  ]
};

let state = { ...demo };
let calendarCursor = new Date("2026-10-01T00:00:00");
let selectedDate = "2026-10-15";

const money = v => `${v < 0 ? "-" : ""}₹${Math.abs(Number(v || 0)).toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

async function api(path) {
  if (!cfg.apiBaseUrl) throw new Error("demo");
  const r = await fetch(`${cfg.apiBaseUrl}${path}`, { credentials: "include", headers: { "Accept": "application/json" } });
  if (!r.ok) throw new Error(`API ${r.status}`);
  return r.json();
}

async function loadData() {
  if (!cfg.apiBaseUrl) return;
  try {
    const [summary, daily, trades, health, profile] = await Promise.all([
      api("/api/v1/summary"), api("/api/v1/daily"), api("/api/v1/trades"), api("/api/v1/health"), api("/api/v1/profile")
    ]);
    state = { ...state, ...summary, daily, trades, health, profile };
    document.getElementById("apiStatus").textContent = "API connected";
  } catch (e) {
    document.getElementById("apiStatus").textContent = "Demo data · API unavailable";
  }
}

function renderDashboard() {
  const total = state.daily.reduce((s, d) => s + Number(d.net || 0), 0);
  const today = state.daily[state.daily.length - 1]?.net || 0;
  document.getElementById("capitalValue").textContent = money(state.profile?.capitalX ?? cfg.capitalX ?? 20000);
  document.getElementById("todayPnl").textContent = money(today);
  document.getElementById("monthPnl").textContent = money(total);
  document.getElementById("tradeCount").textContent = state.trades.length;

  document.getElementById("healthList").innerHTML = state.health.map(([k,v,c]) => `<div class="health-row"><span>${k}</span><strong class="${c || ""}">${v}</strong></div>`).join("");

  document.getElementById("recentTrades").innerHTML = state.trades.slice(-4).reverse().map(t => `
    <div class="trade-item">
      <span class="side-badge ${t.side}">${t.side}</span>
      <div class="trade-meta"><strong>${t.symbol}</strong><span>${t.date} · ${t.entryTime} → ${t.exitTime}</span></div>
      <span class="pnl ${t.net >= 0 ? "good" : "bad"}">${money(t.net)}</span>
    </div>`).join("") || `<div class="subtle">No trades yet.</div>`;
}

function renderCalendar() {
  const y = calendarCursor.getFullYear();
  const m = calendarCursor.getMonth();
  document.getElementById("monthLabel").textContent = calendarCursor.toLocaleString("en-IN", { month: "long", year: "numeric" });
  const first = new Date(y, m, 1);
  const firstMonIndex = (first.getDay() + 6) % 7;
  const days = new Date(y, m + 1, 0).getDate();
  const map = new Map(state.daily.map(d => [d.date, d]));
  const cells = [];
  for (let i = 0; i < firstMonIndex; i++) cells.push(`<button class="day empty" tabindex="-1"></button>`);
  for (let d = 1; d <= days; d++) {
    const date = `${y}-${String(m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const info = map.get(date);
    const cls = !info ? "" : info.net > 0 ? "win" : info.net < 0 ? "loss" : "flat";
    cells.push(`<button class="day ${info ? "trading" : ""} ${date === selectedDate ? "selected" : ""}" data-date="${date}">
      <span class="day-num">${d}</span>
      ${info ? `<span class="day-pnl ${cls}">${money(info.net)}</span>` : ""}
    </button>`);
  }
  document.getElementById("calendarGrid").innerHTML = cells.join("");
  document.querySelectorAll(".day[data-date]").forEach(b => b.addEventListener("click", () => { selectedDate = b.dataset.date; renderCalendar(); renderDayDetail(); }));
}

function renderDayDetail() {
  const d = state.daily.find(x => x.date === selectedDate);
  const trades = state.trades.filter(t => t.date === selectedDate);
  const el = document.getElementById("dayDetail");
  if (!d) {
    el.className = "card day-detail empty-state";
    el.innerHTML = `<strong>${selectedDate}</strong><p>No recorded paper session data for this day.</p>`;
    return;
  }
  el.className = "card day-detail";
  el.innerHTML = `
    <div class="section-head"><div><h2>${selectedDate}</h2><p>${d.trades} trade${d.trades === 1 ? "" : "s"}</p></div><strong class="${d.net >= 0 ? "good" : "bad"}">${money(d.net)}</strong></div>
    <div class="detail-stats">
      <div class="detail-stat"><span>Gross P&amp;L</span><strong>${money(d.gross)}</strong></div>
      <div class="detail-stat"><span>Charges</span><strong>${money(d.charges)}</strong></div>
      <div class="detail-stat"><span>Net P&amp;L</span><strong>${money(d.net)}</strong></div>
      <div class="detail-stat"><span>Trades</span><strong>${d.trades}</strong></div>
    </div>
    ${trades.map(t => `<div class="trade-item"><span class="side-badge ${t.side}">${t.side}</span><div class="trade-meta"><strong>${t.symbol}</strong><span>${t.entryTime} @ ${t.entry} → ${t.exitTime} @ ${t.exit} · MFE ${t.mfe} · MAE ${t.mae}</span></div><span class="pnl ${t.net >= 0 ? "good" : "bad"}">${money(t.net)}</span></div>`).join("") || `<div class="subtle">No trades.</div>`}
  `;
}

function renderOrders() {
  const filter = document.getElementById("orderDateFilter").value || "ALL";
  const rows = state.trades.filter(t => filter === "ALL" || t.date === filter);
  document.getElementById("ordersBody").innerHTML = rows.map(t => `<tr>
    <td>${t.date}</td><td><span class="side-badge ${t.side}">${t.side}</span></td><td>${t.symbol}</td><td>${t.qty}</td><td>${t.entryTime}<br><span class="subtle">${t.entry}</span></td><td>${t.exitTime}<br><span class="subtle">${t.exit}</span></td><td class="${t.net >= 0 ? "good" : "bad"}"><strong>${money(t.net)}</strong></td><td>${t.exitReason}</td>
  </tr>`).join("") || `<tr><td colspan="8" class="subtle">No trades for this filter.</td></tr>`;
}

function setupFilters() {
  const dates = [...new Set(state.trades.map(t => t.date))].sort().reverse();
  const s = document.getElementById("orderDateFilter");
  s.innerHTML = `<option value="ALL">All dates</option>` + dates.map(d => `<option value="${d}">${d}</option>`).join("");
  s.addEventListener("change", renderOrders);
}

function setupNav() {
  document.querySelectorAll(".tab").forEach(t => t.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(x => x.classList.toggle("active", x === t));
    document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === t.dataset.view));
  }));
  document.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => document.querySelector(`.tab[data-view="${b.dataset.go}"]`).click()));
  document.getElementById("prevMonth").addEventListener("click", () => { calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth()-1, 1); renderCalendar(); });
  document.getElementById("nextMonth").addEventListener("click", () => { calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth()+1, 1); renderCalendar(); });
}

(async function boot() {
  setupNav();
  await loadData();
  setupFilters();
  renderDashboard();
  renderCalendar();
  renderDayDetail();
  renderOrders();
  document.getElementById("lastUpdated").textContent = `Updated ${new Date().toLocaleString("en-IN")}`;
})();
