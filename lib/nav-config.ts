import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  ShieldCheck,
  Users,
  KeyRound,
  Fingerprint,
  MonitorSmartphone,
  BellRing,
  FileText,
  Inbox,
  ListTree,
  ScrollText,
  Gauge,
  Database,
  Clock,
  Flag,
  Activity,
  Settings,
  Building2,
} from "lucide-react";
import type { Role } from "@/types/auth";

export type NavAvailability = "live" | "missing";

export interface NavLeaf {
  label: string;
  href: string;
  icon: LucideIcon;
  availability: NavAvailability;
  roles?: Role[];
}

export interface NavSection {
  label: string;
  icon: LucideIcon;
  href?: string;
  children?: NavLeaf[];
  roles?: Role[];
}

export const navSections: NavSection[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    roles: ["ROLE_ADMIN"],
  },
  {
    label: "Organizations",
    icon: Building2,
    href: "/organizations",
  },
  {
    label: "Authentication",
    icon: ShieldCheck,
    children: [
      { label: "Users", href: "/auth/users", icon: Users, availability: "live", roles: ["ROLE_ADMIN"] },
      { label: "Roles", href: "/auth/roles", icon: Fingerprint, availability: "live", roles: ["ROLE_ADMIN"] },
      { label: "Permissions", href: "/auth/permissions", icon: ListTree, availability: "live", roles: ["ROLE_ADMIN"] },
      { label: "Sessions", href: "/auth/sessions", icon: MonitorSmartphone, availability: "live", roles: ["ROLE_ADMIN"] },
      { label: "API Keys", href: "/auth/api-keys", icon: KeyRound, availability: "live" },
    ],
  },
  {
    label: "Notifications",
    icon: BellRing,
    roles: ["ROLE_ADMIN"],
    children: [
      { label: "Templates", href: "/notifications/templates", icon: FileText, availability: "live" },
      { label: "History", href: "/notifications/history", icon: ScrollText, availability: "live" },
      { label: "Queue", href: "/notifications/queue", icon: Inbox, availability: "live" },
    ],
  },
  { label: "Rate Limiter", icon: Gauge, href: "/rate-limiter", roles: ["ROLE_ADMIN"] },
  { label: "Cache", icon: Database, href: "/cache", roles: ["ROLE_ADMIN"] },
  { label: "Scheduler", icon: Clock, href: "/scheduler", roles: ["ROLE_ADMIN"] },
  { label: "Feature Flags", icon: Flag, href: "/feature-flags", roles: ["ROLE_ADMIN"] },
  { label: "Monitoring", icon: Activity, href: "/monitoring", roles: ["ROLE_ADMIN"] },
  { label: "Settings", icon: Settings, href: "/settings" },
];
