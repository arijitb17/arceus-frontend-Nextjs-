export type Role = "ROLE_USER" | "ROLE_ADMIN";
export type AuthProvider = "LOCAL" | "GOOGLE" | "GITHUB";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface MessageResponse {
  message: string;
}

export interface VerifyOtpRequest {
  identifier: string;
  otp: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresInSeconds: number;
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  provider: AuthProvider;
  roles: Role[];
}

export interface RegisterRequest {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  resetToken: string;
  newPassword: string;
}

export interface ApiKeyResponse {
  id: string;
  name: string;
  keyPrefix: string;
  revoked: boolean;
  lastUsedAt: string | null;
  createdAt: string;
}

export interface ApiKeyCreatedResponse {
  id: string;
  name: string;
  key: string;
}

export interface CreateApiKeyRequest {
  name: string;
}
