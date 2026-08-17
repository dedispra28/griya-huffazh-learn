import { APP_CONFIG } from "@/config/app.config";
import type { DataRepository, RepositoryResponse } from "../repository.types";
import { ok } from "../repository.types";
import {
  seedClasses,
  seedPrograms,
  seedSchedules,
  seedStudents,
  seedSubjects,
  seedTeachers,
} from "./seed";

function read<T>(key: string, seed: T[]): T[] {
  if (typeof window === "undefined") return seed;
  try {
    const raw = window.localStorage.getItem(`${APP_CONFIG.storagePrefix}:${key}`);
    if (!raw) {
      window.localStorage.setItem(`${APP_CONFIG.storagePrefix}:${key}`, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw) as T[];
  } catch {
    return seed;
  }
}

function resolve<T>(key: string, seed: T[]): Promise<RepositoryResponse<T[]>> {
  return Promise.resolve(ok(read(key, seed)));
}

export const localRepository: DataRepository = {
  getStudents: () => resolve("santri", seedStudents),
  getTeachers: () => resolve("guru", seedTeachers),
  getClasses: () => resolve("kelas", seedClasses),
  getPrograms: () => resolve("program", seedPrograms),
  getSubjects: () => resolve("mapel", seedSubjects),
  getSchedules: () => resolve("jadwal", seedSchedules),
};
