"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const slides = [
  {
    eyebrow: "Kişiye göre lazer epilasyon",
    title: "Cildinize uygun teknolojiyle",
    accent: "kişisel bir lazer planı.",
    text: "Cilt tonu, kıl yapısı ve uygulama bölgeniz birlikte değerlendirilir; size uygun seçenekler bu bütün üzerinden ele alınır.",
    image: `${basePath}/images/laser-slide-1.webp`,
    alt: "Lazer epilasyon uygulaması ve Candela teknolojisi",
    facts: ["Kişisel plan", "Üç teknoloji", "Florya · İstanbul"],
    secondary: "Süreci inceleyin",
    secondaryHref: "#yaklasim",
  },
  {
    eyebrow: "Üç farklı teknoloji seçeneği",
    title: "Tek bir teknoloji",
    accent: "her cilde uymaz.",
    text: "Candela, Soprano ve Q-Switched seçenekleri; cilt, kıl ve bölge özellikleri doğrultusunda değerlendirilir.",
    image: `${basePath}/images/laser-slide-2.webp`,
    alt: "Kadınlar için lazer epilasyon yaklaşımı",
    facts: ["Candela", "Soprano", "Q-Switched"],
    secondary: "Teknolojileri karşılaştırın",
    secondaryHref: "#teknolojiler",
  },
  {
    eyebrow: "Kadın ve erkek uygulamaları",
    title: "Farklı bölgeler için",
    accent: "ihtiyaca göre yaklaşım.",
    text: "Yüzden vücuda farklı bölgeler, aynı planla değil; kişisel değerlendirmeyle yapılandırılmış bir süreçle ele alınır.",
    image: `${basePath}/images/laser-slide-3.webp`,
    alt: "Erkekler için lazer epilasyon yaklaşımı",
    facts: ["Yüz & vücut", "Kadın & erkek", "Klinik değerlendirme"],
    secondary: "Neden Nera?",
    secondaryHref: "#neden-nera",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pointerStart = useRef<number | null>(null);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % slides.length), 6500);
    return () => window.clearTimeout(timer);
  }, [active, paused]);

  const changeSlide = (step: number) => {
    setActive((current) => (current + step + slides.length) % slides.length);
  };

  return (
    <section
      className="hero-slider"
      id="top"
      role="region"
      aria-roledescription="carousel"
      aria-label="Nera Clinic lazer epilasyon"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") changeSlide(-1);
        if (event.key === "ArrowRight") changeSlide(1);
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onPointerDown={(event) => { pointerStart.current = event.clientX; }}
      onPointerUp={(event) => {
        if (pointerStart.current === null) return;
        const distance = event.clientX - pointerStart.current;
        if (Math.abs(distance) > 48) changeSlide(distance > 0 ? -1 : 1);
        pointerStart.current = null;
      }}
    >
      <div className="sr-only" aria-live="polite">{active + 1}. slayt: {slides[active].title} {slides[active].accent}</div>

      {slides.map((slide, index) => (
        <article className={`hero-slide ${index === active ? "is-active" : ""}`} aria-hidden={index !== active} key={slide.title}>
          <div className="slide-heading">
            <p className="eyebrow"><span /> {slide.eyebrow}</p>
            <h1>{slide.title}<br /><em>{slide.accent}</em></h1>
          </div>

          <div className={`slide-visual slide-visual-${index + 1}`}>
            <div className="slide-visual-glow" />
            <Image src={slide.image} alt={slide.alt} fill preload={index === 0} sizes="(max-width: 960px) 100vw, 58vw" />
            <div className="slide-index"><small>Nera Clinic · Florya</small><strong>0{index + 1}</strong></div>
          </div>

          <div className="slide-body">
            <p>{slide.text}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Ücretsiz Ön Değerlendirme <span className="arrow" aria-hidden="true">↗</span></a>
              <a className="text-link" href={slide.secondaryHref}>{slide.secondary} <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-facts" aria-label="Nera Clinic lazer yaklaşımı">
              {slide.facts.map((fact) => <span key={fact}>{fact}</span>)}
            </div>
            <p className="hero-note">Uygunluk ve sonuçlar kişiden kişiye değişebilir.</p>
          </div>
        </article>
      ))}

      <div className="slider-controls" aria-label="Slider kontrolleri">
        <span className="slide-count">0{active + 1}<i />0{slides.length}</span>
        <div className="slide-progress" aria-hidden="true"><span key={active} style={{ animationPlayState: paused ? "paused" : "running" }} /></div>
        <div className="slide-dots">
          {slides.map((item, dotIndex) => (
            <button type="button" className={dotIndex === active ? "is-active" : ""} onClick={() => setActive(dotIndex)} aria-label={`${dotIndex + 1}. slayta git`} aria-current={dotIndex === active ? "true" : undefined} key={item.title} />
          ))}
        </div>
        <button className="slider-arrow" type="button" onClick={() => changeSlide(-1)} aria-label="Önceki slayt">←</button>
        <button className="slider-arrow" type="button" onClick={() => changeSlide(1)} aria-label="Sonraki slayt">→</button>
      </div>
    </section>
  );
}
