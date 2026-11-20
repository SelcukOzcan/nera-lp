type LeadSubmission = {
  name: string;
  phone: string;
  service: string;
  note?: string;
  formLocation: string;
  source: "main_form" | "popup";
};

const trackingKeys = ["gclid", "gbraid", "wbraid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

export async function submitLead({ name, phone: rawPhone, service, note = "", formLocation, source }: LeadSubmission) {
  const phone = rawPhone.trim();
  if (!phone) throw new Error("invalid_phone");
  const digits = phone.replace(/\D/g, "");
  const serverPhone = digits.startsWith("90") && digits.length === 12 ? `0${digits.slice(2)}` : digits.length === 10 ? `0${digits}` : digits;

  const payload = new FormData();
  payload.set("ad_soyad", name.trim());
  payload.set("telefon", serverPhone);
  payload.set("konu", service);
  payload.set("not", note.trim());
  payload.set("iletisim_tercihi", "Telefon");
  payload.set("form_konumu", formLocation);
  payload.set("sayfa", window.location.href);
  payload.set("kvkk_acik_riza", "evet");

  const search = new URLSearchParams(window.location.search);
  trackingKeys.forEach((key) => {
    const value = search.get(key);
    if (value) payload.set(key, value);
  });

  const response = await fetch("/lead.php", { method: "POST", body: payload, headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error("request_failed");

  window.dataLayer?.push({ event: "generate_lead", lead_service: service, lead_source: source });
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}
