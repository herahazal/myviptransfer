"use client";

import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n";

const items = [
  { tr: "Üst düzey havalimanı transferi", en: "Executive airport transfer" },
  { tr: "VIP misafir ulaşımı", en: "VIP guest transportation" },
  { tr: "İş toplantıları", en: "Business meetings" },
  { tr: "Roadshow'lar", en: "Roadshows" },
  { tr: "Kurumsal etkinlikler", en: "Corporate events" },
  { tr: "Kongre & fuarlar", en: "Congress & fairs" },
  { tr: "Otel ulaşımı", en: "Hotel transportation" },
  { tr: "Uzun vadeli şoförlü araç hizmeti", en: "Long-term chauffeur service" },
];

export default function Corporate() {
  const { t } = useLanguage();

  return (
    <section className="section section-dark" id="corporate">
      <div className="container">
        <p className="eyebrow">{t("Kurumsal Ulaşım", "Corporate Travel")}</p>
        <h2 className="section-title">{t("Kurumsal Hizmetler", "Corporate Services")}</h2>
        <p className="section-lede">
          {t(
            "Şirketiniz için üst düzey misafir ağırlama, toplantı ve organizasyon ulaşımından uzun vadeli şoförlü araç anlaşmalarına kadar kurumsal çözümler sunuyoruz.",
            "We offer corporate solutions for your company — from high-level guest hosting, meeting and event transportation to long-term chauffeur service agreements.",
          )}
        </p>
        <ul className="corporate-list">
          {items.map((item) => (
            <li key={item.tr}>{t(item.tr, item.en)}</li>
          ))}
        </ul>
        <div className="mt-10">
          <a
            href={whatsappLink("Merhaba, şirketimiz için kurumsal transfer anlaşması hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            {t("Kurumsal Teklif Al", "Get a Corporate Quote")}
          </a>
        </div>
      </div>
    </section>
  );
}
