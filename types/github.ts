export interface GithubConnectionSummary {
  repoFullName: string;
  defaultBranch: string;
  connectedAt: string;
}

export interface ConnectUrlResponse {
  installUrl: string;
}

export interface RepositoryOption {
  fullName: string;
  defaultBranch: string;
  isPrivate: boolean;
}

export interface ConnectRepoRequest {
  organizationId: string;
  installationId: string;
  repoFullName: string;
  defaultBranch: string;
}

export interface GithubConnectionResponse {
  id: string;
  repoFullName: string;
  defaultBranch: string;
  connectedAt: string;
}
