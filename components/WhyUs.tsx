"use client";

import { useLanguage } from "@/lib/i18n";

const items = [
  { icon: "🛬", tr: "Uçuş Takibi", en: "Flight Tracking" },
  { icon: "⏱️", tr: "Zamanında Karşılama", en: "On-Time Pickup" },
  { icon: "🎩", tr: "Profesyonel VIP Şoför", en: "Professional VIP Chauffeur" },
  { icon: "🪧", tr: "İsimli Karşılama Hizmeti", en: "Personalized Name Sign" },
  { icon: "🧳", tr: "Bagaj Desteği", en: "Luggage Assistance" },
  { icon: "🚘", tr: "Lüks & VIP Araç Seçenekleri", en: "Luxury & VIP Vehicle Options" },
  { icon: "☎️", tr: "7/24 Rezervasyon Desteği", en: "24/7 Booking Support" },
  { icon: "🇹🇷", tr: "Türkiye Genelinde Özel Transfer", en: "Private Transfer Across Turkey" },
];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="section section-dark">
      <div className="container">
        <p className="eyebrow">{t("Neden myviptransfer?", "Why myviptransfer?")}</p>
        <h2 className="section-title">
          {t(
            "Seyahatinizin İlk Anından İtibaren Ayrıcalıklı",
            "Exclusive From the Very First Moment of Your Trip",
          )}
        </h2>
        <div className="why-grid">
          {items.map((item) => (
            <div className="why-item" key={item.tr}>
              <span className="why-item-icon">{item.icon}</span>
              <p className="why-item-title">{t(item.tr, item.en)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
