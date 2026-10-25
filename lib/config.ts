export const config = {
  gatewayUrl: process.env.NEXT_PUBLIC_GATEWAY_URL ?? "http://localhost:8090",
} as const;
