📰 Artikel API 🚀
✨ Artikel API adalah proyek sederhana yang menggunakan Google Cloud Functions untuk menyajikan daftar artikel dalam format JSON. API ini memungkinkan pengguna untuk mengakses informasi artikel seperti judul, ringkasan, isi, gambar, tanggal publikasi, dan sumber. Semua gambar disimpan di Google Cloud Storage Bucket, memastikan efisiensi dan aksesibilitas data.

🌟 Fitur Utama
✅ Daftar Artikel: Menyediakan daftar artikel lengkap dalam format JSON.
✅ Endpoint HTTP: Mudah diakses melalui endpoint HTTP berbasis Google Cloud Functions.
✅ Penyimpanan Gambar di Cloud: Gambar artikel di-host pada Google Cloud Storage Bucket.
✅ Respons JSON: Format data yang mudah diolah aplikasi klien.
✅ Dukungan CORS: Kompatibel dengan berbagai platform dan aplikasi.

🛠 Struktur Data Artikel
Berikut adalah struktur data yang dikembalikan oleh API:

json
Salin kode
{
  "id": 1,
  "title": "Judul Artikel",
  "summary": "Ringkasan Artikel",
  "content": "Isi artikel secara lengkap...",
  "image_url": "URL gambar terkait (disimpan di Google Cloud Storage)",
  "published_date": "Tanggal publikasi artikel",
  "source": "Sumber artikel asli"
}
Contoh URL gambar:
https://storage.googleapis.com/<nama-bucket>/<nama-file-gambar>

🚀 Cara Instalasi & Deployment
🔧 Persyaratan
🖥 Node.js (pastikan versi terbaru terinstal di komputer Anda).
☁ Akun Google Cloud dengan project aktif.
🛠 Google Cloud SDK yang sudah dikonfigurasi.
📦 Cloud Storage Bucket untuk menyimpan gambar artikel.
📥 Langkah Instalasi
Clone repository ke komputer Anda:
bash
Salin kode
git clone https://github.com/username/artikel-api.git
cd artikel-api
Install dependensi:
bash
Salin kode
npm install
☁ Deployment ke Google Cloud
Buat Cloud Storage Bucket untuk menyimpan gambar. Gunakan nama yang unik.
bash
Salin kode
gsutil mb gs://<nama-bucket>
Upload gambar ke bucket Anda:
bash
Salin kode
gsutil cp path/to/image.jpg gs://<nama-bucket>
Deploy fungsi ke Google Cloud Functions:
bash
Salin kode
gcloud functions deploy getArticles \
--runtime nodejs18 \
--trigger-http \
--allow-unauthenticated
Setelah selesai, Anda akan mendapatkan URL fungsi. 🎉
🔗 Endpoint API
Metode: GET
URL: URL fungsi yang diberikan Google Cloud.
📄 Contoh Respons JSON
json
Salin kode
{
  "articles": [
    {
      "id": 1,
      "title": "Kementan Ajak Petani Tanam Padi Serempak pada Oktober 2024",
      "summary": "Kementerian Pertanian mengajak petani untuk melakukan penanaman padi secara serempak guna memenuhi kebutuhan pangan.",
      "content": "Kementerian Pertanian (Kementan) mengajak petani di seluruh Indonesia...",
      "image_url": "https://storage.googleapis.com/padi-care/Images/1.jpg",
      "published_date": "2024-01-15",
      "source": "https://www.antaranews.com/berita/4374095/kementan-ajak-petani-tanam-padi-serempak-pada-oktober-2024"
    }
  ]
}
💻 Pengembangan
🛠 Untuk menambahkan artikel baru:

Tambahkan data artikel ke array articles di kode fungsi.
Upload gambar terkait ke Cloud Storage Bucket Anda.
Gunakan URL bucket sebagai image_url dalam data JSON.
📜 Lisensi
Proyek ini dilisensikan di bawah MIT License. Silakan gunakan, modifikasi, dan bagikan proyek ini! 💖

💡 Tips: Jangan lupa untuk mengatur bucket Anda menjadi publik jika ingin gambar dapat diakses oleh semua pengguna. 😊

