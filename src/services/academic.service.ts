import { getRepository } from "@/repositories";

export interface DashboardSummary {
  totalSantri: number;
  totalGuru: number;
  totalKelas: number;
  totalProgram: number;
  totalMapel: number;
  totalJadwal: number;
}

export const academicService = {
  async getDashboardSummary(): Promise<DashboardSummary> {
    const repo = getRepository();
    const [santri, guru, kelas, program, mapel, jadwal] = await Promise.all([
      repo.getStudents(),
      repo.getTeachers(),
      repo.getClasses(),
      repo.getPrograms(),
      repo.getSubjects(),
      repo.getSchedules(),
    ]);

    return {
      totalSantri: santri.data?.length ?? 0,
      totalGuru: guru.data?.length ?? 0,
      totalKelas: kelas.data?.length ?? 0,
      totalProgram: program.data?.length ?? 0,
      totalMapel: mapel.data?.length ?? 0,
      totalJadwal: jadwal.data?.length ?? 0,
    };
  },
};
