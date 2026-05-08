import { NextRequest, NextResponse } from "next/server";
import { getServiceBySlug } from "@/sanity/lib/content";
import { requireApiAdmin } from "@/lib/apiAdminAuth";

type RouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(request: NextRequest, { params }: RouteProps) {
  const authError = requireApiAdmin(request);

  if (authError) {
    return authError;
  }

  const { slug } = await params;
  const item = await getServiceBySlug(slug);

  if (!item) {
    return NextResponse.json({ error: "Service introuvable" }, { status: 404 });
  }

  return NextResponse.json(item);
}
