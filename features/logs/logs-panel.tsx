"use client";

import { useState } from "react";
import { ScrollText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState, ErrorState } from "@/components/shared/empty-error-state";
import { Pagination } from "@/components/shared/pagination";
import { useProjectAuditLogs } from "@/hooks/use-audit-logs";
import { getErrorMessage } from "@/lib/api/error";
import { formatDateTime } from "@/lib/utils";

export function LogsPanel({ organizationId, projectId }: { organizationId: string; projectId: string }) {
  const [page, setPage] = useState(0);
  const { data, isLoading, isError, error, refetch } = useProjectAuditLogs(organizationId, projectId, page);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="space-y-2 p-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10" />
          ))}
        </CardContent>
      </Card>
    );
  }

  if (isError) return <ErrorState message={getErrorMessage(error)} onRetry={refetch} />;

  if (!data || data.items.length === 0) {
    return (
      <EmptyState
        icon={ScrollText}
        title="No logs yet"
        description="Events recorded for this project - deploys, config changes, module activity - will show up here."
      />
    );
  }

  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Event</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Actor</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Occurred</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.items.map((log) => (
            <TableRow key={log.id}>
              <TableCell>
                <Badge variant="outline" className="font-data text-[11px]">
                  {log.eventType}
                </Badge>
              </TableCell>
              <TableCell className="text-muted">{log.sourceService ?? "\u2014"}</TableCell>
              <TableCell className="text-muted">{log.actorEmail ?? "\u2014"}</TableCell>
              <TableCell className="max-w-md truncate text-foreground">{log.description}</TableCell>
              <TableCell className="text-muted whitespace-nowrap">{formatDateTime(log.occurredAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        page={data.page}
        totalPages={data.totalPages}
        totalElements={data.totalElements}
        pageSize={data.size}
        onPageChange={setPage}
      />
    </Card>
  );
}
