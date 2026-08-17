import type { Guru, Jadwal, Kelas, Mapel, Program, Santri } from "@/types/entities";

export interface RepositoryResponse<T> {
  success: boolean;
  data: T | null;
  message: string;
  meta?: Record<string, unknown>;
}

export interface DataRepository {
  getStudents(): Promise<RepositoryResponse<Santri[]>>;
  getTeachers(): Promise<RepositoryResponse<Guru[]>>;
  getClasses(): Promise<RepositoryResponse<Kelas[]>>;
  getPrograms(): Promise<RepositoryResponse<Program[]>>;
  getSubjects(): Promise<RepositoryResponse<Mapel[]>>;
  getSchedules(): Promise<RepositoryResponse<Jadwal[]>>;
}

export function ok<T>(data: T, message = ""): RepositoryResponse<T> {
  return { success: true, data, message };
}

export function fail<T>(message: string, errorCode = "ERROR"): RepositoryResponse<T> {
  return { success: false, data: null, message, meta: { errorCode } };
}
