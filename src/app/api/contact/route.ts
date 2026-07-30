import dns from "node:dns";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/** Cloud hosts (e.g. Vercel) often resolve SMTP via IPv6 first; many providers only accept IPv4. */
dns.setDefaultResultOrder("ipv4first");

export const runtime = "nodejs";

const REQUIRED_SMTP_ENV = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
] as const;

const MAIL_TO = "info@jvdcars.sk";

function getResendApiKey() {
  return (
    process.env.Resend_API_JVDcars?.trim() ||
    process.env.RESEND_API_KEY?.trim() ||
    ""
  );
}

function getMissingSmtpEnvKeys() {
  return REQUIRED_SMTP_ENV.filter((key) => {
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

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendViaResend(
  from: string,
  replyTo: string,
  html: string,
  text: string,
) {
  const key = getResendApiKey();
  if (!key) throw new Error("Resend_API_JVDcars missing");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      from,
      to: [MAIL_TO],
      reply_to: replyTo,
      subject: "Nový dopyt z kontaktného formulára",
      html,
      text,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("[contact] Resend HTTP error:", res.status, body);
    throw new Error(`Resend HTTP ${res.status}`);
  }
}

async function sendViaSmtp(
  from: string,
  replyTo: string,
  html: string,
  text: string,
) {
  const missingEnvKeys = getMissingSmtpEnvKeys();
  if (missingEnvKeys.length > 0) {
    throw new Error(
      `Chýba konfigurácia e-mailu: ${missingEnvKeys.join(", ")}`,
    );
  }

  const port = Number(process.env.SMTP_PORT);
  if (!Number.isFinite(port) || port <= 0) {
    throw new Error(
      "Neplatná hodnota SMTP_PORT. Použite napr. 587 (STARTTLS) alebo 465 (SSL).",
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
      pass: process.env.SMTP_PASS?.trim(),
    },
  });

  await transporter.sendMail({
    from,
    to: MAIL_TO,
    replyTo,
    subject: "Nový dopyt z kontaktného formulára",
    text,
    html,
  });
}

/** Safe diagnostics: open GET /api/contact in the browser to verify env on Vercel (no secrets returned). */
export async function GET() {
  const useResend = Boolean(getResendApiKey());
  const missing = getMissingSmtpEnvKeys();
  return NextResponse.json({
    ok: true,
    delivery: useResend ? "resend" : "smtp",
    resendConfigured: useResend,
    smtp: {
      host: process.env.SMTP_HOST?.trim() || null,
      port: process.env.SMTP_PORT?.trim() || null,
      userSet: Boolean(process.env.SMTP_USER?.trim()),
      passSet: Boolean(process.env.SMTP_PASS?.trim()),
      fromSet: Boolean(process.env.SMTP_FROM?.trim()),
      missingKeys: useResend ? [] : missing,
    },
  });
}

export async function POST(request: Request) {
  try {
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

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Zadajte platnú e-mailovú adresu (napr. meno@email.sk)." },
        { status: 400 },
      );
    }

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

    const fromSmtp =
      process.env.SMTP_FROM?.trim() || process.env.SMTP_USER?.trim() || "";
    const fromResend =
      process.env.RESEND_FROM?.trim() ||
      process.env.SMTP_FROM?.trim() ||
      "";

    const useResend = Boolean(getResendApiKey());
    const from = useResend
      ? fromResend || "Kontakt <onboarding@resend.dev>"
      : fromSmtp;

    if (!from) {
      return NextResponse.json(
        {
          message:
            "Chýba odosielateľ: nastavte SMTP_FROM alebo RESEND_FROM (a pre SMTP aj SMTP_USER).",
        },
        { status: 500 },
      );
    }

    if (useResend) {
      await sendViaResend(from, email, htmlMessage, textMessage);
    } else {
      await sendViaSmtp(from, email, htmlMessage, textMessage);
    }

    return NextResponse.json(
      { message: "Správa bola úspešne odoslaná." },
      { status: 200 },
    );
  } catch (err) {
    const e = err as Error & { code?: string; responseCode?: number };
    const msg = e.message || "";

    if (
      msg.startsWith("Chýba konfigurácia e-mailu") ||
      msg.startsWith("Neplatná hodnota SMTP_PORT")
    ) {
      console.error("[contact] config:", msg);
      return NextResponse.json({ message: msg }, { status: 500 });
    }

    console.error("[contact] send error:", {
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
