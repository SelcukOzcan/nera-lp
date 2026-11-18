import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const menus = {
  laser: [
    ["Yaklaşım", "#yaklasim"], ["Teknolojiler", "#teknolojiler"], ["Süreç", "#surec"], ["Neden Nera?", "#neden-nera"], ["SSS", "#sss"],
  ],
  branding: [
    ["Nera", "#nera"], ["Hizmetler", "#hizmetler"], ["Hekimler", "#hekimler"], ["Klinik", "#klinik"], ["SSS", "#sss"],
  ],
  faceLift: [
    ["Yaklaşım", "#yaklasim"], ["Kombinasyon", "#kombinasyon"], ["Uygulamalar", "#uygulamalar"], ["Hekim", "#hekim"], ["SSS", "#sss"],
  ],
};

export default function SiteHeader({ variant }: { variant: keyof typeof menus }) {
  return <>
    <div className="site-topbar">
      <a href="https://maps.google.com/?q=%C5%9Eenlikk%C3%B6y,+Florya+Cd.+No:47/1,+34153+Bak%C4%B1rk%C3%B6y/%C4%B0stanbul" target="_blank" rel="noopener"><span aria-hidden="true">⌖</span> Şenlikköy, Florya Cd. No:47/1 · Bakırköy</a>
      <a href="mailto:info@neraclinic.com"><span aria-hidden="true">✉</span> info@neraclinic.com</a>
      <a href="tel:+905339220251"><span aria-hidden="true">◌</span> 0533 922 02 51</a>
    </div>
    <header className={`site-header ${variant !== "laser" ? "brand-header" : ""}`}>
      <a className="brand" href="#top" aria-label="Nera Clinic sayfa başı">
        <Image src={`${basePath}/images/nera-logo.webp`} alt="Nera Clinic" width={220} height={48} preload />
      </a>
      <nav className="desktop-nav" aria-label="Sayfa menüsü">
        {menus[variant].map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="header-phone" href="tel:+905339220251"><small>Bilgi &amp; randevu</small><strong>0533 922 02 51</strong></a>
        <a className="header-cta" href="#contact">{variant === "laser" ? "Ücretsiz ön değerlendirme" : variant === "faceLift" ? "Bilgi alın" : "Görüşme planlayın"} <span className="arrow" aria-hidden="true">↗</span></a>
      </div>
      <details className="mobile-menu">
        <summary aria-label="Menüyü aç"><span /><span /></summary>
        <nav aria-label="Mobil menü">
          {menus[variant].map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a href="#contact">{variant === "laser" ? "Ücretsiz ön değerlendirme" : variant === "faceLift" ? "Bilgi alın" : "Görüşme planlayın"}</a>
        </nav>
      </details>
    </header>
  </>;
}
