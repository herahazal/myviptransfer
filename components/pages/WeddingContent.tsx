"use client";

import Link from "next/link";
import { vehicles } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n";
import FleetImage from "@/components/FleetImage";

const services = [
  { tr: "Gelin & damat özel transferi", en: "Private bride & groom transfer" },
  { tr: "VIP araç ile ulaşım", en: "Transportation by VIP vehicle" },
  { tr: "Havalimanı-otel transferleri", en: "Airport-hotel transfers" },
  { tr: "Otel-düğün mekânı transferleri", en: "Hotel-venue transfers" },
  { tr: "Davetli transferleri", en: "Guest transfers" },
  { tr: "Grup ve aile transferleri", en: "Group and family transfers" },
  { tr: "Günlük şoförlü araç", en: "Daily chauffeur-driven car" },
  { tr: "Düğün öncesi/sonrası transferler", en: "Pre/post-wedding transfers" },
  { tr: "Fotoğraf çekimi için özel araç", en: "Private vehicle for photo shoots" },
  { tr: "Şehirler arası düğün transferleri", en: "Intercity wedding transfers" },
  { tr: "Düğün/nişan/özel davet organizasyonları", en: "Wedding/engagement/private event organization" },
  { tr: "Türkiye genelinde hizmet", en: "Service across Turkey" },
];

const weddingVehicleSlugs = [
  "mercedes-s-class",
  "premium-vip-vito",
  "premium-vip-sprinter",
  "premium-suv",
];

export default function WeddingContent() {
  const { t } = useLanguage();
  const weddingVehicles = vehicles.filter((v) => weddingVehicleSlugs.includes(v.slug));

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Wedding & Events</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            Your Special Day, Our Special Care
          </h1>
          <p className="section-lede" style={{ maxWidth: "60ch" }}>
            {t(
              "Make Your Special Day Even More Special. Hayatınızın en özel günlerinden birinde ulaşım detaylarını düşünmenize gerek kalmasın. myviptransfer, düğün, nikâh, nişan ve özel organizasyonlarınız için gelin-damat ve davetlilere özel VIP transfer çözümleri sunar.",
              "Make Your Special Day Even More Special. You shouldn't have to think about transportation on one of the most special days of your life. myviptransfer offers VIP transfer solutions tailored for the bride, groom and guests for your wedding, civil ceremony, engagement and private events.",
            )}
          </p>
          <div className="mt-8">
            <a
              href={whatsappLink("Merhaba, düğünümüz için VIP transfer hizmeti almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              {t("Düğün Transferi İçin Teklif Alın", "Get a Quote for Wedding Transfer")}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <p className="section-lede">
            {t(
              "Gelin ve damadın otel, hazırlık alanı, fotoğraf çekimi ve düğün mekânı arasındaki ulaşımından, davetlilerin havalimanı, otel ve organizasyon alanları arasındaki transferlerine kadar tüm ulaşım sürecini profesyonel şekilde planlıyoruz.",
              "From the bride and groom's transportation between the hotel, preparation venue, photo shoot location and wedding venue, to guest transfers between the airport, hotel and event venues — we plan the entire transportation process professionally.",
            )}
          </p>
          <p className="section-lede">
            {t(
              "Düğün gününüzde zamanlama her şeydir. Transfer saatlerini, güzergâhları, araç sayılarını ve karşılama noktalarını önceden planlayarak organizasyonunuzun ulaşım tarafını sorunsuz şekilde yönetiyoruz. Siz en özel anlarınızın tadını çıkarın. Biz ulaşımınızı düşünelim.",
              "Timing is everything on your wedding day. By planning transfer times, routes, vehicle counts and meeting points in advance, we manage the transportation side of your event seamlessly. You enjoy your most special moments — we'll take care of your transportation.",
            )}
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <p className="eyebrow">{t("Düğün Transfer Hizmetlerimiz", "Our Wedding Transfer Services")}</p>
          <ul className="corporate-list">
            {services.map((s) => (
              <li key={s.tr}>{t(s.tr, s.en)}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">{t("Araç Seçenekleri", "Vehicle Options")}</p>
          <h2 className="section-title">{t("Düğününüze Uygun VIP Araç", "The Right VIP Vehicle for Your Wedding")}</h2>
          <div className="fleet-grid">
            {weddingVehicles.map((v) => (
              <Link href={`/fleet/${v.slug}`} className="fleet-card" key={v.slug}>
                <div className="fleet-card-media">
                  <FleetImage src={v.image} alt={v.name} />
                </div>
                <div className="fleet-card-body">
                  <p className="fleet-card-subtitle">{v.subtitle}</p>
                  <h3 className="fleet-card-title">{v.name}</h3>
                  <span className="fleet-card-link">{t("Aracı İncele →", "View Vehicle →")}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
