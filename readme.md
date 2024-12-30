# Backend API untuk Menghitung Gaji Karyawan

Proyek ini adalah backend sederhana menggunakan Node.js dan Express. API ini digunakan untuk menghitung gaji karyawan berdasarkan jumlah jam kerja dan tarif per jam, termasuk perhitungan lembur dengan tarif 1.5x dari tarif normal.

---

## **Fitur**
- Menghitung gaji reguler berdasarkan jumlah jam kerja (hingga 40 jam).
- Menghitung gaji lembur untuk jam kerja lebih dari 40 jam.
- Validasi input untuk memastikan data yang dikirim valid.
- Respon berupa data JSON.

---

## **Persyaratan**
- **Node.js** versi 14 atau lebih baru
- **npm** (tersedia bersama Node.js)
- Ekstensi **REST Client** (opsional, jika ingin menguji API di VS Code)

---

## **Instalasi**
Ikuti langkah berikut untuk menjalankan proyek:

1. **Clone Repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Instal Dependensi**:
   ```bash
   npm install
   ```

3. **Struktur Proyek**:
   ```
   gaji-backend/
   ├── index.js          # File utama untuk menjalankan server
   ├── routes/
   │   └── gaji.js        # Mengelola endpoint "hitung_gaji"
   ├── controllers/
   │   └── gajiController.js  # Logika perhitungan gaji
   ├── test-api.http      # File untuk pengujian dengan REST Client
   └── package.json       # Konfigurasi proyek Node.js
   ```

---

## **Menjalankan Server**
Untuk menjalankan server, gunakan perintah berikut:
```bash
node index.js
```
Server akan berjalan di `http://localhost:3000`.

---

## **Endpoint API**
### 1. **Menghitung Gaji**
- **URL**: `/api/hitung_gaji`
- **Method**: `POST`
- **Header**: 
  - `Content-Type: application/json`
- **Body (JSON)**:
  ```json
  {
    "jam_kerja": <number>,
    "tarif_per_jam": <number>
  }
  ```
- **Response**:
  - **Success** (`200 OK`):
    ```json
    {
      "gaji": "<total gaji>"
    }
    ```
  - **Error** (`400 Bad Request`):
    ```json
    {
      "error": "Input harus berupa angka"
    }
    ```

---

## **Pengujian**
API ini dapat diuji menggunakan salah satu dari metode berikut:

### a. **Menggunakan REST Client di VS Code**
1. Instal ekstensi **REST Client** di Visual Studio Code.
2. Buka file `test-api.http` dan pilih request yang ingin diuji.
3. Klik **Send Request** atau tekan `Ctrl+Alt+R`.

**Isi File `test-api.http`**:
```http
### Menghitung Gaji - Contoh Normal
POST http://localhost:3000/api/hitung_gaji
Content-Type: application/json

{
  "jam_kerja": 40,
  "tarif_per_jam": 12500
}

### Menghitung Gaji - Dengan Lembur
POST http://localhost:3000/api/hitung_gaji
Content-Type: application/json

{
  "jam_kerja": 45,
  "tarif_per_jam": 12500
}

### Menghitung Gaji - Input Tidak Valid
POST http://localhost:3000/api/hitung_gaji
Content-Type: application/json

{
  "jam_kerja": "delapan",
  "tarif_per_jam": 12500
}
```

### b. **Menggunakan cURL**
1. Buka terminal.
2. Gunakan perintah berikut untuk menguji API:

**Tanpa Lembur**:
```bash
curl -X POST http://localhost:3000/api/hitung_gaji \
-H "Content-Type: application/json" \
-d '{"jam_kerja": 40, "tarif_per_jam": 100}'
```

**Dengan Lembur**:
```bash
curl -X POST http://localhost:3000/api/hitung_gaji \
-H "Content-Type: application/json" \
-d '{"jam_kerja": 45, "tarif_per_jam": 120}'
```

---

## **Catatan**
1. **Validasi Input**:
   - Jika input tidak valid (contoh: teks atau nilai kosong), API akan mengembalikan respons error.
2. **Port Default**:
   - Server berjalan di `port 3000`. Jika port sudah digunakan, ubah nilai port di `index.js`:
     ```javascript
     const port = 4000; // Contoh perubahan port
     ```

---