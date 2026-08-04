import { NextResponse } from "next/server";
import { getContactSettings } from "@/sanity/lib/content";

export const dynamic = "force-dynamic";

type ContactRequest = {
  firstName?: unknown;
  lastName?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  module?: unknown;
  role?: unknown;
  message?: unknown;
  botField?: unknown;
};

function getText(value: unknown, maxLength = 1000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;

  if (!apiKey || !senderEmail) {
    return NextResponse.json({ error: "L’envoi des demandes n’est pas encore configuré." }, { status: 503 });
  }

  let payload: ContactRequest;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (getText(payload.botField)) {
    return NextResponse.json({ ok: true });
  }

  const firstName = getText(payload.firstName, 100);
  const lastName = getText(payload.lastName, 100);
  const company = getText(payload.company, 200);
  const email = getText(payload.email, 254);
  const phone = getText(payload.phone, 50);
  const moduleName = getText(payload.module, 100);
  const role = getText(payload.role, 100);
  const message = getText(payload.message, 5000);

  if (!firstName || !lastName || !company || !email || !moduleName || !email.includes("@")) {
    return NextResponse.json({ error: "Veuillez compléter les champs obligatoires." }, { status: 400 });
  }

  const recipient = await getContactSettings();
  const textContent = [
    "Nouvelle demande de démonstration",
    "",
    `Nom : ${firstName} ${lastName}`,
    `Société : ${company}`,
    `E-mail : ${email}`,
    `Téléphone : ${phone || "Non renseigné"}`,
    `Rôle : ${role || "Non renseigné"}`,
    `Module : ${moduleName}`,
    "",
    "Message :",
    message || "Non renseigné",
  ].join("\n");

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { name: process.env.BREVO_SENDER_NAME || "FakiAirline", email: senderEmail },
      to: [{ email: recipient.email }],
      replyTo: { email, name: `${firstName} ${lastName}` },
      subject: `Nouvelle demande de démo — ${firstName} ${lastName}`,
      textContent,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "L’envoi a échoué. Veuillez réessayer." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
