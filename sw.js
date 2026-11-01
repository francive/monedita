self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Manejador básico requerido para PWA
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
