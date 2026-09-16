"use client";

import { services } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n";
import ServiceImage from "./ServiceImage";

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
          {services.map((service) => {
            const title = t(service.title.tr, service.title.en);
            return (
              <div className="service-card" key={service.slug}>
                <ServiceImage
                  src={service.image}
                  alt={t(
                    `${service.title.tr} hizmeti`,
                    `${service.title.en} service`,
                  )}
                />
                <div className="service-card-body">
                  <h3>{title}</h3>
                  <p className="service-summary">{t(service.summary.tr, service.summary.en)}</p>
                  <ul className="service-points">
                    {service.points.map((point) => (
                      <li key={point.tr}>{t(point.tr, point.en)}</li>
                    ))}
                  </ul>
                  <div className="service-card-foot">
                    <a
                      href={whatsappLink(
                        `Merhaba, ${service.title.tr} hizmeti hakkında bilgi almak istiyorum.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                    >
                      {t("WhatsApp'tan Sor", "Ask on WhatsApp")}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
