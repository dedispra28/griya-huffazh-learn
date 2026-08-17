# TPQ Harmony Hub

LEARNING MANAGEMENT TPQ

EFFICIENT INCREMENTAL BUILD PROMPT

TPQ Griya Huffazh Quran

A. MASTER CONTEXT

GUNAKAN SEBAGAI CONTEXT UTAMA PROJECT

Anda sedang membangun aplikasi:

Learning Management TPQ

untuk:

TPQ Griya Huffazh Quran

Aplikasi ini merupakan Core Academic Management System yang digunakan terutama oleh Admin dan Guru untuk mengelola database akademik dan kegiatan belajar mengajar santri.

Fungsi utama:

Database Santri

Database Guru

Database Kelas

Database Program

Database Mata Pelajaran

Database Jadwal

Manajemen sesi KBM

Kehadiran santri

Input nilai

Input setoran/capaian

Catatan guru

Histori perkembangan santri

Dashboard akademik

Laporan

Menjadi sumber data untuk aplikasi Portal Orang Tua Santri

B. ARSITEKTUR WAJIB

Gunakan arsitektur sederhana:

UI
↓
Service Layer
↓
Repository Layer
↓
Data Source


Development:

UI
↓
Service
↓
Local Repository
↓
Local Data


Production:

UI
↓
Service
↓
Google Sheet Repository
↓
Google Apps Script
↓
Google Spreadsheet


Jangan membuat UI langsung membaca database.

C. ATURAN PALING PENTING

LOCAL-FIRST

Selama development:

DATA_SOURCE = LOCAL


Jangan menggunakan Google Spreadsheet terlebih dahulu.

Tetapi sejak awal siapkan abstraction agar nantinya:

LOCAL


dapat diganti menjadi:

GOOGLE_SHEETS


tanpa mengubah UI utama.

D. TOKEN / CREDIT EFFICIENCY RULE

INI ADALAH ATURAN UTAMA.

Karena project dibangun menggunakan AI coding agent dengan kredit/token terbatas:

JANGAN:

membuat seluruh aplikasi dalam satu prompt

menulis ulang project

menulis ulang file yang sudah benar

membuat ulang database yang sudah ada

melakukan refactor besar tanpa alasan

menambahkan library yang tidak diperlukan

membuat fitur yang belum diminta pada phase aktif

menjelaskan ulang seluruh project setiap kali selesai

membuat dokumentasi panjang yang tidak diperlukan

WAJIB:

bekerja incremental

membaca project existing

hanya mengubah file yang diperlukan

mempertahankan kode yang sudah benar

menggunakan komponen existing

menggunakan service existing

menggunakan repository existing

menggunakan design system existing

menghindari duplicate code

E. ATURAN PERUBAHAN FILE

Sebelum coding:

Inspect struktur project.

Identifikasi file yang relevan.

Tentukan file yang perlu dibuat.

Tentukan file yang perlu diubah.

Jangan menyentuh file yang tidak berkaitan.

Jika fitur dapat dibuat dengan:

2 file


jangan mengubah:

10 file.


F. NO UNNECESSARY DEPENDENCIES

Gunakan dependency seminimal mungkin.

Jangan menambahkan library baru apabila fitur dapat dibuat menggunakan teknologi yang sudah tersedia.

Prioritaskan:

clean code

maintainability

speed

responsive UI

mobile UX

G. DESIGN DIRECTION

Gaya:

Modern Islamic Education

Karakter:

profesional

bersih

modern

premium

tenang

sederhana

mudah digunakan guru

Mobile-first.

Guru harus dapat melakukan input KBM dengan nyaman menggunakan smartphone.

H. CORE DATA MODEL

Database utama:

SANTRI
GURU
KELAS
PROGRAM
MAPEL
JADWAL
KBM_SESSION
KBM_DETAIL
KEHADIRAN
CAPAIAN
USER
ROLE
LOG


Relasi utama:

SANTRI
↓
KELAS

GURU
↓
JADWAL
↓
KBM_SESSION
↓
KBM_DETAIL
↓
SANTRI


I. INTEGRATION PRINCIPLE

Learning Management TPQ adalah:

SOURCE OF TRUTH DATA AKADEMIK.

Alurnya:

Guru
↓
Learning Management TPQ
↓
Database Akademik
↓
Portal Orang Tua
↓
Wali Santri


Guru hanya melakukan input satu kali.

Tidak boleh ada input ulang khusus untuk Portal Orang Tua.

J. DEVELOPMENT METHOD

Project dibangun maksimal dalam:

8 PHASE

Setiap phase harus selesai dan stabil sebelum phase berikutnya.

PHASE 1

FOUNDATION

TUJUAN

Membangun pondasi aplikasi.

KERJAKAN

Project structure

App shell

Routing/navigation dasar

Design system

Responsive foundation

Configuration

Local data source

Repository layer

Service layer dasar

Buat:

config
repository
service
utils
components


Siapkan:

DATA_SOURCE = "LOCAL"


JANGAN

Belum membuat:

CRUD Santri

CRUD Guru

KBM

laporan

chart kompleks

DEFINITION OF DONE

[ ] Project berjalan
[ ] UI shell berjalan
[ ] Responsive
[ ] Local repository berjalan
[ ] Service layer berjalan
[ ] Config berjalan
[ ] Tidak ada console error


STOP.

Jangan mengerjakan Phase 2.

PHASE 2

AUTHENTICATION + ROLE

TUJUAN

Membuat sistem login dan role.

Role:

SUPER_ADMIN
ADMIN
GURU


KERJAKAN

Login

Logout

Session

Role

Protected route

Permission dasar

Dashboard berdasarkan role

Contoh:

Guru:

Dashboard
Jadwal Saya
KBM
Santri
Profil


Admin:

Dashboard
Santri
Guru
Kelas
Program
Mapel
Jadwal
KBM
Laporan


JANGAN

Belum membuat:

Google authentication

Google Apps Script

advanced permission matrix

DEFINITION OF DONE

[ ] Login
[ ] Logout
[ ] Session
[ ] Role
[ ] Protected pages
[ ] Guru dan Admin melihat menu berbeda


STOP.

PHASE 3

MASTER DATA

TUJUAN

Membangun database akademik utama.

Kerjakan satu modul pada satu waktu.

Urutan:

3A — Santri

list

search

filter

detail

tambah

edit

status

Data minimal:

NIS
Nama
Jenis Kelamin
Tanggal Lahir
Kelas
Program
Status
Nama Wali
No WhatsApp Wali


3B — Guru

ID Guru
Nama
No WhatsApp
Email
Role
Status


3C — Kelas

ID
Nama Kelas
Program
Wali Kelas
Ruangan
Status


3D — Program

ID
Nama
Status


3E — Mata Pelajaran

ID
Nama
Program
Status


3F — Jadwal

Hari
Jam
Kelas
Guru
Program
Mata Pelajaran
Ruangan


UX

Gunakan:

search

filter

modal/drawer

confirmation

toast

loading

empty state

DEFINITION OF DONE

[ ] Santri CRUD
[ ] Guru CRUD
[ ] Kelas CRUD
[ ] Program CRUD
[ ] Mapel CRUD
[ ] Jadwal CRUD
[ ] Semua data tersimpan Local Repository
[ ] Relasi data benar


STOP.

PHASE 4

GURU WORKSPACE

TUJUAN

Membuat pengalaman kerja guru.

Guru login lalu langsung melihat:

Assalamu'alaikum,
[Nama Guru]


Dashboard:

Jadwal Hari Ini
KBM Belum Diinput
KBM Selesai
Jumlah Santri


Tampilkan:

JADWAL HARI INI

16.00 - 17.00
Tahfizh Unggulan A

Tahfizh Al-Quran

[ MULAI KBM ]


KERJAKAN

jadwal hari ini

jadwal mendatang

kelas yang diampu

jumlah santri

status KBM

MOBILE

Prioritaskan:

Card
Bottom navigation
Sticky action button
Large touch target


DEFINITION OF DONE

Guru dapat:

Login
↓
Melihat jadwal
↓
Memilih jadwal
↓
Menekan MULAI KBM


STOP.

PHASE 5

CORE KBM ENTRY

INI ADALAH PHASE TERPENTING.

Jangan membuat fitur lain sebelum ini stabil.

FLOW

Guru
↓
Pilih Jadwal
↓
Mulai KBM
↓
Session dibuat
↓
Daftar Santri
↓
Kehadiran
↓
Capaian
↓
Nilai
↓
Catatan
↓
Submit


SESI KBM

Data:

Session ID
Tanggal
Guru
Kelas
Program
Mata Pelajaran
Materi
Jam
Status


BULK ENTRY

Guru harus dapat menginput seluruh kelas dalam satu halaman.

Contoh:

Kelas: Tahfizh A
Tanggal: 17 Agustus 2026
Materi: QS. An-Naba


Kemudian:

Ahmad
[Hadir]
Capaian: 10 ayat
Nilai: 95
Status: Tuntas

Fatih
[Hadir]
Capaian: 8 ayat
Nilai: 90
Status: Tuntas


KEHADIRAN

Pilihan:

Hadir
Izin
Sakit
Alpa


Sediakan:

[ SEMUA HADIR ]


agar guru tidak perlu klik satu per satu.

CAPAIAN

Field:

Target
Capaian
Nilai
Predikat
Status
Catatan


Untuk hafalan:

Surah
Ayat Mulai
Ayat Akhir
Juz
Jenis Setoran


Jenis:

Setoran Baru
Murajaah
Tasmi'
Ujian
Perbaikan


MOBILE UX

Gunakan card:

AHMAD FAUZAN

Kehadiran
[ Hadir ▼ ]

Target
10 ayat

Capaian
[ 10 ayat ]

Nilai
[ 95 ]

Status
[ Tuntas ▼ ]

Catatan
[................]

[ SIMPAN ]


Sediakan:

Simpan
Simpan & Berikutnya
Simpan Semua


DUPLICATE PROTECTION

Jangan izinkan sesi KBM yang sama dibuat dua kali.

Jika duplicate:

Sesi KBM untuk jadwal ini sudah dibuat.

DRAFT

Simpan draft input secara lokal.

Jika browser tertutup:

Pulihkan draft KBM?

Draft belum dianggap sebagai data resmi sampai SUBMIT.

DEFINITION OF DONE

[ ] Guru dapat membuat sesi
[ ] Daftar santri muncul otomatis
[ ] Bulk attendance
[ ] Input capaian
[ ] Input nilai
[ ] Input status
[ ] Input catatan
[ ] Submit
[ ] Data tersimpan
[ ] Duplicate protection
[ ] Draft
[ ] Mobile friendly


STOP.

PHASE 6

MONITORING + REPORT

TUJUAN

Membaca data yang sudah diinput.

JANGAN membuat sistem input ulang.

PROFIL SANTRI

Tampilkan:

Identitas
Kelas
Program


Statistik:

Total KBM
Kehadiran
Rata-rata Nilai
Jumlah Capaian


Histori:

Tanggal
Program
Mapel
Materi
Capaian
Nilai
Status
Guru
Catatan


FILTER

Minimal:

Bulan
Tahun
Program
Mapel
Guru
Status


Default:

Data terbaru.

DASHBOARD ADMIN

Tampilkan:

Total Santri
Total Guru
Total Kelas
KBM Hari Ini
KBM Selesai
KBM Belum Diinput
Rata-rata Nilai
Kehadiran


CHART

Hanya buat chart yang benar-benar berguna:

Perkembangan nilai

Kehadiran

Capaian per program

Jangan membuat chart dekoratif.

DEFINITION OF DONE

[ ] Profil santri
[ ] Histori
[ ] Filter
[ ] Dashboard
[ ] Statistik
[ ] Chart
[ ] Report


STOP.

PHASE 7

PORTAL ORANG TUA DATA CONTRACT

TUJUAN

Memastikan Learning Management TPQ menjadi sumber data bagi:

PORTAL ORANG TUA SANTRI

Tidak perlu membangun ulang Portal Orang Tua.

Pastikan data yang dihasilkan compatible.

DATA CONTRACT

Minimal data yang harus tersedia:

NIS
Tanggal
Program
Mata Pelajaran
Materi
Target
Capaian
Nilai
Predikat
Status
Catatan Guru
Guru
Kehadiran
UpdatedAt


SERVICE

Siapkan:

getStudentByNIS(nis)

getReportsByNIS(nis, filters)

getAchievementsByNIS(nis, filters)

getDashboardSummary(nis, filters)


ATURAN

Portal Orang Tua:

READ ONLY


Learning Management:

WRITE + READ


Guru input satu kali.

Portal membaca data tersebut.

LAST UPDATED

Setiap record:

createdAt
updatedAt
createdBy
updatedBy


Tampilkan:

Data terakhir diperbarui:
17 Agustus 2026 16:30


DEFINITION OF DONE

[ ] Data contract jelas
[ ] Service siap digunakan Portal
[ ] Struktur field konsisten
[ ] Histori dapat diambil berdasarkan NIS
[ ] Summary dapat diambil berdasarkan NIS
[ ] Tidak ada duplicate input


STOP.

PHASE 8

GOOGLE SHEETS MIGRATION READY

JANGAN mengubah UI.

Sekarang siapkan production backend.

Target:

LOCAL


diganti:

GOOGLE SHEETS


GOOGLE SHEET STRUCTURE

Gunakan:

DB_SANTRI
DB_GURU
DB_KELAS
DB_PROGRAM
DB_MAPEL
DB_JADWAL
DB_KBM_SESSION
DB_KBM_DETAIL
DB_KEHADIRAN
DB_CAPAIAN
DB_USER
DB_ROLE
DB_LOG
DB_CONFIG


REPOSITORY

Buat:

LocalRepository
GoogleSheetRepository


Interface sama.

Contoh:

getStudents()
getStudentByNIS()
getTeachers()
getClasses()
getSchedules()
createKbmSession()
saveKbmDetails()
getReportsByNIS()
getDashboardSummary()


CONFIG

Development:

DATA_SOURCE = "LOCAL"


Production:

DATA_SOURCE = "GOOGLE_SHEETS"


Google Apps Script:

Learning Management
↓
Apps Script API
↓
Google Spreadsheet


API CONTRACT

Gunakan response konsisten:

{
  "success": true,
  "data": {},
  "message": "",
  "meta": {}
}


Error:

{
  "success": false,
  "data": null,
  "message": "Data tidak ditemukan",
  "errorCode": "NOT_FOUND"
}


SECURITY

Jangan kirim seluruh database kepada browser.

Server-side filtering:

NIS
Guru
Kelas
Role


harus divalidasi di backend.

DEFINITION OF DONE

[ ] Google Sheet schema
[ ] Apps Script API contract
[ ] GoogleSheetRepository
[ ] Config switching
[ ] Security strategy
[ ] Migration guide
[ ] Local mode tetap berjalan


STOP.

FINAL SYSTEM

Arsitektur akhir:

                 LEARNING MANAGEMENT TPQ
                           │
                           ▼
                    SERVICE LAYER
                           │
                ┌──────────┴──────────┐
                │                     │
                ▼                     ▼
        LOCAL REPOSITORY       GOOGLE REPOSITORY
                │                     │
                ▼                     ▼
          LOCAL DATA           APPS SCRIPT API
                                      │
                                      ▼
                              GOOGLE SPREADSHEET
                                      │
                                      ▼
                            PORTAL ORANG TUA


ABSOLUTE RULE

Jika suatu phase sudah selesai:

JANGAN mengerjakan phase berikutnya secara otomatis.

Tunggu instruksi berikutnya.

Jika ada error:

Perbaiki error terlebih dahulu tanpa menambahkan fitur baru.

Jika fitur existing sudah benar:

Jangan rewrite.

Jika file tidak berkaitan:

Jangan ubah.

Jika dapat menyelesaikan task dengan perubahan kecil:

Pilih perubahan kecil.

Jika ada pilihan antara:

kompleks


dan:

sederhana + scalable


pilih:

sederhana + scalable.

OUTPUT SETIAP PHASE

Pada akhir setiap phase cukup berikan:

1. STATUS

PHASE X COMPLETE


2. PERUBAHAN

Maksimal ringkas:

- file dibuat
- file diubah
- fitur selesai


3. TEST

PASS / FAIL


4. NEXT

Menunggu instruksi phase berikutnya.


JANGAN memberikan penjelasan panjang jika tidak diperlukan.

MULAI

Sekarang kerjakan:

PHASE 1 — FOUNDATION

Jangan mengerjakan Phase 2–8.

Pertahankan implementasi sekecil dan seefisien mungkin.

Prioritas:

stabil → sederhana → modular → scalable → baru kompleks.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/52044cbb-19e4-4f5a-9491-7af07e65d910).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
