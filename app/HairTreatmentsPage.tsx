import Image from "next/image";
import BrandHeroSlider, { BrandHeroSlide } from "./BrandHeroSlider";
import BrandServicesCarousel from "./BrandServicesCarousel";
import BrandingExperience from "./BrandingExperience";
import SiteHeader from "./SiteHeader";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const whatsapp = "https://wa.me/905441149094?text=Merhaba%2C%20Nera%20Clinic%20sa%C3%A7%20tedavileri%20ve%20sa%C3%A7%20eksozomu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";
const hairTransplantUrl = "https://hair.neraclinic.com/";

const heroSlides: BrandHeroSlide[] = [
  {
    image: "hair-treatments/hero-scalp-analysis-v2.jpg",
    alt: "Saç dökülmesi ve saçlı deri değerlendirmesi",
    eyebrow: "Saç sağlığı",
    title: "Dökülme tipine göre planlanan yaklaşım",
    position: "48% center",
  },
  {
    image: "branding/dr-mehmet-dogruer.webp",
    alt: "Dr. Mehmet Doğruer Nera Clinic",
    eyebrow: "Hekim değerlendirmesi",
    title: "Saçın ihtiyacını anlayan kişisel plan",
    position: "40% 47%",
  },
  {
    image: "clinic-reception-hq.jpg",
    alt: "Nera Clinic Florya kliniği",
    eyebrow: "Nera Clinic yaklaşımı",
    title: "Değerlendirmeden takibe aynı klinik yaklaşım",
    position: "center 46%",
  },
];

const services = [
  {
    number: "01",
    title: "Saç Mezoterapisi",
    text: "Saçlı deriye uygulanan içerik ve seans planı; dökülme tipi, saçlı deri bulguları ve kişisel ihtiyaç doğrultusunda değerlendirilir.",
    image: "mesotherapy-v2.jpg",
    position: "center",
  },
  {
    number: "02",
    title: "Saç Eksozomu",
    text: "Eksozom temelli içerikler, saçlı derinin güncel ihtiyacı ve kişinin medikal öyküsü göz önünde bulundurularak planlanır.",
    image: "exosome-official.jpg",
    position: "48% center",
  },
  {
    number: "03",
    title: "PrimeHair",
    text: "Saç mezoterapisi kapsamında değerlendirilebilen PrimeHair içeriği, herkese aynı protokol yerine kişisel plana göre ele alınır.",
    image: "primehair-official.jpg",
    position: "45% center",
  },
  {
    number: "04",
    title: "Saç Lazeri",
    text: "Düşük seviyeli lazer yaklaşımı, saçlı deri ve mevcut saç köklerinin durumu değerlendirilerek destekleyici bir seçenek olarak planlanabilir.",
    image: "hair-laser-v2.jpg",
    position: "center",
  },
  {
    number: "05",
    title: "DPG Tedavisi",
    text: "DPG uygulaması; saç dökülmesinin nedeni, saçlı deri yapısı ve eşlik eden ihtiyaçlar doğrultusunda değerlendirilir.",
    image: "dpg-official.jpg",
    position: "center",
  },
];

const faqs = [
  [
    "Saç dökülmesinde herkes için aynı uygulama mı önerilir?",
    "Hayır. Dökülmenin süresi, tipi, saçlı derinin durumu, kişinin medikal öyküsü ve mevcut saç kökleri birlikte değerlendirilir. Uygulama veya kombinasyon bu değerlendirmeden sonra netleşir.",
  ],
  [
    "Saç eksozomu nedir?",
    "Saçlı deriye yönelik eksozom temelli içeriklerin kullanıldığı uygulama başlığıdır. Ürün içeriği, uygulama sıklığı ve kişiye uygunluk hekim görüşmesinde değerlendirilir; sonuçlar kişiden kişiye değişebilir.",
  ],
  [
    "Saç kıran için bu uygulamalardan biri doğrudan seçilebilir mi?",
    "Saç kıran olarak bilinen alopesi areata, önce tıbbi değerlendirme gerektirir. Tanı ve güncel bulgular netleşmeden kozmetik bir protokol seçilmez; uygun yaklaşım hekim tarafından belirlenir.",
  ],
  [
    "PrimeHair, PrimeStar ve Altın Eksozom aynı uygulama mıdır?",
    "Hayır. İsimler farklı içerik veya protokol seçeneklerini ifade edebilir. Saçlı deri için uygun içerik ve uygulama planı; ürün adına göre değil, kişisel değerlendirme sonucuna göre seçilir.",
  ],
  [
    "Saç tedavileri ile saç ekimi arasındaki fark nedir?",
    "Saç tedavileri mevcut saç ve saçlı deri ihtiyacına yönelik cerrahi olmayan seçeneklerdir. Saç ekimi ayrı bir planlama ve uygulama sürecidir. İleri düzey kayıplarda uygun seçenek hekim değerlendirmesiyle konuşulur.",
  ],
];

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

export default function HairTreatmentsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Nera Clinic",
    url: "https://pro.neraclinic.com/v2/sac-tedavileri/",
    telephone: "+90 533 922 02 51",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Şenlikköy, Florya Cd. No:47/1",
      addressLocality: "Bakırköy",
      addressRegion: "İstanbul",
      postalCode: "34153",
      addressCountry: "TR",
    },
  };

  return <div className="brand-page lift-page hair-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <SiteHeader variant="hairTreatments" />

    <main>
      <section className="lift-hero hair-hero" id="top">
        <div className="lift-hero-copy">
          <p className="eyebrow"><span /> Nera Clinic · Saç tedavileri</p>
          <h1><span>Saç dökülmesinde</span><em>önce nedeni,</em><span>sonra doğru yaklaşımı.</span></h1>
          <p>Saç mezoterapisi, saç eksozomu, PrimeHair, saç lazeri ve DPG seçeneklerini; saçlı deri, dökülme tipi ve kişisel ihtiyacınız doğrultusunda hekim değerlendirmesiyle ele alıyoruz.</p>
          <div className="lift-hero-actions">
            <a className="button button-primary" href="#contact">Saç değerlendirmesi planlayın <Arrow /></a>
            <a className="text-link" href="#uygulamalar">Uygulamaları keşfedin <span aria-hidden="true">↓</span></a>
          </div>
          <div className="lift-hero-notes"><span>Hekim değerlendirmesi</span><span>Kişisel uygulama planı</span><span>Saçlı deri odağı</span></div>
        </div>
        <BrandHeroSlider slides={heroSlides} />
      </section>

      <div className="lift-trust-rail hair-trust-rail" aria-label="Nera Clinic saç sağlığı yaklaşımı">
        <div><span>01</span><strong>Dökülme tipini anlamak</strong><small>Ne kadar değil, neden ve nasıl döküldüğü önemlidir.</small></div>
        <div><span>02</span><strong>Saçlı deriyi değerlendirmek</strong><small>Mevcut saç, deri bulguları ve geçmiş birlikte ele alınır.</small></div>
        <div><span>03</span><strong>Kişisel plan oluşturmak</strong><small>Herkese aynı ürün veya aynı seans düzeni uygulanmaz.</small></div>
        <a href="#contact"><small>İlk adım</small><strong>Saçınızı konuşalım</strong><Arrow /></a>
      </div>

      <div className="brand-content-shell hair-content-shell">
        <section className="brand-section hair-needs" id="yaklasim">
          <div className="hair-section-heading">
            <div><p className="eyebrow"><span /> Dökülmenin nedeni önemlidir</p><h2>Görünen dökülmenin altında<br /><em>farklı ihtiyaçlar olabilir.</em></h2></div>
            <p>Saç kaybını yalnızca yoğunluk üzerinden değerlendirmiyoruz. Başlangıç zamanı, dökülme şekli, saçlı deri bulguları ve medikal öykü; doğru yönlendirme için birlikte ele alınır.</p>
          </div>
          <div className="hair-needs-grid">
            <article className="hair-needs-visual">
              <Image src={`${basePath}/images/hair-treatments/exosome-official.jpg`} alt="Saç dökülmesi yaşayan kişinin saç çizgisini değerlendirmesi" fill sizes="(max-width: 960px) 100vw, 50vw" />
              <div className="hair-card-shade" />
              <span>Saç sağlığı değerlendirmesi</span>
              <h3>Önce mevcut tabloyu anlayalım.</h3>
            </article>
            <article><span>01</span><h3>Yaygın dökülme &amp; incelme</h3><p>Saçın genelinde seyrelme, tel kalitesinde değişim ve dökülme süresi birlikte değerlendirilir.</p></article>
            <article><span>02</span><h3>Mevsimsel &amp; stres ilişkili dökülme</h3><p>Dönemsel değişimler ve yaşam öyküsü, uygun destek planından önce konuşulur.</p></article>
            <article><span>03</span><h3>Saçlı deri dengesi</h3><p>Yağlanma, kuruluk, hassasiyet ve eşlik eden saçlı deri bulguları göz ardı edilmez.</p></article>
            <article className="hair-needs-medical"><span>04</span><h3>Saç kıran · Alopesi areata</h3><p>Kozmetik bir uygulama seçmeden önce tanı ve güncel bulgular için doğrudan hekim değerlendirmesi gerekir.</p><a href="#contact">Hekim görüşmesi <Arrow /></a></article>
          </div>
        </section>

        <section className="brand-services brand-section hair-services" id="uygulamalar">
          <div className="brand-section-heading">
            <div><p className="eyebrow"><span /> Saç sağlığı uygulamaları</p><h2>Beş farklı seçenek.<br /><em>Tek bir kişisel plan.</em></h2></div>
            <p>Uygulamalar paket olarak değil, saçlı derinizin ve dökülme tipinizin ihtiyaçlarına yanıt verebilecek seçenekler olarak değerlendirilir.</p>
          </div>
          <BrandServicesCarousel services={services} folder="hair-treatments" ctaLabel="Bilgi alın" />
          <p className="hair-disclaimer">Uygulama adları genel bilgilendirme amaçlıdır. Uygunluk, içerik ve seans planı hekim görüşmesinde kişiye özel olarak değerlendirilir.</p>
        </section>

        <section className="brand-section hair-mesotherapy" id="mezoterapi">
          <div className="hair-mesotherapy-visual">
            <Image src={`${basePath}/images/hair-treatments/mesotherapy-v2.jpg`} alt="Saç mezoterapisi uygulama alanı" fill sizes="(max-width: 960px) 100vw, 50vw" />
            <div className="hair-card-shade" />
            <div><small>İçerik seçimi kişiye göre yapılır</small><strong>Saç mezoterapisi uygulamaları</strong></div>
          </div>
          <div className="hair-mesotherapy-copy">
            <p className="eyebrow light"><span /> Mezoterapi seçenekleri</p>
            <h2>Ürün adından önce,<br /><em>saçlı derinin ihtiyacı.</em></h2>
            <p>Mezoterapi başlığı altında farklı içerikler ve protokoller değerlendirilebilir. Seçim; popüler bir isme göre değil, saçlı deri bulgularına ve hekim değerlendirmesine göre yapılır.</p>
            <ol>
              <li><span>01</span><div><h3>PrimeHair</h3><p>Saç sağlığı odağında değerlendirilen özel mezoterapi içeriği.</p></div></li>
              <li><span>02</span><div><h3>PrimeStar</h3><p>İçerik ve saçlı deri için uygunluğu, kişisel değerlendirmede ayrıca netleştirilen seçenek.</p></div></li>
              <li><span>03</span><div><h3>Altın Eksozom</h3><p>Eksozom temelli içerik seçeneği; ürün içeriği ve uygulama planı kişiye göre değerlendirilir.</p></div></li>
            </ol>
            <a className="button button-light" href="#contact">Uygun seçeneği konuşalım <Arrow /></a>
          </div>
        </section>

        <section className="brand-section hair-why" id="neden-nera">
          <div className="hair-why-visual">
            <Image src={`${basePath}/images/clinic-reception-hq.jpg`} alt="Nera Clinic Florya kliniği" fill sizes="(max-width: 960px) 100vw, 50vw" />
            <div className="hair-card-shade" />
            <span>Florya · İstanbul</span>
          </div>
          <div className="hair-why-copy">
            <p className="eyebrow light"><span /> Neden Nera Clinic?</p>
            <h2>Tek bir uygulama değil,<br /><em>bütüncül bir klinik yaklaşımı.</em></h2>
            <p>Saç dökülmesini yalnızca görünen yoğunluk üzerinden değil; saçlı deri, dökülme öyküsü, mevcut kökler ve kişisel beklentiyle birlikte ele alıyoruz.</p>
            <ol>
              <li><span>01</span><div><h3>Doğrudan hekim değerlendirmesi</h3><p>Uygunluk ve uygulama planı, saç sağlığı odağında hekim tarafından değerlendirilir.</p></div></li>
              <li><span>02</span><div><h3>Kişiye göre şekillenen plan</h3><p>Ürün adına veya hazır pakete değil, saçınızın güncel ihtiyacına odaklanılır.</p></div></li>
              <li><span>03</span><div><h3>Uygulamadan takibe süreklilik</h3><p>Plan, uygulama ve sonraki adımlar aynı klinik yaklaşım içinde açıkça paylaşılır.</p></div></li>
            </ol>
            <a className="button button-light" href="#contact">Nera ile tanışın <Arrow /></a>
          </div>
        </section>

        <section className="brand-doctors brand-section hair-doctors" id="hekimler">
          <div className="brand-section-heading">
            <div><p className="eyebrow"><span /> Nera Clinic hekimleri</p><h2>Saç sağlığında ana odağımız:<br /><em>hekim değerlendirmesi.</em></h2></div>
            <p>Saç dökülmesi tek başına estetik bir başlık değildir. Saç sağlığı odağında Dr. Mehmet Doğruer; bütüncül medikal estetik yaklaşımında Dr. Nuran Erdağı ile ilerleyen Nera Clinic ekibi sizi dinleyerek başlar.</p>
          </div>
          <div className="brand-doctor-grid">
            <article>
              <div className="brand-doctor-image"><Image src={`${basePath}/images/branding/dr-mehmet-dogruer.webp`} alt="Dr. Mehmet Doğruer" fill sizes="(max-width: 700px) 100vw, 36vw" /></div>
              <div className="brand-doctor-copy"><span>Saç sağlığı &amp; saç ekimi</span><h3>Dr. Mehmet<br />Doğruer</h3><p>Saç dökülmesini; saçlı deri, mevcut saç kökleri, dökülme öyküsü ve kişisel beklentiyle birlikte değerlendirerek uygun yaklaşımın planlanmasına odaklanır.</p><a href="#contact">Görüşme talebi <Arrow /></a></div>
            </article>
            <article>
              <div className="brand-doctor-image"><Image src={`${basePath}/images/branding/dr-nuran-erdagi.jpg`} alt="Dr. Nuran Erdağı" fill sizes="(max-width: 700px) 100vw, 28vw" /></div>
              <div className="brand-doctor-copy"><span>Medikal estetik</span><h3>Dr. Nuran<br />Erdağı</h3><p>Kişinin genel ihtiyacını, medikal öyküsünü ve bütüncül klinik planı birlikte ele alan Nera Clinic yaklaşımını destekler.</p><a href="#contact">Nera ile tanışın <Arrow /></a></div>
            </article>
          </div>
        </section>

        <section className="brand-section hair-transplant" id="sac-ekimi">
          <div className="hair-transplant-copy">
            <p className="eyebrow light"><span /> Saç tedavisi mi, saç ekimi mi?</p>
            <h2>Her saç kaybı aynı yoldan<br /><em>ilerlemek zorunda değil.</em></h2>
            <p>Saç tedavileri mevcut saç ve saçlı deriye yönelik cerrahi olmayan seçenekleri kapsar. İleri düzey saç kaybında ise saç ekimi ayrı bir değerlendirme ve planlama sürecidir.</p>
            <p>Saç ekimi sürecini, yöntemleri ve doktor uygulamasını ayrıntılı incelemek için özel saç ekimi sayfamızı ziyaret edebilirsiniz.</p>
            <a className="button button-light" href={hairTransplantUrl} target="_blank" rel="noopener">Saç ekimi sayfasını inceleyin <Arrow /></a>
          </div>
          <a className="hair-transplant-visual" href={hairTransplantUrl} target="_blank" rel="noopener" aria-label="Nera Clinic saç ekimi sayfasını aç">
            <Image src={`${basePath}/images/hair-treatments/hair-transplant-v2.jpg`} alt="Saç ekimi için saç çizgisi değerlendirmesi" fill sizes="(max-width: 960px) 100vw, 50vw" />
            <div className="hair-card-shade" />
            <span>hair.neraclinic.com <Arrow /></span>
          </a>
        </section>

        <section className="brand-process brand-section hair-process" id="surec">
          <div><p className="eyebrow"><span /> Değerlendirmeden takibe</p><h2>Dört adımda<br /><em>açık bir süreç.</em></h2><p>İlk görüşmede uygulama adı seçmek yerine, saçınızın güncel ihtiyacını anlamaya odaklanırız.</p></div>
          <ol>
            <li><span>01</span><div><h3>Dökülme öykünüzü dinleriz</h3><p>Başlangıç zamanı, değişim şekli, yaşam öyküsü ve beklentiniz konuşulur.</p></div></li>
            <li><span>02</span><div><h3>Hekim değerlendirir</h3><p>Saçlı deri, mevcut saç kökleri ve eşlik eden bulgular doğrudan hekim tarafından ele alınır.</p></div></li>
            <li><span>03</span><div><h3>Kişisel plan netleşir</h3><p>Uygun seçenekler, sınırlılıklar ve olası seans düzeni açık biçimde paylaşılır.</p></div></li>
            <li><span>04</span><div><h3>Uygulama ve takip yapılır</h3><p>Planlanan yaklaşım uygulanır; takip aralığı ve günlük bakım bilgileri aktarılır.</p></div></li>
          </ol>
        </section>

        <section className="brand-faq brand-section hair-faq" id="sss">
          <div><p className="eyebrow"><span /> Merak edilenler</p><h2>Karar vermeden önce<br /><em>kısa ve açık yanıtlar.</em></h2></div>
          <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<i aria-hidden="true">+</i></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className="brand-conversion brand-section hair-contact" id="contact">
          <div className="brand-conversion-copy">
            <p className="eyebrow light"><span /> Saç değerlendirmesi</p>
            <h2>Dökülmeyi konuşalım,<br /><em>doğru yaklaşımı birlikte değerlendirelim.</em></h2>
            <p>Bilgilerinizi bırakın; ekibimiz saç sağlığı uygulamaları ve hekim görüşmesi için size ulaşsın.</p>
            <div className="brand-contact-actions"><a href="tel:+905339220251"><span aria-hidden="true">↗</span><small>Telefon</small><strong>Hemen arayın</strong></a><a className="is-whatsapp" href={whatsapp} target="_blank" rel="noopener"><span aria-hidden="true">↗</span><small>WhatsApp</small><strong>Mesaj gönderin</strong></a><a href="https://maps.google.com/?q=%C5%9Eenlikk%C3%B6y,+Florya+Cd.+No:47/1,+34153+Bak%C4%B1rk%C3%B6y/%C4%B0stanbul" target="_blank" rel="noopener"><span aria-hidden="true">↗</span><small>Adres</small><strong>Yol tarifi alın</strong></a></div>
          </div>
          <form className="lead-form" aria-describedby="hair-prototype-note">
            <div className="form-heading"><span>Saç değerlendirmesi talebi</span><strong>Size ulaşalım</strong></div>
            <div className="field-row"><label>Adınız<input type="text" name="name" autoComplete="name" placeholder="Adınız" /></label><label>Telefon<input type="tel" name="phone" autoComplete="tel" placeholder="05__ ___ __ __" /></label></div>
            <label>Öncelikli ihtiyacınız<select name="priority" defaultValue=""><option value="" disabled>Seçiniz</option><option>Saç dökülmesi</option><option>Saç mezoterapisi</option><option>Saç eksozomu</option><option>Saç lazeri</option><option>Saç kıran</option><option>Saç ekimi</option><option>Genel bilgi</option></select></label>
            <label className="consent"><input type="checkbox" /> <span><a href="https://neraclinic.com/kvkk/" target="_blank" rel="noopener">KVKK aydınlatma metnini</a> okudum; iletişim amacıyla aranmayı kabul ediyorum.</span></label>
            <button className="button button-submit" type="button">Saç Değerlendirmesi Talebi <Arrow /></button>
            <p id="hair-prototype-note">Prototip formudur; veri göndermez.</p>
          </form>
        </section>
      </div>
    </main>

    <footer className="site-footer brand-footer lift-footer hair-footer">
      <div className="footer-inner">
        <section className="footer-conversion" aria-labelledby="hair-footer-title"><div><span className="footer-eyebrow">Nera Clinic · Saç tedavileri</span><h2 id="hair-footer-title">Saç dökülmesinde ilk adım, <em>doğru değerlendirme.</em></h2><p>Saçlı deri, dökülme tipi ve kişisel ihtiyacınıza göre şekillenen hekim yaklaşımını konuşalım.</p></div><div className="footer-buttons"><a className="footer-button footer-button-primary" href="#contact"><span>Saç değerlendirmesi planlayın</span><Arrow /></a><a className="footer-button" href={whatsapp} target="_blank" rel="noopener"><span>WhatsApp ile görüşün</span><b aria-hidden="true">→</b></a></div></section>
        <div className="footer-main"><div className="footer-brand"><Image src={`${basePath}/images/nera-logo.webp`} alt="Nera Clinic" width={230} height={50} /><p>Saç dökülmesinde hekim değerlendirmesi, kişisel planlama ve açık süreç iletişimini bir araya getiren klinik yaklaşım.</p></div><nav className="footer-links" aria-label="Saç tedavileri sayfa bağlantıları"><span>Sayfa içeriği</span><a href="#yaklasim">Yaklaşım</a><a href="#uygulamalar">Uygulamalar</a><a href="#mezoterapi">Mezoterapi seçenekleri</a><a href="#neden-nera">Neden Nera?</a><a href="#hekimler">Hekimler</a><a href="#sac-ekimi">Saç ekimi</a><a href="#surec">Süreç</a><a href="#sss">Sık Sorulanlar</a><a href="#contact">Görüşme formu</a></nav><div className="footer-contact"><span>İletişim</span><a href="tel:+905339220251"><small>Bilgi &amp; randevu</small>0533 922 02 51</a><a href="mailto:info@neraclinic.com"><small>E-posta</small>info@neraclinic.com</a><a href="https://maps.google.com/?q=%C5%9Eenlikk%C3%B6y,+Florya+Cd.+No:47/1,+34153+Bak%C4%B1rk%C3%B6y/%C4%B0stanbul" target="_blank" rel="noopener"><small>Florya · İstanbul</small>Şenlikköy, Florya Cd. No:47/1, Bakırköy</a></div></div>
        <div className="footer-bottom"><p>Bu sayfadaki içerikler genel bilgilendirme amaçlıdır; tanı veya tedavi önerisi yerine geçmez. Uygunluk, içerik ve uygulama planı kişiden kişiye değişebilir. Son güncelleme: 19 Kasım 2026 · İçerik editörü: Nera Clinic.</p><nav aria-label="Yasal bağlantılar"><a href="https://neraclinic.com/kvkk/" target="_blank" rel="noopener">Gizlilik Politikası</a><span>© 2026 Nera Clinic</span></nav></div>
      </div>
    </footer>

    <BrandingExperience variant="hairTreatments" />
  </div>;
}
