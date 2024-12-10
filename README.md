

# 📰 Artikel API  

✨ **Artikel API** adalah API sederhana yang menyajikan daftar artikel dalam format JSON. Proyek ini menggunakan **Google Cloud Functions** untuk menyediakan endpoint HTTP, dan gambar artikel disimpan dengan aman di **Google Cloud Storage Bucket**. 🚀  

---

## 🌟 Fitur Utama  

✅ **Daftar Artikel**: Mendukung penyajian artikel dengan struktur data lengkap.  
✅ **Endpoint HTTP**: Mudah diakses melalui HTTP.  
✅ **Penyimpanan Gambar Cloud**: Semua gambar di-host di **Google Cloud Storage Bucket** untuk kecepatan dan efisiensi.  
✅ **Format Respons JSON**: Data rapi dan mudah digunakan aplikasi klien.  
✅ **Dukungan CORS**: Kompatibel untuk integrasi lintas platform.  

---

## 🛠 Struktur Data Artikel  

```json
{
  "id": 1,
  "title": "Judul Artikel",
  "summary": "Ringkasan Artikel",
  "content": "Isi artikel secara lengkap...",
  "image_url": "URL gambar terkait (disimpan di Google Cloud Storage)",
  "published_date": "Tanggal publikasi artikel",
  "source": "Sumber artikel asli"
}
```  

🔗 **Contoh URL Gambar**:  
`https://storage.googleapis.com/<nama-bucket>/<nama-file-gambar>`  

---

## 🚀 Cara Instalasi & Deployment  

### 🔧 Persyaratan  

- 🖥 **Node.js** (pastikan versi terbaru).  
- ☁ **Akun Google Cloud** dengan project aktif.  
- 🛠 **Google Cloud SDK** yang dikonfigurasi.  
- 📦 **Cloud Storage Bucket** untuk penyimpanan gambar.  

### 📥 Langkah Instalasi  

1. **Clone repository**:  
   ```bash
   git clone https://github.com/username/artikel-api.git
   cd artikel-api
   ```  
2. **Install dependensi**:  
   ```bash
   npm install
   ```  

### ☁ Deployment ke Google Cloud  

1. **Buat Cloud Storage Bucket** untuk gambar:  
   ```bash
   gsutil mb gs://<nama-bucket>
   ```  
2. **Upload gambar** ke bucket:  
   ```bash
   gsutil cp path/to/image.jpg gs://<nama-bucket>
   ```  
3. **Deploy fungsi** ke Google Cloud Functions:  
   ```bash
   gcloud functions deploy getArticles \
   --runtime nodejs18 \
   --trigger-http \
   --allow-unauthenticated
   ```  

4. **Dapatkan URL fungsi** dari output terminal. 🎉  

---

## 🔗 Endpoint API  

- **Metode**: `GET`  
- **URL**: URL fungsi yang diberikan Google Cloud.  

### 📄 Contoh Respons JSON  
```json
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
```  

---

## 💻 Pengembangan  

Untuk menambahkan artikel baru:  

1. Tambahkan data artikel ke array `articles` di kode fungsi.  
2. Upload gambar artikel ke **Cloud Storage Bucket** Anda.  
3. Gunakan URL bucket sebagai `image_url` dalam data JSON.  

---



> **🚀 Enjoy the simplicity of Artikel API!** 😊  

