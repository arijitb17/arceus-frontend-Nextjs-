import { isAxiosError } from "axios";
import type { ApiErrorShape } from "@/types/api";

export function getErrorMessage(error: unknown, fallback = "Something went wrong. Please try again."): string {
  if (isAxiosError<ApiErrorShape>(error)) {
    if (!error.response) {
      // eslint-disable-next-line no-console
      console.error("[arceus] Request failed with no response - likely CORS or the backend is unreachable:", error);
      return "Couldn't reach the Gateway. Check that it's running and that GATEWAY_CORS_ALLOWED_ORIGINS includes this app's origin (see README.md).";
    }

    const data = error.response.data;
    if (data?.message) return data.message;
    if (error.response.status === 429) return "Too many requests - please slow down and try again.";

    // eslint-disable-next-line no-console
    console.error("[arceus] Request failed with an unrecognized error body:", error.response.status, data);
  }
  if (error instanceof Error) return error.message;
  return fallback;
}

export function getFieldErrors(error: unknown): Record<string, string> | undefined {
  if (isAxiosError<ApiErrorShape>(error)) {
    const data = error.response?.data;
    if (data && "fields" in data) return data.fields;
  }
  return undefined;
}
