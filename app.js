const cfg = window.ROUND42_CONFIG || {};

const demo = {
  profile: { mode: "PAPER", strategy: "Plan17 R7", capitalX: 20000, availableFunds: null },
  health: [
    ["Strategy", "READY", "good"], ["Execution", "PAPER", "good"], ["R3 collector", "READY", "good"],
    ["Futures collector", "READY", "good"], ["Telegram", "READY", "good"], ["Greeks", "SHADOW", "warn"],
    ["Real orders", "DISABLED", "good"], ["Live controls", "LOCKED", "good"]
  ],
  tradeState: [
    ["Position", "FLAT", "good"], ["Pending orders", "NONE", "good"], ["Last cross", "—", ""],
    ["Candidate side", "—", ""], ["Contradiction", "—", ""], ["Contract", "—", ""]
  ],
  regime: [
    ["Opening gap", "+0.18%", "good"], ["Trend", "MIXED", "warn"], ["Volatility", "NORMAL", ""],
    ["Futures positioning", "LONG BUILD-UP", "good"], ["Options positioning", "NEUTRAL", ""], ["Breadth", "POSITIVE", "good"]
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
  ],
  market: {
    tickers: [
      { name:"NIFTY 50", value:"23,040.40", change:0.42 }, { name:"GIFT NIFTY", value:"23,086.50", change:0.31 },
      { name:"NIFTY FUT", value:"23,071.80", change:0.47 }, { name:"INDIA VIX", value:"12.84", change:-1.26 },
      { name:"USD/INR", value:"83.17", change:0.08 }, { name:"CRUDE", value:"6,142", change:-0.54 },
      { name:"GOLD", value:"76,420", change:0.36 }, { name:"SILVER", value:"92,180", change:0.58 }
    ],
    india: [
      { name:"NIFTY 50", value:"23,040.40", change:0.42, note:"Spot" }, { name:"BANK NIFTY", value:"52,118.70", change:0.31, note:"Financial risk" },
      { name:"GIFT NIFTY", value:"23,086.50", change:0.31, note:"Offshore indication" }, { name:"INDIA VIX", value:"12.84", change:-1.26, note:"Volatility" },
      { name:"USD/INR", value:"83.17", change:0.08, note:"FX" }, { name:"NIFTY FUT", value:"23,071.80", change:0.47, note:"Front-month" }
    ],
    global: [
      { name:"S&P 500 FUT", value:"5,921.25", change:0.24, note:"US risk" }, { name:"NASDAQ FUT", value:"20,817.50", change:0.38, note:"Tech risk" },
      { name:"DOW FUT", value:"43,210", change:0.17, note:"US cyclicals" }, { name:"DXY", value:"103.42", change:-0.11, note:"Dollar index" },
      { name:"US 10Y", value:"4.18%", change:0.03, note:"Yield" }, { name:"BRENT", value:"74.18", change:-0.41, note:"Global crude" }
    ],
    commodities: [
      { name:"MCX CRUDE", value:"6,142", change:-0.54, note:"Energy" }, { name:"MCX GOLD", value:"76,420", change:0.36, note:"Safe haven" },
      { name:"MCX SILVER", value:"92,180", change:0.58, note:"Metal / risk" }, { name:"BRENT", value:"74.18", change:-0.41, note:"Global crude" },
      { name:"USD/INR", value:"83.17", change:0.08, note:"Rupee" }, { name:"DXY", value:"103.42", change:-0.11, note:"Dollar" }
    ],
    breadth: [
      ["NSE advances / declines", "1,248 / 782", "good"], ["NIFTY 50 breadth", "34 ADV / 16 DEC", "good"],
      ["Sector leader", "AUTO +1.1%", "good"], ["Sector laggard", "IT -0.4%", "bad"],
      ["Opening gap", "+41.3 pts", "good"], ["GIFT vs prev close", "+0.28%", "good"]
    ],
    crossRead: [
      { title:"Risk tone", value:"MILD RISK-ON", detail:"GIFT positive, US futures positive, VIX softer." },
      { title:"Energy impulse", value:"SOFT", detail:"Crude lower; reduces immediate inflation pressure." },
      { title:"Currency", value:"NEUTRAL", detail:"USD/INR only mildly firmer; DXY slightly softer." },
      { title:"Metals", value:"FIRM", detail:"Gold and silver positive; watch defensive demand." }
    ]
  },
  options: {
    expiry:"22-Oct-2026", atm:23050, pcrOi:1.07, pcrVol:0.94, maxPain:23000, straddle:248.6, impliedMove:1.08,
    totalCeOi:"3.42 Cr", totalPeOi:"3.67 Cr", totalCeOiChange:"+18.2 L", totalPeOiChange:"+22.7 L",
    ce:{ ltp:119.4, bid:119.25, ask:119.55, oi:"18.4 L", oiChange:"+1.6 L", volume:"42.8 L", iv:12.9, delta:0.51, gamma:0.0018, theta:-8.7, vega:12.4 },
    pe:{ ltp:129.2, bid:129.05, ask:129.35, oi:"20.1 L", oiChange:"+2.2 L", volume:"39.7 L", iv:13.4, delta:-0.49, gamma:0.0018, theta:-8.9, vega:12.5 },
    chain:[
      ["11.8 L","+0.4 L","18.1 L","12.4",91.2,91.5,22900,58.1,58.4,"14.6","12.9 L","+0.8 L","15.6 L"],
      ["13.9 L","+0.7 L","22.4 L","12.5",105.6,105.9,22950,72.5,72.8,"14.1","17.2 L","+1.1 L","18.7 L"],
      ["16.7 L","+1.0 L","31.0 L","12.7",113.8,114.1,23000,98.8,99.1,"13.7","25.9 L","+2.8 L","31.4 L"],
      ["18.4 L","+1.6 L","42.8 L","12.9",119.25,119.55,23050,129.05,129.35,"13.4","39.7 L","+2.2 L","20.1 L"],
      ["29.8 L","+3.6 L","28.3 L","13.2",88.0,88.3,23100,157.4,157.8,"13.0","24.0 L","+1.4 L","17.6 L"],
      ["19.6 L","+1.9 L","17.9 L","13.8",65.4,65.7,23150,194.1,194.7,"12.8","13.1 L","+0.7 L","13.9 L"],
      ["15.2 L","+1.2 L","11.7 L","14.3",47.8,48.1,23200,234.5,235.2,"12.7","10.3 L","+0.3 L","11.2 L"]
    ]
  },
  futures: {
    expiry:"29-Oct-2026", spot:23040.4, ltp:23071.8, basis:31.4, basisPct:0.136, atp:23052.6, oi:"1.91 Cr", oiChange:"+4.8%", volume:"1.42 Cr", bid:23071.5, ask:23072.0, lotSize:65,
    positioning:[["Build-up","LONG BUILD-UP","good"],["Price change","+0.47%","good"],["OI change","+4.8%","good"],["Basis","+31.4 pts","good"],["ATP gap","+19.2 pts","good"]],
    book:[["Best bid","23,071.50"],["Best ask","23,072.00"],["Spread","0.50"],["Lot size","65"],["Depth source","SDK direct"],["Freshness","< 2 sec"]]
  }
};

let state = structuredClone(demo);
let calendarCursor = new Date("2026-10-01T00:00:00");
let selectedDate = "2026-10-15";
const money = v => v == null ? "—" : `${v < 0 ? "-" : ""}₹${Math.abs(Number(v || 0)).toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
const pctClass = v => Number(v) > 0 ? "good" : Number(v) < 0 ? "bad" : "";
const pctText = v => `${Number(v) > 0 ? "+" : ""}${Number(v).toFixed(2)}%`;

async function api(path) {
  if (!cfg.apiBaseUrl) throw new Error("demo");
  const r = await fetch(`${cfg.apiBaseUrl}${path}`, { credentials:"include", headers:{Accept:"application/json"} });
  if (!r.ok) throw new Error(`API ${r.status}`);
  return r.json();
}

async function loadData() {
  if (!cfg.apiBaseUrl) return;
  const ep = cfg.endpoints || {};
  try {
    const [summary,daily,trades,health,profile,market,options,futures] = await Promise.all([
      api(ep.summary||"/api/v1/summary"), api(ep.daily||"/api/v1/daily"), api(ep.trades||"/api/v1/trades"), api(ep.health||"/api/v1/health"),
      api(ep.profile||"/api/v1/profile"), api(ep.market||"/api/v1/market/context"), api(ep.options||"/api/v1/market/options"), api(ep.futures||"/api/v1/market/futures")
    ]);
    state = { ...state, ...summary, daily, trades, health, profile, market, options, futures };
    document.getElementById("apiStatus").textContent = "Live data · API connected";
  } catch (e) {
    document.getElementById("apiStatus").textContent = "Demo market data · API unavailable";
  }
}

function renderTickerStrip(){
  document.getElementById("tickerStrip").innerHTML=(state.market?.tickers||[]).map(q=>`<div class="ticker"><span>${q.name}</span><strong>${q.value}</strong><em class="${pctClass(q.change)}">${pctText(q.change)}</em></div>`).join("");
}
function healthHTML(rows){ return (rows||[]).map(([k,v,c])=>`<div class="health-row"><span>${k}</span><strong class="${c||""}">${v}</strong></div>`).join(""); }
function renderDashboard(){
  const total=state.daily.reduce((s,d)=>s+Number(d.net||0),0); const today=state.daily.at(-1)?.net||0;
  document.getElementById("capitalValue").textContent=money(state.profile?.capitalX ?? cfg.capitalX ?? 20000);
  document.getElementById("availableFunds").textContent=money(state.profile?.availableFunds);
  document.getElementById("todayPnl").textContent=money(today); document.getElementById("monthPnl").textContent=money(total);
  document.getElementById("tradeCount").textContent=state.trades.length; document.getElementById("openRisk").textContent="FLAT";
  document.getElementById("healthList").innerHTML=healthHTML(state.health); document.getElementById("tradeState").innerHTML=healthHTML(state.tradeState);
  document.getElementById("regimeList").innerHTML=healthHTML(state.regime);
  document.getElementById("recentTrades").innerHTML=state.trades.slice(-4).reverse().map(t=>`<div class="trade-item"><span class="side-badge ${t.side}">${t.side}</span><div class="trade-meta"><strong>${t.symbol}</strong><span>${t.date} · ${t.entryTime} → ${t.exitTime}</span></div><span class="pnl ${t.net>=0?"good":"bad"}">${money(t.net)}</span></div>`).join("")||`<div class="subtle">No trades yet.</div>`;
}
function quoteHTML(list){ return (list||[]).map(q=>`<div class="quote"><div><span>${q.name}</span><small>${q.note||""}</small></div><div class="quote-value"><strong>${q.value}</strong><em class="${pctClass(q.change)}">${pctText(q.change)}</em></div></div>`).join(""); }
function renderMarket(){
  document.getElementById("indiaMarkets").innerHTML=quoteHTML(state.market?.india); document.getElementById("globalMarkets").innerHTML=quoteHTML(state.market?.global);
  document.getElementById("commodityMarkets").innerHTML=quoteHTML(state.market?.commodities); document.getElementById("breadthList").innerHTML=healthHTML(state.market?.breadth);
  document.getElementById("crossMarketRead").innerHTML=(state.market?.crossRead||[]).map(x=>`<div class="signal-card"><span>${x.title}</span><strong>${x.value}</strong><p>${x.detail}</p></div>`).join("");
}
function metricCard(label,value,sub=""){ return `<article class="card metric compact"><span>${label}</span><strong>${value}</strong>${sub?`<small>${sub}</small>`:""}</article>`; }
function contractGrid(x){ const rows=[["LTP",x.ltp],["Bid",x.bid],["Ask",x.ask],["OI",x.oi],["ΔOI",x.oiChange],["Volume",x.volume],["IV",`${x.iv}%`],["Delta",x.delta],["Gamma",x.gamma],["Theta",x.theta],["Vega",x.vega]]; return rows.map(([k,v])=>`<div class="contract-stat"><span>${k}</span><strong>${v}</strong></div>`).join(""); }
function renderOptions(){
  const o=state.options||{}; document.getElementById("optionExpiry").textContent=`Expiry ${o.expiry||"—"}`; document.getElementById("atmStrike").textContent=`ATM ${o.atm||"—"}`;
  document.getElementById("optionMetrics").innerHTML=[metricCard("PCR OI",o.pcrOi??"—","Put/Call open interest"),metricCard("PCR Volume",o.pcrVol??"—","Put/Call traded volume"),metricCard("Max pain",o.maxPain??"—","Current expiry"),metricCard("ATM straddle",o.straddle??"—","CE + PE premium"),metricCard("Implied move",o.impliedMove!=null?`${o.impliedMove}%`:"—","Expiry-based estimate"),metricCard("PE vs CE OI",`${o.totalPeOi||"—"} / ${o.totalCeOi||"—"}`,"Put / Call total OI")].join("");
  document.getElementById("atmCE").innerHTML=contractGrid(o.ce||{}); document.getElementById("atmPE").innerHTML=contractGrid(o.pe||{});
  document.getElementById("optionChainBody").innerHTML=(o.chain||[]).map(r=>`<tr>${r.map((v,i)=>`<td class="${i===6?"strike-cell":""}">${v}</td>`).join("")}</tr>`).join("");
}
function renderFutures(){
  const f=state.futures||{}; document.getElementById("futuresExpiry").textContent=`Expiry ${f.expiry||"—"}`;
  document.getElementById("futuresMetrics").innerHTML=[metricCard("Futures LTP",f.ltp??"—"),metricCard("Spot",f.spot??"—"),metricCard("Basis",f.basis!=null?`${f.basis>0?"+":""}${f.basis.toFixed(1)} pts`:"—",f.basisPct!=null?`${f.basisPct.toFixed(3)}%`:""),metricCard("Broker ATP",f.atp??"—"),metricCard("Open interest",f.oi??"—",`Δ ${f.oiChange||"—"}`),metricCard("Volume",f.volume??"—")].join("");
  document.getElementById("futuresPositioning").innerHTML=healthHTML(f.positioning); document.getElementById("futuresBook").innerHTML=healthHTML(f.book);
}
function renderCalendar(){
  const y=calendarCursor.getFullYear(),m=calendarCursor.getMonth(); document.getElementById("monthLabel").textContent=calendarCursor.toLocaleString("en-IN",{month:"long",year:"numeric"});
  const first=new Date(y,m,1),firstMonIndex=(first.getDay()+6)%7,days=new Date(y,m+1,0).getDate(),map=new Map(state.daily.map(d=>[d.date,d])),cells=[];
  for(let i=0;i<firstMonIndex;i++)cells.push(`<button class="day empty" tabindex="-1"></button>`);
  for(let d=1;d<=days;d++){const key=`${y}-${String(m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`,x=map.get(key),net=x?.net??null; cells.push(`<button class="day ${x?"trading":""} ${selectedDate===key?"selected":""}" data-date="${key}"><span class="day-num">${d}</span>${x?`<span class="day-pnl ${net>0?"win":net<0?"loss":"flat"}">${money(net)}</span><small>${x.trades} trade${x.trades===1?"":"s"}</small>`:""}</button>`);} document.getElementById("calendarGrid").innerHTML=cells.join("");
  document.querySelectorAll(".day.trading").forEach(b=>b.addEventListener("click",()=>{selectedDate=b.dataset.date;renderCalendar();renderDayDetail();}));
}
function renderDayDetail(){
  const d=state.daily.find(x=>x.date===selectedDate),el=document.getElementById("dayDetail"); if(!d){el.className="card day-detail empty-state";el.innerHTML=`No trading record for ${selectedDate}.`;return;}
  const trades=state.trades.filter(t=>t.date===selectedDate); el.className="card day-detail"; el.innerHTML=`<div class="section-head"><div><h2>${selectedDate}</h2><p>Daily realised result</p></div><strong class="${d.net>=0?"good":"bad"}">${money(d.net)}</strong></div><div class="detail-stats"><div class="detail-stat"><span>Gross</span><strong>${money(d.gross)}</strong></div><div class="detail-stat"><span>Charges</span><strong>${money(d.charges)}</strong></div><div class="detail-stat"><span>Net</span><strong>${money(d.net)}</strong></div><div class="detail-stat"><span>Trades</span><strong>${d.trades}</strong></div></div>${trades.map(t=>`<div class="trade-item"><span class="side-badge ${t.side}">${t.side}</span><div class="trade-meta"><strong>${t.symbol}</strong><span>${t.entryTime} @ ${t.entry} → ${t.exitTime} @ ${t.exit} · ${t.exitReason}</span></div><strong class="${t.net>=0?"good":"bad"}">${money(t.net)}</strong></div>`).join("")||`<div class="subtle">No trades.</div>`}`;
}
function renderOrders(){
  const filter=document.getElementById("orderDateFilter")?.value||"ALL",rows=state.trades.filter(t=>filter==="ALL"||t.date===filter); document.getElementById("ordersBody").innerHTML=rows.map(t=>`<tr><td>${t.date}</td><td><span class="side-badge ${t.side}">${t.side}</span></td><td>${t.symbol}</td><td>${t.qty}</td><td>${t.entryTime}<br><span class="subtle">${t.entry}</span></td><td>${t.exitTime}<br><span class="subtle">${t.exit}</span></td><td>${money(t.gross)}</td><td>${money(t.charges)}</td><td class="${t.net>=0?"good":"bad"}"><strong>${money(t.net)}</strong></td><td>${t.mfe}</td><td>${t.mae}</td><td>${t.exitReason}</td></tr>`).join("")||`<tr><td colspan="12" class="subtle">No trades for this filter.</td></tr>`;
}
function setupFilters(){const dates=[...new Set(state.trades.map(t=>t.date))].sort().reverse(),s=document.getElementById("orderDateFilter");s.innerHTML=`<option value="ALL">All dates</option>`+dates.map(d=>`<option value="${d}">${d}</option>`).join("");s.addEventListener("change",renderOrders);}
function setupNav(){document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===t));document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===t.dataset.view));}));document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>document.querySelector(`.tab[data-view="${b.dataset.go}"]`).click()));document.getElementById("prevMonth").addEventListener("click",()=>{calendarCursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()-1,1);renderCalendar();});document.getElementById("nextMonth").addEventListener("click",()=>{calendarCursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()+1,1);renderCalendar();});}
function renderAll(){renderTickerStrip();renderDashboard();renderMarket();renderOptions();renderFutures();renderCalendar();renderDayDetail();renderOrders();document.getElementById("lastUpdated").textContent=`Updated ${new Date().toLocaleString("en-IN")}`;}
(async function boot(){setupNav();await loadData();setupFilters();renderAll();})();
