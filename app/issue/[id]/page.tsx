import React from "react";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ProgressBadge from "@/app/component/ProgressBadge";
import Markdown from "react-markdown";
interface Props {
  params: {
    id: string;
  };
}
const IssueDetail = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: Number(id) },
  });
  return (
    <div>
      <Heading>{issue?.title}</Heading>
      <Flex gap="3" my="4">
        <ProgressBadge status={issue!.status} />
        <Text>{issue?.createdAt.toDateString()}</Text>
      </Flex>
      <Card>
        <Markdown className="prose">{issue?.description}</Markdown>
      </Card>
    </div>
  );
};

export default IssueDetail;
