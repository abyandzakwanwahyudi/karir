let questions = [
  {
    numb: 1,
    question: "Anda lebih suka...",
    options: [
      "Memperbaiki peralatan elektronik",
      "Melakukan penelitian ilmiah", 
      "Merancang poster atau logo",
      "Mengajar anak-anak",
      "Menjual produk atau jasa",
      "Bekerja dengan data dan prosedur yang terstruktur"
    ],
    types: ["R", "I", "A", "S", "E", "C"] // Tipe untuk setiap opsi
  },

  {
    numb: 2,
    question: "Dalam pekerjaan Anda, Anda lebih menikmati...",
    options: [
      "Menyelesaikan masalah mekanik",
      "Mengeksplorasi teori-teori baru",
      "Berkreasi dengan warna dan bentuk",
      "Membantu orang lain mengatasi masalah pribadi",
      "Mengelola proyek atau tim",
      "Menangani tugas administratif yang terorganisir"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 3,
    question: "Jika Anda diberi proyek, Anda lebih suka...",
    options: [
      "Mengoperasikan alat berat",
      "Menganalisis data dan membuat laporan",
      "Menulis dan menggambar untuk menyampaikan ide",
      "Berinteraksi dengan orang untuk membantu mereka",
      "Mempromosikan dan menjual ide atau produk",
      "Mengikuti prosedur yang sudah ada"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 4,
    question: "Di waktu luang, Anda lebih suka...",
    options: [
      "Berkebun atau bekerja dengan kayu",
      "Membaca buku ilmiah atau artikel penelitian",
      "Menggambar atau melukis",
      "Menghabiskan waktu dengan teman-teman atau keluarga",
      "Mencari peluang bisnis atau investasi",
      "Mengatur jadwal dan administrasi"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 5,
    question: "Jika Anda bekerja di bidang teknologi, Anda akan lebih tertarik pada...",
    options: [
      "Menginstal dan memperbaiki perangkat keras",
      "Mengembangkan perangkat lunak atau aplikasi",
      "Desain grafis dan pengalaman pengguna",
      "Melatih orang untuk menggunakan teknologi",
      "Mengelola proyek pengembangan teknologi",
      "Menangani dokumentasi dan prosedur operasional"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 6,
    question: "Anda lebih suka...",
    options: [
      "Mencari solusi praktis untuk masalah sehari-hari",
      "Melakukan eksperimen ilmiah untuk menemukan sesuatu yang baru",
      "Menciptakan karya seni yang menggugah",
      "Berkolaborasi dengan orang lain untuk mencapai tujuan bersama",
      "Memimpin proyek atau tim untuk mencapai kesuksesan",
      "Mengorganisir data dan laporan secara sistematis"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 7,
    question: "Di tempat kerja, Anda lebih suka...",
    options: [
      "Menggunakan peralatan untuk memecahkan masalah fisik",
      "Meneliti dan menganalisis data",
      "Berkreativitas dan menghasilkan ide baru",
      "Membantu orang untuk berkembang",
      "Mengatur dan mengelola tugas atau tim",
      "Mengelola sistem atau prosedur yang ada"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 8,
    question: "Jika Anda diberi tugas baru, Anda lebih suka...",
    options: [
      "Menganalisis dan memecahkan masalah yang kompleks",
      "Menulis laporan atau artikel tentang topik tertentu",
      "Membuat presentasi atau desain visual",
      "Bekerja sama dalam tim untuk menyelesaikan masalah",
      "Mengelola tim untuk mencapai hasil yang lebih baik",
      "Bertanggung jawab untuk tugas administratif"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 9,
    question: "Di luar pekerjaan, Anda lebih suka...",
    options: [
      "Bekerja dengan alat atau mesin",
      "Belajar tentang teori atau konsep ilmiah",
      "Berpartisipasi dalam kegiatan seni atau desain",
      "Menghabiskan waktu membantu orang lain",
      "Mencari peluang untuk mengembangkan bisnis",
      "Mengorganisir acara atau kegiatan"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 10,
    question: "Dalam situasi yang penuh tantangan, Anda lebih suka...",
    options: [
      "Memecahkan masalah teknis atau mekanik",
      "Mengembangkan ide-ide baru untuk penelitian",
      "Menemukan solusi kreatif untuk permasalahan desain",
      "Memberikan dukungan emosional atau praktis kepada orang lain",
      "Mengambil keputusan untuk memimpin tim atau proyek",
      "Menjaga agar tugas dan proyek berjalan dengan efisien"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 11,
    question: "Jika Anda menghadapi masalah, Anda lebih suka...",
    options: [
      "Menggunakan alat dan keterampilan teknis untuk memperbaikinya",
      "Meneliti penyebab masalah secara mendalam",
      "Mencari cara kreatif untuk mengatasi masalah tersebut",
      "Berbicara dengan orang lain untuk mencari solusi bersama",
      "Menawarkan solusi praktis dan berfokus pada hasil",
      "Mengikuti prosedur yang sudah ada untuk menyelesaikan masalah"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 12,
    question: "Di tempat kerja, Anda merasa paling nyaman ketika...",
    options: [
      "Bekerja dengan alat atau mesin yang canggih",
      "Melakukan riset dan menemukan sesuatu yang baru",
      "Menyusun dan menyampaikan ide-ide kreatif",
      "Bekerja dengan orang lain untuk mencapai tujuan bersama",
      "Mengelola tim untuk mencapai kesuksesan",
      "Mengorganisir informasi atau sistem yang terstruktur"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 13,
    question: "Jika Anda dapat memilih pekerjaan, Anda lebih suka...",
    options: [
      "Bekerja di luar ruangan dengan peralatan dan mesin",
      "Meneliti dan mengembangkan teori baru",
      "Berkreasi dengan seni atau desain",
      "Membantu orang lain berkembang secara pribadi",
      "Mengelola bisnis atau proyek besar",
      "Mengelola jadwal dan administrasi dengan efisien"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 14,
    question: "Ketika Anda bekerja dalam sebuah tim, Anda lebih suka...",
    options: [
      "Bekerja di lapangan atau dengan alat berat",
      "Meneliti dan menganalisis data untuk mendapatkan hasil terbaik",
      "Mengusulkan ide-ide kreatif untuk proyek tersebut",
      "Membantu rekan tim dan memastikan semua orang merasa dihargai",
      "Mengatur dan mengkoordinasi kegiatan tim",
      "Mengelola tugas dan prosedur untuk memastikan kelancaran kerja"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 15,
    question: "Di waktu luang, Anda lebih suka...",
    options: [
      "Mengutak-atik alat atau mesin untuk membuatnya berfungsi lebih baik",
      "Membaca buku atau artikel ilmiah untuk memperdalam pengetahuan",
      "Melakukan aktivitas kreatif seperti melukis atau membuat kerajinan",
      "Membantu teman-teman atau keluarga dengan masalah mereka",
      "Mengorganisir kegiatan sosial atau bisnis",
      "Menangani pekerjaan administratif atau tugas-tugas yang terorganisir"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 16,
    question: "Jika Anda bekerja di bidang seni, Anda lebih tertarik untuk...",
    options: [
      "Berkarya dengan bahan dan alat praktis",
      "Mengeksplorasi teori seni atau budaya",
      "Menciptakan karya seni yang dapat menginspirasi orang lain",
      "Mengajar seni kepada orang lain",
      "Mengelola galeri atau acara seni",
      "Mengorganisir kegiatan seni secara sistematis"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 17,
    question: "Di tempat kerja, Anda merasa paling termotivasi ketika...",
    options: [
      "Dapat bekerja dengan alat atau mesin yang kuat",
      "Mendapat tantangan intelektual dalam riset",
      "Dapat menghasilkan karya seni yang orisinal",
      "Bekerja dengan orang untuk membantu mereka berkembang",
      "Memimpin tim dan mengatur arah proyek",
      "Menangani pekerjaan rutin yang terorganisir"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 18,
    question: "Dalam sebuah organisasi, Anda lebih suka...",
    options: [
      "Bekerja dengan alat atau teknologi untuk mencapai hasil praktis",
      "Meneliti dan mengumpulkan informasi yang berguna",
      "Membuat desain atau produk yang menarik secara visual",
      "Bekerja langsung dengan orang untuk meningkatkan kesejahteraan mereka",
      "Mengambil keputusan penting untuk kelancaran organisasi",
      "Mengatur dan menjaga sistem dan proses yang ada"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 19,
    question: "Jika Anda diberi tanggung jawab, Anda lebih suka...",
    options: [
      "Bekerja dengan alat atau mesin yang memerlukan keterampilan teknis",
      "Mencari solusi ilmiah untuk masalah yang kompleks",
      "Membuat karya seni atau desain untuk presentasi",
      "Berinteraksi dengan orang lain untuk membantu mereka menyelesaikan masalah",
      "Mengelola dan merencanakan proyek besar",
      "Menangani tugas administratif dan detail penting"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 20,
    question: "Jika Anda diberi kesempatan untuk bekerja, Anda lebih suka...",
    options: [
      "Bekerja dengan alat atau mesin untuk memecahkan masalah praktis",
      "Mengembangkan teori baru atau konsep ilmiah",
      "Membuat karya kreatif yang menyentuh orang lain",
      "Membantu orang lain untuk berkembang secara pribadi atau profesional",
      "Mengelola proyek atau bisnis yang dapat memberikan keuntungan",
      "Mengatur dan menjaga sistem administratif yang ada"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 21,
    question: "Anda lebih suka bekerja dengan...",
    options: [
      "Peralatan atau alat yang membutuhkan keterampilan mekanik",
      "Alat penelitian atau perangkat ilmiah",
      "Media kreatif seperti cat, kuas, atau bahan desain lainnya",
      "Orang-orang untuk mendukung mereka dalam mencapai tujuan mereka",
      "Proyek yang melibatkan banyak orang dan dapat menghasilkan keuntungan",
      "Sistem dan dokumen yang terorganisir dan efisien"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 22,
    question: "Dalam pekerjaan, Anda lebih suka...",
    options: [
      "Bekerja dengan alat dan mesin untuk memecahkan masalah fisik",
      "Melakukan penelitian untuk menemukan solusi inovatif",
      "Berkreasi dengan seni untuk menciptakan sesuatu yang baru",
      "Membantu orang lain melalui interaksi dan bimbingan",
      "Mengelola dan mengorganisir tim atau proyek",
      "Menangani tugas administratif dan menjaga ketertiban"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 23,
    question: "Di pekerjaan, Anda merasa paling puas ketika...",
    options: [
      "Memecahkan masalah teknis menggunakan alat atau teknologi",
      "Menemukan solusi ilmiah yang baru dan menarik",
      "Menciptakan sesuatu yang estetik dan penuh kreativitas",
      "Membantu orang lain mencapai tujuan mereka",
      "Mengorganisir proyek dan tim dengan efisien",
      "Mengelola dokumentasi dan tugas administratif dengan baik"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 24,
    question: "Di waktu luang, Anda lebih suka...",
    options: [
      "Bekerja dengan tangan atau mesin untuk memperbaiki sesuatu",
      "Mencari solusi ilmiah untuk pertanyaan atau masalah baru",
      "Menghasilkan karya seni atau desain yang indah",
      "Menghabiskan waktu bersama orang yang membutuhkan bantuan",
      "Mengelola proyek atau merencanakan kegiatan",
      "Mengatur sistem atau data yang terorganisir dengan rapi"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  },
  {
    numb: 25,
    question: "Jika Anda memiliki banyak waktu luang, Anda lebih suka...",
    options: [
      "Berkebun atau memperbaiki mesin",
      "Membaca jurnal ilmiah atau artikel penelitian",
      "Menggambar atau membuat kerajinan tangan",
      "Membantu orang lain mengatasi masalah mereka",
      "Mengikuti kursus bisnis atau manajemen",
      "Mengorganisir dan merencanakan acara atau kegiatan"
    ],
    types: ["R", "I", "A", "S", "E", "C"]
  }
];
