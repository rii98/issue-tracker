import React from "react";
import IssueActions from "./IssueActions";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Table } from "@radix-ui/themes";
import ProgressBadge from "../component/ProgressBadge";
const loading = () => {
  return (
    <div>
      <IssueActions />

      {/* for showing the skelaton */}
      <Table.Root variant="surface" className="mt-4">
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((issue) => {
            return (
              <Table.Row key={issue}>
                <Table.Cell>
                  <Skeleton />
                  <div className="block sm:hidden">
                    <Skeleton />
                  </div>
                </Table.Cell>
                <Table.Cell className="hidden sm:table-cell">
                  <Skeleton />
                </Table.Cell>
                <Table.Cell className="hidden sm:table-cell">
                  <Skeleton />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default loading;
