# Panduan Landing Page — ardirsaputra.github.io

Dokumen ini menjelaskan **isi setiap bagian halaman**, **cara kerja fiturnya**, dan
**di mana harus mengedit** kalau ingin mengubah data (terutama Timeline Proyek).

---

## 1. Struktur File

| File | Isi | Kapan diedit |
|------|-----|--------------|
| `index.html` | Seluruh struktur & teks bawaan halaman (versi Bahasa Indonesia) | Menambah/menghapus section, kartu proyek, link kontak |
| `style.css` | Semua tampilan: warna, layout, tema terang/gelap, responsive | Mengubah warna, ukuran, jarak |
| `script.js` | Logika: data timeline, terjemahan ID/EN, tema, jam, navigasi | Mengubah **data timeline**, teks 2 bahasa |
| `assets/` | Foto profil, screenshot proyek, ikon | Mengganti foto/screenshot |

Halaman ini **statis murni** (HTML + CSS + JS biasa) — tanpa framework, tanpa proses build.
Cukup edit file, simpan, lalu refresh browser (Ctrl + F5 supaya cache bersih).

> Catatan: file sisa proyek Flutter lama (`main.dart.js`, `flutter_bootstrap.js`,
> `canvaskit/`, `lib/`, `pubspec.yaml`) sudah tidak dipakai oleh landing page ini.

---

## 2. Penjelasan Setiap Bagian Halaman

Urutan dari atas ke bawah, persis seperti yang dilihat pengunjung.

### 2.1 Navbar (mengambang di atas)

- Logo **ARS.DEV**, menu: Tentang, Keahlian, Proyek, Timeline, Kontak.
- **Tombol 🌙 / ☀️** — ganti tema Terang/Gelap. Pilihan disimpan di browser
  (`localStorage: ars_portfolio_theme`), default **Terang**.
- **Tombol ID / EN** — ganti bahasa seluruh halaman. Juga disimpan
  (`localStorage: ars_lang`), default **ID**.
- **Tombol WhatsApp** — langsung ke `wa.me/6282282418992`.
- Saat digulir, navbar jadi lebih pekat (class `.scrolled`) dan menu bagian yang
  sedang dilihat otomatis ter-highlight (*scroll spy*).
- Di layar HP, menu berubah jadi tombol hamburger.

### 2.2 Hero (`#hero`)

- Judul: nama + peran "Mobile & Web Developer".
- Paragraf pembuka: ringkasan pengalaman (SiapKerja, BUMK, mabarasik, UtilitasKu).
- Dua tombol aksi: **Lihat Proyek** (scroll ke bawah) dan **WhatsApp**.
- Kartu profil di kanan: foto, badge peran, ringkasan, chip "Flutter" dan "Lampung, Indonesia".
- **Jam WIB langsung** — diperbarui tiap detik memakai zona waktu `Asia/Jakarta`.

### 2.3 Tentang Saya (`#about`)

Foto dan narasi singkat: siapa Anda dan apa yang dikerjakan, enam kotak hobi
(musik, film, bersepeda, game strategi, coding, audiophile), lalu daftar bahasa
(Indonesia, English, Jawa). Semuanya mengikuti CV.

### 2.4 Keahlian (`#skills`)

Tiga kartu kategori:

1. **Pengembangan Mobile** — Flutter, Dart, Android.
2. **Backend & Web** — PHP/Laravel, database, API.
3. **Tools** — alat bantu pengembangan.

### 2.5 Daftar Proyek (`#projects`)

Empat kartu proyek: SiapKerja Way Kanan, BUMK Pengelolaan Keuangan, mabarasik.com,
dan UtilitasKu. Kartu Play Store dan Sharing Session masih tersimpan sebagai komentar
di `index.html` — bisa diaktifkan lagi dengan membuka tanda komentarnya.

**Mengganti gambar proyek** — pilih salah satu cara:

- Isi atribut `src=""` pada `<img>` di `index.html`, **atau**
- Isi objek `PROJECT_IMAGE_URLS` di `script.js` (bagian 1.2):

```js
const PROJECT_IMAGE_URLS = {
  siapkerja: "assets/siapkerja.png",
  bumk: "https://domain.com/screenshot.jpg",
  // ...
};
```

Kalau dibiarkan kosong atau gambarnya gagal dimuat (404), gambar otomatis
disembunyikan dan visual bawaan yang tampil — jadi halaman tidak pernah
menampilkan ikon gambar rusak.

### 2.6 Perjalanan Pendidikan & Karier (`#timeline`) — bagian yang datanya Anda ubah

Kartu-kartunya **tidak ditulis di HTML**, tapi dibuat otomatis oleh JavaScript dari
array `PROJECT_TIMELINE`. Cara mengeditnya ada di bab 3.

Tampilannya **horizontal dan bergeser mengikuti scroll halaman**: section dikunci
(`position: sticky`) selama kartu bergeser ke samping, lengkap dengan bar progres.
Tinggi ruang scroll dihitung otomatis dari jumlah kartu — makin banyak kartu,
makin panjang bagian ini.

Di layar di bawah 1024px, atau kalau pengguna mengaktifkan "kurangi animasi" di
sistemnya, timeline otomatis kembali jadi baris yang **digeser manual** (swipe).

### 2.7 Alur Kerja & Layanan (`#workflow`)

Empat tahap pengerjaan (mulai dari Diskusi Kebutuhan sampai aplikasi siap digunakan)
dan tiga kartu layanan (Aplikasi Mobile, Website, layanan pendukung).

### 2.8 Kontak (`#contact`)

- Daftar saluran langsung: WhatsApp, email, media sosial.
- **Form pesan cepat**: isi nama + pesan, lalu:
  - Tombol **WhatsApp** membuka `wa.me/6282282418992` dengan teks pesan sudah terisi.
  - Tombol **Email** membuka aplikasi email ke `ardi.rs@gmail.com`, subjek dan isi terisi.
- Form ini **tidak mengirim data ke server mana pun** — hanya menyiapkan pesan di
  aplikasi pengunjung. Jadi tidak butuh backend dan tidak ada data yang tersimpan.

### 2.9 Footer

Copyright dan motto singkat.

---

## 3. Cara Mengubah Data Timeline Proyek

Buka **`script.js`**, bagian paling atas — blok berjudul:

```
// 0. ⚙️  DATA TIMELINE PROYEK — SATU-SATUNYA TEMPAT YANG PERLU ANDA EDIT
```

Isinya array `PROJECT_TIMELINE`. Setiap `{ ... }` adalah satu kartu di halaman.

### Format satu item

```js
{
  marker: "2024",                  // teks dalam lingkaran (opsional) — kosongkan untuk nomor 01, 02, ...
  period: "Jan 2024 - Mei 2024",   // rentang waktu   (wajib)
  title: "Nama Proyek",            // nama proyek     (wajib)
  status: "Aplikasi mobile",       // label kecil     (opsional)
  state: "done",                   // warna badge: "done" hijau | "ongoing" kuning | "planned" abu (opsional)
  description: "Penjelasan singkat 1-2 kalimat.",   // (wajib)
  stack: ["Flutter", "Dart"],      // daftar teknologi (opsional, boleh [])
  link: "https://contoh.com",      // tombol "Lihat detail" (opsional, hapus baris ini kalau tidak ada)
}
```

### Menulis teks dua bahasa

Setiap teks boleh ditulis dengan **dua cara**, dan boleh dicampur dalam satu item:

```js
title: "SiapKerja Way Kanan",                               // 1 string → dipakai untuk ID dan EN
status: { id: "Aplikasi mobile", en: "Mobile application" }, // objek    → beda saat tombol ID/EN ditekan
```

Pakai cara pertama untuk nama proyek dan tanggal berupa angka (`"2024"`, `"2023 - 2024"`),
cara kedua untuk kalimat yang memang harus diterjemahkan.

### Menambah, menghapus, mengurutkan

- **Menambah proyek** — salin satu blok `{ ... },` lengkap dengan komanya, lalu ubah isinya.
- **Menghapus proyek** — hapus satu blok `{ ... },` secara utuh.
- **Urutan tampil** mengikuti urutan di array. Item pertama muncul paling kiri (desktop)
  atau paling atas (HP). Biasanya diurutkan dari proyek paling lama ke paling baru.
- **Jumlah item bebas** — 2, 5, atau 8 item pun layoutnya menyesuaikan sendiri
  (jumlah kolom otomatis, dan di HP jadi satu kolom).

### Contoh item yang sudah diisi data nyata

```js
{
  marker: "2024",
  period: "Feb 2024 - Jun 2024",
  title: "SiapKerja Way Kanan",
  status: { id: "Rilis di Play Store", en: "Released on Play Store" },
  state: "done",
  description: {
    id: "Aplikasi presensi ASN Pemkab Way Kanan dengan validasi lokasi GPS.",
    en: "Attendance app for Way Kanan civil servants with GPS location validation.",
  },
  stack: ["Flutter", "Android", "GPS"],
  link: "https://play.google.com/store/apps/details?id=...",
},
```

### Setelah mengedit

1. Simpan `script.js`.
2. Refresh browser dengan **Ctrl + F5**.
3. Kalau timeline kosong atau tidak muncul, buka **F12 → Console**. Penyebabnya
   hampir selalu **koma yang kurang/kelebihan** atau **tanda kutip yang belum ditutup**.

---

## 4. Hal Teknis Lain yang Perlu Diketahui

**Mengubah teks selain timeline.**
Semua teks bertanda `data-i18n="..."` di `index.html` isinya ditimpa oleh JavaScript
saat halaman dimuat. Jadi kalau teks diedit di HTML tapi tidak berubah di browser,
berarti teks itu juga harus diubah di kamus `translations` (`script.js` bagian 1) —
cari kunci yang sama pada blok `id` dan blok `en`.

**Tema terang/gelap.**
Warna diatur lewat CSS variable di `:root` (terang) dan `[data-theme="dark"]` (gelap)
di `style.css`. Ubah nilai variabelnya, otomatis berlaku ke seluruh halaman.

**Responsive.**
Breakpoint utama: `1024px` (tablet) dan `768px` (HP), ada di bagian bawah `style.css`.

**Animasi.**
Elemen muncul dengan efek naik/geser saat masuk layar. Atributnya (`data-reveal`)
dipasang dari JavaScript lewat fungsi `setupScrollReveal()` — jadi kalau JS mati,
tidak ada konten yang tersembunyi. Daftar elemen dan jeda antar kartu diatur pada
array `groups` di dalam fungsi tersebut. Semua animasi otomatis mati kalau pengguna
menyalakan "kurangi animasi" di sistem operasinya (`prefers-reduced-motion`).

**SEO dan pratinjau share.**
Meta title, description, keywords, Open Graph, dan Twitter Card sudah terisi di
`<head>` `index.html`. Gambar pratinjau saat link dibagikan: `assets/arsdev.png`.

**Deploy.**
Repo ini memakai GitHub Pages. Cukup `git add` → `git commit` → `git push` ke branch
`main`, perubahan tampil di `https://ardirsaputra.github.io/` dalam 1-2 menit.
