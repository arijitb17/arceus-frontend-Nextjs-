export type TenantDeploymentStatus =
  | "BUILD_QUEUED"
  | "BUILDING"
  | "BUILD_FAILED"
  | "CREATED"
  | "PENDING"
  | "APPROVED"
  | "DEPLOYING"
  | "RUNNING"
  | "FAILED"
  | "ROLLED_BACK"
  | "CANCELLED";

export interface TenantDeploymentResponse {
  id: string;
  projectId: string;
  environment: string;
  status: TenantDeploymentStatus;
  sourceRepoFullName: string | null;
  sourceBranch: string | null;
  sourceCommitSha: string | null;
  dockerImage: string | null;
  createdBy: string;
  approvedBy: string | null;
  requiresApproval: boolean;
  lastError: string | null;
  createdAt: string;
  startedAt: string | null;
  completedAt: string | null;
}

export interface TenantDeploymentDetailResponse {
  summary: TenantDeploymentResponse;
  buildLog: string | null;
}

export interface TriggerDeploymentRequest {
  organizationId: string;
  environment: string;
}

export interface PagedResponse<T> {
  items: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
