import { gatewayClient } from "@/lib/api/gateway-client";
import type { ConnectRepoRequest, ConnectUrlResponse, GithubConnectionResponse, RepositoryOption } from "@/types/github";

const BASE = "/api/deployments/github";

export const githubService = {
  connectUrl: (organizationId: string, projectId: string) =>
    gatewayClient
      .get<ConnectUrlResponse>(`${BASE}/organizations/${organizationId}/projects/${projectId}/connect-url`)
      .then((r) => r.data),
  listRepositories: (installationId: string) =>
    gatewayClient.get<RepositoryOption[]>(`${BASE}/installations/${installationId}/repositories`).then((r) => r.data),
  connect: (projectId: string, body: ConnectRepoRequest) =>
    gatewayClient.post<GithubConnectionResponse>(`${BASE}/projects/${projectId}/connect`, body).then((r) => r.data),
  disconnect: (projectId: string) => gatewayClient.delete<void>(`${BASE}/projects/${projectId}/connect`),
};
