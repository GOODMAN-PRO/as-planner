# AS Planner

Offline-first PWA for managing AS-level time: weekly timetable (school / tutoring / study blocks), tasks with due dates, focus timer that logs minutes per subject, exam countdowns. All data lives in `localStorage` on the device.

## Run

- Desktop: double-click `index.html` (works; no install/offline on `file://`).
- Phone / installable: serve the folder over http(s), e.g.

```bash
python -m http.server 8790 --directory C:/Users/User/as-planner
```

  `http://<pc-ip>:8790` on the phone is fine for a quick look, but browsers only enable offline caching + install over **https** (or localhost). For the real phone app, drop the four files on GitHub Pages / Netlify / Cloudflare Pages (nothing to build), open that https address → iPhone: Share → Add to Home Screen; Android/desktop Chrome: install button in **More**.
  On iPhone the Home Screen app has its own storage — export a backup in Safari and import it inside the installed app if you set things up first.

## Files

`index.html` (whole app) · `sw.js` (offline cache) · `manifest.json` · `icon.png`

## Backup

**More → Export backup** downloads a JSON; **Import backup** restores it. Data is per-device/per-browser, so export before switching phones.
