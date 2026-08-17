import { APP_CONFIG } from "@/config/app.config";
import type { DataRepository } from "./repository.types";
import { localRepository } from "./local/localRepository";

export function getRepository(): DataRepository {
  switch (APP_CONFIG.DATA_SOURCE) {
    case "GOOGLE_SHEETS":
      // Phase 8: GoogleSheetRepository menggantikan implementasi ini.
      return localRepository;
    case "LOCAL":
    default:
      return localRepository;
  }
}
