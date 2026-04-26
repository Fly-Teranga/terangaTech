import { NextResponse } from "next/server";
import { getAllServices } from "@/sanity/lib/content";

export async function GET() {
  const items = await getAllServices();
  return NextResponse.json({ items, count: items.length });
}
