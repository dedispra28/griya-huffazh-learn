import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  BookMarked,
  CalendarDays,
  GraduationCap,
  Layers,
  School,
  Users,
} from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { academicService } from "@/services/academic.service";
import { APP_CONFIG } from "@/config/app.config";
import { formatTanggal } from "@/utils/format";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard | Learning Management TPQ Griya Huffazh Quran" },
      {
        name: "description",
        content:
          "Sistem manajemen akademik TPQ Griya Huffazh Quran: data santri, guru, kelas, jadwal, dan kegiatan belajar mengajar.",
      },
      { property: "og:title", content: "Dashboard | Learning Management TPQ" },
      {
        property: "og:description",
        content:
          "Kelola database akademik dan KBM santri TPQ Griya Huffazh Quran dalam satu aplikasi.",
      },
    ],
  }),
  component: Index,
});

const CARDS = [
  { key: "totalSantri", label: "Santri", icon: Users },
  { key: "totalGuru", label: "Guru", icon: GraduationCap },
  { key: "totalKelas", label: "Kelas", icon: School },
  { key: "totalProgram", label: "Program", icon: Layers },
  { key: "totalMapel", label: "Mata Pelajaran", icon: BookMarked },
  { key: "totalJadwal", label: "Jadwal", icon: CalendarDays },
] as const;

function Index() {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard-summary"],
    queryFn: () => academicService.getDashboardSummary(),
  });

  return (
    <AppShell>
      <section className="mx-auto max-w-5xl">
        <p className="text-sm text-muted-foreground">{formatTanggal(new Date())}</p>
        <h1 className="mt-1 font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Assalamu&apos;alaikum
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ringkasan data akademik {APP_CONFIG.institution}.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {CARDS.map((c) => (
            <Card key={c.key} className="border-border/70 shadow-sm">
              <CardContent className="flex flex-col gap-3 p-4 md:p-5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <c.icon className="size-4" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-semibold">
                    {isLoading ? "—" : (data?.[c.key] ?? 0)}
                  </p>
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Sumber data: {APP_CONFIG.DATA_SOURCE}
        </p>
      </section>
    </AppShell>
  );
}
