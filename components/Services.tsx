import { services } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <p className="eyebrow">Hizmetlerimiz</p>
        <h2 className="section-title">Her Yolculuğa Özel Bir Çözüm</h2>
        <p className="section-lede">
          Havalimanı transferinden özel turlara, günlük şoförlü araçtan
          düğün ulaşımına kadar; Türkiye genelinde ihtiyacınıza uygun VIP
          transfer hizmetleri sunuyoruz.
        </p>

        <div className="service-grid">
          {services.map((service) => (
            <div className="service-card" key={service.slug}>
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p className="service-summary">{service.summary}</p>
              <ul className="service-points">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
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
                  WhatsApp&apos;tan Sor
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
