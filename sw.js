// QRe8 admin service worker — enables PWA install.
// Network-first so the admin always uses fresh code & data when online,
// and still opens (from cache) if the connection drops.
const CACHE = "qre8-admin-v1";
const ASSETS = ["./admin.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  // Never cache Supabase API calls — always go to network.
  if (req.url.includes("supabase.co")) return;
  if (req.method !== "GET") return;

  e.respondWith(
    fetch(req)
      .then((res) => {
        // update cache copy of our own assets
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then((r) => r || caches.match("./admin.html")))
  );
});
