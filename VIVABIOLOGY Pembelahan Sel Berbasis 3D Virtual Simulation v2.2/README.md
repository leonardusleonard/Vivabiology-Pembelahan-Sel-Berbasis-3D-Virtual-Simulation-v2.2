# VIVABIOLOGY · Pembelahan Sel Berbasis 3D Virtual Simulation (v2)

E-Modul Interaktif Biologi untuk Fase F (Kurikulum Merdeka) dengan materi pokok **Pembelahan Sel**.
Modul ini dilengkapi simulasi 3D struktur kromosom, mitosis, dan meiosis yang dapat diputar, diperbesar, dihentikan, dan diulang.

© Leonardus · VIVABIOLOGY

---

## Isi folder

| File | Fungsi |
|---|---|
| `index.html` | Halaman utama e-modul: Beranda, Pendahuluan, Materi, Simulasi 3D, Rangkuman, Kuis |
| `sim-kromosom.html` | Simulasi 3D struktur kromosom (WebGL, tanpa pustaka eksternal) |
| `sim-mitosis.html` | Simulasi 3D pembelahan mitosis (Three.js r169) beserta fitur Tebak Fase |
| `sim-meiosis.html` | Simulasi 3D pembelahan meiosis (Three.js r169) beserta fitur Tebak Fase |
| `sw.js` | *Service worker* yang menyimpan modul di perangkat agar bisa dibuka offline (PWA) |
| `manifest.webmanifest` | Identitas aplikasi (nama, warna, ikon) sehingga modul bisa dipasang di layar utama HP |
| `logo.png`, `logo-192.png`, `logo-512.png`, `logo-maskable-512.png` | Logo VIVABIOLOGY untuk ikon web dan aplikasi |
| `.nojekyll` | Menonaktifkan pemrosesan Jekyll di GitHub Pages (file kosong, jangan dihapus) |
| `README.md` | Petunjuk ini |

> Semua file harus berada dalam **satu folder yang sama** (jangan dipisah ke subfolder).

---

## Cara mengunggah ke GitHub dan menayangkannya online (GitHub Pages)

### A. Lewat situs GitHub (tanpa perintah terminal)

1. Masuk ke <https://github.com> dan klik **New repository**.
2. Isi **Repository name**, misalnya `vivabiology-pembelahan-sel`. Gunakan huruf kecil dan tanda hubung, tanpa spasi.
3. Pilih **Public**, lalu klik **Create repository**.
4. Di halaman repositori, klik **uploading an existing file** (atau **Add file → Upload files**).
5. Buka folder ini di komputer, pilih **semua isinya** (bukan foldernya), lalu seret ke halaman unggah. Pastikan `index.html` berada langsung di halaman utama repositori, bukan di dalam subfolder.
   - File `.nojekyll` termasuk file tersembunyi. Jika tidak terlihat, aktifkan tampilan file tersembunyi (Windows: *View → Hidden items*; macOS: `Cmd + Shift + .`). Jika tetap tidak bisa diunggah, buat lewat **Add file → Create new file**, beri nama `.nojekyll`, biarkan kosong, lalu klik **Commit**.
6. Klik **Commit changes**.
7. Buka **Settings → Pages**. Pada **Build and deployment**, pilih **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`**, lalu klik **Save**.
8. Tunggu 1–3 menit, lalu muat ulang halaman Settings → Pages. Alamat modul akan muncul, misalnya:
   `https://NAMA-AKUN.github.io/vivabiology-pembelahan-sel/`

### B. Lewat Git (terminal)

```bash
cd "VIVABIOLOGY Pembelahan Sel Berbasis 3D Virtual Simulation v2"
git init
git add .
git commit -m "VIVABIOLOGY Pembelahan Sel v2"
git branch -M main
git remote add origin https://github.com/NAMA-AKUN/vivabiology-pembelahan-sel.git
git push -u origin main
```

Setelah itu, aktifkan GitHub Pages seperti langkah A.7–A.8.

---

## Penggunaan online dan offline

| Bagian | Saat online | Saat offline |
|---|---|---|
| Beranda, Pendahuluan, Materi, Rangkuman, Kuis | ✅ | ✅ setelah pernah dibuka sekali |
| Simulasi 3D Struktur Kromosom | ✅ | ✅ setelah pernah dibuka sekali |
| Simulasi 3D Mitosis & Meiosis | ✅ (memuat Three.js dari cdn.jsdelivr.net) | ✅ setelah **tab Mitosis dan Meiosis** pernah dibuka sekali saat online |

**Agar siswa bisa memakai modul tanpa internet:**

1. Buka alamat GitHub Pages saat online.
2. Buka halaman **4. Simulasi 3D**, lalu klik tab **Struktur Kromosom**, **Mitosis**, dan **Meiosis** satu per satu sampai simulasinya tampil.
3. (Opsional) Pasang sebagai aplikasi: di Chrome Android pilih menu ⋮ → **Tambahkan ke layar utama / Instal aplikasi**; di Chrome/Edge laptop klik ikon instal di bilah alamat.
4. Setelah itu, modul dapat dibuka tanpa internet di perangkat dan browser yang sama.

Jika folder dibuka langsung dari komputer (klik dua kali `index.html`) tanpa internet, semua halaman dan simulasi kromosom tetap berjalan, tetapi simulasi mitosis dan meiosis memerlukan internet.

---

## Memperbarui modul

1. Ganti file yang diubah di repositori GitHub (Add file → Upload files, lalu Commit).
2. Buka `sw.js` dan **naikkan nomor versi** pada baris berikut, misalnya:
   ```js
   const CACHE = 'vivabiology-pembelahan-sel-v2-1';   // ubah menjadi v2-2, v2-3, dst.
   ```
3. Commit. Pengguna mendapat versi baru saat membuka modul berikutnya dalam keadaan online. Jika perubahan belum terlihat, muat ulang halaman satu atau dua kali.

---

## Kebutuhan perangkat

- Browser modern dengan dukungan WebGL: Chrome, Edge, Firefox, atau Safari versi terbaru.
- Disarankan memakai laptop/komputer. HP Android kelas menengah juga dapat digunakan.

## Lisensi pihak ketiga

- [Three.js](https://threejs.org) r169: lisensi MIT
- Font Inter Tight: SIL Open Font License 1.1
