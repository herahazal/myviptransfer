"use client";

import Link from "next/link";
import type { Vehicle } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n";
import FleetImage from "@/components/FleetImage";

export default function VehicleContent({ vehicle }: { vehicle: Vehicle }) {
  const { t } = useLanguage();

  return (
    <section className="section" style={{ paddingTop: "8rem" }}>
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="fleet-card-media" style={{ aspectRatio: "4/3" }}>
          <FleetImage
            src={vehicle.image}
            alt={t(`${vehicle.name} VIP transfer aracı`, `${vehicle.name} VIP transfer vehicle`)}
          />
        </div>

        <div className="vehicle-detail-info">
          <p className="eyebrow">{t(vehicle.subtitle.tr, vehicle.subtitle.en)}</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
            {vehicle.name}
          </h1>
          {vehicle.slogan && (
            <p className="mt-2 text-sm font-semibold tracking-wide" style={{ color: "var(--gold-dim)" }}>
              {t(vehicle.slogan.tr, vehicle.slogan.en)}
            </p>
          )}
          <p className="section-lede">{t(vehicle.description.tr, vehicle.description.en)}</p>

          <div className="vehicle-detail-block">
            <p className="footer-heading" style={{ color: "var(--gold-dim)" }}>{t("Özellikler", "Features")}</p>
            <ul className="service-points mt-3">
              {vehicle.features.map((f) => (
                <li key={f.tr}>{t(f.tr, f.en)}</li>
              ))}
            </ul>
          </div>

          <div className="vehicle-detail-block vehicle-detail-block-wide">
            <p className="footer-heading" style={{ color: "var(--gold-dim)" }}>{t("Kullanım Alanları", "Use Cases")}</p>
            <div className="vehicle-usage-tags">
              {vehicle.usage.map((u) => (
                <span className="vehicle-usage-tag" key={u.tr}>
                  {t(u.tr, u.en)}
                </span>
              ))}
            </div>
          </div>

          <div className="vehicle-detail-actions">
            <Link href="/#booking" className="btn-gold">{t("Bu Araçla Rezervasyon Yapın", "Book With This Vehicle")}</Link>
            <a
              href={whatsappLink(`Merhaba, ${vehicle.name} hakkında bilgi almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              {t("WhatsApp'tan Sor", "Ask on WhatsApp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
