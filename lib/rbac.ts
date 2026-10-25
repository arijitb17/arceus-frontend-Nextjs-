import type { Role } from "@/types/auth";

export const ADMIN_ONLY_PREFIXES = [
  "/dashboard",
  "/auth/users",
  "/auth/roles",
  "/auth/permissions",
  "/auth/sessions",
  "/notifications",
  "/rate-limiter",
  "/cache",
  "/scheduler",
  "/feature-flags",
  "/monitoring",
] as const;

export function hasRole(roles: Role[] | undefined, role: Role): boolean {
  return !!roles?.includes(role);
}

export function isAdmin(roles: Role[] | undefined): boolean {
  return hasRole(roles, "ROLE_ADMIN");
}

export function defaultHomeFor(roles: Role[] | undefined): string {
  return isAdmin(roles) ? "/dashboard" : "/organizations";
}

export function isAdminOnlyPath(pathname: string): boolean {
  return ADMIN_ONLY_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export function canAccessPath(pathname: string, roles: Role[] | undefined): boolean {
  if (isAdminOnlyPath(pathname)) return isAdmin(roles);
  return true;
}
