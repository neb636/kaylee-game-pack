const CACHE_NAME = 'kaylee-games-v3';
const BASE = self.registration.scope;

// Core shell assets to pre-cache on install so the app works immediately offline
const SHELL_ASSETS = [
  '',                // scope root → index.html
  'index.html',
  'css/launcher.css',
  'games/princess-starlight/js/launcher.js',
  'lib/phaser.min.js',
  'lib/howler.min.js',
];

// ── Install: pre-cache the shell ────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll(SHELL_ASSETS.map(p => new URL(p, BASE).pathname))
    )
  );
  self.skipWaiting();
});

// ── Activate: delete old caches ─────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ── Fetch ────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // Cache-first for large immutable assets (Phaser, Howler, images, audio)
  // These don't change between deploys — serve from cache instantly if available,
  // fetch and cache on first visit.
  const isStaticAsset =
    url.pathname.includes('/lib/') ||
    /\.(png|jpe?g|gif|svg|webp|mp3|ogg|wav|woff2?)$/i.test(url.pathname);

  if (isStaticAsset) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(c => c.put(request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // Network-first for everything else (HTML, JS, CSS)
  // Always try to get the latest code when online; fall back to cache when offline.
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(request, clone));
        }
        return response;
      })
      .catch(() =>
        caches.match(request).then(
          cached => cached ?? caches.match(new URL('index.html', BASE).pathname)
        )
      )
  );
});
