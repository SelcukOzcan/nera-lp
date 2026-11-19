import Image from "next/image";
import HeroSlider from "./HeroSlider";
import LeadExperience from "./LeadExperience";
import BrandingPage from "./BrandingPage";
import FaceLiftPage from "./FaceLiftPage";
import HairTreatmentsPage from "./HairTreatmentsPage";
import SiteHeader from "./SiteHeader";
import LeadForm from "./LeadForm";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const evaluationItems = [
  { number: "01", title: "Cilt tonu", text: "Uygulama yaklaşımı ve enerji seviyesi, cildin güncel görünümüyle birlikte ele alınır." },
  { number: "02", title: "Kıl yapısı", text: "Kılın rengi, kalınlığı ve yoğunluğu teknoloji seçiminde belirleyici unsurlardandır." },
  { number: "03", title: "Uygulama bölgesi", text: "Yüz, bacak veya sırt gibi farklı bölgeler için aynı plan kullanılmaz." },
];

const processes = [
  ["01", "Tanışma", "Beklentiniz ve uygulama bölgesi konuşulur."],
  ["02", "Değerlendirme", "Cilt tonu ile kıl yapısı birlikte incelenir."],
  ["03", "Kişisel plan", "Uygun teknoloji ve seans aralığı planlanır."],
  ["04", "Uygulama", "Bakım bilgileri paylaşılır, süreç takip edilir."],
];

const faqs = [
  ["Kaç seans gerekir?", "Seans sayısı; cilt tonu, kıl yapısı, uygulama bölgesi ve kişisel yanıta göre değişebilir. Net plan ön değerlendirme sonrasında oluşturulur."],
  ["Alexandrite ile diode lazer arasındaki fark nedir?", "Teknolojilerin dalga boyu, uygulama biçimi ve ciltle etkileşimi farklıdır. Bu nedenle cihaz tercihi yalnızca popülerliğe göre değil, kişisel özelliklere göre değerlendirilmelidir."],
  ["Yaz döneminde uygulanabilir mi?", "Güneşe maruz kalma ve bronzluk durumu değerlendirilmelidir. Uygun zamanlama ve korunma önerileri kişiye göre paylaşılır."],
  ["Uygulama öncesinde nelere dikkat etmeliyim?", "Ağda veya cımbız gibi kökten alma yöntemlerinin bırakılması ve güneşten korunma gibi hazırlıklar gerekebilir. Size uygun hazırlık bilgisi görüşmede aktarılır."],
];

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

function LaserPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Nera Clinic",
    url: `https://pro.neraclinic.com${basePath || "/lazer-epilasyon"}/`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Şenlikköy, Florya Cd. No:47/1",
      addressLocality: "Bakırköy",
      addressRegion: "İstanbul",
      postalCode: "34153",
      addressCountry: "TR",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <SiteHeader variant="laser" />

      <main>
        <HeroSlider />

        <div className="content-shell">
        <section className="decision-rail" aria-label="Nera Clinic lazer epilasyon yaklaşımı">
          <article><span>01</span><div><strong>Kişisel ön değerlendirme</strong><p>Cilt tonu, kıl yapısı ve bölge birlikte ele alınır.</p></div></article>
          <article><span>02</span><div><strong>Üç teknoloji seçeneği</strong><p>Candela, Soprano ve Q-Switched seçenekleri.</p></div></article>
          <article><span>03</span><div><strong>Bölgeye göre plan</strong><p>Yüz ve vücut aynı parametrelerle ele alınmaz.</p></div></article>
          <article><span>04</span><div><strong>Florya&apos;da klinik ortamı</strong><p>Planlı ve kontrollü bir uygulama süreci.</p></div></article>
          <a href="#contact"><small>İlk adım</small>Size uygun yaklaşımı konuşalım <Arrow /></a>
        </section>

        <section className="assessment section reveal-section" id="yaklasim">
          <div className="assessment-copy">
            <p className="eyebrow"><span /> Kişisel lazer planınız</p>
            <h2>Önce cildinizi tanır,<br /><em>sonra teknolojiyi seçeriz.</em></h2>
            <p>Cilt tonu, kıl yapısı ve uygulama bölgesi birlikte değerlendirilir; teknoloji seçenekleri bu bütün doğrultusunda ele alınır.</p>
            <a className="text-link" href="#contact">Kişisel planınızı konuşalım <Arrow /></a>
          </div>

          <div className="assessment-stage">
            <div className="assessment-image">
              <Image src={`${basePath}/images/lazer-editorial.jpg`} alt="Lazer epilasyon öncesi klinik değerlendirme" fill sizes="(max-width: 700px) 100vw, 35vw" />
              <div className="assessment-image-note"><small>Nera yaklaşımı</small><strong>Üç veri.<br />Tek kişisel plan.</strong></div>
            </div>
            <div className="assessment-rail">
              {evaluationItems.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><i aria-hidden="true">↗</i>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="technology section" id="teknolojiler">
          <div className="technology-heading reveal-section">
            <div><p className="eyebrow light"><span /> Nera teknolojileri</p><h2>Üç teknoloji.<br /><em>Tek kişisel plan.</em></h2></div>
            <p>Teknoloji seçimi yalnızca cihaz adına göre değil; cilt tonu, kıl yapısı ve uygulama bölgesi birlikte değerlendirilerek yapılır.</p>
          </div>

          <div className="technology-stage reveal-section">
            <article className="device-panel device-panel-dark">
              <div className="device-meta"><span>01</span><small>Alexandrite teknolojisi</small></div>
              <div className="device-visual"><div className="device-glow" /><Image src={`${basePath}/images/candela.webp`} alt="Candela GentleLase Pro cihazı" fill sizes="(max-width: 860px) 90vw, 42vw" /></div>
              <div className="device-copy"><h3>Candela<br />GentleLase Pro</h3><p>Açık ten ve koyu kıl yapısında değerlendirilebilen, geniş uygulama alanlarında kullanılan bir seçenektir.</p><a href="#contact">Size uygunluğunu değerlendirin <Arrow /></a></div>
            </article>

            <article className="device-panel device-panel-light">
              <div className="device-meta"><span>02</span><small>Diode teknolojisi</small></div>
              <div className="device-visual"><div className="device-glow" /><Image src={`${basePath}/images/soprano.webp`} alt="Soprano ICE Platinum cihazı" fill sizes="(max-width: 860px) 90vw, 42vw" /></div>
              <div className="device-copy"><h3>Soprano ICE<br />Platinum</h3><p>Soğutma destekli uygulama yaklaşımıyla farklı cilt ve kıl özelliklerinde değerlendirilebilen bir alternatiftir.</p><a href="#contact">Size uygunluğunu değerlendirin <Arrow /></a></div>
            </article>

            <article className="device-panel device-panel-neutral">
              <div className="device-meta"><span>03</span><small>ND:YAG teknolojisi</small></div>
              <div className="device-visual"><div className="device-glow" /><Image src={`${basePath}/images/q-switched.webp`} alt="Q-Switched ND:YAG lazer cihazı" fill sizes="(max-width: 860px) 90vw, 30vw" /></div>
              <div className="device-copy"><h3>Q-Switched<br />ND:YAG</h3><p>Uygulama amacı ve bölgeye göre klinik değerlendirme kapsamında ele alınır. Lazer planındaki yeri, cilt ve kıl özellikleri doğrultusunda belirlenir.</p><a href="#contact">Size uygunluğunu değerlendirin <Arrow /></a></div>
            </article>
          </div>
          <p className="verification-note">Cihaz modelleri ve kullanım ifadeleri, yayından önce klinik tarafından doğrulanacaktır.</p>
        </section>

        <section className="process section reveal-section" id="surec">
          <div className="process-heading"><p className="eyebrow"><span /> Dört net adım</p><h2>Karardan uygulamaya,<br /><em>şeffaf bir süreç.</em></h2></div>
          <div className="process-path">
            {processes.map(([number, title, text]) => (
              <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </section>

        <section className="why section reveal-section" id="neden-nera">
          <div className="why-media">
            <video autoPlay muted loop playsInline preload="metadata" poster={`${basePath}/images/nera-clinic-poster.jpg`} aria-label="Nera Clinic Florya klinik tanıtım videosu">
              <source src={`${basePath}/images/nera-clinic-tour.mp4`} type="video/mp4" />
            </video>
            <div className="why-media-note"><span>Modern klinik deneyimi</span><small>Florya · İstanbul</small></div>
            <div className="why-location"><span>✦</span> Florya · İstanbul</div>
          </div>
          <div className="why-panel">
            <p className="eyebrow light"><span /> Neden Nera Clinic?</p>
            <h2>Teknolojiden önce<br /><em>sizi anlayan</em> bir yaklaşım.</h2>
            <p>Beklentiniz, cilt yapınız ve sürecin size uygunluğu açıkça konuşulur; planınız bu değerlendirmenin ardından oluşturulur.</p>
            <ul>
              <li><span>01</span><div><strong>Klinik değerlendirme</strong><small>İhtiyacınızı ve beklentinizi anlamaya odaklanan ilk görüşme.</small></div></li>
              <li><span>02</span><div><strong>Teknoloji alternatifleri</strong><small>Tek bir cihaz yerine kişisel özelliklere göre seçenekler.</small></div></li>
              <li><span>03</span><div><strong>Açık süreç iletişimi</strong><small>Hazırlık, uygulama ve bakım adımlarında net bilgilendirme.</small></div></li>
            </ul>
            <a className="button button-light why-button" href="#contact"><span>Nera ile tanışın</span><Arrow /></a>
          </div>
        </section>

        <section className="conversion section" id="contact">
          <div className="conversion-intro reveal-section">
            <p className="eyebrow light"><span /> İlk adımı birlikte atalım</p>
            <h2>Size uygun yaklaşımı<br /><em>birlikte değerlendirelim.</em></h2>
            <p>İletişim bilgilerinizi bırakın; ekibimiz ön değerlendirme ve randevu bilgileri için size ulaşsın.</p>
            <div className="address-card"><span>Florya / Bakırköy</span><strong>Şenlikköy, Florya Cd. No:47/1<br />34153 Bakırköy / İstanbul</strong></div>
          </div>

          <LeadForm
            className="reveal-section"
            eyebrow="Ücretsiz ön değerlendirme"
            selectLabel="İlgilendiğiniz bölge"
            selectName="area"
            options={["Yüz", "Koltuk altı", "Bacak", "Bikini bölgesi", "Sırt / göğüs", "Diğer"]}
            service="Lazer epilasyon"
            submitLabel="Ön Değerlendirme Talep Et"
            noteId="prototype-note"
          />
        </section>

        <section className="faq section" id="sss">
          <div className="faq-heading"><p className="eyebrow"><span /> Merak edilenler</p><h2>Kısa ve açık<br /><em>yanıtlar.</em></h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<i aria-hidden="true">+</i></summary><p>{answer}</p></details>
            ))}
          </div>
        </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <section className="footer-conversion" aria-labelledby="footer-title">
            <div>
              <span className="footer-eyebrow">Nera Clinic · Lazer Epilasyon</span>
              <h2 id="footer-title">Size uygun yaklaşım için <em>ilk adımı birlikte atalım.</em></h2>
              <p>Cilt tonu, kıl yapısı ve uygulama bölgeniz birlikte değerlendirilsin; size uygun teknoloji seçeneklerini net bir plan içinde konuşalım.</p>
            </div>
            <div className="footer-buttons">
              <a className="footer-button footer-button-primary" href="#contact"><span>Ücretsiz ön değerlendirme</span><Arrow /></a>
              <a className="footer-button" href="https://wa.me/905441149094?text=Merhaba%2C%20Nera%20Clinic%20lazer%20epilasyon%20%C3%B6n%20de%C4%9Ferlendirmesi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener"><span>WhatsApp ile görüşün</span><b aria-hidden="true">→</b></a>
            </div>
          </section>

          <div className="footer-main">
            <div className="footer-brand"><Image src={`${basePath}/images/nera-logo.webp`} alt="Nera Clinic" width={230} height={50} /><p>Kişisel değerlendirme, teknoloji seçenekleri ve açık süreç iletişimini bir araya getiren klinik yaklaşım.</p></div>
            <nav className="footer-links" aria-label="Lazer epilasyon sayfa bağlantıları"><span>Sayfa içeriği</span><a href="#yaklasim">Kişisel yaklaşım</a><a href="#teknolojiler">Teknolojiler</a><a href="#surec">Süreç</a><a href="#neden-nera">Neden Nera?</a><a href="#sss">Sık Sorulan Sorular</a><a href="#contact">Ön değerlendirme formu</a></nav>
            <div className="footer-contact"><span>İletişim</span><a href="tel:+905339220251"><small>Bilgi &amp; randevu</small>0533 922 02 51</a><a href="mailto:info@neraclinic.com"><small>E-posta</small>info@neraclinic.com</a><a href="https://maps.google.com/?q=%C5%9Eenlikk%C3%B6y,+Florya+Cd.+No:47/1,+34153+Bak%C4%B1rk%C3%B6y/%C4%B0stanbul" target="_blank" rel="noopener"><small>Florya · İstanbul</small>Şenlikköy, Florya Cd. No:47/1, Bakırköy</a></div>
          </div>

          <div className="footer-bottom"><p>Bu sayfadaki içerikler bilgilendirme amaçlıdır. Uygunluk ve uygulama planı kişiden kişiye değişebilir.</p><nav aria-label="Yasal bağlantılar"><a href="#">Gizlilik Politikası</a><span>© 2026 Nera Clinic</span></nav></div>
        </div>
      </footer>

      <LeadExperience />
    </>
  );
}

export default function Home() {
  const variant = process.env.NEXT_PUBLIC_SITE_VARIANT;
  return variant === "branding" ? <BrandingPage /> : variant === "face-lift" ? <FaceLiftPage /> : variant === "hair-treatments" ? <HairTreatmentsPage /> : <LaserPage />;
}
