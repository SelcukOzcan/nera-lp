"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
  className?: string;
  eyebrow: string;
  title?: string;
  selectLabel: string;
  selectName: string;
  options: string[];
  service: string;
  submitLabel: string;
  noteId: string;
};

const trackingKeys = ["gclid", "gbraid", "wbraid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

export default function LeadForm({
  className = "",
  eyebrow,
  title = "Size ulaşalım",
  selectLabel,
  selectName,
  options,
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

    let phone = String(data.get("phone") ?? "").replace(/\D/g, "");
    if (phone.startsWith("90") && phone.length === 12) phone = phone.slice(2);
    if (phone.startsWith("0")) phone = phone.slice(1);
    if (!/^5\d{9}$/.test(phone)) {
      setStatus("error");
      setMessage("Lütfen telefon numaranızı 05XX XXX XX XX biçiminde kontrol edin.");
      return;
    }

    const selected = String(data.get(selectName) ?? "Genel bilgi");
    const payload = new FormData();
    payload.set("ad_soyad", String(data.get("name") ?? "").trim());
    payload.set("telefon", `0${phone}`);
    payload.set("konu", `${service} · ${selected}`);
    payload.set("iletisim_tercihi", "Telefon");
    payload.set("form_konumu", `${service} ana form`);
    payload.set("sayfa", window.location.href);
    payload.set("kvkk_acik_riza", "evet");

    const search = new URLSearchParams(window.location.search);
    trackingKeys.forEach((key) => {
      const value = search.get(key);
      if (value) payload.set(key, value);
    });

    setStatus("submitting");
    setMessage("Talebiniz iletiliyor…");

    try {
      const response = await fetch("/lead.php", { method: "POST", body: payload, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Lead request failed");

      setStatus("success");
      setMessage("Talebiniz alındı. Nera Clinic ekibi sizinle iletişime geçecek.");
      form.reset();
      window.dataLayer?.push({ event: "generate_lead", lead_service: service, lead_topic: selected });
    } catch {
      setStatus("error");
      setMessage("Talebiniz şu anda iletilemedi. Lütfen WhatsApp veya telefon üzerinden bize ulaşın.");
      window.dataLayer?.push({ event: "lead_fallback", lead_service: service });
    }
  };

  return (
    <form className={`lead-form ${className}`.trim()} aria-describedby={noteId} onSubmit={submit}>
      <div className="form-heading"><span>{eyebrow}</span><strong>{title}</strong></div>
      <div className="field-row">
        <label>Adınız<input type="text" name="name" autoComplete="name" placeholder="Adınız" minLength={2} required /></label>
        <label>Telefon<input type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="05__ ___ __ __" minLength={10} required /></label>
      </div>
      <label>{selectLabel}
        <select name={selectName} defaultValue="" required><option value="" disabled>Seçiniz</option>{options.map((option) => <option key={option}>{option}</option>)}</select>
      </label>
      <label className="consent"><input type="checkbox" required /> <span><a href="https://neraclinic.com/kvkk/" target="_blank" rel="noopener">KVKK aydınlatma metnini</a> okudum; iletişim amacıyla aranmayı kabul ediyorum.</span></label>
      <label className="lead-honeypot" aria-hidden="true">Bu alanı boş bırakın<input type="text" name="hp_nera" tabIndex={-1} autoComplete="off" /></label>
      <button className="button button-submit" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "İletiliyor…" : submitLabel}<span className="arrow" aria-hidden="true">↗</span></button>
      <p id={noteId} className={`lead-status is-${status}`} aria-live="polite">{message}</p>
    </form>
  );
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}
