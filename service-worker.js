const CACHE_NAME = "panorama-cache-v1";
const URLS_TO_CACHE = [
    "index.html",
    "pano.html",
    "map-data.js",
    "pano-data.js",
    "icons/icon-192.png",
    "icons/icon-512.png"
];

// Установка service worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

// Обработка запросов
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
