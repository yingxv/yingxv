self.addEventListener('install', function (e) {
  console.log('install');
  e.waitUntil(self.skipWaiting()); // Activate worker immediately
});

self.addEventListener('fetch', function (e) {
  console.log('[Service Worker] Fetched resource ');
});

self.addEventListener('activate', function (event) {
  console.log('active');
  event.waitUntil(self.clients.claim()); // Become available to all pages
});
