export interface SecretResponse {
  id: string;
  secretKey: string;
  version: number;
  maskedValue: string;
  createdAt: string;
}

export interface CreateSecretRequest {
  secretKey: string;
  value: string;
}
