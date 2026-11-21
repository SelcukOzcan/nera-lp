import Image from "next/image";
import BrandingExperience from "./BrandingExperience";
import LeadForm from "./LeadForm";
import SiteHeader from "./SiteHeader";
import styles from "./youth-care.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const service = "Gençlik aşısı ve mezoterapi";
const phone = "tel:+905339220251";
const whatsapp = "https://wa.me/905441149094";
const map = "https://maps.google.com/?q=%C5%9Eenlikk%C3%B6y,+Florya+Cd.+No:47/1,+34153+Bak%C4%B1rk%C3%B6y/%C4%B0stanbul";

const options = [
  {
    name: "Somon DNA",
    category: "MesoNutrilift",
    summary: "Somon DNA ve hyaluronik asidi bir araya getiren bir formül.",
    detail: "Formül vitamin, mineral ve peptit gibi ek bileşenler de içerir.",
  },
  {
    name: "PrimeStar",
    category: "Çok bileşenli formüller",
    summary: "Hyaluronik asit, aminoasit ve glutatyon içeren bir ürün ailesi.",
    detail: "Formüller birbirinden farklıdır. Örneğin PrimeStar PN, polinükleotid de içerir.",
  },
  {
    name: "Altın Eksozom",
    category: "Eksozom içeren formüller",
    summary: "Eksozom içeren ve içeriği kullanılan formüle göre değişen seçenekler.",
    detail: "Eksozomlar, hücreler arası iletişimde rol alan küçük keseciklerdir. Bu kategorideki formüllerin içeriği ve uygulama yolu ayrı ayrı değerlendirilir.",
  },
  {
    name: "PLLACell",
    category: "PLLA ve polinükleotid",
    summary: "Poli-L-laktik asit (PLLA) ve polinükleotidi (PN) birlikte içeren bir formül.",
    detail: "Formül ayrıca sodyum hyalüronat, glutatyon ve C vitamini içerir.",
  },
];

const questions = [
  ["Gençlik aşısı ne demek?", "Cilt görünümüne yönelik farklı medikal estetik uygulamalar için kullanılan genel bir ifadedir. Görüşmede hangi içerikten ve hangi uygulama biçiminden söz edildiğini sorabilirsiniz."],
  ["Mezoterapi ile gençlik aşısı arasındaki fark nedir?", "Mezoterapi bir uygulama yöntemini, gençlik aşısı ise günlük kullanımda bir uygulama grubunu ifade eder. İçerik, uygulama yolu ve bölge kullanılan seçeneğe göre değişir."],
  ["Bu seçenekler birlikte uygulanabilir mi?", "Hekim seçenekleri aynı plan içinde değerlendirebilir. Birden fazla uygulamanın gerekip gerekmediği, uygunluk ve zamanlama kişisel değerlendirmeye göre belirlenir."],
  ["İlk görüşmede neleri konuşabilirim?", "Cildinizde sizi düşündüren değişiklikleri, önceki işlemleri ve beklentilerinizi paylaşabilirsiniz. Hekiminizle seçeneklerin sınırlılıklarını, risklerini ve takip gereksinimini konuşabilirsiniz."],
];

export default function YouthCarePage() {
  return (
    <div className={`youth-page ${styles.page}`} id="top">
      <a className={styles.skip} href="#icerik">İçeriğe geç</a>
      <SiteHeader variant="youthCare" />
      <main id="icerik" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="youth-title">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Nera Clinic · Florya</p>
            <h1 id="youth-title">Gençlik aşısı<br /><em>ve mezoterapi</em></h1>
            <p className={styles.intro}>Cilt uygulamalarının içeriğini, aralarındaki farkları ve hekim değerlendirmesinde nasıl ele alındıklarını keşfedin.</p>
          </div>
          <figure className={styles.heroPhoto}>
            <Image
              src={`${basePath}/images/youth-care-hero.webp`}
              alt="Gençlik aşısı uygulamasını gösteren temsili klinik görseli"
              fill
              preload
              sizes="(max-width: 760px) 100vw, 52vw"
            />
            <figcaption>Temsili görsel</figcaption>
          </figure>
          <div className={styles.heroActions}>
            <a className={styles.primary} href="#uygulamalar">Uygulamaları inceleyin</a>
            <a className={styles.outline} href="#contact">İletişim bilgileri</a>
          </div>
        </section>

        <div className={styles.shell}>
          <section id="uygulamalar" className={styles.options} aria-labelledby="youth-options">
            <header className={styles.sectionHeading}>
              <div><p className={styles.kicker}>Uygulama rehberi</p><h2 id="youth-options">Dört seçenek, <em>farklı içerikler.</em></h2></div>
              <p>Gençlik aşısı günlük dilde birden fazla uygulamayı kapsar. Bu seçenekleri ayırt etmek için içeriklerine bakabilirsiniz.</p>
            </header>
            <div className={styles.cards}>
              {options.map((option) => <article className={styles.card} key={option.name}>
                <p className={styles.category}>{option.category}</p>
                <h3>{option.name}</h3>
                <p>{option.summary}</p>
                <details>
                  <summary>İçerik detayı <span aria-hidden="true">+</span></summary>
                  <p>{option.detail}</p>
                </details>
              </article>)}
            </div>
          </section>

          <section id="yaklasim" className={styles.approach} aria-labelledby="youth-approach">
            <figure className={styles.doctor}>
              <Image src={`${basePath}/images/branding/dr-nuran-erdagi.jpg`} alt="Dr. Nuran Erdağı, Nera Clinic" fill sizes="(max-width: 760px) 94vw, 42vw" />
              <figcaption>Dr. Nuran Erdağı</figcaption>
            </figure>
            <div className={styles.approachCopy}>
              <p className={styles.kicker}>Hekim değerlendirmesi</p>
              <h2 id="youth-approach">Cildinize göre <em>şekillenen plan.</em></h2>
              <p>Cilt yapınız, beklentileriniz ve önceki uygulamalarınız görüşmede birlikte ele alınır. Hekim, tek bir seçeneğin yeterli olup olmadığını veya farklı yaklaşımların aynı plan içinde değerlendirilip değerlendirilemeyeceğini açıklar.</p>
              <dl>
                <div><dt>Görüşme</dt><dd>Cildiniz, öncelikleriniz ve sağlık öykünüz konuşulur.</dd></div>
                <div><dt>Planlama</dt><dd>Uygun seçenekler, olası riskler ve zamanlama açıklanır.</dd></div>
                <div><dt>Takip</dt><dd>Uygulama yapılırsa sonraki adımlar ve kontrol planı paylaşılır.</dd></div>
              </dl>
            </div>
          </section>

          <section id="sss" className={styles.faq} aria-labelledby="youth-faq">
            <div><p className={styles.kicker}>Merak edilenler</p><h2 id="youth-faq">Sık sorulan <em>sorular.</em></h2></div>
            <div className={styles.questions}>
              {questions.map(([question, answer]) => <details key={question} name="youth-faq">
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>)}
            </div>
          </section>

          <section id="contact" className={styles.contact} aria-labelledby="youth-contact">
            <div className={styles.contactCopy}>
              <p className={styles.kicker}>Florya · Bakırköy</p>
              <h2 id="youth-contact">Nera Clinic<br />ile iletişim</h2>
              <p>Şenlikköy Mahallesi, Florya Caddesi No:47/1<br />Bakırköy, İstanbul</p>
              <div className={styles.contactLinks}>
                <a href={phone}>0533 922 02 51</a>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a href={map} target="_blank" rel="noopener noreferrer">Yol tarifi</a>
              </div>
            </div>
            <LeadForm eyebrow="İletişim formu" service={service} submitLabel="Talebi gönder" messageLabel="Notunuz (isteğe bağlı)" noteId="youth-form-note" />
          </section>
        </div>
      </main>

      <footer className={`site-footer brand-footer ${styles.footer}`}>
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#top"><Image src={`${basePath}/images/nera-logo.webp`} alt="Nera Clinic, sayfa başına dön" width={230} height={50} /></a>
              <p>Gençlik aşısı ve mezoterapi uygulamaları hakkında bilgilendirme.</p>
            </div>
            <nav className="footer-links" aria-label="Sayfa bağlantıları">
              <span>Bu sayfada</span>
              <a href="#uygulamalar">Uygulamalar</a><a href="#yaklasim">Planlama</a><a href="#sss">Sık sorulan sorular</a><a href="#contact">İletişim</a>
            </nav>
            <div className="footer-contact">
              <span>Nera Clinic</span>
              <a href={phone}>0533 922 02 51</a>
              <a href="mailto:info@neraclinic.com">info@neraclinic.com</a>
              <a href={map} target="_blank" rel="noopener noreferrer">Şenlikköy, Florya Cad. No:47/1, Bakırköy</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Son güncelleme: <time dateTime="2026-11-21">21 Kasım 2026</time> · Site editörü: <a href="mailto:info@neraclinic.com">info@neraclinic.com</a></p>
            <nav aria-label="Yasal bağlantılar"><a href="https://neraclinic.com/kvkk/" target="_blank" rel="noopener noreferrer">KVKK aydınlatma metni</a><span>© 2026 Nera Clinic</span></nav>
          </div>
        </div>
      </footer>
      <BrandingExperience variant="youthCare" />
    </div>
  );
}
