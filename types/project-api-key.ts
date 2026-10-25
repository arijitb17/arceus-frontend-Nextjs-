export type ProjectApiKeyType = "PUBLIC" | "SECRET";

export interface CreateProjectApiKeyRequest {
  name: string;
  keyType: ProjectApiKeyType;
  environment: string;
  scopes?: string;
}

export interface ProjectApiKeyResponse {
  id: string;
  name: string;
  keyPrefix: string;
  keyType: ProjectApiKeyType;
  environment: string;
  scopes: string | null;
  revoked: boolean;
  lastUsedAt: string | null;
  createdAt: string;
}

export interface ProjectApiKeyCreatedResponse {
  id: string;
  name: string;
  keyType: ProjectApiKeyType;
  environment: string;
  key: string;
}

export interface RevealedApiKeyResponse {
  key: string;
}
