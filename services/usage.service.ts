import { gatewayClient } from "@/lib/api/gateway-client";
import type { ProjectUsageResponse } from "@/types/usage";
import type { EnvironmentType } from "@/types/project";

const BASE = "/api/monitoring/projects";

export const usageService = {
  get: (organizationId: string, projectId: string, environment: EnvironmentType) =>
    gatewayClient
      .get<ProjectUsageResponse>(`${BASE}/${projectId}/usage`, { params: { organizationId, environment } })
      .then((r) => r.data),
};
