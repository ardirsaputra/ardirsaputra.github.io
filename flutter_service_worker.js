// Service worker "penghancur diri".
// Situs ini dulu aplikasi Flutter yang mendaftarkan service worker dengan nama
// file ini. Browser pengunjung lama masih menyimpannya dan bisa menyajikan
// cache usang. File ini sengaja dipertahankan agar update-nya diambil browser,
// lalu menghapus semua cache & membatalkan pendaftarannya sendiri.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", async () => {
  const keys = await caches.keys();
  await Promise.all(keys.map((k) => caches.delete(k)));
  await self.registration.unregister();
  const clients = await self.clients.matchAll({ type: "window" });
  clients.forEach((c) => c.navigate(c.url));
});
