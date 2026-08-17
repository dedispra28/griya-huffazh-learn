export type DataSourceType = "LOCAL" | "GOOGLE_SHEETS";

export const APP_CONFIG = {
  appName: "Learning Management TPQ",
  institution: "TPQ Griya Huffazh Quran",
  version: "0.1.0",
  DATA_SOURCE: "LOCAL" as DataSourceType,
  storagePrefix: "tpq_lms",
} as const;
