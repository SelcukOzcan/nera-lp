import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
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
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
