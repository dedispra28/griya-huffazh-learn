const HARI = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

export function formatTanggal(value: string | Date): string {
  const d = typeof value === "string" ? new Date(value) : value;
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export function namaHari(value: string | Date): string {
  const d = typeof value === "string" ? new Date(value) : value;
  return HARI[d.getDay()];
}

export function createId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36).toUpperCase()}`;
}
