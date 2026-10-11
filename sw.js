const CACHE = "little-factory-v5";
const FILES = ["./", "./index.html", "./manifest.webmanifest"];
self.addEventListener("install", event => event.waitUntil((async () => { const cache = await caches.open(CACHE); await cache.addAll(FILES); await self.skipWaiting(); })()));
self.addEventListener("activate", event => event.waitUntil((async () => { const keys = await caches.keys(); await Promise.all(keys.filter(key => key.startsWith("little-factory-") && key !== CACHE).map(key => caches.delete(key))); await self.clients.claim(); })()));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy)).catch(()=>{});
    return response;
  }).catch(() => caches.match("./index.html"))));
});