import React from "react";
import prisma from "@/prisma/client";

interface Props {
  params: {
    id: string;
  };
}
const IssueDetail = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: Number(id) },
  });
  return <div>{issue?.title}</div>;
};

export default IssueDetail;
