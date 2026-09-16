"use client";

import { useLanguage } from "@/lib/i18n";

const items = [
  {
    title: { tr: "Professional Chauffeurs", en: "Professional Chauffeurs" },
    text: {
      tr: "Deneyimli, güler yüzlü ve profesyonel şoför kadromuz.",
      en: "Our experienced, friendly and professional chauffeur team.",
    },
  },
  {
    title: { tr: "Premium Vehicles", en: "Premium Vehicles" },
    text: {
      tr: "Özenle seçilmiş, düzenli bakımlı Mercedes-Benz araç filosu.",
      en: "A carefully selected, regularly maintained Mercedes-Benz fleet.",
    },
  },
  {
    title: { tr: "Flight Tracking", en: "Flight Tracking" },
    text: {
      tr: "Uçuşunuz takip edilir, gecikmelerde karşılama otomatik güncellenir.",
      en: "Your flight is tracked; pickup updates automatically in case of delays.",
    },
  },
  {
    title: { tr: "24/7 Support", en: "24/7 Support" },
    text: {
      tr: "Rezervasyon ve müşteri desteği her zaman ulaşılabilir.",
      en: "Booking and customer support are always reachable.",
    },
  },
  {
    title: { tr: "Private & Direct", en: "Private & Direct" },
    text: {
      tr: "Paylaşımsız, size özel doğrudan transfer.",
      en: "A private, direct transfer — never shared.",
    },
  },
  {
    title: { tr: "Turkey Wide", en: "Turkey Wide" },
    text: {
      tr: "İstanbul, Bodrum, Antalya, Kapadokya ve Türkiye genelinde hizmet.",
      en: "Service in Istanbul, Bodrum, Antalya, Cappadocia and across Turkey.",
    },
  },
];

export default function WhyChoose() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">{t("Neden myviptransfer?", "Why myviptransfer?")}</p>
        <h2 className="section-title">
          {t("Güvenle Tercih Edilen VIP Transfer Markası", "The VIP Transfer Brand Trusted by Travelers")}
        </h2>
        <div className="choose-grid">
          {items.map((item) => (
            <div className="choose-item" key={item.title.tr}>
              <span className="choose-check">✓</span>
              <div>
                <p className="fleet-card-title" style={{ fontSize: "1.15rem" }}>{t(item.title.tr, item.title.en)}</p>
                <p className="service-summary">{t(item.text.tr, item.text.en)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
