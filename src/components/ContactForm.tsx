"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitState("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(
          data.message || "Odoslanie formulára zlyhalo. Skúste to znova.",
        );
      }

      setSubmitState("success");
      setFeedbackMessage(data.message || "Správa bola úspešne odoslaná.");
      form.reset();
    } catch (error) {
      setSubmitState("error");
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : "Správu sa nepodarilo odoslať. Skúste to znova.",
      );
    }
  }

  return (
    <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Meno"
          required
          className="w-full rounded-xl border border-white/50 bg-white/20 px-4 py-3 text-base font-medium text-white placeholder:text-white/90 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm transition focus:border-white/85 focus:bg-white/25 focus:text-white focus:placeholder:text-white/95 focus:ring-2 focus:ring-white/45"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          className="w-full rounded-xl border border-white/50 bg-white/20 px-4 py-3 text-base font-medium text-white placeholder:text-white/90 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm transition focus:border-white/85 focus:bg-white/25 focus:text-white focus:placeholder:text-white/95 focus:ring-2 focus:ring-white/45"
        />
      </div>
      <input
        type="tel"
        name="phone"
        placeholder="Telefónne číslo"
        required
        className="w-full rounded-xl border border-white/50 bg-white/20 px-4 py-3 text-base font-medium text-white placeholder:text-white/90 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm transition focus:border-white/85 focus:bg-white/25 focus:text-white focus:placeholder:text-white/95 focus:ring-2 focus:ring-white/45"
      />
      <textarea
        rows={5}
        name="message"
        placeholder="Správa"
        required
        className="w-full rounded-xl border border-white/50 bg-white/20 px-4 py-3 text-base font-medium text-white placeholder:text-white/90 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm transition focus:border-white/85 focus:bg-white/25 focus:text-white focus:placeholder:text-white/95 focus:ring-2 focus:ring-white/45"
      />
      <button
        type="submit"
        disabled={submitState === "loading"}
        className="w-full rounded-xl border border-white/50 bg-white px-6 py-3.5 font-semibold text-neutral-950 shadow-sm transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitState === "loading" ? "Odosielam..." : "Odoslať správu"}
      </button>

      {feedbackMessage ? (
        <p
          className={`text-sm font-medium ${
            submitState === "success" ? "text-emerald-200" : "text-red-200"
          }`}
        >
          {feedbackMessage}
        </p>
      ) : null}
    </form>
  );
}
