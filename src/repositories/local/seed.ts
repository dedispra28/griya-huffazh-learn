import type { Guru, Jadwal, Kelas, Mapel, Program, Santri } from "@/types/entities";

const now = "2026-08-17T08:00:00.000Z";
const audit = { createdAt: now, updatedAt: now, createdBy: "system", updatedBy: "system" };

export const seedPrograms: Program[] = [
  { id: "PRG-01", nama: "Tahfizh Unggulan", status: "AKTIF", ...audit },
  { id: "PRG-02", nama: "Tahsin Reguler", status: "AKTIF", ...audit },
];

export const seedTeachers: Guru[] = [
  {
    id: "GR-01",
    nama: "Ustadz Rahman",
    wa: "6281200000001",
    email: "rahman@tpq.id",
    role: "GURU",
    status: "AKTIF",
    ...audit,
  },
  {
    id: "GR-02",
    nama: "Ustadzah Aisyah",
    wa: "6281200000002",
    email: "aisyah@tpq.id",
    role: "GURU",
    status: "AKTIF",
    ...audit,
  },
];

export const seedClasses: Kelas[] = [
  {
    id: "KLS-01",
    nama: "Tahfizh Unggulan A",
    programId: "PRG-01",
    waliKelasId: "GR-01",
    ruangan: "Aula 1",
    status: "AKTIF",
    ...audit,
  },
  {
    id: "KLS-02",
    nama: "Tahsin B",
    programId: "PRG-02",
    waliKelasId: "GR-02",
    ruangan: "Ruang 2",
    status: "AKTIF",
    ...audit,
  },
];

export const seedSubjects: Mapel[] = [
  { id: "MPL-01", nama: "Tahfizh Al-Quran", programId: "PRG-01", status: "AKTIF", ...audit },
  { id: "MPL-02", nama: "Tahsin Tilawah", programId: "PRG-02", status: "AKTIF", ...audit },
];

export const seedStudents: Santri[] = [
  {
    nis: "2026001",
    nama: "Ahmad Fauzan",
    jenisKelamin: "L",
    tanggalLahir: "2015-04-12",
    kelasId: "KLS-01",
    programId: "PRG-01",
    status: "AKTIF",
    namaWali: "Bapak Hasan",
    waWali: "6281300000001",
    ...audit,
  },
  {
    nis: "2026002",
    nama: "Fatih Abdurrahman",
    jenisKelamin: "L",
    tanggalLahir: "2015-09-02",
    kelasId: "KLS-01",
    programId: "PRG-01",
    status: "AKTIF",
    namaWali: "Bapak Yusuf",
    waWali: "6281300000002",
    ...audit,
  },
  {
    nis: "2026003",
    nama: "Khadijah Salsabila",
    jenisKelamin: "P",
    tanggalLahir: "2016-01-20",
    kelasId: "KLS-02",
    programId: "PRG-02",
    status: "AKTIF",
    namaWali: "Bapak Umar",
    waWali: "6281300000003",
    ...audit,
  },
];

export const seedSchedules: Jadwal[] = [
  {
    id: "JDW-01",
    hari: "Senin",
    jamMulai: "16:00",
    jamSelesai: "17:00",
    kelasId: "KLS-01",
    guruId: "GR-01",
    programId: "PRG-01",
    mapelId: "MPL-01",
    ruangan: "Aula 1",
    status: "AKTIF",
    ...audit,
  },
  {
    id: "JDW-02",
    hari: "Selasa",
    jamMulai: "16:00",
    jamSelesai: "17:00",
    kelasId: "KLS-02",
    guruId: "GR-02",
    programId: "PRG-02",
    mapelId: "MPL-02",
    ruangan: "Ruang 2",
    status: "AKTIF",
    ...audit,
  },
];
