/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphql } from "graphql";
import { NextRequest, NextResponse } from "next/server";
import { schema } from "@/lib/graphql/schema";
import { root } from "@/lib/graphql/root";

export async function POST(req: NextRequest) {
  const { query, variables } = await req.json();

  try {
    const result = await graphql({
      schema,
      source: query,
      rootValue: root,
      variableValues: variables,
    });

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { errors: [{ message: error.message }] },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Send POST requests with GraphQL queries here.",
  });
}
