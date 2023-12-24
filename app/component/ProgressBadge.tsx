import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";
const statusMap: Record<Status, "red" | "green" | "violet"> = {
  OPEN: "red",
  CLOSED: "green",
  IN_PROGRESS: "violet",
};
const ProgressBadge = ({ status }: { status: Status }) => {
  return <Badge color={statusMap[status]}>{status}</Badge>;
};

export default ProgressBadge;
