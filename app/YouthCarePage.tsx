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
    id: "somon-dna",
    name: "Somon DNA",
    category: "MesoNutrilift",
    summary: "Somon DNA adıyla anılan MesoNutrilift, birden fazla bileşeni aynı formülde bir araya getirir. Görüşmede nem ve cilt dokusuna ilişkin beklentileriniz üzerinden değerlendirilebilir.",
    ingredients: "Somon DNA, hyaluronik asit, vitaminler, mineraller ve peptitler.",
    question: "Nem ve cilt dokusuna ilişkin beklentilerim bu formülle nasıl değerlendirilir?",
  },
  {
    id: "primestar",
    name: "PrimeStar",
    category: "Farklı içerik seçenekleri",
    summary: "PrimeStar bir ürün ailesidir. Varyantlar farklı içeriklere sahip olduğu için görüşmede hangi formülün ele alındığını ve seçim nedenini sormak önemlidir.",
    ingredients: "Temel formülde hyaluronik asit, aminoasit ve glutatyon. PN varyantında ayrıca polinükleotid.",
    question: "Hangi PrimeStar formülünden söz ediyoruz ve içerik farkı benim için ne ifade ediyor?",
  },
  {
    id: "altin-eksozom",
    name: "Altın Eksozom",
    category: "Eksozom içeren formüller",
    summary: "Eksozomlar hücreler arası iletişimde rol alan küçük keseciklerdir. Altın Eksozom adı altında farklı formüller bulunduğundan içerik ve uygulama yolu ürün bazında ele alınır.",
    ingredients: "Eksozomlar ve formüle göre değişen ek bileşenler.",
    question: "Cilt için değerlendirilen formülün içeriği ve uygulama yolu nedir?",
  },
  {
    id: "pllacell",
    name: "PLLACell",
    category: "PLLA ve PN içeren formül",
    summary: "PLLACell, poli-L-laktik asit (PLLA) ile polinükleotidi (PN) bir araya getirir. Görüşmede, kullanılan bileşenlerin ne amaçla seçildiği ve takip süreci açıklanır.",
    ingredients: "PLLA, PN, sodyum hyalüronat, glutatyon ve C vitamini.",
    question: "PLLA içeren bir uygulamada riskler ve takip planı nedir?",
  },
];

const questions = [
  ["Kaç seans planlanır?", "Seans gerekip gerekmediği, sayısı ve aralığı kullanılan uygulamaya, bölgeye ve hekim değerlendirmesine göre değişir. Görüşmede takip için ne zaman yeniden değerlendirme yapılacağını da sorabilirsiniz."],
  ["Yüz, boyun ve dekolte aynı şekilde mi değerlendirilir?", "Her bölgenin cilt yapısı ve önceki uygulama öyküsü ayrı değerlendirilir. Ürünün hangi bölgelerde kullanımının uygun olduğu ve olası riskler görüşmede açıklanır."],
  ["İşlem sonrasında neler görülebilir?", "Enjeksiyon içeren işlemlerin ardından kızarıklık, hassasiyet, şişlik veya morarma görülebilir. Beklenen etkilerin süresi ve hangi belirtilerde kliniğe ulaşmanız gerektiği uygulamaya göre açıklanır."],
  ["İlk görüşme için neyi hazırlamalıyım?", "Kullandığınız ilaçları, bilinen alerjilerinizi ve varsa yakın zamanda yaptırdığınız uygulamaları hekiminizle paylaşmaya hazırlanın. Aklınızdaki soruları görüşmeye getirebilirsiniz."],
  ["Görüşme talebi gönderince ne olur?", "Klinik ekibi verdiğiniz telefon numarasından sizi arayarak iletişim talebiniz hakkında bilgi verir."],
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
            <p className={styles.intro}>Cilt nemi, doku ve ince çizgilerle ilgili merak ettikleriniz için dört farklı yaklaşımı inceleyin. Hangi içeriklerin nasıl ayrıştığını ve hekim görüşmesinde nelerin değerlendirilip planlandığını öğrenin.</p>
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
            <a className={styles.primary} href="#contact">Geri arama talebi</a>
            <a className={styles.outline} href="#uygulamalar">Uygulamaları inceleyin</a>
          </div>
        </section>

        <div className={styles.shell}>
          <section className={styles.guide} id="rehber" aria-labelledby="youth-guide">
            <div>
              <p className={styles.kicker}>Kısa rehber</p>
              <h2 id="youth-guide">Gençlik aşısı ve mezoterapi <em>arasındaki fark ne?</em></h2>
            </div>
            <dl>
              <div><dt>Gençlik aşısı</dt><dd>Cilt görünümüne yönelik farklı medikal estetik uygulamalar için kullanılan bir ifadedir. Bu ad altında içerikleri ve uygulama biçimleri değişen seçenekler bulunur.</dd></div>
              <div><dt>Mezoterapi</dt><dd>Seçilen içeriğin küçük enjeksiyonlarla uygulanmasını ifade eden bir yöntemdir. Kullanılan içerik ve uygulama bölgesi ayrıca değerlendirilir.</dd></div>
            </dl>
          </section>

          <section id="uygulamalar" className={styles.options} aria-labelledby="youth-options">
            <header className={styles.sectionHeading}>
              <div><p className={styles.kicker}>Uygulama seçenekleri</p><h2 id="youth-options">Hangi uygulama <em>neyi içeriyor?</em></h2></div>
              <p>Dört seçeneğin temel içeriklerini karşılaştırın. Her kartta hekim görüşmesinde sorabileceğiniz bir soru da bulabilirsiniz.</p>
            </header>
            <nav className={styles.optionNav} aria-label="Uygulamaya git">
              {options.map((option) => <a href={`#${option.id}`} key={option.id}>{option.name}</a>)}
            </nav>
            <div className={styles.cards}>
              {options.map((option) => <article className={styles.card} id={option.id} key={option.id} tabIndex={-1}>
                <p className={styles.category}>{option.category}</p>
                <h3>{option.name}</h3>
                <p>{option.summary}</p>
                <dl>
                  <div><dt>Formülde neler var?</dt><dd>{option.ingredients}</dd></div>
                  <div><dt>Görüşmede sorabilirsiniz</dt><dd>{option.question}</dd></div>
                </dl>
              </article>)}
            </div>
            <div className={styles.cardFoot}>
              <p>İçerikleri inceledikten sonra birden fazla seçeneğin nasıl planlandığına bakabilirsiniz.</p>
              <a className={styles.outline} href="#kombinasyon">Birlikte planlama</a>
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
              <p>İlk görüşmede cildinizde sizi düşündüren konular, önceki işlemler ve sağlık öykünüz birlikte ele alınır. Hekim, hangi seçeneklerin değerlendirilebileceğini ve her birinden ne beklenebileceğini açıklar.</p>
              <dl>
                <div><dt>Görüşme</dt><dd>Cildiniz, öncelikleriniz ve sağlık öykünüz konuşulur.</dd></div>
                <div><dt>Planlama</dt><dd>Uygun seçenekler, olası riskler ve zamanlama açıklanır.</dd></div>
                <div><dt>Takip</dt><dd>Uygulama yapılırsa sonraki adımlar ve kontrol planı paylaşılır.</dd></div>
              </dl>
            </div>
          </section>

          <section id="kombinasyon" className={styles.plan} aria-labelledby="youth-plan">
            <header className={styles.sectionHeading}>
              <div><p className={styles.kicker}>Kişiye özel planlama</p><h2 id="youth-plan">Uygulamalar birlikte <em>nasıl değerlendirilir?</em></h2></div>
              <p>Tek görüşmede birden fazla seçenek konuşulabilir. Hangi uygulamanın uygun olduğu ve bir kombinasyon gerekip gerekmediği, bölgeye ve cildinizin önceliklerine göre değerlendirilir.</p>
            </header>
            <ol className={styles.planSteps}>
              <li><h3>Önceliği netleştirme</h3><p>Örneğin, yanaklarda kuruluk ve boyunda ince çizgiler aynı görüşmede konuşulabilir. Her bölge kendi bulgularıyla ele alınır.</p></li>
              <li><h3>Seçenekleri tartma</h3><p>Hekim, görüşmede ilgili içerikleri, alternatifleri ve olası riskleri açıklar. Daha önce yaptırdığınız işlemler de değerlendirmeye girer.</p></li>
              <li><h3>Zamanlamayı belirleme</h3><p>Bir uygulama planlanırsa bölge, olası seans aralığı ve takip adımları netleşir. Birden fazla işlem düşünülürse sırası ayrıca değerlendirilir.</p></li>
            </ol>
            <div className={styles.cardFoot}>
              <p>Görüşme ve iletişim hakkında bilgi almak için klinik ekibine ulaşabilirsiniz.</p>
              <a className={styles.primary} href="#contact">Geri arama talebi</a>
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
              <h2 id="youth-contact">Kliniğe ulaşın</h2>
              <p>Uygulamalar veya görüşme hakkında bilgi almak için telefon numaranızı bırakabilirsiniz. Klinik ekibimiz sizi arayacaktır.</p>
              <p>Şenlikköy Mahallesi, Florya Caddesi No:47/1<br />Bakırköy, İstanbul</p>
              <div className={styles.contactLinks}>
                <a href={phone}>0533 922 02 51</a>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a href={map} target="_blank" rel="noopener noreferrer">Yol tarifi</a>
              </div>
            </div>
            <LeadForm eyebrow="İletişim formu" title="Geri arama talebi" service={service} submitLabel="Geri arama talebi gönder" messageLabel="Notunuz (isteğe bağlı)" noteId="youth-form-note" />
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
              <a href="#uygulamalar">Uygulamalar</a><a href="#yaklasim">Hekim değerlendirmesi</a><a href="#kombinasyon">Birlikte planlama</a><a href="#sss">Sık sorulan sorular</a><a href="#contact">İletişim</a>
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
