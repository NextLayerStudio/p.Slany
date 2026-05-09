import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const REQUIRED_ENV = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
] as const;

function getMissingEnvKeys() {
  return REQUIRED_ENV.filter((key) => !process.env[key]);
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
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: {
      user: process.env.SMTP_USER,
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
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
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
    console.error("[contact] SMTP error:", err);
    return NextResponse.json(
      {
        message:
          "Správu sa nepodarilo odoslať. Skúste to, prosím, znova o chvíľu.",
      },
      { status: 500 },
    );
  }
}
