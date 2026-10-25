export interface ProjectAuditLogResponse {
  id: string;
  eventType: string;
  sourceService: string | null;
  actorEmail: string | null;
  description: string;
  occurredAt: string;
}

export interface PagedResponse<T> {
  items: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
