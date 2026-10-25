export type OrgRole = "OWNER" | "ADMIN" | "MEMBER";

export interface OrganizationResponse {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  ownerUserId: string;
  callerRole: OrgRole;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrganizationRequest {
  name: string;
  slug: string;
  description?: string;
}

export interface MemberResponse {
  id: string;
  userId: string;
  role: OrgRole;
  joinedAt: string;
}

export interface AddMemberRequest {
  userId: string;
  role: OrgRole;
}
