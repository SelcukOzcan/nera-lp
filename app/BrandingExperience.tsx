"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { submitLead } from "./leadSubmission";

const DAY = 86_400_000;

function Icon({ type }: { type: "chat" | "whatsapp" | "phone" }) {
  if (type === "whatsapp") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" /><path fill="currentColor" d="M8.1 7.6c.2-.5.4-.5.8-.5h.4c.2 0 .4.1.5.4l1 2.3c.1.3.1.5-.1.7l-.8 1c.8 1.6 2.1 2.8 3.7 3.5l.9-1.1c.2-.2.4-.3.7-.1l2.2 1c.3.1.4.3.4.6v.4c0 .4-.1.7-.5.9-.7.4-1.5.6-2.3.5-3.8-.5-7.1-3.4-8-7.1-.2-.9.1-1.8.5-2.5Z" /></svg>;
  if (type === "phone") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" d="M7.2 3.5 9.7 7a1.4 1.4 0 0 1-.2 1.8l-1.3 1.1a14.6 14.6 0 0 0 5.9 5.9l1.1-1.3a1.4 1.4 0 0 1 1.8-.2l3.5 2.5a1.4 1.4 0 0 1 .4 1.7l-.7 1.6a2 2 0 0 1-1.8 1.2C9.7 21.3 2.7 14.3 2.7 5.6a2 2 0 0 1 1.2-1.8l1.6-.7a1.4 1.4 0 0 1 1.7.4Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.8 8.8 0 0 1-3.2-.6L4 20l1.5-4.2A7.5 7.5 0 1 1 20 11.5Z" /><circle cx="9" cy="11.5" r="1" fill="currentColor" /><circle cx="12" cy="11.5" r="1" fill="currentColor" /><circle cx="15" cy="11.5" r="1" fill="currentColor" /></svg>;
}

export default function BrandingExperience({ variant = "branding" }: { variant?: "branding" | "faceLift" | "hairTreatments" }) {
  const isFaceLift = variant === "faceLift";
  const isHairTreatments = variant === "hairTreatments";
  const popupKey = isFaceLift ? "nera-face-lift-popup-until" : isHairTreatments ? "nera-hair-treatments-popup-until" : "nera-branding-popup-until";
  const whatsappText = encodeURIComponent(isFaceLift
    ? "Merhaba, Nera Clinic ameliyatsız yüz germe yaklaşımı hakkında bilgi almak istiyorum."
    : isHairTreatments
      ? "Merhaba, Nera Clinic saç tedavileri ve saç eksozomu hakkında bilgi almak istiyorum."
      : "Merhaba, Nera Clinic hizmetleri hakkında bilgi almak istiyorum.");
  const eyebrow = isFaceLift ? "Ameliyatsız yüz germe" : isHairTreatments ? "Saç değerlendirmesi" : "Kişisel görüşme";
  const title = isFaceLift
    ? <>Yüzünüzün ihtiyacını konuşalım,<br />kişisel planı değerlendirelim.</>
    : isHairTreatments
      ? <>Saç dökülmesini konuşalım,<br />doğru yaklaşımı değerlendirelim.</>
      : <>İhtiyacınızı dinleyelim,<br />doğru görüşmeyi planlayalım.</>;
  const intro = isFaceLift
    ? "Bilgilerinizi bırakın; ekibimiz uygulama seçenekleri ve hekim görüşmesi için size ulaşsın."
    : isHairTreatments
      ? "Bilgilerinizi bırakın; ekibimiz saç sağlığı değerlendirmesi ve uygulama seçenekleri için size ulaşsın."
      : "Bilgilerinizi bırakın; ekibimiz ilgilendiğiniz hizmet ve randevu seçenekleri için size ulaşsın.";
  const proof = isFaceLift ? "Hekim değerlendirmesi · Kişisel plan" : isHairTreatments ? "Saçlı deri değerlendirmesi · Kişisel plan" : "Saç · Cilt · Medikal estetik";
  const submitLabel = isFaceLift ? "Bilgi ve görüşme talebi" : isHairTreatments ? "Saç değerlendirmesi talebi" : "Görüşme talebi oluştur";
  const floatingLabel = isFaceLift ? "Bilgi Alın" : isHairTreatments ? "Saç Analizi" : "Görüşme Planla";
  const service = isFaceLift ? "Ameliyatsız yüz germe" : isHairTreatments ? "Saç tedavileri" : "Nera Clinic";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const remember = useCallback(() => { try { localStorage.setItem(popupKey, String(Date.now() + DAY)); } catch {} }, [popupKey]);
  const open = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    openerRef.current = document.activeElement as HTMLElement | null;
    remember();
    dialog.showModal();
    requestAnimationFrame(() => dialog.querySelector<HTMLElement>("h2")?.focus());
  }, [remember]);
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    let suppressed = false;
    try { suppressed = Number(localStorage.getItem(popupKey)) > Date.now(); } catch {}
    if (suppressed) return;
    let seconds = 0;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      seconds += 1;
      const engaged = window.scrollY > Math.min(700, document.documentElement.scrollHeight * 0.14);
      const editing = document.activeElement?.matches("input, textarea, select, [contenteditable=true]");
      if (seconds >= 24 && engaged && !editing) { window.clearInterval(timer); open(); }
    }, 1000);
    return () => window.clearInterval(timer);
  }, [open, popupKey]);

  const continueInForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus("submitting");
    setMessage("");
    try {
      await submitLead({ name: String(data.get("popup-name") ?? ""), phone: String(data.get("popup-phone") ?? ""), service, note: String(data.get("popup-note") ?? ""), formLocation: `${service} popup`, source: "popup" });
      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error && error.message === "invalid_phone" ? "Lütfen telefon numaranızı girin." : "Talebiniz şu anda iletilemedi. Lütfen WhatsApp veya telefon üzerinden bize ulaşın.");
      if (!(error instanceof Error && error.message === "invalid_phone")) window.dataLayer?.push({ event: "lead_fallback", lead_service: service, lead_source: "popup" });
    }
  };

  return <>
    <dialog className="analysis-dialog brand-dialog" ref={dialogRef} onClose={() => openerRef.current?.focus({ preventScroll: true })} onClick={(event) => { if (event.target === dialogRef.current) close(); }} aria-labelledby="brand-dialog-title">
      <button className="analysis-close" type="button" onClick={close} aria-label="Pencereyi kapat">×</button>
      <div className="analysis-intro"><span className="analysis-brand">Nera Clinic · Florya / Bakırköy</span><span className="analysis-eyebrow">{eyebrow}</span><h2 id="brand-dialog-title" tabIndex={-1}>{title}</h2><p>{intro}</p><div className="analysis-proof">{proof}</div></div>
      {status === "success" ? <div className="analysis-body analysis-success"><p id="nera-popup-lead-success" className="lead-status is-success" aria-live="polite">Talebiniz alındı. Nera Clinic ekibi sizinle iletişime geçecek.</p></div> : <form className="analysis-body" onSubmit={continueInForm}><label>Adınız soyadınız<input name="popup-name" type="text" autoComplete="name" placeholder="Ad Soyad" minLength={2} required /></label><label>Telefon numaranız<input name="popup-phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Telefon numaranız" required /></label><label>Notunuz<textarea name="popup-note" placeholder="İlgilendiğiniz uygulamayı veya sorunuzu kısaca yazabilirsiniz." maxLength={1000} /></label><label className="analysis-consent"><input type="checkbox" required /><span><a href="https://neraclinic.com/kvkk/" target="_blank" rel="noopener">KVKK aydınlatma metnini</a> okudum; iletişim amacıyla aranmayı kabul ediyorum.</span></label><button className="analysis-submit" type="submit" disabled={status === "submitting"}><span>{status === "submitting" ? "İletiliyor…" : submitLabel}</span><span aria-hidden="true">↗</span></button>{status === "error" && <p className="lead-status is-error" aria-live="polite">{message}</p>}<p>Bilgileriniz güvenli biçimde Nera Clinic ekibine iletilir.</p><a className="analysis-whatsapp" href={`https://wa.me/905441149094?text=${whatsappText}`} target="_blank" rel="noopener">WhatsApp&apos;tan yazmayı tercih ederim</a></form>}
    </dialog>
    <nav className="floating-actions" aria-label="Hızlı iletişim"><button className="floating-analysis" type="button" onClick={open} aria-haspopup="dialog"><Icon type="chat" /><span>{floatingLabel}</span></button><a className="floating-whatsapp" href={`https://wa.me/905441149094?text=${whatsappText}`} target="_blank" rel="noopener" aria-label="WhatsApp ile iletişim"><Icon type="whatsapp" /><span>WhatsApp</span></a><a className="floating-call" href="tel:+905339220251" aria-label="Nera Clinic'i ara"><Icon type="phone" /><span>Hemen Ara</span></a></nav>
  </>;
}
