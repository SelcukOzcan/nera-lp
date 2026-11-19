"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Service = {
  number: string;
  title: string;
  text: string;
  image: string;
  position: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function BrandServicesCarousel({
  services,
  folder = "branding",
  ctaLabel = "Ön değerlendirme",
}: {
  services: Service[];
  folder?: string;
  ctaLabel?: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const move = (direction: number) => {
    const card = track.current?.querySelector<HTMLElement>("article");
    track.current?.scrollBy({ left: direction * ((card?.offsetWidth ?? 320) + 12), behavior: "smooth" });
  };

  const syncActive = () => {
    const card = track.current?.querySelector<HTMLElement>("article");
    if (!track.current || !card) return;
    setActive(Math.min(services.length - 1, Math.round(track.current.scrollLeft / (card.offsetWidth + 12))));
  };

  return <div className="brand-service-carousel reveal-section">
    <div className="brand-service-toolbar">
      <span><strong>{String(active + 1).padStart(2, "0")}</strong> / {String(services.length).padStart(2, "0")}</span>
      <div><button type="button" onClick={() => move(-1)} aria-label="Önceki hizmet">←</button><button type="button" onClick={() => move(1)} aria-label="Sonraki hizmet">→</button></div>
    </div>
    <div className="brand-service-grid" ref={track} onScroll={syncActive}>
      {services.map((service, index) => <article key={service.title}>
        <Image src={`${basePath}/images/${folder}/${service.image}`} alt={`${service.title} yaklaşımı`} fill sizes="(max-width: 700px) 82vw, (max-width: 1180px) 45vw, 430px" style={{ objectPosition: service.position }} priority={index === 0} />
        <div className="brand-service-overlay" />
        <span>{service.number}</span>
        <div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`${service.title} için ${ctaLabel}`}>{ctaLabel} <span className="arrow" aria-hidden="true">↗</span></a></div>
      </article>)}
    </div>
  </div>;
}
