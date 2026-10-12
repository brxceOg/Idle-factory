self.addEventListener("install",event=>event.waitUntil(self.skipWaiting()));
self.addEventListener("activate",event=>event.waitUntil((async()=>{const regs=await self.registration.unregister();const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith("little-factory-")).map(k=>caches.delete(k)));await self.clients.claim();})()));
self.addEventListener("fetch",event=>{});