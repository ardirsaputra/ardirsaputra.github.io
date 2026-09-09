/**
 * ARDI RAGIL SAPUTRA (ARS DEV) - PORTFOLIO INTERACTION ENGINE
 * Compact Navbar, Grounded Copy (No Hyperbole), Bilingual (ID / EN), & Working Calculators
 */

(function() {
  'use strict';

  // =========================================================================
  // 1. TRANSLATION DICTIONARY (ID & EN) - GROUNDED & PROFESSIONAL
  // =========================================================================
  const translations = {
    id: {
      nav_about: "Tentang",
      nav_skills: "Keahlian",
      nav_projects: "Proyek",
      nav_lab: "Lab",
      nav_workflow: "Alur Kerja",
      nav_contact: "Kontak",
      nav_cta: "WhatsApp",

      status_available: "Tersedia untuk Proyek Baru",
      hero_greeting: "Halo, saya Ardi Ragil Saputra",
      hero_role: "Mobile & Web Developer",
      hero_lead: "Pengembang aplikasi mobile dan website. Berpengalaman mengerjakan aplikasi mobile SiapKerja Way Kanan di Google Play Store, website pengelolaan keuangan desa BUMK (bumkpujodadibersatu.com), platform game online mabarasik.com, dan aplikasi utilitas Android Tools All in One.",
      hero_btn_projects: "Lihat Proyek",
      hero_btn_wa: "Chat WhatsApp",
      hero_btn_cv: "Kirim Email",

      metric_exp: "Tahun Pengalaman",
      metric_apps: "Proyek Aplikasi & Web",
      metric_clean: "Android & Web Stack",

      profile_role_badge: "Mobile & Web Developer",
      profile_summary: "Fokus pada pengembangan aplikasi Android, Flutter, dan sistem web yang fungsional.",
      chip_flutter: "Flutter, Dart & Android",
      chip_location: "Lampung, Indonesia",
      author_location: "📍 Lampung, Indonesia",

      // About
      about_tag: "Tentang Saya",
      about_title: "Pengembangan Aplikasi Mobile & Web",
      about_lead: "Fokus pada pembuatan aplikasi yang fungsional, terstruktur, dan nyaman digunakan.",
      about_p1: "Saya mengembangkan aplikasi mobile dan website untuk berbagai kebutuhan, mulai dari aplikasi presensi pegawai SiapKerja Pemkab Way Kanan di Google Play Store, sistem website pengelolaan keuangan desa BUMK (seperti bumkpujodadibersatu.com), website game online mabarasik.com, hingga aplikasi utilitas Android Tools All in One. Setiap proyek dikerjakan dengan struktur kode yang rapi agar mudah dirawat.",
      about_p2: "Di luar aktivitas coding, saya tertarik dengan budaya Jepang, traveling, dan game strategi.",
      passion_gaming: "Gaming & Strategi",
      passion_japan: "Budaya Jepang",
      passion_travel: "Traveling",

      phil_title_1: "Struktur Kode Rapi",
      phil_desc_1: "Menerapkan struktur kode yang teratur dan teruji agar aplikasi stabil dan mudah dikembangkan.",
      phil_title_2: "Tampilan Jelas & Responsif",
      phil_desc_2: "Memastikan antarmuka aplikasi mudah dipahami dan nyaman digunakan di berbagai ukuran layar.",
      phil_title_3: "Pengembangan Berkelanjutan",
      phil_desc_3: "Terus memperbarui wawasan teknis dan menyesuaikan solusi dengan kebutuhan nyata proyek.",

      // Skills
      skills_tag: "Keahlian",
      skills_title: "Teknologi yang Digunakan",
      skills_sub: "Daftar teknologi dan alat bantu yang saya gunakan dalam pengembangan perangkat lunak.",
      cat_mobile: "Aplikasi Mobile",
      cat_mobile_desc: "Pengembangan aplikasi Android dan iOS menggunakan Flutter dan Android native.",
      cat_backend: "Backend & Database",
      cat_backend_desc: "Pembuatan API, integrasi server, dan pengelolaan basis data.",
      cat_tools: "Alat & Praktik Kerja",
      cat_tools_desc: "Alat pendukung untuk pengujian, version control, dan pengelolaan kode.",

      // Projects
      proj_tag: "Portofolio",
      proj_title: "Daftar Proyek",
      proj_sub: "Aplikasi mobile dan sistem web yang pernah saya buat dan kelola.",

      proj_siapkerja_badge: "Mobile App di Play Store",
      proj_siapkerja_title: "SiapKerja Way Kanan (Mobile Presensi ASN)",
      proj_siapkerja_desc: "Aplikasi mobile presensi pegawai ASN di lingkungan Pemkab Way Kanan yang tersedia di Google Play Store. Dilengkapi fitur presensi berbasis GPS geofencing, verifikasi swafoto, dan pencatatan waktu kehadiran.",

      proj_bumk_badge: "Website BUMK & Keuangan Desa",
      proj_bumk_title: "BUMK Pengelolaan Keuangan Desa",
      proj_bumk_desc: "Website sistem informasi dan tata kelola keuangan Badan Usaha Milik Kampung/Desa (BUMK) untuk pencatatan unit usaha desa, pembukuan kas transparan, dan akuntabilitas pelaporan dana desa secara terbuka, dengan contoh nyata pada bumkpujodadibersatu.com.",

      proj_mabar_badge: "Platform Web Game",
      proj_mabar_title: "mabarasik.com (Online Board Games)",
      proj_mabar_desc: "Website game online multiplayer (mabarasik.com) yang dapat dimainkan langsung di browser. Menyediakan permainan papan seperti Taipan, Ludo, Domino Gaple, dan Ular Tangga dengan room undangan dan WebSockets.",

      proj_tools_badge: "Utilitas Android",
      proj_tools_title: "Android Tools All in One",
      proj_tools_desc: "Aplikasi utilitas Android yang mengumpulkan berbagai alat bantu praktis dalam satu tempat, termasuk kalkulator formula lingkungan, kalkulator kuota internet, dan pengonversi unit.",

      proj_eco_badge: "Utilitas Lingkungan",
      proj_eco_title: "Kalkulator Eco Enzyme",
      proj_eco_desc: "Alat bantu hitung formula fermentasi eco enzyme dengan rasio standar 1 bagian gula : 3 bagian bahan organik : 10 bagian air.",
      proj_kouta_badge: "Alat Bantu Kuota",
      proj_kouta_title: "Kalkulator Kuota Internet",
      proj_kouta_desc: "Alat bantu estimasi pemakaian data saat menonton video berdasarkan resolusi dan durasi waktu.",
      proj_play_badge: "Play Store",
      proj_play_title: "Google Play Store (Ars Dev)",
      proj_play_desc: "Kumpulan aplikasi Android yang dirilis di Google Play Store di bawah akun pengembang Ars Dev.",
      proj_seminar_badge: "Komunitas",
      proj_seminar_title: "Sharing Session & Komunitas",
      proj_seminar_desc: "Dokumentasi kegiatan berbagi materi seputar dasar pengembangan aplikasi mobile dan Flutter.",
      proj_btn_view: "Coba Demo",
      proj_btn_github: "GitHub",
      proj_btn_play: "Buka di Play Store",
      proj_btn_web: "Buka Website",

      // Interactive Lab
      lab_tag: "Demo Interaktif",
      lab_title: "Coba Fitur Kalkulator",
      lab_sub: "Uji langsung perhitungan logika aplikasi di browser.",
      calc_eco_title: "Kalkulator Eco Enzyme",
      calc_eco_label_vol: "Volume Wadah (Liter):",
      calc_eco_label_water_ratio: "Rasio Kapasitas Air:",
      calc_res_water: "Air (Liter / Kg)",
      calc_res_bo: "Bahan Organik (Kg)",
      calc_res_gmt: "Gula Merah/Molase (Kg)",
      calc_eco_formula_note: "Formula standar eco enzyme: 1 bagian Gula (GMT) : 3 bagian Bahan Organik (BO) : 10 bagian Air.",

      calc_quota_title: "Estimasi Kuota Video YouTube",
      calc_quota_label_dur: "Durasi Nonton (Jam):",
      calc_quota_label_res: "Pilih Resolusi Video:",
      calc_res_data: "Total Kuota Terpakai",
      calc_res_rate: "Konsumsi per Menit",
      calc_res_speed: "Kecepatan Minimal",

      // Workflow & Services
      flow_tag: "Alur Kerja",
      flow_title: "Tahapan Pengerjaan Proyek",
      flow_sub: "Langkah pengerjaan terstruktur dari diskusi awal hingga aplikasi siap digunakan.",
      step_1_title: "1. Diskusi Kebutuhan",
      step_1_desc: "Membahas tujuan proyek, alur fitur yang dibutuhkan, dan perkiraan waktu pengerjaan.",
      step_2_title: "2. Desain & Struktur",
      step_2_desc: "Menyusun rancangan antarmuka dan struktur data yang akan digunakan.",
      step_3_title: "3. Pengerjaan & Pengujian",
      step_3_desc: "Penulisan kode program, integrasi fungsi, dan pengujian untuk memastikan aplikasi berjalan baik.",
      step_4_title: "4. Rilis & Pemeliharaan",
      step_4_desc: "Membantu proses unggah ke server/Play Store dan perbaikan jika dibutuhkan.",

      service_1_title: "Aplikasi Mobile",
      service_1_desc: "Pembuatan aplikasi Android dan iOS menggunakan Flutter sesuai kebutuhan.",
      service_2_title: "Website & Integrasi API",
      service_2_desc: "Pembuatan website fungsional dan integrasi sistem dengan backend atau basis data.",
      service_3_title: "Perbaikan & Pemeliharaan",
      service_3_desc: "Bantuan perbaikan fitur, optimasi kinerja aplikasi, atau pemeliharaan berkala.",

      // Contact
      contact_tag: "Kontak",
      contact_title: "Hubungi Saya",
      contact_sub: "Silakan hubungi melalui salah satu saluran berikut jika ada proyek atau hal yang ingin didiskusikan.",
      contact_chat_hint: "Kirim Pesan Cepat",
      contact_name_placeholder: "Nama Anda",
      contact_msg_placeholder: "Tuliskan pesan atau pertanyaan Anda...",
      contact_btn_wa: "Kirim via WhatsApp",
      contact_btn_email: "Kirim via Email",
      contact_channel_wa_desc: "Kontak langsung untuk diskusi proyek atau pertanyaan cepat.",
      contact_channel_mail_desc: "Untuk penawaran formal atau kebutuhan kerja sama.",
      contact_channel_fiverr_desc: "Layanan lepas melalui platform Fiverr.",
      contact_channel_linkedin_desc: "Profil profesional dan jaringan karier.",
      contact_channel_github_desc: "Kumpulan repositori kode dan proyek open source.",

      footer_copy: "© 2026 Ardi Ragil Saputra (Ars Dev). All rights reserved.",
      footer_motto: "Ardi Ragil Saputra • Mobile & Web Developer"
    },

    en: {
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_lab: "Lab",
      nav_workflow: "Workflow",
      nav_contact: "Contact",
      nav_cta: "WhatsApp",

      status_available: "Available for New Projects",
      hero_greeting: "Hello, I am Ardi Ragil Saputra",
      hero_role: "Mobile & Web Developer",
      hero_lead: "Mobile and web developer. Experienced in developing the SiapKerja Way Kanan mobile app on Google Play Store, the village financial management web system for BUMK (bumkpujodadibersatu.com), the multiplayer platform mabarasik.com, and Android Tools All in One.",
      hero_btn_projects: "View Projects",
      hero_btn_wa: "WhatsApp",
      hero_btn_cv: "Send Email",

      metric_exp: "Years Experience",
      metric_apps: "App & Web Projects",
      metric_clean: "Android & Web Stack",

      profile_role_badge: "Mobile & Web Developer",
      profile_summary: "Focused on developing functional Android, Flutter, and web applications.",
      chip_flutter: "Flutter, Dart & Android",
      chip_location: "Lampung, Indonesia",
      author_location: "📍 Lampung, Indonesia",

      // About
      about_tag: "About Me",
      about_title: "Mobile & Web Development",
      about_lead: "Focused on building functional, structured, and user-friendly software.",
      about_p1: "I build mobile apps and websites for various needs, from the civil servant attendance app for Pemkab Way Kanan on Google Play Store, the village enterprise financial management web system for BUMK (such as bumkpujodadibersatu.com), the online game site mabarasik.com, to Android utility tools. Every project is built with clean structure for long-term maintainability.",
      about_p2: "Outside of coding, I enjoy Japanese culture, traveling, and strategy games.",
      passion_gaming: "Gaming & Strategy",
      passion_japan: "Japanese Culture",
      passion_travel: "Traveling",

      phil_title_1: "Clean Code Structure",
      phil_desc_1: "Applying orderly, tested code architecture to keep applications stable and easy to maintain.",
      phil_title_2: "Clear & Responsive UI",
      phil_desc_2: "Ensuring user interfaces are straightforward and comfortable to use across different screen sizes.",
      phil_title_3: "Continuous Improvement",
      phil_desc_3: "Keeping technical skills up to date and tailoring solutions to real project needs.",

      // Skills
      skills_tag: "Skills",
      skills_title: "Tech Stack & Tools",
      skills_sub: "Technologies and tools I use in software development.",
      cat_mobile: "Mobile Development",
      cat_mobile_desc: "Building Android and iOS applications using Flutter and native Android.",
      cat_backend: "Backend & Databases",
      cat_backend_desc: "API development, server integration, and database management.",
      cat_tools: "Tools & Workflow",
      cat_tools_desc: "Supporting tools for testing, version control, and team collaboration.",

      // Projects
      proj_tag: "Portfolio",
      proj_title: "Project Showcase",
      proj_sub: "Selected mobile applications and web systems I have developed and managed.",

      proj_siapkerja_badge: "Mobile App (Play Store)",
      proj_siapkerja_title: "SiapKerja Way Kanan (Mobile Attendance)",
      proj_siapkerja_desc: "Official mobile attendance app for civil servants in Way Kanan Regency, published on Google Play Store. Features GPS geofencing radius validation, selfie verification, and check-in logging.",

      proj_bumk_badge: "Village Enterprise & Finance",
      proj_bumk_title: "BUMK Village Financial Management",
      proj_bumk_desc: "Web-based financial management system for village-owned enterprises (BUMK/BUMDes), supporting rural business accounting, transparent cashflow ledgers, and public financial accountability, implemented at bumkpujodadibersatu.com.",

      proj_mabar_badge: "Web Gaming Platform",
      proj_mabar_title: "mabarasik.com (Online Board Games)",
      proj_mabar_desc: "Online multiplayer board games website (mabarasik.com) playable in any browser. Features classic games like Taipan, Ludo, Domino Gaple, and Snakes & Ladders with room invite codes and WebSockets.",

      proj_tools_badge: "Android Utility",
      proj_tools_title: "Android Tools All in One",
      proj_tools_desc: "An Android utility suite bundling essential daily tools in one place, including an eco-enzyme calculator, video quota estimator, and unit converters.",

      proj_eco_badge: "Eco Utility",
      proj_eco_title: "Eco Enzyme Calculator",
      proj_eco_desc: "Fermentation calculator tool using the standard 1 part sugar : 3 parts organic waste : 10 parts water ratio.",
      proj_kouta_badge: "Data Helper",
      proj_kouta_title: "Internet Quota Estimator",
      proj_kouta_desc: "Estimation tool for data plan usage when streaming video based on resolution and watch time.",
      proj_play_badge: "Play Store",
      proj_play_title: "Google Play Store (Ars Dev)",
      proj_play_desc: "Collection of Android apps published on Google Play Store under the Ars Dev developer account.",
      proj_seminar_badge: "Community",
      proj_seminar_title: "Community & Tech Talks",
      proj_seminar_desc: "Documentation of knowledge sharing sessions on mobile development fundamentals and Flutter.",
      proj_btn_view: "Try Demo",
      proj_btn_github: "GitHub",
      proj_btn_play: "Open in Play Store",
      proj_btn_web: "Visit Website",

      // Interactive Lab
      lab_tag: "Interactive Demo",
      lab_title: "Try Calculator Tools",
      lab_sub: "Test the application calculation logic directly in your browser.",
      calc_eco_title: "Eco Enzyme Calculator",
      calc_eco_label_vol: "Container Volume (Liters):",
      calc_eco_label_water_ratio: "Water Capacity Ratio:",
      calc_res_water: "Water (Liters / Kg)",
      calc_res_bo: "Organic Waste (Kg)",
      calc_res_gmt: "Brown Sugar / Molasses (Kg)",
      calc_eco_formula_note: "Standard Eco Enzyme formula: 1 part Sugar : 3 parts Organic Waste : 10 parts Water.",

      calc_quota_title: "YouTube Video Quota Estimator",
      calc_quota_label_dur: "Watch Duration (Hours):",
      calc_quota_label_res: "Select Video Resolution:",
      calc_res_data: "Total Data Used",
      calc_res_rate: "Data Rate per Minute",
      calc_res_speed: "Recommended Speed",

      // Workflow & Services
      flow_tag: "Workflow",
      flow_title: "Project Development Steps",
      flow_sub: "Structured development process from planning to release.",
      step_1_title: "1. Requirements Discussion",
      step_1_desc: "Discussing project goals, feature requirements, and timeline expectations.",
      step_2_title: "2. Design & Architecture",
      step_2_desc: "Designing user interfaces and planning the data structures to be used.",
      step_3_title: "3. Development & Testing",
      step_3_desc: "Writing code, integrating features, and testing to ensure reliability.",
      step_4_title: "4. Release & Support",
      step_4_desc: "Assisting with server or Play Store deployment and subsequent updates.",

      service_1_title: "Mobile Apps",
      service_1_desc: "Developing Android and iOS applications with Flutter according to project needs.",
      service_2_title: "Web & API Integration",
      service_2_desc: "Building functional websites and connecting applications with backends or databases.",
      service_3_title: "Maintenance & Fixes",
      service_3_desc: "Assistance with bug fixes, app optimization, or feature enhancements.",

      // Contact
      contact_tag: "Contact",
      contact_title: "Get in Touch",
      contact_sub: "Feel free to reach out through any of the channels below to discuss projects or inquiries.",
      contact_chat_hint: "Quick Message",
      contact_name_placeholder: "Your Name",
      contact_msg_placeholder: "Write your message or inquiry...",
      contact_btn_wa: "Send via WhatsApp",
      contact_btn_email: "Send via Email",
      contact_channel_wa_desc: "Direct contact for project inquiries or quick questions.",
      contact_channel_mail_desc: "For formal proposals or project requirements.",
      contact_channel_fiverr_desc: "Freelance gigs via Fiverr platform.",
      contact_channel_linkedin_desc: "Professional profile and career network.",
      contact_channel_github_desc: "Source code repositories and open source contributions.",

      footer_copy: "© 2026 Ardi Ragil Saputra (Ars Dev). All rights reserved.",
      footer_motto: "Ardi Ragil Saputra • Mobile & Web Developer"
    }
  };

  // State
  let currentLang = localStorage.getItem('ars_lang') || 'id';
  let currentTheme = localStorage.getItem('ars_portfolio_theme') || 'light';

  // =========================================================================
  // 1.1 THEME ENGINE (Default: Light Mode)
  // =========================================================================
  function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ars_portfolio_theme', theme);

    const icon = document.getElementById('theme-btn-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    const meta = document.getElementById('theme-color-meta');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#080c14' : '#f8fafc');
    }
  }

  // =========================================================================
  // 2. LANGUAGE SWITCHER IMPLEMENTATION
  // =========================================================================
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('ars_lang', lang);

    // Update DOM elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    // Update lang button text
    const langBtnText = document.getElementById('lang-btn-text');
    if (langBtnText) {
      langBtnText.textContent = lang === 'id' ? 'ID' : 'EN';
    }

    // Trigger calculator recalculations so notes stay updated
    updateEcoCalculator();
    updateQuotaCalculator();
  }

  // =========================================================================
  // 3. COMPACT LIVE WIB CLOCK (HH:MM WIB)
  // =========================================================================
  function updateLiveClock() {
    const clockEl = document.getElementById('local-clock');
    if (!clockEl) return;

    const now = new Date();
    const options = {
      timeZone: 'Asia/Jakarta',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    };
    const timeStr = now.toLocaleTimeString('en-GB', options);
    clockEl.textContent = `${timeStr} WIB`;
  }

  // =========================================================================
  // 4. ECO ENZYME INTERACTIVE CALCULATOR WIDGET
  // =========================================================================
  function setupEcoCalculator() {
    const volInput = document.getElementById('eco-vol-input');
    const ratioSlider = document.getElementById('eco-ratio-slider');
    const ratioLabel = document.getElementById('eco-ratio-val');

    if (!volInput || !ratioSlider) return;

    volInput.addEventListener('input', updateEcoCalculator);
    ratioSlider.addEventListener('input', function() {
      if (ratioLabel) ratioLabel.textContent = `${this.value}%`;
      updateEcoCalculator();
    });

    updateEcoCalculator();
  }

  function updateEcoCalculator() {
    const volInput = document.getElementById('eco-vol-input');
    const ratioSlider = document.getElementById('eco-ratio-slider');
    const resWater = document.getElementById('eco-res-water');
    const resBO = document.getElementById('eco-res-bo');
    const resGMT = document.getElementById('eco-res-gmt');

    if (!volInput || !ratioSlider || !resWater || !resBO || !resGMT) return;

    let containerVolume = parseFloat(volInput.value) || 0;
    if (containerVolume < 0) containerVolume = 0;
    const ratioPercent = parseFloat(ratioSlider.value) || 60;

    // Formula calculation
    const water = containerVolume * (ratioPercent / 100);
    const bo = water * 0.3;
    const gmt = water * 0.1;

    resWater.textContent = water.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 2 });
    resBO.textContent = bo.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 });
    resGMT.textContent = gmt.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 });
  }

  // =========================================================================
  // 5. YOUTUBE QUOTA CONSUMPTION CALCULATOR WIDGET
  // =========================================================================
  const quotaRates = {
    '144p':  { mbPerHour: 100,  speed: '250 Kbps' },
    '240p':  { mbPerHour: 200,  speed: '450 Kbps' },
    '360p':  { mbPerHour: 350,  speed: '800 Kbps' },
    '480p':  { mbPerHour: 550,  speed: '1.2 Mbps' },
    '720p':  { mbPerHour: 1200, speed: '2.8 Mbps' },
    '1080p': { mbPerHour: 2200, speed: '5.0 Mbps' },
    '1440p': { mbPerHour: 4500, speed: '10.0 Mbps' }
  };

  let selectedResolution = '360p';

  function setupQuotaCalculator() {
    const durSlider = document.getElementById('quota-dur-slider');
    const durVal = document.getElementById('quota-dur-val');
    const pillButtons = document.querySelectorAll('.res-pill-btn');

    if (durSlider && durVal) {
      durSlider.addEventListener('input', function() {
        const val = this.value;
        durVal.textContent = val == 1 ? `${val} Jam / Hour` : `${val} Jam / Hours`;
        updateQuotaCalculator();
      });
    }

    pillButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        pillButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        selectedResolution = this.getAttribute('data-res') || '360p';
        updateQuotaCalculator();
      });
    });

    updateQuotaCalculator();
  }

  function updateQuotaCalculator() {
    const durSlider = document.getElementById('quota-dur-slider');
    const resData = document.getElementById('quota-res-data');
    const resRate = document.getElementById('quota-res-rate');
    const resSpeed = document.getElementById('quota-res-speed');

    if (!durSlider || !resData || !resRate || !resSpeed) return;

    const hours = parseFloat(durSlider.value) || 1;
    const rateInfo = quotaRates[selectedResolution] || quotaRates['360p'];

    const totalMB = rateInfo.mbPerHour * hours;
    const mbPerMin = (rateInfo.mbPerHour / 60);

    let displayTotal = '';
    if (totalMB >= 1000) {
      displayTotal = `${(totalMB / 1024).toFixed(2)} GB (${Math.round(totalMB)} MB)`;
    } else {
      displayTotal = `${Math.round(totalMB)} MB`;
    }

    resData.textContent = displayTotal;
    resRate.textContent = `${mbPerMin.toFixed(1)} MB / Min`;
    resSpeed.textContent = rateInfo.speed;
  }

  // =========================================================================
  // 6. QUICK MESSAGE TO WHATSAPP & EMAIL
  // =========================================================================
  function setupQuickMessage() {
    const btnWA = document.getElementById('send-wa-btn');
    const btnEmail = document.getElementById('send-email-btn');
    const inputName = document.getElementById('msg-name');
    const inputContent = document.getElementById('msg-content');

    if (btnWA) {
      btnWA.addEventListener('click', function(e) {
        e.preventDefault();
        const name = (inputName && inputName.value.trim()) || (currentLang === 'id' ? 'Teman' : 'Friend');
        const content = (inputContent && inputContent.value.trim()) || (currentLang === 'id' ? 'Halo Ardi, saya ingin bertanya seputar proyek aplikasi.' : 'Hello Ardi, I would like to inquire about a software project.');

        const text = `Halo Ardi (Ars Dev), saya ${name}.\n\n${content}`;
        const waUrl = `https://wa.me/6282282418992?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank');
      });
    }

    if (btnEmail) {
      btnEmail.addEventListener('click', function(e) {
        e.preventDefault();
        const name = (inputName && inputName.value.trim()) || 'Friend';
        const content = (inputContent && inputContent.value.trim()) || 'Hello Ardi, I would like to connect with you regarding a project.';

        const subject = `Pesan dari ${name} (Website Portofolio)`;
        const mailUrl = `mailto:fluzzzer@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;
        window.location.href = mailUrl;
      });
    }
  }

  // =========================================================================
  // 7. NAVIGATION & UX INTERACTION
  // =========================================================================
  function setupNavigation() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', function() {
      if (window.scrollY > 25) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }

      // Active Section Spy
      let currentSection = '';
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          currentSection = sec.getAttribute('id');
        }
      });

      navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    });

    // Mobile Menu Toggle
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', function() {
        navLinks.classList.toggle('mobile-open');
      });

      // Close menu when clicking link
      navItems.forEach(item => {
        item.addEventListener('click', function() {
          navLinks.classList.remove('mobile-open');
        });
      });
    }

    // Theme Button Toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', function() {
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
      });
    }

    // Language Button Toggle
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.addEventListener('click', function() {
        const newLang = currentLang === 'id' ? 'en' : 'id';
        setLanguage(newLang);
      });
    }
  }

  // =========================================================================
  // 8. INITIALIZATION
  // =========================================================================
  document.addEventListener('DOMContentLoaded', function() {
    setTheme(currentTheme);
    setLanguage(currentLang);
    setupNavigation();
    setupEcoCalculator();
    setupQuotaCalculator();
    setupQuickMessage();

    // Clock ticker (every minute or second is fine)
    updateLiveClock();
    setInterval(updateLiveClock, 1000);
  });

})();
