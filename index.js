const functions = require('@google-cloud/functions-framework');

const articles = [
  {
    id: 1,
    title: "Kementan Ajak Petani Tanam Padi Serempak pada Oktober 2024",
    summary: "Kementerian Pertanian mengajak petani untuk melakukan penanaman padi secara serempak guna memenuhi kebutuhan pangan.",
    content: "Kementerian Pertanian (Kementan) mengajak petani di seluruh Indonesia, termasuk di Kabupaten Demak, Jawa Tengah, untuk menanam padi secara serempak pada bulan Oktober 2024. Wakil Menteri Pertanian Sudaryono menyatakan bahwa langkah ini penting untuk memastikan ketersediaan pangan yang cukup bagi masyarakat. Dengan memanfaatkan musim hujan yang mulai turun, diharapkan lahan dapat dikelola segera setelah panen. Target luas tanam mencapai sekitar 1,2 juta hektare di seluruh daerah. Jika penanaman dilakukan serentak, diperkirakan panen dapat dilakukan pada Januari dan Februari 2025. Kementan juga berkoordinasi dengan Badan Urusan Logistik (Bulog) untuk menyerap hasil panen sebanyak 600 ribu ton beras guna menjaga stabilitas harga di pasaran. Selain itu, pemerintah menambah alokasi pupuk subsidi dari 4,5 juta ton menjadi 9,5 juta ton untuk mendukung petani dalam meningkatkan produktivitas mereka.",
    image_url: "https://storage.googleapis.com/padi-care/Images/1",
    published_date: "2024-01-15",
    source: "https://www.antaranews.com/berita/4374095/kementan-ajak-petani-tanam-padi-serempak-pada-oktober-2024"
  },
  {
    id: 2,
    title: "Inovasi Padi Premium Berbasis Polybag oleh Universitas Negeri Malang",
    summary: "Tim pengabdian masyarakat UM mengembangkan inovasi pertanian padi menggunakan polybag.",
    content: "Tim pengabdian masyarakat Universitas Negeri Malang (UM) telah mengembangkan inovasi baru dalam budidaya padi dengan menggunakan polybag. Inovasi ini bertujuan untuk meningkatkan produktivitas padi di tengah berbagai tantangan yang dihadapi oleh petani, seperti konversi lahan dan penurunan kesuburan tanah. Dalam penerapan ini, media tanam yang digunakan adalah sekam bakar, pupuk kandang, dan pupuk organik Moringa oleifera leaf powder (MOLP). Pendekatan ini tidak hanya membantu meningkatkan hasil panen tetapi juga memperbaiki kualitas tanah yang terdegradasi akibat penggunaan bahan kimia berlebih. Kegiatan ini dilakukan di Desa Kare, Kecamatan Kare, Kabupaten Madiun dan melibatkan partisipasi aktif dari kelompok tani setempat. Dengan adanya metode baru ini, diharapkan dapat memberikan solusi bagi permasalahan pertanian yang ada serta meningkatkan kesejahteraan petani.",
    image_url: "https://storage.googleapis.com/padi-care/Images/2",
    published_date: "2024-01-20",
    source: "https://um.ac.id/berita/tim-pengmas-um-kembangkan-inovasi-padi-premium-berbasis-polybag/"
  },
  {
    "id": 3,
    "title": "Hama Utama Padi dan Pengendaliannya",
    "summary": "Informasi tentang hama utama pada tanaman padi dan cara pengendaliannya.",
    "content": "Hama utama pada tanaman padi seperti wereng batang cokelat dapat menyebabkan kerugian signifikan bagi petani. Pengendalian hama dilakukan dengan berbagai metode, termasuk perbaikan cara bercocok tanam, pergiliran varietas, dan penggunaan insektisida. Selain itu, pemanfaatan musuh alami seperti predator hama juga merupakan cara efektif untuk mengendalikan populasi hama. Dengan memahami dan menerapkan strategi pengendalian ini, petani dapat melindungi tanaman padi dari serangan hama.",
    "image_url": "https://storage.googleapis.com/padi-care/Images/3",
    "published_date": "2024-02-06",
    "source": "https://pertanian.kulonprogokab.go.id/detil/1206/hama-utama-padi"
  },
  {
    id: 4,
    title: "Cara Budidaya Padi yang Optimal dan Menguntungkan",
    summary: "Panduan lengkap tentang cara budidaya padi agar menghasilkan panen maksimal.",
    content: "Budidaya padi merupakan kegiatan penting bagi petani Indonesia untuk memenuhi kebutuhan pangan nasional. Untuk mendapatkan hasil yang optimal, ada beberapa langkah yang perlu diperhatikan dalam budidaya padi. Pertama adalah persiapan media tanam yang harus dilakukan minimal dua minggu sebelum penanaman. Tanah harus dibersihkan dari gulma dan dibajak agar menjadi gembur. Setelah itu, pemilihan bibit berkualitas sangat penting karena benih yang baik akan berpengaruh langsung pada hasil panen. Proses persemaian juga harus dilakukan dengan baik agar bibit tumbuh sehat sebelum dipindahkan ke lahan tanam. Penanaman sebaiknya dilakukan saat bibit sudah memiliki tiga hingga empat helai daun. Dengan mengikuti langkah-langkah ini, petani dapat meningkatkan peluang mendapatkan hasil panen yang melimpah dan berkualitas.",
    image_url: "https://storage.googleapis.com/padi-care/Images/4",
    published_date: "2024-02-01",
    source: "https://www.gramedia.com/best-seller/cara-budidaya-padi/"
  },
  {
    "id": 6,
    "title": "Filosofi Menanam Padi dan Implementasinya dalam Kehidupan",
    "summary": "Menggali makna filosofi menanam padi yang dapat diimplementasikan dalam kehidupan sehari-hari.",
    "content": "Menanam padi bukan hanya sekadar aktivitas pertanian, tetapi juga mengandung filosofi yang dalam. Dalam proses menanam, petani harus membungkuk, yang melambangkan kerendahan hati. Proses ini juga mengajarkan pentingnya kesabaran dan kerja keras. Menanam padi mengingatkan kita bahwa kesuksesan tidak datang dengan mudah; dibutuhkan usaha dan dedikasi. Selain itu, hasil panen juga bergantung pada faktor eksternal, yang menumbuhkan rasa syukur atas apa yang diperoleh. Filosofi ini seharusnya menjadi pedoman hidup yang penuh makna bagi setiap individu.",
    "image_url": "https://storage.googleapis.com/padi-care/Images/6",
    "published_date": "2024-04-16",
    "source": "https://dero.desa.id/artikel/2024/4/16/dari-sawah-menuai-hikmah-filosofi-menanam-padi-dan-implementasinya-dalam-kehidupan"
  },
  
  {
    "id": 7,
    "title": "Langkah-Langkah Menanam Padi yang Efektif",
    "summary": "Panduan lengkap tentang langkah-langkah menanam padi dari awal hingga panen.",
    "content": "Menanam padi memerlukan beberapa langkah penting untuk memastikan keberhasilan. Pertama, persiapkan lahan dengan membersihkan gulma dan melakukan pengolahan tanah. Setelah itu, pilih bibit berkualitas tinggi dan lakukan persemaian selama 25-30 hari. Penanaman sebaiknya dilakukan saat bibit sudah siap dengan jarak tanam yang tepat. Selama pertumbuhan, lakukan pemupukan dan pengairan secara teratur serta lakukan penyiangan untuk menghilangkan gulma. Panen dilakukan saat padi sudah menguning dan siap dipanen dengan cara yang benar.",
    "image_url": "https://storage.googleapis.com/padi-care/Images/7",
    "published_date": "2024-01-20",
    "source": "https://bawuran.id/artikel/2018/1/19/langkah-langkah-cara-menanam-padi"
  },
  {
    "id": 8,
    "title": "Budidaya Padi yang Efisien untuk Hasil Melimpah",
    "summary": "Strategi budidaya padi yang efisien untuk mendapatkan hasil panen yang melimpah.",
    "content": "Budidaya padi yang efisien dimulai dengan persiapan media tanam yang baik. Lakukan pengolahan tanah minimal dua minggu sebelum penanaman dan pastikan tanah bebas dari gulma. Pemilihan bibit berkualitas juga sangat penting untuk memastikan pertumbuhan optimal. Selama masa pertumbuhan, perawatan seperti pemupukan, pengairan, dan pencegahan hama harus dilakukan secara rutin. Dengan mengikuti langkah-langkah ini, petani dapat meningkatkan hasil panen secara signifikan.",
    "image_url": "https://storage.googleapis.com/padi-care/Images/8",
    "published_date": "2024-01-25",
    "source": "https://dero.desa.id/artikel/2024/1/10/budidaya-padi-yang-benar-dan-efisien-untuk-menghasilkan-panen-melimpah"
  },
  {
    "id": 9,
    "title": "Cara Merawat Tanaman Padi pada Fase Vegetatif dan Generatif",
    "summary": "Panduan merawat tanaman padi dari fase vegetatif hingga generatif untuk hasil optimal.",
    "content": "Merawat tanaman padi dengan baik sangat penting untuk mendapatkan hasil panen yang berkualitas. Fase vegetatif berlangsung selama sekitar 50 hari setelah penanaman, di mana fokus utama adalah pertumbuhan akar, batang, dan daun. Pada fase ini, perawatan meliputi pemupukan yang tepat dan pengairan yang cukup. Setelah fase vegetatif, tanaman memasuki fase generatif, di mana perhatian harus diberikan pada organ reproduksi seperti bunga dan buah. Nutrisi seperti kalium, fosfat, dan kalsium sangat penting pada tahap ini. Dengan memahami kedua fase ini, petani dapat meningkatkan kualitas beras yang dihasilkan.",
    "image_url": "https://storage.googleapis.com/padi-care/Images/9",
    "published_date": "2024-01-15",
    "source": "https://dero.desa.id/artikel/2022/12/11/cara-merawat-tanaman-padi-fase-vegetatif-dan-generatif"
  },
  
// Artikel ke-9 hingga ke-20
// Silakan tambahkan artikel tambahan sesuai format di atas

];

functions.http('getArticles', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
    return;
  }
  
  res.status(200).json({ articles });
});
