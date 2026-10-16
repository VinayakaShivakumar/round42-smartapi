# ROUND42 Read-only Dashboard API Contract

The frontend expects the following Cloudflare-protected endpoints. No endpoint in this phase may submit, modify, cancel, or reconcile broker orders.

- `GET /api/v1/summary`
- `GET /api/v1/daily`
- `GET /api/v1/trades`
- `GET /api/v1/health`
- `GET /api/v1/profile`
- `GET /api/v1/market/context`
- `GET /api/v1/market/options`
- `GET /api/v1/market/futures`

## Market context
Suggested fields:
- NIFTY spot / % change / previous close / opening gap
- GIFT NIFTY value / point change / % change / implied NIFTY gap
- BANK NIFTY
- INDIA VIX
- USD/INR
- S&P 500 futures, Nasdaq futures, Dow futures
- DXY and US 10Y yield
- MCX Crude Oil, MCX Gold, MCX Silver, Brent
- NSE advances/declines, NIFTY 50 breadth, sector leader/laggard

## Options
- expiry, ATM strike
- PCR OI, PCR volume, max pain
- total CE/PE OI and change in OI
- ATM straddle and implied move
- ATM CE/PE: LTP, bid, ask, OI, OI change, volume, IV, Delta, Gamma, Theta, Vega
- focused chain ATM ± 3 strikes

## Futures
- front expiry
- spot, futures LTP, basis points / basis %
- broker ATP (label exactly as broker ATP)
- OI, OI change, volume
- bid, ask, spread, lot size, freshness, depth source
- build-up classification from price + OI change

## Safety
Market/context endpoints are read-only and informational. They must not create strategy authority. ROUND42 strategy remains NIFTY Plan17 R7; Greeks and cross-market context remain diagnostics until separately researched and promoted.
