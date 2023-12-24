import { create } from "domain";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { CreateIssueSchema } from "../../validationSchema";

// CREATE A NEW ISSUE
export async function POST(request: NextRequest) {
  const data = await request.json();

  const validation = CreateIssueSchema.safeParse(data);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 }
    );
  }
  const newIssue = await prisma.issue.create({
    data: {
      title: data.title,
      description: data.description,
      status: data.status,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
