import { NextRequest, NextResponse } from "next/server";
import { getAllServices } from "@/sanity/lib/content";
import { requireApiAdmin } from "@/lib/apiAdminAuth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const authError = requireApiAdmin(request);

  if (authError) {
    return authError;
  }

  const items = await getAllServices();
  return NextResponse.json({ items, count: items.length });
}
