const CACHE = 'travelnest-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/destinations.html',
  '/budget.html',
  '/generator.html',
  '/mood.html',
  '/feedback.html',
  '/css/style.css',
  '/js/main.js',
  '/js/data.js',
  '/js/budget.js',
  '/js/destinations.js',
  '/js/generator.js',
  '/js/mood.js',
  '/js/feedback.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});