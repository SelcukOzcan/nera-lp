import type { Metadata } from "next";
import "./globals.css";

const isBranding = process.env.NEXT_PUBLIC_SITE_VARIANT === "branding";

export const metadata: Metadata = isBranding ? {
  metadataBase: new URL("https://pro.neraclinic.com"),
  title: "Nera Clinic İstanbul & Bakırköy | Saç, Cilt ve Medikal Estetik",
  description:
    "Nera Clinic Florya, Bakırköy'de saç sağlığı, medikal estetik ve cilt bakım uygulamalarını kişisel değerlendirmeyle ele alan klinik yaklaşım.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Nera Clinic İstanbul · Florya / Bakırköy",
    description: "Saç, cilt ve medikal estetik uygulamalarında kişisel değerlendirme odaklı klinik yaklaşım.",
    locale: "tr_TR",
    type: "website",
  },
} : {
  metadataBase: new URL("https://pro.neraclinic.com"),
  title: "Lazer Epilasyon Florya | Nera Clinic",
  description:
    "Nera Clinic'te lazer epilasyon yaklaşımı; cilt tonu, kıl yapısı ve uygulama bölgesi dikkate alınarak kişiye göre değerlendirilir.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Lazer Epilasyon | Nera Clinic",
    description:
      "Cildiniz ve kıl yapınız için uygun lazer yaklaşımını birlikte değerlendirelim.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
