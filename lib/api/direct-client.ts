import axios, { type AxiosInstance } from "axios";
import { authStore } from "@/store/auth-store";

function decodeJwtPayload(token: string): { sub?: string; roles?: string[] } | null {
  try {
    const payload = token.split(".")[1];
    const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(json);
  } catch {
    return null;
  }
}

let hasWarned = false;

export function createDirectClient(baseURL: string, serviceLabel: string): AxiosInstance {
  const client = axios.create({ baseURL, headers: { "Content-Type": "application/json" } });

  client.interceptors.request.use((requestConfig) => {
    if (!hasWarned && typeof window !== "undefined") {
      hasWarned = true;
      // eslint-disable-next-line no-console
      console.warn(
        "[arceus] Calling non-gatewayed services directly (dev shim) - see lib/api/direct-client.ts"
      );
    }

    const { accessToken } = authStore.getState();
    if (accessToken) {
      const claims = decodeJwtPayload(accessToken);
      if (claims?.sub) requestConfig.headers["X-User-Email"] = claims.sub;
      if (claims?.roles) requestConfig.headers["X-User-Roles"] = claims.roles.join(",");
    }
    requestConfig.headers["X-Direct-Client-Warning"] = serviceLabel;
    return requestConfig;
  });

  return client;
}
