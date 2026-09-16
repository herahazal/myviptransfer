"use client";

import { useLanguage } from "@/lib/i18n";

const items = [
  {
    icon: "🛰️",
    title: { tr: "Uçuş Takibi", en: "Flight Tracking" },
    text: {
      tr: "Uçuşunuz gerçek zamanlı takip edilir, gecikmelerde karşılama saati otomatik güncellenir.",
      en: "Your flight is tracked in real time; pickup time updates automatically in case of delays.",
    },
  },
  {
    icon: "🪧",
    title: { tr: "Kişiye Özel İsim Tabelası", en: "Personalized Name Sign" },
    text: {
      tr: "Şoförünüz terminal çıkışında adınıza özel karşılama tabelasıyla sizi bekler.",
      en: "Your driver waits at the terminal exit with a name sign personalized just for you.",
    },
  },
  {
    icon: "🎩",
    title: { tr: "Profesyonel Şoför", en: "Professional Chauffeur" },
    text: {
      tr: "Deneyimli, profesyonel ve güler yüzlü VIP şoförler.",
      en: "Experienced, professional and friendly VIP chauffeurs.",
    },
  },
  {
    icon: "🧳",
    title: { tr: "Bagaj Desteği", en: "Luggage Assistance" },
    text: {
      tr: "Bagajlarınızla ilgilenir, araca kadar size eşlik eder.",
      en: "We take care of your luggage and escort you all the way to the vehicle.",
    },
  },
  {
    icon: "⏳",
    title: { tr: "Havalimanında Bekleme", en: "Airport Waiting" },
    text: {
      tr: "Uçuşunuz gecikse dahi şoförünüz sizi bekler.",
      en: "Your driver waits for you even if your flight is delayed.",
    },
  },
  {
    icon: "🚪",
    title: { tr: "Kapıdan Kapıya Hizmet", en: "Door-to-Door Service" },
    text: {
      tr: "Terminalden varış adresinize kadar kesintisiz hizmet.",
      en: "Seamless service from the terminal all the way to your destination address.",
    },
  },
  {
    icon: "☎️",
    title: { tr: "7/24 Destek", en: "24/7 Support" },
    text: {
      tr: "Rezervasyon ve destek ekibimiz her zaman ulaşılabilir.",
      en: "Our booking and support team is always reachable.",
    },
  },
];

export default function AirportMeet() {
  const { t } = useLanguage();

  return (
    <section className="section section-white">
      <div className="container">
        <p className="eyebrow">{t("VIP Karşılama", "VIP Meet & Greet")}</p>
        <h2 className="section-title">{t("Havalimanı Karşılama", "Airport Meet & Greet")}</h2>
        <p className="section-lede">
          {t(
            "Terminal çıkışında profesyonel şoförümüz sizi adınıza özel karşılama tabelasıyla karşılar, bagajlarınıza yardımcı olur ve sizi konforlu VIP aracınıza kadar eşlik eder.",
            "At the terminal exit, our professional chauffeur greets you with a name sign personalized for you, assists with your luggage and escorts you to your comfortable VIP vehicle.",
          )}
        </p>
        <div className="meet-grid">
          {items.map((item) => (
            <div className="meet-item" key={item.title.tr}>
              <span className="service-icon">{item.icon}</span>
              <p className="fleet-card-title" style={{ fontSize: "1.15rem" }}>
                {t(item.title.tr, item.title.en)}
              </p>
              <p className="service-summary">{t(item.text.tr, item.text.en)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
