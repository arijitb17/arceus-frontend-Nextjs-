export interface UsageDayPoint {
  day: string;
  route: string;
  requestCount: number;
  errorCount: number;
}

export interface ProjectUsageResponse {
  from: string;
  to: string;
  totalRequests: number;
  totalErrors: number;
  points: UsageDayPoint[];
}
