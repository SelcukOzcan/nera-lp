import Image from "next/image";
import BrandingExperience from "./BrandingExperience";
import BrandHeroSlider from "./BrandHeroSlider";
import BrandServicesCarousel from "./BrandServicesCarousel";
import SiteHeader from "./SiteHeader";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const services = [
  {
    number: "01",
    title: "Saç Ekimi",
    text: "Saç yapısı, donör alan ve beklentinin birlikte değerlendirildiği kişisel bir planlama süreci.",
    image: "sac-tedavileri-official.jpg",
    position: "center",
  },
  {
    number: "02",
    title: "Saç Tedavileri",
    text: "Saç ve saçlı derinin güncel ihtiyacına göre ele alınan, hekim değerlendirmesi odaklı yaklaşım.",
    image: "sac-ekimi-official.jpg",
    position: "center",
  },
  {
    number: "03",
    title: "Ameliyatsız Yüz Germe",
    text: "Yüzün doğal ifadesini koruyarak hacim, kontur ve dengeyi birlikte değerlendiren uygulamalar.",
    image: "ameliyatsiz-yuz-germe.jpg",
    position: "center",
  },
  {
    number: "04",
    title: "Scarlet X",
    text: "Cildin ihtiyacı doğrultusunda planlanan, mikro iğneli radyofrekans temelli profesyonel cilt uygulaması.",
    image: "scarlet-x.jpg",
    position: "center",
  },
  {
    number: "05",
    title: "Cilt Bakım Uygulamaları",
    text: "Cilt tipine ve güncel ihtiyaca göre şekillenen profesyonel bakım seçenekleri.",
    image: "cilt-bakimi.jpg",
    position: "center",
  },
  {
    number: "06",
    title: "Mezoterapi",
    text: "Cildin güncel ihtiyacına göre değerlendirilen vitamin, mineral ve aminoasit içerikli uygulamalar.",
    image: "mezoterapi.jpg",
    position: "center",
  },
  {
    number: "07",
    title: "Anti-Aging Uygulamaları",
    text: "Cilt kalitesi, mimik yapısı ve doğal ifadeyi birlikte ele alan kişisel yaşlanma karşıtı yaklaşımlar.",
    image: "anti-aging.jpg",
    position: "center",
  },
];

const faqs = [
  ["İlk görüşmede ne konuşulur?", "İhtiyacınız, beklentiniz ve daha önceki uygulama deneyiminiz dinlenir. Uygun seçenekler, hekim değerlendirmesinin ardından sizinle paylaşılır."],
  ["Kliniğe nasıl ulaşabilirim?", "Nera Clinic, Şenlikköy Mahallesi Florya Caddesi No:47/1 adresinde; Bakırköy, İstanbul'dadır. Randevu öncesinde ekibimiz ulaşım bilgisini paylaşabilir."],
  ["Görüşme sonrasında hemen karar vermem gerekir mi?", "Hayır. İlk görüşmenin amacı ihtiyacınızı anlamak, uygunluğu değerlendirmek ve süreci açık biçimde anlatmaktır."],
];

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

export default function BrandingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Nera Clinic",
    url: "https://pro.neraclinic.com/v2/branding/",
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

  return (
    <div className="brand-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <SiteHeader variant="branding" />

      <main>
        <section className="brand-hero" id="top">
          <div className="brand-hero-copy">
            <p className="eyebrow"><span /> Nera Clinic · Florya / Bakırköy</p>
            <h1><span>Bilimsel yaklaşım,</span><em>kişisel dokunuş,</em><span>doğal görünüm</span></h1>
            <p>İstanbul&apos;da saç sağlığı, medikal estetik ve cilt uygulamalarını; ihtiyacınızı anlayan kişisel bir değerlendirmeyle ele alıyoruz.</p>
            <div className="brand-hero-actions">
              <a className="button button-primary" href="#contact">Görüşme planlayın <Arrow /></a>
              <a className="text-link" href="#hizmetler">Yaklaşımımızı keşfedin <span aria-hidden="true">↓</span></a>
            </div>
            <div className="brand-hero-notes"><span>İki hekim yaklaşımı</span><span>Florya&apos;da klinik deneyimi</span><span>Kişisel değerlendirme</span></div>
          </div>

          <BrandHeroSlider />
        </section>

        <div className="brand-trust-rail" aria-label="Nera Clinic öne çıkanlar">
          <div><span>01</span><strong>Florya · Bakırköy</strong><small>İstanbul&apos;da merkezi klinik konumu</small></div>
          <div><span>02</span><strong>İki hekim yaklaşımı</strong><small>İhtiyaca göre doğru değerlendirme</small></div>
          <div><span>03</span><strong>Kişisel plan</strong><small>Standart değil, size göre süreç</small></div>
          <a href="#contact"><small>İlk adım</small><strong>İhtiyacınızı konuşalım</strong><Arrow /></a>
        </div>

        <div className="brand-content-shell">
          <section className="brand-story brand-section reveal-section" id="nera">
            <div className="brand-story-video">
              <Image src={`${basePath}/images/clinic-reception-hq.jpg`} alt="Nera Clinic Florya klinik ortamı" fill sizes="(max-width: 960px) 100vw, 55vw" quality={92} />
              <span className="brand-story-location">Florya · İstanbul</span>
            </div>
            <div className="brand-story-copy">
              <p className="eyebrow light"><span /> Nera&apos;yı tanıyın</p>
              <h2>Tek bir uygulamadan değil,<br /><em>bütüncül bir bakıştan</em> söz ediyoruz.</h2>
              <p>Saç, cilt ve medikal estetik ihtiyaçları birbirinden kopuk başlıklar değildir. Nera Clinic&apos;te ilk adım, sizi dinlemek ve sizin için anlamlı olan yaklaşımı birlikte netleştirmektir.</p>
              <div className="brand-story-signature"><span>Nera Clinic</span><small>Bedenimiz en kıymetli emanetimizdir.</small></div>
              <a className="button button-light" href="#contact">Nera ile tanışın <Arrow /></a>
            </div>
          </section>

          <section className="brand-services brand-section" id="hizmetler">
            <div className="brand-section-heading reveal-section">
              <div><p className="eyebrow"><span /> Jenerik hizmetler</p><h2>İhtiyacınız ne olursa olsun,<br /><em>başlangıç noktamız sizsiniz.</em></h2></div>
              <p>Hizmetlerimizi tek bir katalog gibi değil; ihtiyacınız doğrultusunda değerlendirilecek seçenekler olarak ele alıyoruz.</p>
            </div>
            <BrandServicesCarousel services={services} />
          </section>

          <section className="brand-doctors brand-section" id="hekimler">
            <div className="brand-section-heading reveal-section">
              <div><p className="eyebrow"><span /> Nera hekimleri</p><h2>Bilginin, deneyimin ve<br /><em>kişisel yaklaşımın</em> buluştuğu yer.</h2></div>
              <p>Hangi hekimle ilerleyeceğiniz, yalnızca seçtiğiniz başlığa değil; ihtiyacınıza göre yapılan ilk değerlendirmeye bağlıdır.</p>
            </div>
            <div className="brand-doctor-grid reveal-section">
              <article>
                <div className="brand-doctor-image"><Image src={`${basePath}/images/branding/dr-nuran-erdagi.jpg`} alt="Dr. Nuran Erdağı" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
                <div className="brand-doctor-copy"><span>01 · Medikal estetik &amp; cilt</span><h3>Dr. Nuran<br />Erdağı</h3><p>Kişisel değerlendirme, medikal estetik ve cilt odaklı yaklaşımıyla; doğal görünümü ve kişinin kendini iyi hissetmesini merkeze alır.</p><a href="#contact">Görüşme planlayın <Arrow /></a></div>
              </article>
              <article>
                <div className="brand-doctor-image"><Image src={`${basePath}/images/branding/dr-mehmet-dogruer.webp`} alt="Dr. Mehmet Doğruer" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
                <div className="brand-doctor-copy"><span>02 · Medikal estetik &amp; saç ekimi</span><h3>Dr. Mehmet<br />Doğruer</h3><p>Medikal estetik ve saç ekimi uygulamalarını; kişisel ihtiyaçları, doğal görünümü ve uzun vadeli planlamayı birlikte değerlendiren bütüncül bir yaklaşımla ele alır.</p><a href="#contact">Görüşme planlayın <Arrow /></a></div>
              </article>
            </div>
          </section>

          <section className="brand-process brand-section reveal-section" aria-labelledby="brand-process-title">
            <div><p className="eyebrow"><span /> İlk görüşmeden kişisel plana</p><h2 id="brand-process-title">Açık, sade ve<br /><em>size göre bir süreç.</em></h2></div>
            <ol>
              <li><span>01</span><div><h3>İhtiyacınızı dinleriz</h3><p>Beklentinizi, önceliğinizi ve merak ettiklerinizi konuşuruz.</p></div></li>
              <li><span>02</span><div><h3>Hekim değerlendirir</h3><p>Uygunluk ve seçenekler kişisel değerlendirme ile netleşir.</p></div></li>
              <li><span>03</span><div><h3>Planı birlikte kurarız</h3><p>Süreç, alternatifler ve sonraki adımlar açık biçimde paylaşılır.</p></div></li>
            </ol>
          </section>

          <section className="brand-clinic brand-section reveal-section" id="klinik">
            <div className="brand-clinic-copy">
              <p className="eyebrow light"><span /> Nera Clinic · Florya</p>
              <h2>İstanbul&apos;un içinde,<br /><em>kendinize ayırdığınız bir alan.</em></h2>
              <p>Şenlikköy, Florya&apos;daki kliniğimiz; ilk görüşmeden uygulama ve takip sürecine kadar sakin, açık ve kişisel bir deneyim için tasarlandı.</p>
              <address>Şenlikköy, Florya Cd. No:47/1<br />34153 Bakırköy / İstanbul</address>
              <a className="button button-light" href="#contact">Randevu bilgisi alın <Arrow /></a>
            </div>
            <div className="brand-clinic-gallery" aria-label="Nera Clinic iç mekan görselleri">
              <div><Image src={`${basePath}/images/clinic-interior.webp`} alt="Nera Clinic bekleme alanı" fill sizes="(max-width: 800px) 100vw, 35vw" /></div>
              <div><Image src={`${basePath}/images/clinic-4.webp`} alt="Nera Clinic iç mekan detayı" fill sizes="(max-width: 800px) 100vw, 28vw" /></div>
            </div>
          </section>

          <section className="brand-faq brand-section" id="sss">
            <div><p className="eyebrow"><span /> Merak edilenler</p><h2>İlk görüşme öncesi<br /><em>kısa yanıtlar.</em></h2></div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<i aria-hidden="true">+</i></summary><p>{answer}</p></details>)}
            </div>
          </section>

          <section className="brand-conversion brand-section" id="contact">
            <div className="brand-conversion-copy reveal-section">
              <p className="eyebrow light"><span /> İlk adım</p>
              <h2>İhtiyacınızı dinleyelim,<br /><em>doğru görüşmeyi planlayalım.</em></h2>
              <p>Bilgilerinizi bırakın; ekibimiz ilgilendiğiniz uygulama ve randevu seçenekleri için size ulaşsın.</p>
              <div className="brand-contact-actions">
                <a href="tel:+905339220251"><span aria-hidden="true">↗</span><small>Telefon</small><strong>Hemen arayın</strong></a>
                <a className="is-whatsapp" href="https://wa.me/905441149094?text=Merhaba%2C%20Nera%20Clinic%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener"><span aria-hidden="true">↗</span><small>WhatsApp</small><strong>Mesaj gönderin</strong></a>
                <a href="https://maps.google.com/?q=%C5%9Eenlikk%C3%B6y,+Florya+Cd.+No:47/1,+34153+Bak%C4%B1rk%C3%B6y/%C4%B0stanbul" target="_blank" rel="noopener"><span aria-hidden="true">↗</span><small>Adres</small><strong>Yol tarifi alın</strong></a>
              </div>
            </div>
            <form className="lead-form reveal-section" aria-describedby="brand-prototype-note">
              <div className="form-heading"><span>Görüşme talebi</span><strong>Size ulaşalım</strong></div>
              <div className="field-row">
                <label>Adınız<input type="text" name="name" autoComplete="name" placeholder="Adınız" /></label>
                <label>Telefon<input type="tel" name="phone" autoComplete="tel" placeholder="05__ ___ __ __" /></label>
              </div>
              <label>İlgilendiğiniz hizmet
                <select name="service" defaultValue=""><option value="" disabled>Seçiniz</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select>
              </label>
              <label className="consent"><input type="checkbox" /> <span>KVKK aydınlatma metnini okudum; iletişim amacıyla aranmayı kabul ediyorum.</span></label>
              <button className="button button-submit" type="button">Görüşme Talebi Oluştur <Arrow /></button>
              <p id="brand-prototype-note">Prototip formudur; veri göndermez.</p>
            </form>
          </section>
        </div>
      </main>

      <footer className="site-footer brand-footer">
        <div className="footer-inner">
          <section className="footer-conversion" aria-labelledby="brand-footer-title">
            <div><span className="footer-eyebrow">Nera Clinic · Florya / Bakırköy</span><h2 id="brand-footer-title">Kendiniz için <em>ilk adımı birlikte atalım.</em></h2><p>Saç, cilt ve medikal estetik ihtiyaçlarınızı kişisel bir görüşmeyle ele alalım.</p></div>
            <div className="footer-buttons"><a className="footer-button footer-button-primary" href="#contact"><span>Görüşme planlayın</span><Arrow /></a><a className="footer-button" href="https://wa.me/905441149094?text=Merhaba%2C%20Nera%20Clinic%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener"><span>WhatsApp ile görüşün</span><b aria-hidden="true">→</b></a></div>
          </section>
          <div className="footer-main">
            <div className="footer-brand"><Image src={`${basePath}/images/nera-logo.webp`} alt="Nera Clinic" width={230} height={50} /><p>Saç, cilt ve medikal estetik uygulamalarında kişisel değerlendirme odaklı klinik yaklaşım.</p></div>
            <nav className="footer-links" aria-label="Sayfa bağlantıları"><span>Sayfa içeriği</span><a href="#nera">Nera&apos;yı tanıyın</a><a href="#hizmetler">Hizmetler</a><a href="#hekimler">Hekimler</a><a href="#klinik">Klinik</a><a href="#sss">Sık Sorulanlar</a><a href="#contact">Görüşme formu</a></nav>
            <div className="footer-contact"><span>İletişim</span><a href="tel:+905339220251"><small>Bilgi &amp; randevu</small>0533 922 02 51</a><a href="mailto:info@neraclinic.com"><small>E-posta</small>info@neraclinic.com</a><a href="https://maps.google.com/?q=%C5%9Eenlikk%C3%B6y,+Florya+Cd.+No:47/1,+34153+Bak%C4%B1rk%C3%B6y/%C4%B0stanbul" target="_blank" rel="noopener"><small>Florya · İstanbul</small>Şenlikköy, Florya Cd. No:47/1, Bakırköy</a></div>
          </div>
          <div className="footer-bottom"><p>Bu sayfadaki içerikler genel bilgilendirme amaçlıdır. Uygunluk ve uygulama planı kişiden kişiye değişebilir.</p><nav aria-label="Yasal bağlantılar"><a href="#">Gizlilik Politikası</a><span>© 2026 Nera Clinic</span></nav></div>
        </div>
      </footer>

      <BrandingExperience />
    </div>
  );
}
