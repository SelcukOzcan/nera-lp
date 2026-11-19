import Image from "next/image";
import BrandHeroSlider, { BrandHeroSlide } from "./BrandHeroSlider";
import BrandingExperience from "./BrandingExperience";
import SiteHeader from "./SiteHeader";
import LeadForm from "./LeadForm";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const whatsapp = "https://wa.me/905441149094?text=Merhaba%2C%20Nera%20Clinic%20ameliyats%C4%B1z%20y%C3%BCz%20germe%20yakla%C5%9F%C4%B1m%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const heroSlides: BrandHeroSlide[] = [
  { image: "face-lift/hero-natural-face.jpg", alt: "Doğal görünüm odaklı ameliyatsız yüz germe yaklaşımı", eyebrow: "Doğal görünüm odağı", title: "Yüzünüzü değil, ihtiyacınızı merkeze alan plan", position: "52% 42%" },
  { image: "branding/dr-nuran-erdagi.jpg", alt: "Dr. Nuran Erdağı Nera Clinic", eyebrow: "Hekim değerlendirmesi", title: "Planlama ve uygulamada doğrudan hekim yaklaşımı", position: "67% 48%" },
  { image: "clinic-reception-hq.jpg", alt: "Nera Clinic Florya klinik ortamı", eyebrow: "Nera Clinic · Florya", title: "Kişisel görüşmeden takibe sakin klinik deneyimi", position: "center" },
];

const methods = [
  { number: "01", name: "Doublo", eyebrow: "Odaklanmış ultrason", focus: "Doku sıkılığı ve destek", text: "Yüz ve boyun bölgesindeki doku yapısı değerlendirilerek cerrahi olmayan bir seçenek olarak ele alınır.", className: "is-doublo" },
  { number: "02", name: "PLLA", eyebrow: "PLLA temelli uygulama", focus: "Hacim ve cilt dokusu", text: "Hacim dağılımı ve cilt dokusu ihtiyacı, enjekte edilebilir PLLA seçeneği açısından hekim tarafından değerlendirilir.", className: "is-plla" },
  { number: "03", name: "Touch Up Lift", eyebrow: "Kişisel yaklaşım", focus: "Yüzün bütününe göre plan", text: "Yüzün hacim ve destek ihtiyacının birlikte değerlendirildiği, içeriği kişiye göre netleşen bir uygulama yaklaşımıdır.", className: "is-touchup" },
  { number: "04", name: "Planiti", eyebrow: "PLLA temelli seçenek", focus: "Doku desteği ve hacim", text: "Yüzün hacim dağılımı ve doku yapısına göre değerlendirilen enjekte edilebilir PLLA seçeneklerinden biridir.", className: "is-planiti" },
];

const faqs = [
  ["Ameliyatsız yüz germe tek bir uygulama mıdır?", "Hayır. Bu ifade; farklı ihtiyaçlarda değerlendirilebilen cihaz ve enjekte edilebilir uygulamaları kapsayan genel bir başlıktır. Uygun seçenek yüz anatomisi, doku yapısı ve beklenti birlikte değerlendirilerek belirlenir."],
  ["Doublo, PLLA, Touch Up Lift ve Planiti birlikte mi uygulanır?", "Her kişide aynı uygulamalar veya aynı kombinasyon kullanılmaz. Bazı seçenekler tek başına, bazıları ise hekim değerlendirmesine göre farklı zamanlarda bir planın parçası olarak ele alınabilir."],
  ["Cerrahi yüz germe ile aynı sonucu verir mi?", "Cerrahi ve cerrahi olmayan yaklaşımlar aynı değildir. Ameliyatsız seçeneklerin kapsamı ve sınırları kişisel değerlendirme sırasında açık biçimde anlatılır."],
  ["Değişim ne zaman fark edilir?", "Zamanlama; seçilen uygulamaya, cilt yapısına ve kişisel yanıta göre değişebilir. Kademeli ilerleyen uygulamalar olduğu gibi farklı takip aralıkları gerektiren seçenekler de bulunur."],
  ["Günlük yaşama dönüş süresi nedir?", "Uygulama türü ve bölgeye göre değişir. Olası geçici hassasiyet, kızarıklık veya şişlik gibi durumlar ve takip önerileri görüşmede paylaşılır."],
];

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

export default function FaceLiftPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Nera Clinic",
    url: "https://pro.neraclinic.com/v2/yuz-germe/",
    telephone: "+90 533 922 02 51",
    address: { "@type": "PostalAddress", streetAddress: "Şenlikköy, Florya Cd. No:47/1", addressLocality: "Bakırköy", addressRegion: "İstanbul", postalCode: "34153", addressCountry: "TR" },
  };

  return <div className="lift-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <SiteHeader variant="faceLift" />

    <main>
      <section className="lift-hero" id="top">
        <div className="lift-hero-copy">
          <p className="eyebrow"><span /> Nera Clinic · Ameliyatsız yüz germe</p>
          <h1><span>Yüzünüz için</span><em>tek bir yöntem değil,</em><span>kişisel bir plan.</span></h1>
          <p>Doublo, PLLA, Touch Up Lift ve Planiti seçenekleri; yüz anatomisi, cilt yapısı ve beklentiniz birlikte değerlendirilerek kişisel bir plan içinde ele alınır.</p>
          <div className="lift-hero-actions"><a className="button button-primary" href="#contact">Bilgi ve görüşme talebi <Arrow /></a><a className="text-link" href="#yaklasim">Yaklaşımı keşfedin <span aria-hidden="true">↓</span></a></div>
          <div className="lift-hero-notes"><span>Hekim değerlendirmesi</span><span>Dört yaklaşım</span><span>Doğal görünüm odağı</span></div>
        </div>
        <BrandHeroSlider slides={heroSlides} />
      </section>

      <div className="lift-trust-rail" aria-label="Nera Clinic ameliyatsız yüz germe yaklaşımı">
        <div><span>01</span><strong>Yüzün bütününe bakış</strong><small>Tek bir bölge değil, ifade ve denge birlikte ele alınır.</small></div>
        <div><span>02</span><strong>Hekim planlaması</strong><small>Uygunluk ve uygulama seçimi doğrudan hekimle netleşir.</small></div>
        <div><span>03</span><strong>Kişisel kombinasyon</strong><small>Her kişide aynı yöntem veya aynı sıra kullanılmaz.</small></div>
        <a href="#contact"><small>İlk adım</small><strong>İhtiyacınızı konuşalım</strong><Arrow /></a>
      </div>

      <div className="lift-content-shell">
        <section className="lift-map lift-section" id="yaklasim">
          <div className="lift-map-visual">
            <Image src={`${basePath}/images/face-lift/hero-natural-face.jpg`} alt="Yüz anatomisi ve doğal görünüm odaklı kişisel değerlendirme" fill sizes="(max-width: 960px) 100vw, 50vw" />
            <div className="lift-map-shade" />
            <span className="lift-hotspot is-one"><i /> Yüz ovali</span><span className="lift-hotspot is-two"><i /> Doku kalitesi</span><span className="lift-hotspot is-three"><i /> Hacim dengesi</span><span className="lift-hotspot is-four"><i /> Boyun &amp; çene hattı</span>
          </div>
          <div className="lift-map-copy">
            <p className="eyebrow light"><span /> Önce ihtiyacı anlayalım</p>
            <h2>Yüzünüzü değiştirmek değil,<br /><em>doğal ifadenizi desteklemek.</em></h2>
            <p>Ameliyatsız yüz germe tek bir cihazın veya ürünün adı değildir. Doku sıkılığı, hacim dağılımı, cilt kalitesi ve yüzün doğal oranları birlikte değerlendirilir.</p>
            <ol><li><span>01</span><div><strong>Yüz anatomisi</strong><small>İfade ve oranlar birlikte değerlendirilir.</small></div></li><li><span>02</span><div><strong>Doku ihtiyacı</strong><small>Görünen belirtinin altında hangi desteğe ihtiyaç olduğu konuşulur.</small></div></li><li><span>03</span><div><strong>Gerçekçi plan</strong><small>Uygun seçenekler ve sınırlar açık biçimde paylaşılır.</small></div></li></ol>
            <a className="button button-light" href="#contact">Kişisel görüşme talebi <Arrow /></a>
          </div>
        </section>

        <section className="lift-combination lift-section" id="kombinasyon">
          <div className="lift-heading"><div><p className="eyebrow"><span /> Katmanlı yaklaşım</p><h2>Bir uygulama seçmekten önce,<br /><em>doğru ihtiyacı anlamak.</em></h2></div><p>Yüzdeki her değişim aynı nedenden kaynaklanmaz. Bu nedenle yöntemler bir paket gibi değil, farklı ihtiyaçlara yanıt verebilecek seçenekler olarak değerlendirilir.</p></div>
          <div className="lift-layers">
            <article><span>01</span><i className="layer-orbit" /><div><small>Doku desteği</small><h3>Sıkılık ve toparlanma ihtiyacı</h3><p>Odaklanmış ultrason gibi cihaz temelli seçeneklerin değerlendirilme alanı.</p></div></article>
            <article><span>02</span><i className="layer-network" /><div><small>Hacim &amp; cilt kalitesi</small><h3>Kademeli doku desteği</h3><p>PLLA temelli enjekte edilebilir seçeneklerin değerlendirilme alanı.</p></div></article>
            <article><span>03</span><i className="layer-contour" /><div><small>Yüz dengesi</small><h3>Bütüncül kişisel dokunuş</h3><p>Yüzün genel oranları ve destek ihtiyacına göre şekillenen yaklaşım.</p></div></article>
          </div>
        </section>

        <section className="lift-methods lift-section" id="uygulamalar">
          <div className="lift-heading"><div><p className="eyebrow"><span /> Uygulama seçenekleri</p><h2>Dört yaklaşım.<br /><em>Size göre değerlendirilen plan.</em></h2></div><p>Her kişide aynı dört uygulama kullanılmaz. Uygun seçenek veya kombinasyon; hekim değerlendirmesi, yüz anatomisi ve kişisel beklenti doğrultusunda netleşir.</p></div>
          <div className="lift-method-grid">{methods.map((method) => <article className={method.className} key={method.name}><div className="lift-method-art"><span /><span /><span /></div><div className="lift-method-meta"><span>{method.number}</span><small>{method.eyebrow}</small></div><div className="lift-method-copy"><small>{method.focus}</small><h3>{method.name}</h3><p>{method.text}</p><a href="#contact">Bilgi alın <Arrow /></a></div></article>)}</div>
          <p className="lift-disclaimer">Uygulama adları bilgilendirme amaçlıdır. Uygunluk, içerik ve uygulama planı hekim görüşmesinde kişiye özel olarak değerlendirilir.</p>
        </section>

        <section className="lift-doctor lift-section" id="hekim">
          <div className="lift-doctor-image"><Image src={`${basePath}/images/branding/dr-nuran-erdagi.jpg`} alt="Dr. Nuran Erdağı" fill sizes="(max-width: 960px) 100vw, 46vw" /><span>Dr. Nuran Erdağı · Nera Clinic</span></div>
          <div className="lift-doctor-copy"><p className="eyebrow light"><span /> Hekim yaklaşımı</p><h2>Planlama ve uygulama,<br /><em>doğrudan hekim tarafından.</em></h2><p>Yüzün doğal ifadesini koruyan bir yaklaşım; yalnızca uygulama adını değil, anatomi, doku yapısı, geçmiş uygulamalar ve beklentiyi birlikte değerlendirmeyi gerektirir.</p><blockquote>“Amaç yüzü başka birine benzetmek değil; kişinin kendine ait ifadesini koruyan dengeli bir plan oluşturmaktır.”</blockquote><a className="button button-light" href="#contact">Dr. Nuran Erdağı ile görüşme talebi <Arrow /></a></div>
        </section>

        <section className="lift-process lift-section" id="surec">
          <div><p className="eyebrow"><span /> İlk görüşmeden takibe</p><h2>Açık, sakin ve<br /><em>kişiye göre bir süreç.</em></h2><p>Uygulama kararı, yüzü tanımadan verilmez. Her adım, neyin neden önerildiğini anlayabileceğiniz şekilde ilerler.</p></div>
          <ol><li><span>01</span><div><h3>İhtiyacınızı dinleriz</h3><p>Beklentiniz, önceliğiniz ve geçmiş uygulamalarınız konuşulur.</p></div></li><li><span>02</span><div><h3>Hekim değerlendirir</h3><p>Yüz anatomisi, doku yapısı ve uygunluk doğrudan hekim tarafından değerlendirilir.</p></div></li><li><span>03</span><div><h3>Kişisel plan oluşturulur</h3><p>Tek bir yöntem dayatılmadan, uygun seçenekler ve sınırlar paylaşılır.</p></div></li><li><span>04</span><div><h3>Uygulama ve takip</h3><p>Planlanan uygulama hekim tarafından gerçekleştirilir; takip bilgileri aktarılır.</p></div></li></ol>
        </section>

        <section className="lift-clinic lift-section" id="klinik">
          <div className="lift-clinic-copy"><p className="eyebrow light"><span /> Nera Clinic · Florya</p><h2>İstanbul&apos;un içinde,<br /><em>kendinize ayırdığınız bir alan.</em></h2><p>İlk görüşmeden uygulama ve takip sürecine kadar sakin, açık ve kişisel bir klinik deneyimi için tasarlanan Nera Clinic&apos;te sizi dinleyerek başlarız.</p><address>Şenlikköy, Florya Cd. No:47/1<br />34153 Bakırköy / İstanbul</address><a className="button button-light" href="#contact">Görüşme bilgisi alın <Arrow /></a></div>
          <div className="lift-clinic-media"><video autoPlay muted loop playsInline preload="metadata" poster={`${basePath}/images/nera-clinic-poster.jpg`} aria-label="Nera Clinic Florya klinik tanıtım videosu"><source src={`${basePath}/images/nera-clinic-tour.mp4`} type="video/mp4" /></video><span>Florya · İstanbul</span></div>
        </section>

        <section className="lift-faq lift-section" id="sss"><div><p className="eyebrow"><span /> Merak edilenler</p><h2>Karar vermeden önce<br /><em>kısa ve açık yanıtlar.</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<i aria-hidden="true">+</i></summary><p>{answer}</p></details>)}</div></section>

        <section className="lift-contact lift-section" id="contact">
          <div className="lift-contact-copy"><p className="eyebrow light"><span /> İlk adım</p><h2>Yüzünüzün ihtiyacını konuşalım,<br /><em>kişisel planı değerlendirelim.</em></h2><p>Bilgilerinizi bırakın; ekibimiz uygulama seçenekleri ve hekim görüşmesi için size ulaşsın.</p><div className="brand-contact-actions"><a href="tel:+905339220251"><span aria-hidden="true">↗</span><small>Telefon</small><strong>Hemen arayın</strong></a><a className="is-whatsapp" href={whatsapp} target="_blank" rel="noopener"><span aria-hidden="true">↗</span><small>WhatsApp</small><strong>Mesaj gönderin</strong></a><a href="https://maps.google.com/?q=%C5%9Eenlikk%C3%B6y,+Florya+Cd.+No:47/1,+34153+Bak%C4%B1rk%C3%B6y/%C4%B0stanbul" target="_blank" rel="noopener"><span aria-hidden="true">↗</span><small>Adres</small><strong>Yol tarifi alın</strong></a></div></div>
          <LeadForm eyebrow="Bilgi ve görüşme talebi" service="Ameliyatsız Yüz Germe" submitLabel="Bilgi ve Görüşme Talebi" noteId="lift-form-note" />
        </section>
      </div>
    </main>

    <footer className="site-footer brand-footer lift-footer"><div className="footer-inner"><section className="footer-conversion" aria-labelledby="lift-footer-title"><div><span className="footer-eyebrow">Nera Clinic · Ameliyatsız yüz germe</span><h2 id="lift-footer-title">Tek bir yöntem değil, <em>size göre değerlendirilen plan.</em></h2><p>Doku sıkılığı, hacim dağılımı ve yüzün doğal ifadesini birlikte ele alan hekim yaklaşımını konuşalım.</p></div><div className="footer-buttons"><a className="footer-button footer-button-primary" href="#contact"><span>Bilgi ve görüşme talebi</span><Arrow /></a><a className="footer-button" href={whatsapp} target="_blank" rel="noopener"><span>WhatsApp ile görüşün</span><b aria-hidden="true">→</b></a></div></section><div className="footer-main"><div className="footer-brand"><Image src={`${basePath}/images/nera-logo.webp`} alt="Nera Clinic" width={230} height={50} /><p>Ameliyatsız yüz germe seçeneklerinde hekim değerlendirmesi ve doğal görünüm odaklı kişisel yaklaşım.</p></div><nav className="footer-links" aria-label="Ameliyatsız yüz germe sayfa bağlantıları"><span>Sayfa içeriği</span><a href="#yaklasim">Yaklaşım</a><a href="#kombinasyon">Kombinasyon</a><a href="#uygulamalar">Uygulamalar</a><a href="#hekim">Hekim</a><a href="#surec">Süreç</a><a href="#sss">Sık Sorulanlar</a><a href="#contact">Görüşme formu</a></nav><div className="footer-contact"><span>İletişim</span><a href="tel:+905339220251"><small>Bilgi &amp; randevu</small>0533 922 02 51</a><a href="mailto:info@neraclinic.com"><small>E-posta</small>info@neraclinic.com</a><a href="https://maps.google.com/?q=%C5%9Eenlikk%C3%B6y,+Florya+Cd.+No:47/1,+34153+Bak%C4%B1rk%C3%B6y/%C4%B0stanbul" target="_blank" rel="noopener"><small>Florya · İstanbul</small>Şenlikköy, Florya Cd. No:47/1, Bakırköy</a></div></div><div className="footer-bottom"><p>Bu sayfadaki içerikler genel bilgilendirme amaçlıdır. Uygunluk ve uygulama planı kişiden kişiye değişebilir. Son güncelleme: 18 Kasım 2026 · İçerik editörü: Nera Clinic.</p><nav aria-label="Yasal bağlantılar"><a href="#">Gizlilik Politikası</a><span>© 2026 Nera Clinic</span></nav></div></div></footer>

    <BrandingExperience variant="faceLift" />
  </div>;
}
