# ROUND42 Dashboard V1

Static, mobile-first frontend intended for GitHub Pages.

## What is already in the starter

- Dashboard summary cards
- Responsive mobile/desktop layout
- P&L calendar
- Clickable day details
- Orders/trades table
- Profile/security view
- Paper-mode banner
- Disabled future Pause/Kill controls
- API hooks with mock/demo fallback

## Security boundary

The frontend must never contain Angel One credentials, Telegram secrets, OCI keys, Cloudflare secrets, or live control authority.

GitHub Pages hosts only static UI files. Real data will come from a separate read-only HTTPS API on OCI. That API will later sit behind Cloudflare Access/Tunnel.

Future live Pause/Kill actions must go through an authenticated OCI control API and a server-side latched kill switch. They must never be implemented directly in browser JavaScript.

## API contract expected by app.js

`GET /api/v1/summary`

Returns optional summary fields.

`GET /api/v1/daily`

Example:

```json
[
  {"date":"2026-10-16","gross":650,"charges":90,"net":560,"trades":1}
]
```

`GET /api/v1/trades`

Example:

```json
[
  {
    "id":"trade-id",
    "date":"2026-10-16",
    "side":"CE",
    "symbol":"NIFTY...CE",
    "qty":65,
    "entryTime":"10:03",
    "entry":120.0,
    "exitTime":"10:30",
    "exit":130.0,
    "gross":650.0,
    "charges":90.0,
    "net":560.0,
    "mfe":15.0,
    "mae":-4.0,
    "exitReason":"TRAIL_EXIT"
  }
]
```

`GET /api/v1/health`

Returns rows such as `["Strategy","READY","good"]`.

`GET /api/v1/profile`

Returns non-secret display data only.

## Running locally

Open `index.html` directly, or serve the folder with any static web server.

## Deployment

Push `index.html`, `styles.css`, `config.js`, and `app.js` to the GitHub Pages repository. Keep `apiBaseUrl` blank until the OCI API is ready.
