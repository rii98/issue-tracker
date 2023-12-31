import { Badge, Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import prisma from "@/prisma/client";
import ProgressBadge from "../component/ProgressBadge";
import IssueActions from "./IssueActions";
import delay from "delay";
const Issues = async () => {
  const issues = await prisma.issue.findMany();
  await delay(2000);
  return (
    <div className="space-y-4">
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden sm:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden sm:table-cell">
              Opened At
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => {
            return (
              <Table.Row key={issue.id}>
                <Table.Cell>
                  <Link href={`/issue/${issue.id}`}>{issue.title}</Link>
                  <div className="block sm:hidden">
                    <ProgressBadge status={issue.status}></ProgressBadge>
                  </div>
                </Table.Cell>

                <Table.Cell className="hidden sm:table-cell">
                  <ProgressBadge status={issue.status}></ProgressBadge>
                </Table.Cell>
                <Table.Cell className="hidden sm:table-cell">
                  {issue.createdAt.toDateString()}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default Issues;
