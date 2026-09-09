/**
 * ARDI RAGIL SAPUTRA (ARS DEV) - PORTFOLIO INTERACTION ENGINE
 * Compact Navbar, Grounded Copy (No Hyperbole), Bilingual (ID / EN), & Project Timeline
 */

(function () {
  "use strict";

  // =========================================================================
  // 0. ⚙️  DATA TIMELINE PROYEK  —  SATU-SATUNYA TEMPAT YANG PERLU ANDA EDIT
  // -------------------------------------------------------------------------
  // Bagian ini yang tampil di section "Perjalanan Proyek" (#timeline).
  // Ubah / tambah / hapus isi array di bawah, lalu simpan & refresh browser.
  // Jumlah item BEBAS (2, 5, 8, ...) — layout menyesuaikan otomatis.
  //
  // FORMAT SATU ITEM:
  // {
  //   marker:      "2024",              // teks di lingkaran (opsional). Kosong = nomor urut 01, 02, ...
  //   period:      "Jan 2024 - Mei 2024", // rentang waktu. Wajib diisi.
  //   title:       "Nama Proyek",       // nama proyek. Wajib diisi.
  //   status:      "Aplikasi mobile",   // label kecil di bawah judul (opsional).
  //   state:       "done",              // warna badge: "done" (hijau) | "ongoing" (kuning) | "planned" (abu). Opsional.
  //   description: "Penjelasan singkat...", // 1-2 kalimat. Wajib diisi.
  //   stack:       ["Flutter", "Dart"], // daftar teknologi (opsional, boleh [] ).
  //   link:        "https://...",       // tombol "Lihat detail" (opsional, boleh dihapus).
  // }
  //
  // DUA BAHASA (ID / EN):
  // Setiap teks boleh ditulis dengan 2 cara —
  //   1) Satu string biasa  ->  title: "SiapKerja Way Kanan"
  //      Dipakai untuk kedua bahasa. Cocok untuk nama proyek, tanggal angka, dll.
  //   2) Objek dua bahasa   ->  title: { id: "Aplikasi Presensi", en: "Attendance App" }
  //      Dipakai kalau teksnya harus berbeda saat tombol ID/EN ditekan.
  // Keduanya boleh dicampur dalam satu item.
  //
  // URUTAN: item paling atas = nomor 01 (tampil paling kiri / paling atas).
  // Biasanya diurutkan dari yang paling lama ke yang paling baru.
  // =========================================================================
  const PROJECT_TIMELINE = [
    {
      marker: "2013",
      period: "2013 - 2016",
      title: "SMA N 1 Trimurjo",
      status: { id: "Pendidikan - IPA", en: "Education - Natural Science" },
      state: "done",
      description: {
        id: "Sekolah menengah atas jurusan Ilmu Pengetahuan Alam.",
        en: "Senior high school, Natural Science major.",
      },
      stack: [],
    },
    {
      marker: "2016",
      period: "2016 - 2023",
      title: "Universitas Lampung",
      status: {
        id: "Pendidikan - S1 Teknik Informatika",
        en: "Education - BSc Informatics Engineering",
      },
      state: "done",
      description: {
        id: "Program sarjana Teknik Informatika di Universitas Lampung.",
        en: "Bachelor's degree in Informatics Engineering at Universitas Lampung.",
      },
      stack: [],
    },
    {
      marker: "2018",
      period: "2018",
      title: "Zakaa",
      status: { id: "Magang", en: "Internship" },
      state: "done",
      description: {
        id: "Membuat aplikasi zakat untuk salah satu masjid di Bandar Lampung.",
        en: "Built a zakat application for a mosque in Bandar Lampung.",
      },
      stack: ["Mobile"],
    },
    {
      marker: "2019",
      period: "2019",
      title: "Kazee Indonesia",
      status: { id: "Magang", en: "Internship" },
      state: "done",
      description: {
        id: "Mengerjakan portal API untuk menghubungkan antar sistem yang sudah ada.",
        en: "Worked on an API portal connecting existing systems to one another.",
      },
      stack: ["API", "Integrasi Sistem"],
    },
    {
      marker: "2021",
      period: "2021",
      title: "Recycle Plastic",
      status: { id: "Tugas akhir kuliah", en: "Final year project" },
      state: "done",
      description: {
        id: "Aplikasi jual beli sampah plastik yang dikerjakan sebagai tugas akhir kuliah.",
        en: "A plastic waste buying and selling app, built as my final year university project.",
      },
      stack: ["Flutter", "Laravel"],
    },
    {
      marker: "2022",
      period: "2022",
      title: "Gradien",
      status: { id: "Magang", en: "Internship" },
      state: "done",
      description: {
        id: "Pembuatan dan perbaikan aplikasi Android serta web untuk instansi daerah di Provinsi Lampung.",
        en: "Built and maintained Android and web applications for regional government agencies in Lampung.",
      },
      stack: ["Android", "Web"],
    },
    {
      marker: "2023",
      period: "2023 - 2024",
      title: "SiapKerja Way Kanan",
      status: { id: "Aplikasi mobile", en: "Mobile application" },
      state: "done",
      description: {
        id: "Aplikasi presensi mobile untuk kebutuhan organisasi dan pencatatan kehadiran.",
        en: "A mobile attendance application for organizational needs and attendance records.",
      },
      stack: ["Flutter", "Android", "GPS"],
      link: "https://play.google.com/store/apps/details?id=id.co.waykanankab.siapkerja&hl=id",
    },
    {
      marker: "2024",
      period: "2024",
      title: "Smart Lampung Timur",
      status: { id: "Sistem absensi", en: "Attendance system" },
      state: "done",
      description: {
        id: "Sistem presensi pegawai untuk Pemerintah Kabupaten Lampung Timur.",
        en: "Employee attendance system for the Lampung Timur regency government.",
      },
      stack: ["Flutter", "Laravel"],
    },
    {
      marker: "2024",
      period: "2024 - 2025",
      title: {
        id: "Aplikasi Mandiri di Google Play Store",
        en: "Self-published Apps on Google Play",
      },
      status: { id: "Rilis mandiri", en: "Self-published" },
      state: "done",
      description: {
        id: "Mengembangkan aplikasi sendiri di Google Play Store dengan Firebase, Flutter, backend, dan tools pendukung lainnya.",
        en: "Developed and published my own apps on Google Play Store using Firebase, Flutter, a backend, and supporting tools.",
      },
      stack: ["Flutter", "Firebase", "Backend"],
    },
    {
      marker: "2025",
      period: "2025 - 2026",
      title: "BUMK Pujodadi Bersatu",
      status: { id: "Website sistem", en: "Web system" },
      state: "done",
      description: {
        id: "Sistem website untuk mendukung pengelolaan informasi dan keuangan BUMK.",
        en: "A web system supporting BUMK information and financial management.",
      },
      stack: ["PHP", "Laravel", "Database"],
      link: "https://bumkpujodadibersatu.com",
    },
    {
      marker: "2026",
      period: "2026",
      title: "UtilitasKu",
      status: { id: "Aplikasi utilitas Android", en: "Android utility app" },
      state: "done",
      description: {
        id: "Aplikasi serbaguna berisi 50 alat bantu seperti downloader dan file manager, dibuat agar pengguna tidak perlu memasang banyak aplikasi lain.",
        en: "An all-in-one app with 50 tools such as a downloader and file manager, built so users no longer need to install many separate apps.",
      },
      stack: ["Flutter", "Dart", "Android"],
      link: "https://arstore-dev.vercel.app/download",
    },
    {
      marker: "2026",
      period: { id: "2026 - sekarang", en: "2026 - present" },
      title: "mabarasik.com",
      status: { id: "Platform web game", en: "Web game platform" },
      state: "ongoing",
      description: {
        id: "Platform permainan papan online yang masih dikembangkan sesuai kebutuhan fitur.",
        en: "An online board-game platform still being developed with new features.",
      },
      stack: ["Web", "WebSockets", "Multiplayer"],
      link: "https://mabarasik.com",
    },
  ];

  // =========================================================================
  // 1. TRANSLATION DICTIONARY (ID & EN) - GROUNDED & PROFESSIONAL
  // =========================================================================
  const translations = {
    id: {
      nav_about: "Tentang",
      nav_skills: "Keahlian",
      nav_projects: "Proyek",
      nav_timeline: "Timeline",
      nav_workflow: "Alur Kerja",
      nav_contact: "Kontak",
      nav_cta: "WhatsApp",

      hero_greeting: "Halo, saya Ardi Ragil Saputra",
      hero_role: "Mobile & Web Developer",
      hero_lead:
        "Pengembang aplikasi mobile dan website. Berpengalaman mengerjakan aplikasi mobile SiapKerja Way Kanan di Google Play Store dan server laravel, website pengelolaan keuangan desa BUMK (bumkpujodadibersatu.com), platform game online mabarasik.com, dan aplikasi Utilitasku Android Tools All in One.",
      hero_btn_projects: "Lihat Proyek",
      hero_btn_wa: "Chat WhatsApp",
      hero_btn_cv: "Kirim Email",

      metric_exp: "Tahun Pengalaman",
      metric_apps: "Proyek Aplikasi & Web",
      metric_clean: "Android & Web Stack",

      profile_role_badge: "Mobile & Web Developer",
      profile_summary:
        "Fokus pada pengembangan aplikasi Android, Flutter dan sistem web yang fungsional.",
      chip_flutter: "Flutter, Dart & Android",
      chip_location: "Lampung, Indonesia",
      author_location: "📍 Lampung, Indonesia",

      // About
      about_tag: "Tentang Saya",
      about_title: "Pengembangan Aplikasi Mobile & Web",
      about_lead:
        "Fokus pada pembuatan aplikasi yang fungsional, terstruktur, optimal dan nyaman digunakan.",
      about_p1:
        "Saya mengembangkan aplikasi mobile dan website untuk berbagai kebutuhan, mulai dari aplikasi presensi pegawai SiapKerja Pemkab Way Kanan di Google Play Store, sistem website pengelolaan keuangan BUMK (seperti bumkpujodadibersatu.com), website game online mabarasik.com, hingga aplikasi utilitasku Android Tools All in One. Setiap proyek dikerjakan dengan struktur kode yang rapi agar mudah dirawat.",
      about_p2:
        "Di luar pekerjaan, saya menikmati musik dan dunia audio, menonton film, bersepeda, serta bermain game strategi.",
      passion_gaming: "Game Strategi",
      passion_music: "Mendengarkan Musik",
      passion_movie: "Menonton Film",
      passion_cycling: "Bersepeda",
      passion_coding: "Coding",
      passion_audiophile: "Audiophile",
      lang_title: "Bahasa",
      lang_indonesia: "Indonesia (Asli)",
      lang_english: "English (Menengah)",
      lang_javanese: "Jawa (Menengah)",

      phil_title_1: "Struktur Kode Rapi",
      phil_desc_1:
        "Menerapkan struktur kode yang teratur dan teruji agar aplikasi stabil dan mudah dikembangkan.",
      phil_title_2: "Tampilan Jelas & Responsif",
      phil_desc_2:
        "Memastikan antarmuka aplikasi mudah dipahami dan nyaman digunakan di berbagai ukuran layar.",
      phil_title_3: "Pengembangan Berkelanjutan",
      phil_desc_3:
        "Terus memperbarui wawasan teknis dan menyesuaikan solusi dengan kebutuhan nyata proyek.",

      // Skills
      skills_tag: "Keahlian",
      skills_title: "Teknologi yang Digunakan",
      skills_sub:
        "Daftar teknologi dan alat bantu yang saya gunakan dalam pengembangan perangkat lunak.",
      cat_mobile: "Aplikasi Mobile",
      cat_mobile_desc:
        "Pengembangan aplikasi Android dan iOS menggunakan Flutter dan Android native.",
      cat_backend: "Backend & Database",
      cat_backend_desc:
        "Pembuatan API, integrasi server, dan pengelolaan basis data.",
      cat_tools: "Alat & Praktik Kerja",
      cat_tools_desc:
        "Alat pendukung untuk pengujian, version control, dan pengelolaan kode.",

      // Projects
      proj_tag: "Portofolio",
      proj_title: "Daftar Proyek",
      proj_sub:
        "Aplikasi mobile dan sistem web yang pernah saya buat dan kelola.",

      proj_siapkerja_badge: "Mobile App di Play Store",
      proj_siapkerja_title: "SiapKerja Way Kanan (Mobile Presensi ASN)",
      proj_siapkerja_desc:
        "Aplikasi mobile presensi pegawai ASN di lingkungan Pemkab Way Kanan yang tersedia di Google Play Store. Dilengkapi fitur presensi berbasis GPS geofencing, verifikasi swafoto, dan pencatatan waktu kehadiran.",

      proj_bumk_badge: "Website BUMK & Keuangan BUMK",
      proj_bumk_title: "BUMK Pengelolaan Keuangan BUMK",
      proj_bumk_desc:
        "Website sistem informasi dan tata kelola keuangan Badan Usaha Milik Kampung/Desa (BUMK) untuk pencatatan unit usaha desa, pembukuan kas transparan, dan akuntabilitas pelaporan dana desa secara terbuka, dengan contoh nyata pada bumkpujodadibersatu.com.",

      proj_mabar_badge: "Platform Web Game",
      proj_mabar_title: "mabarasik.com (Online Board Games)",
      proj_mabar_desc:
        "Website game online multiplayer (mabarasik.com) yang dapat dimainkan langsung di browser. Menyediakan permainan papan seperti Taipan, Ludo, Domino Gaple, dan Ular Tangga dengan room undangan dan WebSockets.",

      proj_tools_badge: "Utilitas Android",
      proj_tools_title: "UtilitasKu",
      proj_tools_desc:
        "Aplikasi Android serbaguna berisi 50 alat bantu seperti downloader dan file manager. Dibuat agar pengguna tidak perlu memasang banyak aplikasi terpisah.",

      proj_play_badge: "Play Store",
      proj_play_title: "Google Play Store (Ars Dev)",
      proj_play_desc:
        "Kumpulan aplikasi Android yang dirilis di Google Play Store di bawah akun pengembang Ars Dev.",
      proj_seminar_badge: "Komunitas",
      proj_seminar_title: "Sharing Session & Komunitas",
      proj_seminar_desc:
        "Dokumentasi kegiatan berbagi materi seputar dasar pengembangan aplikasi mobile dan Flutter.",
      proj_btn_github: "GitHub",
      proj_btn_download: "Unduh Aplikasi",
      proj_btn_play: "Buka di Play Store",
      proj_btn_web: "Buka Website",

      timeline_tag: "Perjalanan",
      timeline_title: "Perjalanan Pendidikan & Karier",
      timeline_sub:
        "Rangkuman pendidikan, pengalaman magang, dan proyek dari 2013 sampai sekarang.",
      timeline_hint: "Gulir untuk menelusuri perjalanan",

      // Interactive Lab

      // Workflow & Services
      flow_tag: "Metode Agile",
      flow_title: "Tahapan Pengerjaan Proyek",
      flow_sub: "Pengerjaan memakai metode Agile: dibagi menjadi tahap-tahap pendek yang hasilnya ditunjukkan dan dievaluasi bersama Anda, sehingga aplikasi yang jadi benar-benar sesuai kebutuhan.",
      step_1_title: "1. Diskusi Kebutuhan",
      step_1_desc:
        "Membahas tujuan proyek, alur fitur yang dibutuhkan, dan perkiraan waktu pengerjaan.",
      step_2_title: "2. Desain & Struktur",
      step_2_desc:
        "Menyusun rancangan antarmuka dan struktur data yang akan digunakan.",
      step_3_title: "3. Pengerjaan & Pengujian",
      step_3_desc: "Penulisan kode dan pengujian per iterasi. Setiap bagian yang selesai ditunjukkan lebih dulu supaya masukan bisa langsung diterapkan.",
      step_4_title: "4. Rilis & Pemeliharaan",
      step_4_desc: "Membantu proses unggah ke server atau Play Store, lalu masukan setelah pemakaian dijadikan bahan perbaikan berikutnya.",

      service_1_title: "Aplikasi Mobile",
      service_1_desc:
        "Pembuatan aplikasi Android dan iOS menggunakan Flutter sesuai kebutuhan.",
      service_2_title: "Website & Integrasi API",
      service_2_desc:
        "Pembuatan website fungsional dan integrasi sistem dengan backend atau basis data.",
      service_3_title: "Perbaikan & Pemeliharaan",
      service_3_desc:
        "Bantuan perbaikan fitur, optimasi kinerja aplikasi, atau pemeliharaan berkala.",

      // Contact
      contact_tag: "Kontak",
      contact_title: "Hubungi Saya",
      contact_sub:
        "Silakan hubungi melalui salah satu saluran berikut jika ada proyek atau hal yang ingin didiskusikan.",
      contact_chat_hint: "Kirim Pesan Cepat",
      contact_name_placeholder: "Nama Anda",
      contact_msg_placeholder: "Tuliskan pesan atau pertanyaan Anda...",
      contact_btn_wa: "Kirim via WhatsApp",
      contact_btn_email: "Kirim via Email",
      contact_channel_wa_desc:
        "Kontak langsung untuk diskusi proyek atau pertanyaan cepat.",
      contact_channel_mail_desc:
        "Untuk penawaran formal atau kebutuhan kerja sama.",
      contact_channel_github_desc:
        "Kumpulan repositori kode dan proyek open source.",

      footer_copy: "© 2026 Ardi Ragil Saputra (Ars Dev). All rights reserved.",
      footer_motto: "Ardi Ragil Saputra • Mobile & Web Developer",
    },

    en: {
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_timeline: "Timeline",
      nav_workflow: "Workflow",
      nav_contact: "Contact",
      nav_cta: "WhatsApp",

      hero_greeting: "Hello, I am Ardi Ragil Saputra",
      hero_role: "Mobile & Web Developer",
      hero_lead:
        "Mobile and web developer. Experienced in developing the SiapKerja Way Kanan mobile app on Google Play Store, the village financial management web system for BUMK (bumkpujodadibersatu.com), the multiplayer platform mabarasik.com, and Utilitasku Android Tools All in One.",
      hero_btn_projects: "View Projects",
      hero_btn_wa: "WhatsApp",
      hero_btn_cv: "Send Email",

      metric_exp: "Years Experience",
      metric_apps: "App & Web Projects",
      metric_clean: "Android & Web Stack",

      profile_role_badge: "Mobile & Web Developer",
      profile_summary:
        "Focused on developing functional Android, Flutter and web applications.",
      chip_flutter: "Flutter, Dart & Android",
      chip_location: "Lampung, Indonesia",
      author_location: "📍 Lampung, Indonesia",

      // About
      about_tag: "About Me",
      about_title: "Mobile & Web Development",
      about_lead:
        "Focused on building functional, structured, and user-friendly software.",
      about_p1:
        "I build mobile apps and websites for various needs, from the civil servant attendance app for Pemkab Way Kanan on Google Play Store, the village enterprise financial management web system for BUMK (such as bumkpujodadibersatu.com), the online game site mabarasik.com, to Android utility tools. Every project is built with clean structure for long-term maintainability.",
      about_p2:
        "Outside of work, I enjoy music and audio gear, watching movies, cycling, and playing strategy games.",
      passion_gaming: "Strategy Games",
      passion_music: "Listening to Music",
      passion_movie: "Watching Movies",
      passion_cycling: "Cycling",
      passion_coding: "Coding",
      passion_audiophile: "Audiophile",
      lang_title: "Languages",
      lang_indonesia: "Indonesian (Native)",
      lang_english: "English (Intermediate)",
      lang_javanese: "Javanese (Intermediate)",

      phil_title_1: "Clean Code Structure",
      phil_desc_1:
        "Applying orderly, tested code architecture to keep applications stable and easy to maintain.",
      phil_title_2: "Clear & Responsive UI",
      phil_desc_2:
        "Ensuring user interfaces are straightforward and comfortable to use across different screen sizes.",
      phil_title_3: "Continuous Improvement",
      phil_desc_3:
        "Keeping technical skills up to date and tailoring solutions to real project needs.",

      // Skills
      skills_tag: "Skills",
      skills_title: "Tech Stack & Tools",
      skills_sub: "Technologies and tools I use in software development.",
      cat_mobile: "Mobile Development",
      cat_mobile_desc:
        "Building Android and iOS applications using Flutter and native Android.",
      cat_backend: "Backend & Databases",
      cat_backend_desc:
        "API development, server integration, and database management.",
      cat_tools: "Tools & Workflow",
      cat_tools_desc:
        "Supporting tools for testing, version control, and team collaboration.",

      // Projects
      proj_tag: "Portfolio",
      proj_title: "Project Showcase",
      proj_sub:
        "Selected mobile applications and web systems I have developed and managed.",

      proj_siapkerja_badge: "Mobile App (Play Store)",
      proj_siapkerja_title: "SiapKerja Way Kanan (Mobile Attendance)",
      proj_siapkerja_desc:
        "Official mobile attendance app for civil servants in Way Kanan Regency, published on Google Play Store. Features GPS geofencing radius validation, selfie verification, and check-in logging.",

      proj_bumk_badge: "Village Enterprise & Finance",
      proj_bumk_title: "BUMK Village Financial Management",
      proj_bumk_desc:
        "Web-based financial management system for village-owned enterprises (BUMK/BUMDes), supporting rural business accounting, transparent cashflow ledgers, and public financial accountability, implemented at bumkpujodadibersatu.com.",

      proj_mabar_badge: "Web Gaming Platform",
      proj_mabar_title: "mabarasik.com (Online Board Games)",
      proj_mabar_desc:
        "Online multiplayer board games website (mabarasik.com) playable in any browser. Features classic games like Taipan, Ludo, Domino Gaple, and Snakes & Ladders with room invite codes and WebSockets.",

      proj_tools_badge: "Android Utility",
      proj_tools_title: "UtilitasKu",
      proj_tools_desc:
        "An all-in-one Android app with 50 tools such as a downloader and file manager, so users no longer need to install many separate apps.",

      proj_play_badge: "Play Store",
      proj_play_title: "Google Play Store (Ars Dev)",
      proj_play_desc:
        "Collection of Android apps published on Google Play Store under the Ars Dev developer account.",
      proj_seminar_badge: "Community",
      proj_seminar_title: "Community & Tech Talks",
      proj_seminar_desc:
        "Documentation of knowledge sharing sessions on mobile development fundamentals and Flutter.",
      proj_btn_github: "GitHub",
      proj_btn_download: "Download App",
      proj_btn_play: "Open in Play Store",
      proj_btn_web: "Visit Website",

      timeline_tag: "Journey",
      timeline_title: "Education & Career Journey",
      timeline_sub:
        "A summary of education, internships, and projects from 2013 until now.",
      timeline_hint: "Scroll to move through the journey",

      // Interactive Lab

      // Workflow & Services
      flow_tag: "Agile Method",
      flow_title: "Project Development Steps",
      flow_sub: "Built the Agile way: work is split into short iterations that are demoed and reviewed with you, so the finished app matches what you actually need.",
      step_1_title: "1. Requirements Discussion",
      step_1_desc:
        "Discussing project goals, feature requirements, and timeline expectations.",
      step_2_title: "2. Design & Architecture",
      step_2_desc:
        "Designing user interfaces and planning the data structures to be used.",
      step_3_title: "3. Development & Testing",
      step_3_desc: "Writing and testing code per iteration. Each finished piece is demoed first so your feedback can be applied right away.",
      step_4_title: "4. Release & Support",
      step_4_desc: "Assisting with server or Play Store deployment, then turning real usage feedback into the next round of improvements.",

      service_1_title: "Mobile Apps",
      service_1_desc:
        "Developing Android and iOS applications with Flutter according to project needs.",
      service_2_title: "Web & API Integration",
      service_2_desc:
        "Building functional websites and connecting applications with backends or databases.",
      service_3_title: "Maintenance & Fixes",
      service_3_desc:
        "Assistance with bug fixes, app optimization, or feature enhancements.",

      // Contact
      contact_tag: "Contact",
      contact_title: "Get in Touch",
      contact_sub:
        "Feel free to reach out through any of the channels below to discuss projects or inquiries.",
      contact_chat_hint: "Quick Message",
      contact_name_placeholder: "Your Name",
      contact_msg_placeholder: "Write your message or inquiry...",
      contact_btn_wa: "Send via WhatsApp",
      contact_btn_email: "Send via Email",
      contact_channel_wa_desc:
        "Direct contact for project inquiries or quick questions.",
      contact_channel_mail_desc:
        "For formal proposals or project requirements.",
      contact_channel_github_desc:
        "Source code repositories and open source contributions.",

      footer_copy: "© 2026 Ardi Ragil Saputra (Ars Dev). All rights reserved.",
      footer_motto: "Ardi Ragil Saputra • Mobile & Web Developer",
    },
  };

  // State
  let currentLang = localStorage.getItem("ars_lang") || "id";
  let currentTheme = localStorage.getItem("ars_portfolio_theme") || "light";

  // Ambil teks sesuai bahasa aktif.
  // Menerima string biasa ("Nama Proyek") atau objek dua bahasa ({ id: "...", en: "..." }).
  function localizedText(value) {
    if (value === null || value === undefined) return "";
    if (typeof value === "string") return value;
    return value[currentLang] || value.id || value.en || "";
  }

  // Menggambar ulang seluruh timeline dari array PROJECT_TIMELINE (bagian 0 di atas).
  // Dipanggil saat halaman dimuat dan setiap kali bahasa diganti.
  function renderProjectTimeline() {
    const timeline = document.getElementById("project-timeline");
    if (!timeline) return;

    timeline.textContent = "";

    if (!Array.isArray(PROJECT_TIMELINE) || PROJECT_TIMELINE.length === 0) {
      timeline.classList.add("is-empty");
      return;
    }
    timeline.classList.remove("is-empty");

    PROJECT_TIMELINE.forEach((item, index) => {
      const entry = document.createElement("article");
      entry.className = "timeline-entry";

      const marker = document.createElement("div");
      marker.className = "timeline-marker";
      marker.textContent =
        localizedText(item.marker) || String(index + 1).padStart(2, "0");

      const content = document.createElement("div");
      content.className = "timeline-content";

      const period = document.createElement("span");
      period.className = "timeline-period";
      period.textContent = localizedText(item.period);

      const title = document.createElement("h3");
      title.className = "timeline-title";
      title.textContent = localizedText(item.title);

      content.append(period, title);

      const statusText = localizedText(item.status);
      if (statusText) {
        const status = document.createElement("span");
        status.className = "timeline-status";
        // state: "done" | "ongoing" | "planned" -> hanya mengubah warna badge
        if (item.state) {
          status.classList.add(`state-${item.state}`);
        }
        status.textContent = statusText;
        content.appendChild(status);
      }

      const description = document.createElement("p");
      description.className = "timeline-description";
      description.textContent = localizedText(item.description);
      content.appendChild(description);

      if (Array.isArray(item.stack) && item.stack.length > 0) {
        const stack = document.createElement("div");
        stack.className = "timeline-stack";
        item.stack.forEach((technology) => {
          const tag = document.createElement("span");
          tag.className = "timeline-tech";
          tag.textContent = technology;
          stack.appendChild(tag);
        });
        content.appendChild(stack);
      }

      if (item.link) {
        const link = document.createElement("a");
        link.className = "timeline-link";
        link.href = item.link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent =
          currentLang === "id" ? "Lihat detail →" : "View details →";
        content.appendChild(link);
      }

      entry.append(marker, content);
      timeline.appendChild(entry);
    });

    // Penahan ruang di ujung kanan (lihat .timeline-spacer di style.css)
    const spacer = document.createElement("span");
    spacer.className = "timeline-spacer";
    spacer.setAttribute("aria-hidden", "true");
    timeline.appendChild(spacer);

    if (remeasureTimeline) remeasureTimeline();
  }

  // =========================================================================
  // ANIMASI MUNCUL SAAT DI-SCROLL
  // Atribut data-reveal sengaja dipasang dari JavaScript: kalau JS gagal jalan,
  // tidak ada elemen yang tersembunyi.
  // =========================================================================
  function setupScrollReveal() {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // [selector, jenis gerakan, jeda antar elemen dalam milidetik]
    const groups = [
      [".hero-title", "up", 0],
      [".hero-lead", "up", 90],
      [".hero-actions", "up", 160],
      [".hero-socials", "up", 220],
      [".hero-metrics", "up", 280],
      [".hero-visual", "right", 120],
      [".section-header", "up", 0],
      [".story-card", "left", 0],
      [".phil-card", "right", 90],
      [".passion-box", "up", 60],
      [".skill-category-card", "up", 110],
      [".project-card", "up", 110],
      [".step-card", "up", 90],
      [".service-card", "up", 90],
      [".contact-info-card", "left", 0],
      [".contact-form-card", "right", 0],
    ];

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    groups.forEach(function (group) {
      const selector = group[0];
      const motion = group[1];
      const step = group[2];

      document.querySelectorAll(selector).forEach(function (el, index) {
        el.setAttribute("data-reveal", motion === "up" ? "" : motion);
        if (step) {
          el.style.setProperty("--reveal-delay", index * step + "ms");
        }
        observer.observe(el);
      });
    });
  }

  // =========================================================================
  // TIMELINE HORIZONTAL YANG MENGIKUTI SCROLL HALAMAN
  // Kartu digeser ke samping seiring pengguna menggulir halaman. Di layar kecil
  // atau saat pengguna mematikan animasi, timeline kembali jadi geser manual.
  // =========================================================================
  let remeasureTimeline = null;

  function setupTimelineScroll() {
    const wrap = document.getElementById("timeline-scroll-wrap");
    const viewport = document.getElementById("timeline-viewport");
    const track = document.getElementById("project-timeline");
    const bar = document.getElementById("timeline-progress-bar");
    if (!wrap || !viewport || !track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 1023px)");
    let distance = 0;
    let ticking = false;

    function pinned() {
      return !reduceMotion.matches && !smallScreen.matches;
    }

    // Samakan lebar penahan ujung kanan dengan padding kiri, lalu kembalikan
    // lebar penuh isi timeline (diukur dari elemen terakhir, bukan scrollWidth,
    // karena scrollWidth pada flex container sering meleset).
    function trackWidth() {
      const last = track.lastElementChild;
      if (!last) return 0;

      const padLeft =
        parseFloat(window.getComputedStyle(track).paddingLeft) || 0;
      const spacer = track.querySelector(".timeline-spacer");
      if (spacer) spacer.style.flexBasis = padLeft + "px";

      return last.offsetLeft + last.offsetWidth;
    }

    function update() {
      if (distance <= 0) return;
      const offset = Math.min(
        1,
        Math.max(0, -wrap.getBoundingClientRect().top / distance),
      );
      track.style.transform =
        "translate3d(" + -(offset * distance) + "px, 0, 0)";
      if (bar) bar.style.transform = "scaleX(" + offset + ")";
    }

    function measure() {
      if (!pinned()) {
        document.body.classList.add("timeline-static");
        wrap.style.height = "";
        track.style.transform = "";
        if (bar) bar.style.transform = "scaleX(0)";
        distance = 0;
        return;
      }

      document.body.classList.remove("timeline-static");
      track.style.transform = "translate3d(0, 0, 0)";
      distance = Math.max(0, trackWidth() - viewport.clientWidth);
      wrap.style.height =
        distance > 0 ? window.innerHeight + distance + "px" : "";
      update();
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        update();
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    if (reduceMotion.addEventListener) {
      reduceMotion.addEventListener("change", measure);
      smallScreen.addEventListener("change", measure);
    }

    remeasureTimeline = measure;
    measure();
  }

  // =========================================================================
  // 1.1 THEME ENGINE (Default: Light Mode)
  // =========================================================================
  function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ars_portfolio_theme", theme);

    const icon = document.getElementById("theme-btn-icon");
    if (icon) {
      icon.textContent = theme === "dark" ? "☀️" : "🌙";
    }

    const meta = document.getElementById("theme-color-meta");
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#080c14" : "#f8fafc");
    }
  }

  // =========================================================================
  // 1.2 KONFIGURASI FIELD URL GAMBAR PROYEK (PROJECT IMAGE URL FIELDS)
  // Anda dapat mengisi URL / path gambar di sini atau langsung pada atribut src="" di index.html.
  // Contoh URL web: "https://domain.com/screenshot.jpg"
  // Contoh file lokal: "assets/nama_file.png"
  // *Jika dibiarkan kosong (""), visual interaktif bawaan otomatis aktif.
  // =========================================================================
  const PROJECT_IMAGE_URLS = {
    siapkerja: "", // Project 1: SiapKerja Way Kanan (Play Store)
    bumk: "", // Project 2: Website BUMK (bumkpujodadibersatu.com)
    mabarasik: "", // Project 3: Website Game (mabarasik.com)
    androidTools: "", // Project 4: UtilitasKu (Android Tools All in One)
    // playStore: ""      // (Disembunyikan sementara: akun Play Store sedang non-aktif/banned)
  };

  function setupProjectImageFields() {
    const projectFields = [
      { id: "project-img-siapkerja", key: "siapkerja" },
      { id: "project-img-bumk", key: "bumk" },
      { id: "project-img-mabarasik", key: "mabarasik" },
      { id: "project-img-tools", key: "androidTools" },
      // { id: 'project-img-playstore', key: 'playStore' } // Disembunyikan sementara
    ];

    projectFields.forEach((item) => {
      const img = document.getElementById(item.id);
      if (!img) return;

      // 1. Jika disetel pada objek PROJECT_IMAGE_URLS di atas, gunakan nilainya
      const configUrl = PROJECT_IMAGE_URLS[item.key];
      if (configUrl && configUrl.trim() !== "") {
        img.src = configUrl.trim();
      }

      // 2. Evaluasi apakah src valid dan terisi
      const currentSrc = img.getAttribute("src");
      if (!currentSrc || currentSrc.trim() === "") {
        img.classList.add("img-hidden");
      } else {
        img.classList.remove("img-hidden");
      }

      // 3. Fallback jika gambar gagal dimuat (404/error)
      img.addEventListener("error", function () {
        this.classList.add("img-hidden");
      });

      img.addEventListener("load", function () {
        this.classList.remove("img-hidden");
      });
    });
  }

  // =========================================================================
  // 2. LANGUAGE SWITCHER IMPLEMENTATION
  // =========================================================================
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("ars_lang", lang);

    // Update DOM elements with data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update placeholders
    const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    // Update lang button text
    const langBtnText = document.getElementById("lang-btn-text");
    if (langBtnText) {
      langBtnText.textContent = lang === "id" ? "ID" : "EN";
    }

    // Timeline digambar ulang supaya ikut bahasa yang dipilih
    renderProjectTimeline();
  }

  // =========================================================================
  // 3. COMPACT LIVE WIB CLOCK (HH:MM WIB)
  // =========================================================================
  function updateLiveClock() {
    const clockEl = document.getElementById("local-clock");
    if (!clockEl) return;

    const now = new Date();
    const options = {
      timeZone: "Asia/Jakarta",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    };
    const timeStr = now.toLocaleTimeString("en-GB", options);
    clockEl.textContent = `${timeStr} WIB`;
  }

  // =========================================================================
  // 4. QUICK MESSAGE TO WHATSAPP & EMAIL
  // =========================================================================
  function setupQuickMessage() {
    const btnWA = document.getElementById("send-wa-btn");
    const btnEmail = document.getElementById("send-email-btn");
    const inputName = document.getElementById("msg-name");
    const inputContent = document.getElementById("msg-content");

    if (btnWA) {
      btnWA.addEventListener("click", function (e) {
        e.preventDefault();
        const name =
          (inputName && inputName.value.trim()) ||
          (currentLang === "id" ? "Teman" : "Friend");
        const content =
          (inputContent && inputContent.value.trim()) ||
          (currentLang === "id"
            ? "Halo Ardi, saya ingin bertanya seputar proyek aplikasi."
            : "Hello Ardi, I would like to inquire about a software project.");

        const text = `Halo Ardi (Ars Dev), saya ${name}.\n\n${content}`;
        const waUrl = `https://wa.me/6282282418992?text=${encodeURIComponent(text)}`;
        window.open(waUrl, "_blank");
      });
    }

    if (btnEmail) {
      btnEmail.addEventListener("click", function (e) {
        e.preventDefault();
        const name = (inputName && inputName.value.trim()) || "Friend";
        const content =
          (inputContent && inputContent.value.trim()) ||
          "Hello Ardi, I would like to connect with you regarding a project.";

        const subject = `Pesan dari ${name} (Website Portofolio)`;
        const mailUrl = `mailto:ardi.rs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;
        window.location.href = mailUrl;
      });
    }
  }

  // =========================================================================
  // 5. NAVIGATION & UX INTERACTION
  // =========================================================================
  function setupNavigation() {
    const navbar = document.querySelector(".navbar");
    const mobileToggle = document.getElementById("mobile-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-link");

    // Scroll effect
    window.addEventListener("scroll", function () {
      if (window.scrollY > 25) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }

      // Active Section Spy
      let currentSection = "";
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          currentSection = sec.getAttribute("id");
        }
      });

      navItems.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    });

    // Mobile Menu Toggle
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener("click", function () {
        navLinks.classList.toggle("mobile-open");
      });

      // Close menu when clicking link
      navItems.forEach((item) => {
        item.addEventListener("click", function () {
          navLinks.classList.remove("mobile-open");
        });
      });
    }

    // Theme Button Toggle
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
      });
    }

    // Language Button Toggle
    const langBtn = document.getElementById("lang-toggle-btn");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        const newLang = currentLang === "id" ? "en" : "id";
        setLanguage(newLang);
      });
    }
  }

  // =========================================================================
  // 6. INITIALIZATION
  // =========================================================================
  document.addEventListener("DOMContentLoaded", function () {
    setTheme(currentTheme);
    setLanguage(currentLang);
    renderProjectTimeline();
    setupProjectImageFields();
    setupNavigation();
    setupTimelineScroll();
    setupScrollReveal();
    setupQuickMessage();
    updateLiveClock();
    setInterval(updateLiveClock, 1000);
  });
})();
