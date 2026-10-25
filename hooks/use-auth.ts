"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth-store";
import { defaultHomeFor } from "@/lib/rbac";
import type { LoginRequest, VerifyOtpRequest } from "@/types/auth";

export function useLoginStep() {
  return useMutation({
    mutationFn: (body: LoginRequest) => authService.login(body),
  });
}

export function useVerifyLoginOtpStep() {
  const setTokens = useAuthStore((s) => s.setTokens);
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: VerifyOtpRequest) => authService.verifyLoginOtp(body),
    onSuccess: async (auth) => {
      setTokens(auth.accessToken, auth.refreshToken);
      const me = await authService.me();
      setUser(me);
      await queryClient.invalidateQueries();
      router.push(defaultHomeFor(me.roles));
    },
  });
}

export function useCurrentUser() {
  const accessToken = useAuthStore((s) => s.accessToken);
  const setUser = useAuthStore((s) => s.setUser);

  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: async () => {
      const me = await authService.me();
      setUser(me);
      return me;
    },
    enabled: !!accessToken,
    staleTime: 5 * 60_000,
  });
}

export function useLogout() {
  const refreshToken = useAuthStore((s) => s.refreshToken);
  const logout = useAuthStore((s) => s.logout);
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (refreshToken) {
        try {
          await authService.logout({ refreshToken });
        } catch {
        }
      }
    },
    onSettled: () => {
      logout();
      queryClient.clear();
      router.push("/login");
    },
  });
}
