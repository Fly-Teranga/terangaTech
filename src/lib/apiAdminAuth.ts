import { NextRequest, NextResponse } from "next/server";

const AUTH_REALM = "TerangaTech Admin API";

function unauthorizedResponse() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${AUTH_REALM}", charset="UTF-8"`,
    },
  });
}

function misconfiguredResponse() {
  return NextResponse.json(
    { error: "Admin API auth is not configured on the server." },
    { status: 503 },
  );
}

function decodeBasicCredentials(authorization: string) {
  if (!authorization.startsWith("Basic ")) {
    return null;
  }

  const encoded = authorization.slice("Basic ".length).trim();

  try {
    const decoded = Buffer.from(encoded, "base64").toString("utf-8");
    const separatorIndex = decoded.indexOf(":");

    if (separatorIndex === -1) {
      return null;
    }

    return {
      username: decoded.slice(0, separatorIndex),
      password: decoded.slice(separatorIndex + 1),
    };
  } catch {
    return null;
  }
}

export function requireApiAdmin(request: NextRequest) {
  const adminUsername = process.env.API_ADMIN_USERNAME;
  const adminPassword = process.env.API_ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    return misconfiguredResponse();
  }

  const authorization = request.headers.get("authorization");

  if (!authorization) {
    return unauthorizedResponse();
  }

  const credentials = decodeBasicCredentials(authorization);

  if (!credentials) {
    return unauthorizedResponse();
  }

  if (
    credentials.username !== adminUsername ||
    credentials.password !== adminPassword
  ) {
    return unauthorizedResponse();
  }

  return null;
}
