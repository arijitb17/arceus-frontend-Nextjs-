"use client";

import { useMutation } from "@tanstack/react-query";
import { sdkConfigService } from "@/services/sdk-config.service";
import type { EnvironmentType } from "@/types/project";

export function useGenerateSdkConfig(organizationId: string, projectId: string) {
  return useMutation({
    mutationFn: (environment: EnvironmentType) => sdkConfigService.generate(organizationId, projectId, environment),
  });
}
