"use client";

import { useQuery } from "@tanstack/react-query";
import { auditLogService } from "@/services/audit-log.service";

export function useProjectAuditLogs(organizationId: string, projectId: string, page = 0) {
  return useQuery({
    queryKey: ["organizations", organizationId, "projects", projectId, "logs", page],
    queryFn: () => auditLogService.list(organizationId, projectId, page),
    enabled: !!organizationId && !!projectId,
    refetchInterval: 15_000,
  });
}
