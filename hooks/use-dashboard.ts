"use client";

import { useQuery } from "@tanstack/react-query";
import { monitoringService } from "@/services/monitoring.service";
import { schedulerService } from "@/services/scheduler.service";
import { cacheService } from "@/services/cache.service";

const REFRESH_INTERVAL_MS = 15_000;

export function usePlatformDashboard() {
  return useQuery({
    queryKey: ["monitoring", "dashboard"],
    queryFn: monitoringService.dashboard,
    refetchInterval: REFRESH_INTERVAL_MS,
  });
}

export function usePlatformStats() {
  return useQuery({
    queryKey: ["monitoring", "stats"],
    queryFn: monitoringService.stats,
    refetchInterval: REFRESH_INTERVAL_MS,
  });
}

export function useSchedulerStats() {
  return useQuery({
    queryKey: ["scheduler", "stats"],
    queryFn: schedulerService.stats,
    refetchInterval: REFRESH_INTERVAL_MS,
  });
}

export function useRunningJobs(size = 5) {
  return useQuery({
    queryKey: ["scheduler", "running-jobs", size],
    queryFn: () => schedulerService.list({ status: "RUNNING", page: 0, size }),
    refetchInterval: REFRESH_INTERVAL_MS,
  });
}

export function useCacheStats() {
  return useQuery({
    queryKey: ["cache", "stats"],
    queryFn: cacheService.stats,
    refetchInterval: REFRESH_INTERVAL_MS,
  });
}
