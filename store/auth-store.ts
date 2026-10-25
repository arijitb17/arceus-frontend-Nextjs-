"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { UserResponse } from "@/types/auth";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: UserResponse | null;
  hasHydrated: boolean;
  setTokens: (accessToken: string, refreshToken: string) => void;
  setUser: (user: UserResponse) => void;
  logout: () => void;
  setHasHydrated: (state: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      hasHydrated: false,
      setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken }),
      setUser: (user) => set({ user }),
      logout: () => set({ accessToken: null, refreshToken: null, user: null }),
      setHasHydrated: (state) => set({ hasHydrated: state }),
    }),
    {
      name: "arceus-auth",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        user: state.user,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

export const authStore = {
  getState: useAuthStore.getState,
  setState: useAuthStore.setState,
};
