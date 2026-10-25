export interface PagedResponse<T> {
  items: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface ServiceApiError {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  correlationId?: string;
  fields?: Record<string, string>;
}

export interface GatewayApiError {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path?: string;
  requestId?: string;
}

export type ApiErrorShape = ServiceApiError | GatewayApiError;

export interface PageParams {
  page?: number;
  size?: number;
}
