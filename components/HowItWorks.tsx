"use client";

import { useLanguage } from "@/lib/i18n";

const steps = [
  {
    n: "01",
    title: { tr: "Book", en: "Book" },
    text: {
      tr: "Tarih, saat, güzergâh ve yolcu sayısını gönderin.",
      en: "Send us the date, time, route and number of passengers.",
    },
  },
  {
    n: "02",
    title: { tr: "Confirm", en: "Confirm" },
    text: {
      tr: "Araç ve fiyat bilgisi tarafınıza iletilsin.",
      en: "Vehicle and price details are sent to you.",
    },
  },
  {
    n: "03",
    title: { tr: "Meet", en: "Meet" },
    text: {
      tr: "Şoförünüz sizi belirlenen noktada karşılasın.",
      en: "Your driver meets you at the agreed point.",
    },
  },
  {
    n: "04",
    title: { tr: "Enjoy", en: "Enjoy" },
    text: {
      tr: "Konforlu yolculuğunuzun keyfini çıkarın.",
      en: "Enjoy your comfortable journey.",
    },
  },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="section section-dark">
      <div className="container">
        <p className="eyebrow">{t("Nasıl Çalışıyor?", "How It Works")}</p>
        <h2 className="section-title">{t("Dört Adımda VIP Transfer", "VIP Transfer in Four Steps")}</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.n}>
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
