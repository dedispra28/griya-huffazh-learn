# Phase 1 — Foundation (Learning Management TPQ)

Membangun pondasi aplikasi saja: app shell, design system, layer config/repository/service, dan data lokal. Tidak ada CRUD, login, KBM, atau laporan.

## Yang dibangun

1. **Design system Islamic Education modern**
   - Token warna (hijau zamrud tenang + emas lembut + netral hangat), radius, shadow di `src/styles.css`
   - Font: heading Plus Jakarta Sans, body Inter (via `<link>` di `__root.tsx`)
   - Mobile-first

2. **App shell**
   - Layout: sidebar di desktop, bottom navigation di mobile, header dengan nama TPQ
   - Rute placeholder minimal: `/` (dashboard kosong dengan kartu ringkasan statis dari service)

3. **Config**
   - `src/config/app.config.ts` → `DATA_SOURCE = "LOCAL"`, nama aplikasi, versi

4. **Layer data**
   - `src/types/entities.ts` — tipe inti: Santri, Guru, Kelas, Program, Mapel, Jadwal, KbmSession, KbmDetail, Kehadiran, Capaian, User, Role (field dasar + createdAt/updatedAt/createdBy/updatedBy)
   - `src/repositories/repository.types.ts` — interface `DataRepository` (baru sebagian kecil: getStudents, getTeachers, getClasses, getPrograms, getSubjects, getSchedules) agar bisa ditambah per phase
   - `src/repositories/local/localRepository.ts` — implementasi in-memory/localStorage dengan seed data ringkas
   - `src/repositories/index.ts` — factory pilih repository berdasarkan `DATA_SOURCE`
   - `src/services/academic.service.ts` — service dasar yang memanggil repository (UI tidak pernah menyentuh repository langsung)

5. **Utils**
   - `src/utils/format.ts` — format tanggal Indonesia, helper id sederhana

## Catatan teknis

- Stack existing dipakai apa adanya: TanStack Start + Router, Tailwind v4, shadcn. Tidak ada dependency baru.
- Persistensi lokal via `localStorage` dengan guard SSR (akses hanya di client/handler), fallback seed.
- Semua response repository memakai bentuk konsisten `{ success, data, message }` agar Phase 8 (Google Sheets) tinggal menukar implementasi.
- Head metadata unik untuk route `/`.

## Definition of Done

- App berjalan tanpa console error
- Shell responsif (bottom nav mobile / sidebar desktop)
- Config, repository lokal, dan service berfungsi (dashboard menampilkan angka dari service)
- Berhenti di Phase 1; menunggu instruksi untuk Phase 2
