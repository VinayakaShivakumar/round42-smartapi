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
const pctClass = v =>
  v == null || v === "" ? "" :
  Number(v) > 0 ? "good" :
  Number(v) < 0 ? "bad" : "";

const pctText = v =>
  v == null || v === "" ? "—" :
  `${Number(v) > 0 ? "+" : ""}${Number(v).toFixed(2)}%`;

async function api(path) {
  if (!cfg.apiBaseUrl) throw new Error("demo");
  const r = await fetch(`${cfg.apiBaseUrl}${path}`, { credentials:"include", headers:{Accept:"application/json"} });
  if (!r.ok) throw new Error(`API ${r.status}`);
  return r.json();
}

function unwrap(x, key) {
  return x?.[key] ?? x?.data ?? x ?? {};
}

function statusClass(v) {
  const x = String(v ?? "").toUpperCase();
  if (["READY", "PAPER", "DISABLED", "LOCKED", "FLAT", "NONE", "EOD", "CURRENT"].includes(x)) return "good";
  if (
    x.includes("SHADOW") ||
    x.includes("STALE") ||
    x.includes("DELAYED") ||
    x.includes("UNAVAILABLE") ||
    x.includes("NOT_PROBED")
  ) return "warn";
  if (x.includes("FAIL") || x.includes("ERROR") || x.includes("OFFLINE")) return "bad";
  return "";
}

function marketSessionPhase() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(new Date());

  const get = type => parts.find(x => x.type === type)?.value;
  const weekday = get("weekday");
  const hh = Number(get("hour"));
  const mm = Number(get("minute"));
  const mins = hh * 60 + mm;
  const tradingDay = !["Sat", "Sun"].includes(weekday);

  if (!tradingDay || mins >= (15 * 60 + 40)) return "EOD / CLOSED";
  if (mins < (8 * 60 + 45)) return "PRE-MARKET";
  return null;
}

function sessionAwareCollector(raw) {
  const value = String(raw ?? "—");
  const upper = value.toUpperCase();

  // Display-only cleanup: do not hide a genuine live-session failure.
  if (!["OFFLINE", "STALE", "UNAVAILABLE"].includes(upper)) {
    return [value, statusClass(value)];
  }

  const phase = marketSessionPhase();
  if (phase) return [phase, ""];
  return [value, statusClass(value)];
}

function num(v) {
  if (v == null || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function fmtNum(v, digits = 2) {
  const n = num(v);
  return n == null ? "—" : n.toLocaleString("en-IN", { maximumFractionDigits: digits });
}

function fmtPctLive(v) {
  const n = num(v);
  return n == null ? "—" : `${n > 0 ? "+" : ""}${n.toFixed(2)}%`;
}

function fmtCompactIN(v) {
  const n = num(v);
  if (n == null) return "—";
  const a = Math.abs(n);
  if (a >= 10000000) return `${(n / 10000000).toFixed(2)} Cr`;
  if (a >= 100000) return `${(n / 100000).toFixed(2)} L`;
  return n.toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

function shortTime(v) {
  if (!v) return "—";
  const m = String(v).match(/T(\d{2}:\d{2})/);
  return m ? m[1] : String(v);
}

function marketQuote(name, src, note = "", valueSuffix = "") {
  const value = src?.value ?? src?.ltp ?? src?.price ?? null;
  const change = src?.change_pct ?? src?.percent_change ?? src?.change ?? null;
  const status = String(src?.status ?? "").toUpperCase();

  let stateNote = "";
  if (src?.source === "NOT_CONNECTED" || status === "UNAVAILABLE") {
    stateNote = "Not connected";
  } else if (status && !["CURRENT", "LIVE"].includes(status)) {
    stateNote = status.replaceAll("_", " ");
  }

  return {
    name,
    value: value == null ? "—" : `${fmtNum(value)}${valueSuffix}`,
    change: num(change),
    note: [note, stateNote].filter(Boolean).join(" · ")
  };
}

function sectorExtremes(india = {}) {
  const sectors = [
    ["NIFTY AUTO", india.NIFTY_AUTO],
    ["NIFTY IT", india.NIFTY_IT],
    ["NIFTY FMCG", india.NIFTY_FMCG],
    ["NIFTY METAL", india.NIFTY_METAL],
    ["NIFTY PHARMA", india.NIFTY_PHARMA],
    ["NIFTY REALTY", india.NIFTY_REALTY],
    ["NIFTY ENERGY", india.NIFTY_ENERGY],
    ["NIFTY MEDIA", india.NIFTY_MEDIA],
    ["NIFTY PSU BANK", india.NIFTY_PSU_BANK],
    ["NIFTY FIN SERVICE", india.NIFTY_FIN_SERVICE]
  ]
    .map(([name, row]) => ({ name, change: num(row?.percent_change ?? row?.change_pct) }))
    .filter(x => x.change != null)
    .sort((a, b) => b.change - a.change);

  return {
    leader: sectors.length ? `${sectors[0].name} ${fmtPctLive(sectors[0].change)}` : "—",
    laggard: sectors.length ? `${sectors.at(-1).name} ${fmtPctLive(sectors.at(-1).change)}` : "—"
  };
}

function mapContract(x) {
  if (!x) return {};
  return {
    ltp: fmtNum(x.ltp),
    bid: fmtNum(x.best_bid ?? x.bid),
    ask: fmtNum(x.best_ask ?? x.ask),
    oi: fmtCompactIN(x.open_interest ?? x.oi),
    oiChange: x.oi_change_pct != null ? fmtPctLive(x.oi_change_pct) : "—",
    volume: fmtCompactIN(x.volume),
    iv: num(x.iv),
    delta: x.delta ?? "—",
    gamma: x.gamma ?? "—",
    theta: x.theta ?? "—",
    vega: x.vega ?? "—"
  };
}

async function loadData() {
  if (!cfg.apiBaseUrl) return;

  const ep = cfg.endpoints || {};

  try {
    const [
      summaryRaw,
      dailyRaw,
      tradesRaw,
      healthRaw,
      profileRaw,
      marketRaw,
      optionsRaw,
      futuresRaw,
      contextRaw
    ] = await Promise.all([
      api(ep.summary || "/api/v1/summary"),
      api(ep.daily || "/api/v1/daily"),
      api(ep.trades || "/api/v1/trades"),
      api(ep.health || "/api/v1/health"),
      api(ep.profile || "/api/v1/profile"),
      api(ep.market || "/api/v1/market/context"),
      api(ep.options || "/api/v1/market/options"),
      api(ep.futures || "/api/v1/market/futures"),
      api(ep.context || "/api/v1/context").catch(error => {
        console.warn("ROUND42 AUX context unavailable; keeping primary dashboard live", error);
        return null;
      })
    ]);

    const s = unwrap(summaryRaw, "summary");
    const p = unwrap(profileRaw, "profile");
    const h = unwrap(healthRaw, "health");
    const m = unwrap(marketRaw, "market");
    const o = unwrap(optionsRaw, "options");
    const f = unwrap(futuresRaw, "futures");
    const c = contextRaw ?? {};
    const ci = c.india ?? {};
    const cg = c.global ?? {};

    const dailyRows = (unwrap(dailyRaw, "daily") || [])
      .map(d => ({
        date: d.session_date ?? d.date,
        net: num(d.net_pnl ?? d.net) ?? 0,
        gross: num(d.gross_pnl ?? d.gross) ?? 0,
        charges: num(d.charges ?? d.charges_estimate) ?? 0,
        trades: Number(d.trades ?? 0)
      }))
      .filter(d => d.date)
      .sort((a, b) => a.date.localeCompare(b.date));

    const tradeRows = (unwrap(tradesRaw, "trades") || [])
      .map(t => ({
        id: t.trade_id ?? t.id,
        date: t.session_date ?? t.date,
        side: t.option_type ?? t.side ?? "—",
        symbol: t.option_symbol ?? t.symbol ?? "—",
        qty: Number(t.quantity ?? t.qty ?? 0),
        entryTime: shortTime(t.entry_ts_ist ?? t.entry_time ?? t.entryTime),
        entry: num(t.entry_price ?? t.entry),
        exitTime: shortTime(t.exit_ts_ist ?? t.exit_time ?? t.exitTime),
        exit: num(t.exit_price ?? t.exit),
        gross: num(t.gross_pnl ?? t.gross) ?? 0,
        charges: num(t.charges_estimate ?? t.charges) ?? 0,
        net: num(t.net_pnl ?? t.pnl ?? t.net) ?? 0,
        mfe: num(t.max_favourable_pts ?? t.mfe),
        mae: num(t.max_adverse_pts ?? t.mae),
        exitReason: t.exit_reason ?? t.exitReason ?? "—"
      }))
      .sort((a, b) => Number(a.id ?? 0) - Number(b.id ?? 0));

    const [r3State, r3Class] = sessionAwareCollector(h.r3_collector);
    const [futState, futClass] = sessionAwareCollector(h.futures_collector);

    const healthRows = [
      ["Strategy", h.strategy ?? "—", statusClass(h.strategy)],
      ["Execution", h.execution ?? "—", statusClass(h.execution)],
      ["R3 collector", r3State, r3Class],
      ["Futures collector", futState, futClass],
      ["Telegram", h.telegram ?? "—", statusClass(h.telegram)],
      ["Greeks", h.greeks ?? "—", statusClass(h.greeks)],
      ["Real orders", h.real_orders ?? "—", statusClass(h.real_orders)],
      ["Live controls", h.live_controls ?? "—", statusClass(h.live_controls)]
    ];

    const tradeStateRows = [
      ["Position", h.position ?? "FLAT", statusClass(h.position ?? "FLAT")],
      ["Pending orders", h.pending_orders ?? "NONE", statusClass(h.pending_orders ?? "NONE")],
      ["Last cross", h.last_cross ?? "—", ""],
      ["Candidate side", h.candidate_side ?? "—", ""],
      ["Contradiction", h.contradiction ?? "—", h.contradiction ? "bad" : ""],
      ["Contract", h.contract ?? "—", ""]
    ];

    const nifty = m.nifty ?? m.nifty50 ?? {};
    const breadth = m.breadth ?? {};

    // AUX context is display-only. It never feeds strategy or execution logic.
    const auxNifty = ci.NIFTY_50 ?? nifty;
    const auxBank = ci.NIFTY_BANK ?? m.bank_nifty ?? m.bankNifty ?? {};
    const auxVix = ci.INDIA_VIX ?? m.india_vix ?? m.indiaVix ?? {};
    const auxGift = c.gift_nifty ?? m.gift_nifty ?? m.giftNifty ?? {};
    const auxUsdInr = cg.USD_INR ?? m.usd_inr ?? m.usdInr ?? {};
    const auxCrude = cg.CRUDE_WTI ?? m.crude ?? {};
    const auxGold = cg.GOLD ?? m.gold ?? {};
    const auxSilver = cg.SILVER ?? m.silver ?? {};
    const auxBrent = cg.BRENT ?? m.brent ?? {};
    const auxDxy = cg.DXY ?? m.dxy ?? {};
    const auxUs10y = cg.US10Y ?? m.us10y ?? {};
    const auxSp = cg.SP500_FUT ?? m.sp500_futures ?? {};
    const auxNasdaq = cg.NASDAQ_FUT ?? m.nasdaq_futures ?? {};
    const auxDow = cg.DOW_FUT ?? m.dow_futures ?? {};
    const auxMarket = ci._market ?? {};
    const sectors = sectorExtremes(ci);

    const niftyDisplayChange = num(auxNifty.percent_change ?? auxNifty.change_pct);
    const externalConnected = Boolean(contextRaw && c.authority === "DISPLAY_ONLY_READ_ONLY");

    const marketState = {
      tickers: [
        marketQuote("NIFTY 50", auxNifty, "NSE spot"),
        marketQuote("GIFT NIFTY", auxGift, "Offshore indication"),
        {
          name: "NIFTY FUT",
          value: (f.ltp ?? f.futures_ltp) != null
            ? fmtNum(f.ltp ?? f.futures_ltp)
            : (marketSessionPhase() ?? "—"),
          change: num(f.price_change_pct),
          note: "Front month · primary collector"
        },
        marketQuote("INDIA VIX", auxVix, "NSE volatility"),
        marketQuote("USD/INR", auxUsdInr, "FX"),
        marketQuote("WTI CRUDE", auxCrude, "NYMEX"),
        marketQuote("GOLD", auxGold, "COMEX"),
        marketQuote("SILVER", auxSilver, "COMEX")
      ],
      india: [
        marketQuote("NIFTY 50", auxNifty, "NSE spot"),
        marketQuote("BANK NIFTY", auxBank, "NSE financial risk"),
        marketQuote("GIFT NIFTY", auxGift, "Offshore indication"),
        marketQuote("INDIA VIX", auxVix, "NSE volatility"),
        marketQuote("USD/INR", auxUsdInr, "FX"),
        {
          name: "NIFTY FUT",
          value: (f.ltp ?? f.futures_ltp) != null
            ? fmtNum(f.ltp ?? f.futures_ltp)
            : (marketSessionPhase() ?? "—"),
          change: num(f.price_change_pct),
          note: "Front month · primary collector"
        }
      ],
      global: [
        marketQuote("S&P 500 FUT", auxSp, "US risk"),
        marketQuote("NASDAQ FUT", auxNasdaq, "Tech risk"),
        marketQuote("DOW FUT", auxDow, "US cyclicals"),
        marketQuote("DXY", auxDxy, "Dollar index"),
        marketQuote("US 10Y", auxUs10y, "Yield", "%"),
        marketQuote("BRENT", auxBrent, "Global crude")
      ],
      commodities: [
        marketQuote("WTI CRUDE", auxCrude, "NYMEX"),
        marketQuote("GOLD FUT", auxGold, "COMEX"),
        marketQuote("SILVER FUT", auxSilver, "COMEX"),
        marketQuote("BRENT", auxBrent, "Global crude"),
        marketQuote("USD/INR", auxUsdInr, "Rupee"),
        marketQuote("DXY", auxDxy, "Dollar")
      ],
      breadth: [
        ["NSE advances / declines",
          auxMarket.advances != null && auxMarket.declines != null
            ? `${auxMarket.advances} / ${auxMarket.declines}`
            : breadth.advances != null && breadth.declines != null
              ? `${breadth.advances} / ${breadth.declines}`
              : "—", ""],
        ["NIFTY 50 breadth",
          breadth.nifty50_positive != null ? `${breadth.nifty50_positive} positive` : "—", ""],
        ["Sector leader", sectors.leader !== "—" ? sectors.leader : breadth.sector_leader ?? "—", "good"],
        ["Sector laggard", sectors.laggard !== "—" ? sectors.laggard : breadth.sector_laggard ?? "—", "bad"],
        ["Opening gap", fmtPctLive(nifty.opening_gap_pct), ""],
        ["NIFTY change", fmtPctLive(niftyDisplayChange), pctClass(niftyDisplayChange)]
      ],
      crossRead: [
        { title: "NIFTY session", value: fmtPctLive(niftyDisplayChange), detail: "NSE official display context · zero strategy authority." },
        { title: "Futures build-up", value: f.build_up ?? f.buildup ?? "—", detail: "Primary price + OI classification · display only." },
        { title: "Options PCR OI", value: o.pcr_oi != null ? Number(o.pcr_oi).toFixed(2) : "—", detail: "Current captured option-chain context." },
        {
          title: "External context",
          value: externalConnected ? "CONNECTED" : "PENDING",
          detail: externalConnected
            ? "AUX context connected. GIFT NIFTY remains unavailable until a validated NSE IX source is connected."
            : "AUX display context unavailable. Primary trading dashboard remains independent."
        }
      ]
    };

    const optionsState = {
      expiry: o.expiry ?? "—",
      atm: o.atm_strike ?? o.atm ?? "—",
      pcrOi: num(o.pcr_oi ?? o.pcrOi),
      pcrVol: num(o.pcr_volume ?? o.pcrVol),
      maxPain: o.max_pain ?? o.maxPain ?? "—",
      straddle: num(o.atm_straddle ?? o.straddle),
      impliedMove: num(o.implied_move_pct ?? o.impliedMove),
      totalCeOi: fmtCompactIN(o.total_ce_oi ?? o.totalCeOi),
      totalPeOi: fmtCompactIN(o.total_pe_oi ?? o.totalPeOi),
      ce: mapContract(o.atm_ce ?? o.ce),
      pe: mapContract(o.atm_pe ?? o.pe),
      chain: (o.focused_chain ?? o.chain ?? []).map(r => {
        if (Array.isArray(r)) return r;
        const ce = r.ce ?? {};
        const pe = r.pe ?? {};
        return [
          fmtCompactIN(ce.open_interest ?? ce.oi),
          ce.oi_change_pct != null ? fmtPctLive(ce.oi_change_pct) : "—",
          fmtCompactIN(ce.volume),
          ce.iv ?? "—",
          fmtNum(ce.best_bid ?? ce.bid),
          fmtNum(ce.best_ask ?? ce.ask),
          r.strike ?? "—",
          fmtNum(pe.best_bid ?? pe.bid),
          fmtNum(pe.best_ask ?? pe.ask),
          pe.iv ?? "—",
          fmtCompactIN(pe.volume),
          pe.oi_change_pct != null ? fmtPctLive(pe.oi_change_pct) : "—",
          fmtCompactIN(pe.open_interest ?? pe.oi)
        ];
      })
    };

    const futuresState = {
      expiry: f.front_expiry ?? (f.symbol ? f.symbol.replace(/^NIFTY/, "").replace(/FUT$/, "") : "—"),
      spot: num(f.spot),
      ltp: num(f.ltp ?? f.futures_ltp),
      basis: num(f.basis_points ?? f.basis),
      basisPct: num(f.basis_pct ?? f.basisPct),
      atp: num(f.broker_atp ?? f.atp),
      oi: fmtCompactIN(f.open_interest ?? f.oi),
      oiChange: f.oi_change_pct != null ? fmtPctLive(f.oi_change_pct) : "—",
      volume: fmtCompactIN(f.volume),
      bid: num(f.best_bid ?? f.bid),
      ask: num(f.best_ask ?? f.ask),
      lotSize: f.lot_size ?? f.lotSize ?? 65,
      positioning: [
        ["Build-up", f.build_up ?? f.buildup ?? "—", ""],
        ["Price change", fmtPctLive(f.price_change_pct), pctClass(f.price_change_pct)],
        ["OI change", fmtPctLive(f.oi_change_pct), pctClass(f.oi_change_pct)],
        ["Basis",
          f.basis_points != null ? `${Number(f.basis_points) > 0 ? "+" : ""}${Number(f.basis_points).toFixed(1)} pts` : "—", ""],
        ["ATP gap",
          f.ltp != null && f.broker_atp != null
            ? `${Number(f.ltp - f.broker_atp) > 0 ? "+" : ""}${Number(f.ltp - f.broker_atp).toFixed(1)} pts`
            : "—", ""]
      ],
      book: [
        ["Best bid", fmtNum(f.best_bid ?? f.bid), ""],
        ["Best ask", fmtNum(f.best_ask ?? f.ask), ""],
        ["Spread", f.spread != null ? Number(f.spread).toFixed(2) : "—", ""],
        ["Lot size", String(f.lot_size ?? f.lotSize ?? 65), ""],
        ["Depth source", f.depth_source ?? "—", ""],
        ["Freshness",
          f.freshness_seconds != null ? `${Number(f.freshness_seconds).toFixed(1)} sec` : "—", ""]
      ]
    };

    const regimeRows = [
      ["Opening gap", fmtPctLive(nifty.opening_gap_pct), pctClass(nifty.opening_gap_pct)],
      ["NIFTY change", fmtPctLive(niftyDisplayChange), pctClass(niftyDisplayChange)],
      [
        "Volatility",
        (auxVix.price ?? auxVix.value) != null
          ? `${fmtNum(auxVix.price ?? auxVix.value)}${auxVix.status ? ` · ${auxVix.status}` : ""}`
          : "NOT CONNECTED",
        (auxVix.price ?? auxVix.value) != null ? statusClass(auxVix.status) : "warn"
      ],
      ["Futures positioning", f.build_up ?? f.buildup ?? "—", ""],
      ["Options positioning", o.pcr_oi != null ? `PCR ${Number(o.pcr_oi).toFixed(2)}` : "—", ""],
      [
        "Breadth",
        auxMarket.advances != null && auxMarket.declines != null
          ? `${auxMarket.advances} / ${auxMarket.declines}`
          : breadth.advances != null && breadth.declines != null
            ? `${breadth.advances} / ${breadth.declines}`
            : "NOT CONNECTED",
        auxMarket.advances != null || breadth.advances != null ? "" : "warn"
      ]
    ];

    state = {
      ...state,
      profile: {
        mode: p.mode ?? s.mode ?? "PAPER",
        strategy: p.strategy ?? s.strategy ?? "Plan17 R7",
        capitalX: num(p.capital_x ?? p.capitalX ?? s.capital_x ?? s.capitalX) ?? cfg.capitalX ?? 20000,
        availableFunds: num(
          p.available_funds ??
          p.availableFunds ??
          s.available_funds ??
          s.availableFunds
        )
      },
      daily: dailyRows,
      trades: tradeRows,
      health: healthRows,
      tradeState: tradeStateRows,
      regime: regimeRows,
      market: marketState,
      options: optionsState,
      futures: futuresState
    };

    if (dailyRows.length) {
      selectedDate = dailyRows.at(-1).date;
      const [yy, mm] = selectedDate.split("-").map(Number);
      calendarCursor = new Date(yy, mm - 1, 1);
    }

    document.getElementById("apiStatus").textContent =
      contextRaw
        ? "Live data · Primary + AUX context connected"
        : "Live data · Primary connected · AUX context unavailable";
  } catch (e) {
    console.error("ROUND42 dashboard API load failed", e);
    document.getElementById("apiStatus").textContent = "Live API error";
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
function contractGrid(x){
  const rows=[
    ["LTP",x.ltp??"—"],
    ["Bid",x.bid??"—"],
    ["Ask",x.ask??"—"],
    ["OI",x.oi??"—"],
    ["ΔOI",x.oiChange??"—"],
    ["Volume",x.volume??"—"],
    ["IV",x.iv==null?"—":`${x.iv}%`],
    ["Delta",x.delta??"—"],
    ["Gamma",x.gamma??"—"],
    ["Theta",x.theta??"—"],
    ["Vega",x.vega??"—"]
  ];
  return rows.map(([k,v])=>`<div class="contract-stat"><span>${k}</span><strong>${v}</strong></div>`).join("");
}
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
