import { gatewayClient } from "@/lib/api/gateway-client";
import type { PagedResponse, ProjectAuditLogResponse } from "@/types/audit-log";

const BASE = "/api/audit/projects";

export const auditLogService = {
  list: (organizationId: string, projectId: string, page = 0) =>
    gatewayClient
      .get<PagedResponse<ProjectAuditLogResponse>>(`${BASE}/${projectId}`, {
        params: { organizationId, page, size: 50 },
      })
      .then((r) => r.data),
};
