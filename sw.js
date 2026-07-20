// sw.js — Service Worker con estrategia "primero la red" (network-first).
// Así el paciente ve SIEMPRE la última versión cuando hay conexión,
// y la app sigue funcionando sin conexión (usa la copia en caché).
const CACHE = 'prehabilita-v11';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/styles.css',
  './js/app.js',
  './js/ui.js',
  './js/state.js',
  './js/content.js',
  './js/gamification.js',
  './js/data.js',
  './js/editor.js',
  './js/charts.js',
  './js/i18n.js',
  './js/scales.js',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // Recursos externos (p. ej. vídeos de YouTube): dejar pasar sin interceptar.
  if (url.origin !== self.location.origin) return;

  // Primero la red; si falla (sin conexión), servir desde la caché.
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request).then((cached) => cached || caches.match('./index.html')))
  );
});
