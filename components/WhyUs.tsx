"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

const items = [
  {
    image: "/images/ucus-takibi.png",
    tr: "Uçuş Takibi",
    en: "Flight Tracking",
    altTr: "Uçuş takibi hizmeti",
    altEn: "Flight tracking service",
  },
  {
    image: "/images/zamaninda-karsilama.png",
    tr: "Zamanında Karşılama",
    en: "On-Time Pickup",
    altTr: "Zamanında karşılama hizmeti",
    altEn: "On-time pickup service",
  },
  {
    image: "/images/profesyonel-vip-sofor.png",
    tr: "Profesyonel VIP Şoför",
    en: "Professional VIP Chauffeur",
    altTr: "Profesyonel VIP şoför hizmeti",
    altEn: "Professional VIP chauffeur service",
  },
  {
    image: "/images/isimli-karsilama-hizmeti.png",
    tr: "İsimli Karşılama Hizmeti",
    en: "Personalized Name Sign",
    altTr: "İsimli karşılama hizmeti",
    altEn: "Personalized name sign service",
  },
  {
    image: "/images/bagaj-destegi.png",
    tr: "Bagaj Desteği",
    en: "Luggage Assistance",
    altTr: "Bagaj desteği hizmeti",
    altEn: "Luggage assistance service",
  },
  {
    image: "/images/lüks-ve-vip-arac-secenekleri.png",
    tr: "Lüks & VIP Araç Seçenekleri",
    en: "Luxury & VIP Vehicle Options",
    altTr: "Lüks ve VIP araç seçenekleri",
    altEn: "Luxury and VIP vehicle options",
  },
  {
    image: "/images/7-24-rezervasyon-destegi.png",
    tr: "7/24 Rezervasyon Desteği",
    en: "24/7 Booking Support",
    altTr: "7/24 rezervasyon desteği",
    altEn: "24/7 booking support",
  },
  {
    image: "/images/türkiye-geneli-transfer-hizmeti.png",
    tr: "Türkiye Genelinde Özel Transfer",
    en: "Private Transfer Across Turkey",
    altTr: "Türkiye genelinde özel transfer hizmeti",
    altEn: "Private transfer service across Turkey",
  },
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
              <Image
                src={item.image}
                alt={t(item.altTr, item.altEn)}
                fill
                sizes="(min-width: 720px) 25vw, 50vw"
                className="why-item-image"
              />
              <div className="why-item-overlay" />
              <p className="why-item-title">{t(item.tr, item.en)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
