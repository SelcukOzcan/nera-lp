"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const slides = [
  { image: "dr-nuran-erdagi.jpg", alt: "Dr. Nuran Erdağı Nera Clinic", eyebrow: "Medikal estetik", title: "Doğal görünümü merkeze alan bakış", position: "66% 48%" },
  { image: "dr-mehmet-dogruer.webp", alt: "Dr. Mehmet Doğruer Nera Clinic", eyebrow: "Saç sağlığı", title: "Kişiye göre planlanan yaklaşım", position: "40% 45%" },
  { image: "scarlet-x.jpg", alt: "Nera Clinic Scarlet X uygulaması", eyebrow: "Cilt uygulamaları", title: "İhtiyaca göre seçilen teknoloji", position: "center" },
];

export default function BrandHeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((value) => (value + 1) % slides.length), 5600);
    return () => window.clearTimeout(timer);
  }, [active, paused]);

  const step = (amount: number) => setActive((value) => (value + amount + slides.length) % slides.length);

  return <div className="brand-hero-visual brand-hero-slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onPointerDown={(event) => { startX.current = event.clientX; }} onPointerUp={(event) => { if (startX.current !== null && Math.abs(event.clientX - startX.current) > 45) step(event.clientX > startX.current ? -1 : 1); startX.current = null; }}>
    {slides.map((slide, index) => <div className={`brand-hero-slide ${index === active ? "is-active" : ""}`} aria-hidden={index !== active} key={slide.title}>
      <Image src={`${basePath}/images/branding/${slide.image}`} alt={slide.alt} fill preload={index === 0} sizes="(max-width: 960px) 100vw, 52vw" style={{ objectPosition: slide.position }} />
      <div className="brand-hero-shade" />
      <div className="brand-hero-caption"><small>{slide.eyebrow}</small><strong>{slide.title}</strong></div>
    </div>)}
    <div className="brand-slider-controls">
      <span>0{active + 1} <i /> 0{slides.length}</span>
      <div>{slides.map((slide, index) => <button className={index === active ? "is-active" : ""} onClick={() => setActive(index)} type="button" aria-label={`${index + 1}. görsele git`} key={slide.title} />)}</div>
      <button type="button" onClick={() => step(-1)} aria-label="Önceki görsel">←</button><button type="button" onClick={() => step(1)} aria-label="Sonraki görsel">→</button>
    </div>
  </div>;
}
