export type Status = "AKTIF" | "NONAKTIF";
export type RoleName = "SUPER_ADMIN" | "ADMIN" | "GURU";
export type Kehadiran = "HADIR" | "IZIN" | "SAKIT" | "ALPA";
export type CapaianStatus = "TUNTAS" | "BELUM_TUNTAS" | "PROSES";
export type JenisSetoran =
  | "SETORAN_BARU"
  | "MURAJAAH"
  | "TASMI"
  | "UJIAN"
  | "PERBAIKAN";

export interface AuditFields {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

export interface Santri extends AuditFields {
  nis: string;
  nama: string;
  jenisKelamin: "L" | "P";
  tanggalLahir: string;
  kelasId: string;
  programId: string;
  status: Status;
  namaWali: string;
  waWali: string;
}

export interface Guru extends AuditFields {
  id: string;
  nama: string;
  wa: string;
  email: string;
  role: RoleName;
  status: Status;
}

export interface Kelas extends AuditFields {
  id: string;
  nama: string;
  programId: string;
  waliKelasId: string;
  ruangan: string;
  status: Status;
}

export interface Program extends AuditFields {
  id: string;
  nama: string;
  status: Status;
}

export interface Mapel extends AuditFields {
  id: string;
  nama: string;
  programId: string;
  status: Status;
}

export interface Jadwal extends AuditFields {
  id: string;
  hari: string;
  jamMulai: string;
  jamSelesai: string;
  kelasId: string;
  guruId: string;
  programId: string;
  mapelId: string;
  ruangan: string;
  status: Status;
}

export interface KbmSession extends AuditFields {
  id: string;
  tanggal: string;
  jadwalId: string;
  guruId: string;
  kelasId: string;
  programId: string;
  mapelId: string;
  materi: string;
  jamMulai: string;
  jamSelesai: string;
  status: "DRAFT" | "SELESAI";
}

export interface KbmDetail extends AuditFields {
  id: string;
  sessionId: string;
  nis: string;
  kehadiran: Kehadiran;
  target: string;
  capaian: string;
  nilai: number | null;
  predikat: string;
  statusCapaian: CapaianStatus;
  catatan: string;
  surah?: string;
  ayatMulai?: number;
  ayatAkhir?: number;
  juz?: number;
  jenisSetoran?: JenisSetoran;
}

export interface User extends AuditFields {
  id: string;
  username: string;
  guruId: string | null;
  role: RoleName;
  status: Status;
}

export interface LogEntry {
  id: string;
  at: string;
  actor: string;
  action: string;
  detail: string;
}
