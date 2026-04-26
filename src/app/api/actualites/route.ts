import { NextResponse } from "next/server";
import { getAllActualites } from "@/sanity/lib/content";

export async function GET() {
  const items = await getAllActualites();
  return NextResponse.json({ items, count: items.length });
}
