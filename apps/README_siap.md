# SIAP-KPU (Sistem Informasi Absensi & Pegawai)

Aplikasi manajemen kepegawaian dan absensi modern yang dirancang untuk lingkungan KPU, dilengkapi dengan fitur verifikasi wajah dan pengelolaan administrasi yang komprehensif.

## Fitur Utama

- **Sistem Absensi Hybrid**: Mendukung dua metode absensi yang fleksibel:
  - **Scan QR Code**: Absensi cepat menggunakan kode unik pegawai.
  - **Face Recognition**: Verifikasi biometrik wajah untuk keamanan dan akurasi lebih tinggi.
- **Manajemen Pegawai**: Pengelolaan data pegawai yang lengkap, termasuk jabatan, departemen, dan data pribadi.
- **Pengaturan Shift Kerja**: Mendukung berbagai jenis shift kerja yang dapat disesuaikan dengan kebutuhan operasional.
- **Rekap Kehadiran Real-time**: Laporan kehadiran otomatis yang memudahkan pemantauan kedisiplinan pegawai.
- **Buku Tamu Digital**: Modul untuk mencatat dan mengelola data tamu yang berkunjung.
- **Layanan PPID**: Fitur Permohonan Informasi dan Dokumentasi untuk transparansi publik.

## Persyaratan Sistem

- PHP >= 8.2
- Composer
- Node.js & NPM
- Database (MySQL/MariaDB)

## Instalasi

1. **Clone Repository**
   ```bash
   git clone https://github.com/elmiro12/siap_kpu.git
   cd siap-kpu
   ```

2. **Install Dependencies**
   ```bash
   composer install
   npm install
   ```

3. **Konfigurasi Environment**
   Salin file `.env.example` ke `.env` dan sesuaikan konfigurasi database Anda.
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Migrasi Database**
   ```bash
   php artisan migrate --seed
   ```

5. **Jalankan Aplikasi**
   ```bash
   npm run dev
   # Terminal terpisah:
   php artisan serve
   ```

## Lisensi

Aplikasi ini bersifat privat dan dikembangkan khusus untuk kebutuhan internal.
