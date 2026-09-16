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

        <div>
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

          <div className="mt-8">
            <p className="footer-heading" style={{ color: "var(--gold-dim)" }}>{t("Özellikler", "Features")}</p>
            <ul className="service-points mt-3">
              {vehicle.features.map((f) => (
                <li key={f.tr}>{t(f.tr, f.en)}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="footer-heading" style={{ color: "var(--gold-dim)" }}>{t("Kullanım Alanları", "Use Cases")}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {vehicle.usage.map((u) => (
                <span
                  key={u.tr}
                  className="text-xs font-semibold uppercase tracking-wide px-3 py-1.5"
                  style={{ border: "1px solid var(--line)" }}
                >
                  {t(u.tr, u.en)}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
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
