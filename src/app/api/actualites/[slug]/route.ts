import { NextResponse } from "next/server";
import { getActualiteBySlug } from "@/sanity/lib/content";

type RouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_request: Request, { params }: RouteProps) {
  const { slug } = await params;
  const item = await getActualiteBySlug(slug);

  if (!item) {
    return NextResponse.json({ error: "Actualite introuvable" }, { status: 404 });
  }

  return NextResponse.json(item);
}
