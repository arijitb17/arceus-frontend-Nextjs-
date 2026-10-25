export interface SdkModuleConfig {
  module: string;
  enabled: boolean;
  baseRoute: string | null;
}

export interface SdkConfigResponse {
  projectId: string;
  projectSlug: string;
  environment: string;
  apiKey: string;
  gatewayUrl: string;
  modules: SdkModuleConfig[];
}
