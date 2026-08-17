# AS Planner

Offline-first PWA for managing AS-level time. **Live: https://goodman-pro.github.io/as-planner/**

- **Today** — schedule with *now* marker + free gaps, due-soon tasks, focus minutes, next exam
- **Calendar** — Week (recurring timetable: school / tutoring / study blocks; starter study plan seeded) and Month (dots for tasks due + exams; tap a day)
- **Tasks** — homework / past papers with due dates; paper tasks get an **📄 Open** button (PDF)
- **Focus** — pomodoro that logs minutes per subject
- **Papers** — CAIE past-paper index (9701 · 9702 · 9618 · 9709, 2021–2025), direct QP/MS links, done + score, Copy log (Markdown), + Task
- **More** — exam countdowns, subjects, install, export/import backup

All data lives in `localStorage` on the device.

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
