const CACHE = "little-factory-v51";
const FILES = ["./", "./index.html", "./manifest.webmanifest"];
self.addEventListener("install", event => event.waitUntil((async () => {
 const cache = await caches.open(CACHE); await cache.addAll(FILES); await self.skipWaiting();
})()));
self.addEventListener("activate", event => event.waitUntil((async () => {
 const keys = await caches.keys(); await Promise.all(keys.filter(key => key.startsWith("little-factory-") && key !== CACHE).map(key => caches.delete(key))); await self.clients.claim();
})()));
self.addEventListener("fetch", event => {
 if (event.request.method !== "GET") return;
 const url = new URL(event.request.url), isPage = url.origin === self.location.origin && (url.pathname.endsWith("/") || url.pathname.endsWith("/index.html"));
 if (isPage) { event.respondWith(fetch(event.request,{cache:"no-store"}).then(response => { if(response.ok) caches.open(CACHE).then(cache=>cache.put("./index.html",response.clone())).catch(()=>{}); return response; }).catch(()=>caches.match("./index.html"))); return; }
 event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{caches.open(CACHE).then(cache=>cache.put(event.request,response.clone())).catch(()=>{});return response;}).catch(()=>caches.match("./index.html"))));
});