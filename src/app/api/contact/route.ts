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

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    "\"": "&quot;",
  })[character] || character);
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
  const moduleLabel = {
    billetterie: "Billetterie aérienne SaaS",
    ia: "Logiciels aéronautiques & IA",
    assuretech: "AssureTech Voyage SaaS",
    all: "Les 3 modules (solution complète)",
  }[moduleName] || moduleName;
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
  const details = [
    ["Nom", `${firstName} ${lastName}`],
    ["Société", company],
    ["E-mail", email],
    ["Téléphone", phone || "Non renseigné"],
    ["Rôle", role || "Non renseigné"],
    ["Module", moduleLabel],
  ]
    .map(([label, value]) => `<tr><td style="padding:10px 0;color:#6b7280;font-size:13px;width:130px;vertical-align:top">${escapeHtml(label)}</td><td style="padding:10px 0;color:#172016;font-size:14px;font-weight:600">${escapeHtml(value)}</td></tr>`)
    .join("");
  const htmlContent = `
    <div style="margin:0;padding:32px 16px;background:#f4f6f3;font-family:Arial,Helvetica,sans-serif;color:#172016">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(23,32,22,.08)">
        <tr><td style="padding:28px 32px;background:#0d1409;color:#ffffff">
          <div style="font-size:24px;font-weight:700;letter-spacing:-.4px"><span style="color:#36b96a">Faki</span><span style="color:#f2a65a">Airline</span></div>
          <div style="margin-top:8px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#b7c5b6">Nouvelle demande de démonstration</div>
        </td></tr>
        <tr><td style="height:5px;background:linear-gradient(90deg,#00853f 0%,#00853f 33%,#fdef42 33%,#fdef42 66%,#e31b23 66%)"></td></tr>
        <tr><td style="padding:32px">
          <h1 style="margin:0 0 8px;font-size:24px;line-height:1.3;color:#172016">Un nouveau prospect vous a contacté</h1>
          <p style="margin:0 0 24px;color:#657164;font-size:15px;line-height:1.6">Répondez directement à cet e-mail pour contacter <strong>${escapeHtml(firstName)} ${escapeHtml(lastName)}</strong>.</p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top:1px solid #e7ebe6;border-bottom:1px solid #e7ebe6">${details}</table>
          <div style="margin-top:24px;padding:20px;background:#f3f8f2;border-left:4px solid #00853f;border-radius:4px">
            <div style="margin-bottom:8px;color:#00853f;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase">Message</div>
            <div style="color:#263326;font-size:15px;line-height:1.65;white-space:pre-line">${escapeHtml(message || "Non renseigné")}</div>
          </div>
        </td></tr>
        <tr><td style="padding:20px 32px;background:#f8faf8;color:#819080;font-size:12px;line-height:1.5">Cette demande a été envoyée depuis le formulaire de contact FakiAirline.</td></tr>
      </table>
    </div>`;

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
      htmlContent,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "L’envoi a échoué. Veuillez réessayer." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
