const projectData = {
    "qrhadir": `
# Aplikasi Manajemen Event & Absensi QR Code

Aplikasi berbasis web yang dirancang untuk mengelola berbagai jenis event, mulai dari seminar, workshop, hingga kegiatan organisasi. Aplikasi ini menyediakan solusi lengkap dari registrasi peserta secara online, manajemen tiket & ID Card, hingga pencatatan kehadiran (absensi) menggunakan **QR Code Scanner**.

## 🚀 Fitur Utama

### 📅 Manajemen Event
- **Dashboard Admin**: Pantau statistik peserta dan kehadiran secara real-time.
- **Multi-Event**: Kelola banyak event sekaligus dalam satu sistem.
- **Kustomisasi Event**: Atur detail acara, jenis peserta (VIP, Reguler, Panitia, dll), dan pengaturan sertifikat.

### 📝 Registrasi & Tiketing
- **Formulir Registrasi Publik**: Halaman pendaftaran online yang dapat dibagikan kepada calon peserta.
- **Tiket QR Code**: Peserta otomatis mendapatkan tiket digital berbasis QR Code setelah mendaftar.
- **ID Card Generator**: Buat dan cetak ID Card peserta secara otomatis dengan template yang dapat disesuaikan. Mendukung mode cetak massal (batch).

### 📷 Absensi & Validasi
- **Scan QR Code**: Catat kehadiran peserta dengan memindai tiket atau ID Card mereka menggunakan webcam laptop atau kamera HP.
- **Mode Kiosk**: Halaman khusus untuk gatekeeper/petugas absensi melakukan scanning dengan cepat.
- **Real-time Validation**: Mencegah tiket ganda digunakan atau peserta yang belum terdaftar.

### 🏅 Sertifikat Digital
- **E-Certificate Otomatis**: Peserta dapat mencari dan mengunduh sertifikat mereka sendiri setelah acara selesai.
- **Verifikasi Sertifikat**: QR Code pada sertifikat untuk memvalidasi keaslian dokumen.
- **Tanda Tangan Digital**: Pengaturan tanda tangan panitia/pejabat pada sertifikat.

### 📊 Laporan & Data
- **Manajemen Peserta**: Database peserta yang lengkap dan mudah dicari.
- **Ekspor Data**: Unduh laporan kehadiran dan data peserta ke format **Excel**.
- **Laporan Harian/Event**: Rekapitulasi jumlah peserta yang hadir.

## 🛠️ Teknologi yang Digunakan

- **Backend**: [Laravel 12](https://laravel.com) (PHP 8.2+)
- **Frontend**: [Tailwind CSS 4](https://tailwindcss.com), [Alpine.js](https://alpinejs.dev)
- **Database**: MySQL
- **PWA Support**: Aplikasi dapat diinstal di perangkat (Android/iOS/PC) untuk akses yang lebih mudah.
- **Libraries Utama**:
  - \`simplesoftwareio/simple-qrcode\`: Generator QR Code.
  - \`html5-qrcode\`: Scanner QR Code berbasis web.
  - \`intervention/image\`: Manipulasi gambar untuk ID Card.
  - \`maatwebsite/excel\`: Ekspor laporan ke Excel.
    `,
    "membership": `
# Sistem Manajemen Keanggotaan & Streaming Klub

Aplikasi berbasis web yang dibangun menggunakan **Laravel** untuk mengelola keanggotaan klub, jadwal pertandingan, dan layanan streaming berbayar. Sistem ini dirancang untuk memudahkan administrasi klub dalam mengelola anggota, pembayaran, dan konten eksklusif.

## 🚀 Fitur Utama

### 1. Manajemen Keanggotaan (Membership)
- **Registrasi & Verifikasi**: Pengguna dapat mendaftar dan melakukan verifikasi akun.
- **Kartu Anggota Digital**: Pembuatan dan unduh kartu anggota otomatis.
- **Tipe Keanggotaan**: Pengelolaan berbagai jenis keanggotaan.
- **Perpanjangan (Extension)**: Formulir perpanjangan masa aktif keanggotaan.
- **Ekspor Data**: Ekspor data anggota ke format PDF dan Excel.

### 2. Manajemen Pertandingan (Fixtures) & Klub
- **Jadwal Pertandingan**: Admin dapat mengelola jadwal pertandingan klub.
- **Data Klub**: Pengelolaan data klub lawan dan detail pertandingan.
- **Akses Streaming**: Anggota dengan langganan aktif dapat menonton pertandingan secara langsung atau on-demand.

### 3. Layanan Streaming & Langganan
- **Paket Streaming**: Pilihan paket langganan untuk akses konten streaming.
- **Verifikasi Pembayaran**: Sistem verifikasi bukti pembayaran manual atau otomatis (tergantung konfigurasi).
- **Pembatasan Akses**: Middleware untuk memastikan hanya pengguna yang berlangganan yang dapat mengakses konten tertentu.

### 4. Laporan & Keuangan
- **Laporan Pendapatan**: Rekapitulasi pendapatan dari pendaftaran dan langganan.
- **Laporan Keanggotaan**: Statistik pertumbuhan anggota.
- **Ekspor Laporan**: Fitur unduh laporan dalam format PDF dan Ecxel.

### 5. Role & Hak Akses
Aplikasi ini memiliki beberapa role pengguna:
- **Super Admin**: Akses penuh ke seluruh sistem, termasuk manajemen admin.
- **Admin**: Mengelola anggota, konten, dan laporan.
- **Member**: Mengakses dashboard member, riwayat pembayaran, dan konten streaming.

### 6. Fitur Tambahan
- **Pengumuman**: Sistem pengumuman untuk member.
- **Merchandise**: Katalog dan manajemen merchandise klub.
- **Manajemen User**: Reset password dan update email pengguna oleh admin.

## 🛠️ Teknologi yang Digunakan

- **Backend Framework**: [Laravel](https://laravel.com)
- **Frontend**: Blade Templates dengan [Tailwind CSS](https://tailwindcss.com)
- **Database**: MySQL
- **Build Tool**: Vite
- **Libraries Utama**:
    - \`spatie/laravel-permission\` (Manajemen Role)
    - \`barryvdh/laravel-dompdf\` (Generate PDF)
    - \`maatwebsite/excel\` (Ekspor Excel)
    `,
    "webCMS": `
# Website Madrid Ambon

Website resmi Pena Real Madrid de Indonesia (PRMI) Regional Ambon. Aplikasi ini berfungsi sebagai portal komunitas untuk berita, acara, dan manajemen anggota.

## Fitur

-   **Portal Publik**:
    -   **Beranda**: Menampilkan carousel dan berita terbaru.
    -   **Berita**: Artikel berita dengan kategori.
    -   **Galeri**: Koleksi foto dan video kegiatan.
    -   **Halaman Info**: Halaman statis seperti Tentang Kami, Sejarah, Visi & Misi.
    -   **Pendaftaran Anggota**: Formulir untuk pendaftaran anggota baru.

-   **Panel Admin**:
    -   **Dashboard**: Ringkasan statistik situs.
    -   **Manajemen Konten**: Kelola Postingan (Berita), Halaman, Kategori, dan Galeri.
    -   **Manajemen Pengguna**: Kelola data pengguna dan hak akses (Admin/Editor).
    -   **Pengaturan Situs**: Konfigurasi umum seperti Logo, Judul Situs, dan Deskripsi.
    -   **Manajemen Profil**: Fitur bagi pengguna login untuk mengubah nama, email, foto profil, dan password.
    -   **Manajemen Acara**: Membuat dan mengelola agenda kegiatan/event.

## Teknologi

-   **Framework**: [Laravel 11](https://laravel.com)
-   **Frontend**: Blade Templates, Bootstrap 5, DashUI.
-   **Database**: MySQL.
    `,
    "siap": `
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

## Teknologi & Persyaratan

- PHP >= 8.2
- Framework Laravel
- Face Recognition API
- Database MySQL/MariaDB
    `,
    "sias-qr": `
# Sistem Absensi QR Code Sekolah & WhatsApp Gateway

Aplikasi absensi modern berbasis web yang dirancang khusus untuk lingkungan sekolah. Memudahkan pencatatan kehadiran siswa dan guru menggunakan teknologi QR Code dengan integrasi notifikasi WhatsApp secara real-time kepada orang tua.

## 🚀 Fitur Unggulan

### 1. Absensi & Scanning Cepat
- **Scan QR Code**: Siswa dan guru cukup melakukan scan kartu identitas pada perangkat yang disediakan sekolah.
- **Mode Dual (Masuk & Pulang)**: Sistem secara otomatis membedakan waktu check-in (masuk) dan check-out (pulang).
- **Validasi Shift**: Mencegah absensi di luar jam yang ditentukan dan mendeteksi keterlambatan secara otomatis.

### 2. Notifikasi WhatsApp Real-time (OneSender)
- **Pesan Otomatis**: Orang tua langsung menerima pesan WhatsApp saat siswa melakukan scan masuk atau pulang.
- **Informasi Lengkap**: Pesan mencakup Nama, Jam Scan, Status (Tepat Waktu/Terlambat/Pulang Cepat), dan Tanggal.
- **Queue System**: Mengirim pesan di latar belakang (background job) agar proses scanning tetap cepat tanpa loading lama.

### 3. Generator ID Card Otomatis
- **Desain Template**: Menggunakan template kartu yang dapat disesuaikan.
- **Auto-Generate**: Membuat kartu pelajar/guru lengkap dengan Foto, Nama, NIS/NUPTK, dan QR Code unik.
- **Download Massal**: Fitur unduh semua kartu dalam format .ZIP per kelas untuk kemudahan pencetakan.

### 4. Manajemen Data & Laporan
- **Laporan Harian & Bulanan**: Rekapitulasi kehadiran yang detail.
- **Matriks Kehadiran**: Tampilan visual kehadiran satu bulan penuh dalam satu layar.
- **Export Excel**: Unduh laporan kehadiran untuk kebutuhan administrasi sekolah.
- **Manajemen Guru & Siswa**: Import data siswa via Excel dan manajemen data induk yang mudah.

##  Alur Kerja Sistem (Business Process)

1.  **Persiapan Data**: Admin menginput data Tahun Ajaran, Kelas, Shift, dan Hari Libur.
2.  **Pencetakan Kartu**: Sistem men-generate kartu ID yang berisi QR Code unik untuk setiap pengguna.
3.  **Proses Absensi**: Siswa/Guru melakukan scan kartu ID ke kamera/alat scan. Sistem mencatat waktu dan status kehadiran.
4.  **Notifikasi**: Sistem mengirim pesan WA otomatis ke nomor HP orang tua melalui gateway.
5.  **Pelaporan**: Data kehadiran tersimpan otomatis dan dapat diekspor ke format Excel.

## 🛠 Teknologi yang Digunakan

- **Backend**: Laravel 12 (PHP Framework)
- **Frontend**: Livewire, Blade Templating, Alpine.js
- **Styling**: Tailwind CSS, Flowbite
- **Database**: MySQL
- **Dependensi Utama**: Simple QR Code, Intervention Image, Maatwebsite Excel, OneSender.
    `
};
