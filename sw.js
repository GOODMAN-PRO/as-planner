// AS Planner service worker — stale-while-revalidate: serves cache instantly, refreshes in background.
const CACHE = 'as-planner-v3';
const ASSETS = ['./', './index.html', './manifest.json', './icon.png'];

self.addEventListener('install', e => {
  // cache:'reload' = always fetch fresh from the server when precaching, never the browser's HTTP cache
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin || u.searchParams.has('fresh')) return; // ?fresh = the page's own update check, straight to network
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request);
    // no-cache: revalidate with the server rather than the browser's HTTP cache, so edits reach the phone next launch
    const net = fetch(e.request, { cache: 'no-cache' }).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => null);
    e.waitUntil(net); // keep the SW alive until the background refresh lands
    return hit || (await net) || c.match('./index.html');
  }));
});
