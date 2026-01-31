self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('hava-v1').then(cache => cache.addAll(['./hava.html']))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
