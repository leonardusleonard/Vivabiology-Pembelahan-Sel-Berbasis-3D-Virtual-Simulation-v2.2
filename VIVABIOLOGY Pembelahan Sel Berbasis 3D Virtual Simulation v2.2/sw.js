// VIVABIOLOGY · Pembelahan Sel — service worker (PWA)
// Menyimpan modul di perangkat agar tetap bisa dibuka tanpa internet setelah kunjungan pertama.
// PENTING: naikkan nomor versi setiap kali file modul diperbarui (v2-1 → v2-2 → dst.).
const CACHE = 'vivabiology-pembelahan-sel-v2-1';
const FILES = [
  './', './index.html',
  './sim-kromosom.html', './sim-mitosis.html', './sim-meiosis.html',
  './manifest.webmanifest', './logo.png', './logo-192.png', './logo-512.png', './logo-maskable-512.png'
];
// Pustaka Three.js yang dipakai simulasi mitosis & meiosis (disimpan agar bisa offline)
const CDN = [
  'https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js',
  'https://cdn.jsdelivr.net/npm/three@0.169.0/examples/jsm/controls/OrbitControls.js',
  'https://cdn.jsdelivr.net/npm/three@0.169.0/examples/jsm/geometries/RoundedBoxGeometry.js',
  'https://cdn.jsdelivr.net/npm/three@0.169.0/examples/jsm/utils/BufferGeometryUtils.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(FILES);
    // CDN dicoba satu per satu; gagal tidak membatalkan instalasi
    await Promise.all(CDN.map((u) => c.add(new Request(u, { mode: 'cors' })).catch(() => {})));
  })());
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const isPage = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');

  if (isPage) {
    // Halaman HTML: utamakan versi terbaru dari internet, pakai salinan tersimpan saat offline
    e.respondWith(
      fetch(req).then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
        return res;
      }).catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match('./index.html')))
    );
    return;
  }

  // Aset lain (gambar, pustaka, font): pakai salinan tersimpan, ambil dari internet bila belum ada
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});
