import { NextResponse } from "next/server";
import { getServiceBySlug } from "@/sanity/lib/content";

type RouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_request: Request, { params }: RouteProps) {
  const { slug } = await params;
  const item = await getServiceBySlug(slug);

  if (!item) {
    return NextResponse.json({ error: "Service introuvable" }, { status: 404 });
  }

  return NextResponse.json(item);
}
