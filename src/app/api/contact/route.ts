import dns from "node:dns";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/** Cloud hosts (e.g. Vercel) often resolve SMTP via IPv6 first; many providers only accept IPv4. */
dns.setDefaultResultOrder("ipv4first");

export const runtime = "nodejs";

const REQUIRED_ENV = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
] as const;

function getMissingEnvKeys() {
  return REQUIRED_ENV.filter((key) => {
    const v = process.env[key];
    return typeof v !== "string" || v.trim() === "";
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getStringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value.trim();
}

export async function POST(request: Request) {
  const missingEnvKeys = getMissingEnvKeys();
  if (missingEnvKeys.length > 0) {
    return NextResponse.json(
      {
        message: `Chýba konfigurácia e-mailu: ${missingEnvKeys.join(", ")}`,
      },
      { status: 500 },
    );
  }

  const formData = await request.formData();
  const name = getStringValue(formData, "name");
  const email = getStringValue(formData, "email");
  const phone = getStringValue(formData, "phone");
  const message = getStringValue(formData, "message");

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { message: "Vyplňte prosím všetky polia formulára." },
      { status: 400 },
    );
  }

  const port = Number(process.env.SMTP_PORT);
  if (!Number.isFinite(port) || port <= 0) {
    return NextResponse.json(
      {
        message:
          "Neplatná hodnota SMTP_PORT. Použite napr. 587 (STARTTLS) alebo 465 (SSL).",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST?.trim(),
    port,
    secure: port === 465,
    requireTLS: port === 587,
    connectionTimeout: 20_000,
    greetingTimeout: 20_000,
    socketTimeout: 25_000,
    auth: {
      user: process.env.SMTP_USER?.trim(),
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlMessage = `
    <h2>Nová správa z kontaktného formulára</h2>
    <p><strong>Meno:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefón:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Správa:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const textMessage =
    `Nová správa z kontaktného formulára\n\n` +
    `Meno: ${name}\n` +
    `E-mail: ${email}\n` +
    `Telefón: ${phone}\n\n` +
    `Správa:\n${message}`;

  try {
    const from =
      process.env.SMTP_FROM?.trim() || process.env.SMTP_USER?.trim() || "";

    await transporter.sendMail({
      from,
      to: "info@jvdcars.sk",
      replyTo: email,
      subject: "Nový dopyt z kontaktného formulára",
      text: textMessage,
      html: htmlMessage,
    });

    return NextResponse.json(
      { message: "Správa bola úspešne odoslaná." },
      { status: 200 },
    );
  } catch (err) {
    const e = err as Error & { code?: string; responseCode?: number };
    console.error("[contact] SMTP error:", {
      message: e.message,
      code: e.code,
      responseCode: e.responseCode,
    });
    return NextResponse.json(
      {
        message:
          "Správu sa nepodarilo odoslať. Skúste to, prosím, znova o chvíľu.",
      },
      { status: 500 },
    );
  }
}
