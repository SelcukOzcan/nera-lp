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
  let phone = rawPhone.replace(/\D/g, "");
  if (phone.startsWith("90") && phone.length === 12) phone = phone.slice(2);
  if (phone.startsWith("0")) phone = phone.slice(1);
  if (!/^5\d{9}$/.test(phone)) throw new Error("invalid_phone");

  const payload = new FormData();
  payload.set("ad_soyad", name.trim());
  payload.set("telefon", `0${phone}`);
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
