"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

const steps = [
  {
    n: "01",
    title: { tr: "Rezervasyon", en: "Book" },
    text: {
      tr: "Tarih, saat, güzergâh ve yolcu sayısını gönderin.",
      en: "Send us the date, time, route and number of passengers.",
    },
  },
  {
    n: "02",
    title: { tr: "Onay", en: "Confirm" },
    text: {
      tr: "Araç ve fiyat bilgisi tarafınıza iletilsin.",
      en: "Vehicle and price details are sent to you.",
    },
  },
  {
    n: "03",
    title: { tr: "Karşılama", en: "Meet" },
    text: {
      tr: "Şoförünüz sizi belirlenen noktada karşılasın.",
      en: "Your driver meets you at the agreed point.",
    },
  },
  {
    n: "04",
    title: { tr: "Keyfini Çıkarın", en: "Enjoy" },
    text: {
      tr: "Konforlu yolculuğunuzun keyfini çıkarın.",
      en: "Enjoy your comfortable journey.",
    },
  },
];

/** Stagger delay between each step card's reveal, in ms. */
const STAGGER_MS = 120;

export default function HowItWorks() {
  const { t } = useLanguage();
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section-dark">
      <div className="container">
        <p className="eyebrow">{t("Nasıl Çalışıyor?", "How It Works")}</p>
        <h2 className="section-title">{t("Dört Adımda VIP Transfer", "VIP Transfer in Four Steps")}</h2>
        <div className="steps-grid" ref={gridRef}>
          {steps.map((step, i) => (
            <div
              className={`step-card${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: `${i * STAGGER_MS}ms` }}
              key={step.n}
            >
              <span className="step-number">{step.n}</span>
              <p className="step-title">{t(step.title.tr, step.title.en)}</p>
              <p className="step-text">{t(step.text.tr, step.text.en)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
