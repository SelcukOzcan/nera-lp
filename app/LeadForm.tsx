"use client";

import { FormEvent, useState } from "react";
import { submitLead } from "./leadSubmission";

type LeadFormProps = {
  className?: string;
  eyebrow: string;
  title?: string;
  messageLabel?: string;
  service: string;
  submitLabel: string;
  noteId: string;
};

export default function LeadForm({
  className = "",
  eyebrow,
  title = "Size ulaşalım",
  messageLabel = "Notunuz",
  service,
  submitLabel,
  noteId,
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("Bilgileriniz güvenli biçimde Nera Clinic ekibine iletilir.");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("hp_nera") ?? "")) {
      setStatus("success");
      setMessage("Talebiniz alındı. Ekibimiz sizinle iletişime geçecek.");
      return;
    }

    setStatus("submitting");
    setMessage("Talebiniz iletiliyor…");

    try {
      await submitLead({ name: String(data.get("name") ?? ""), phone: String(data.get("phone") ?? ""), service, note: String(data.get("note") ?? ""), formLocation: `${service} ana form`, source: "main_form" });

      setStatus("success");
      setMessage("Talebiniz alındı. Nera Clinic ekibi sizinle iletişime geçecek.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error && error.message === "invalid_phone" ? "Lütfen telefon numaranızı 05XX XXX XX XX biçiminde kontrol edin." : "Talebiniz şu anda iletilemedi. Lütfen WhatsApp veya telefon üzerinden bize ulaşın.");
      if (!(error instanceof Error && error.message === "invalid_phone")) window.dataLayer?.push({ event: "lead_fallback", lead_service: service, lead_source: "main_form" });
    }
  };

  return (
    <form className={`lead-form ${className}`.trim()} aria-describedby={noteId} onSubmit={submit}>
      <div className="form-heading"><span>{eyebrow}</span><strong>{title}</strong></div>
      <div className="field-row">
        <label>Adınız<input type="text" name="name" autoComplete="name" placeholder="Adınız" minLength={2} required /></label>
        <label>Telefon<input type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="05__ ___ __ __" minLength={10} required /></label>
      </div>
      <label>{messageLabel}<textarea name="note" placeholder="İlgilendiğiniz uygulamayı veya sorunuzu kısaca yazabilirsiniz." maxLength={1000} /></label>
      <label className="consent"><input type="checkbox" required /> <span><a href="https://neraclinic.com/kvkk/" target="_blank" rel="noopener">KVKK aydınlatma metnini</a> okudum; iletişim amacıyla aranmayı kabul ediyorum.</span></label>
      <label className="lead-honeypot" aria-hidden="true">Bu alanı boş bırakın<input type="text" name="hp_nera" tabIndex={-1} autoComplete="off" /></label>
      <button className="button button-submit" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "İletiliyor…" : submitLabel}<span className="arrow" aria-hidden="true">↗</span></button>
      <p id={noteId} className={`lead-status is-${status}`} aria-live="polite">{message}</p>
    </form>
  );
}
