import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpenCheck, CalendarDays, LayoutDashboard, Users } from "lucide-react";
import type { ReactNode } from "react";
import { APP_CONFIG } from "@/config/app.config";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/", label: "Santri", icon: Users },
  { to: "/", label: "Jadwal", icon: CalendarDays },
  { to: "/", label: "KBM", icon: BookOpenCheck },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-border bg-sidebar px-4 py-6 md:flex">
        <Brand />
        <nav className="mt-8 flex flex-col gap-1">
          {NAV.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/75 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                i === 0 &&
                  pathname === "/" &&
                  "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground",
              )}
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="mt-auto text-xs text-muted-foreground">v{APP_CONFIG.version}</p>
      </aside>

      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur md:hidden">
        <div className="px-4 py-3">
          <Brand />
        </div>
      </header>

      <main className="px-4 pb-24 pt-6 md:ml-64 md:px-8 md:pb-10">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-4 border-t border-border bg-background/95 backdrop-blur md:hidden">
        {NAV.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className={cn(
              "flex min-h-16 flex-col items-center justify-center gap-1 text-[11px] font-medium text-muted-foreground",
              i === 0 && pathname === "/" && "text-primary",
            )}
          >
            <item.icon className="size-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <BookOpenCheck className="size-5" />
      </div>
      <div className="leading-tight">
        <p className="font-heading text-sm font-semibold">{APP_CONFIG.institution}</p>
        <p className="text-xs text-muted-foreground">Learning Management</p>
      </div>
    </div>
  );
}
