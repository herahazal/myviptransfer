"use client";

import { services } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="section section-white" id="services">
      <div className="container">
        <p className="eyebrow">{t("Hizmetlerimiz", "Our Services")}</p>
        <h2 className="section-title">
          {t("Her Yolculuğa Özel Bir Çözüm", "A Tailored Solution for Every Journey")}
        </h2>
        <p className="section-lede">
          {t(
            "Havalimanı transferinden özel turlara, günlük şoförlü araçtan düğün ulaşımına kadar; Türkiye genelinde ihtiyacınıza uygun VIP transfer hizmetleri sunuyoruz.",
            "From airport transfers to private tours, daily chauffeur service to wedding transportation — we offer VIP transfer services tailored to your needs across Turkey.",
          )}
        </p>

        <div className="service-grid">
          {services.map((service) => (
            <div className="service-card" key={service.slug}>
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p className="service-summary">{t(service.summary.tr, service.summary.en)}</p>
              <ul className="service-points">
                {service.points.map((point) => (
                  <li key={point.tr}>{t(point.tr, point.en)}</li>
                ))}
              </ul>
              <div className="service-card-foot">
                <a
                  href={whatsappLink(
                    `Merhaba, ${service.title} hizmeti hakkında bilgi almak istiyorum.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  {t("WhatsApp'tan Sor", "Ask on WhatsApp")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
