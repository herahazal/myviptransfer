"use client";

import Link from "next/link";
import { vehicles } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import FleetImage from "./FleetImage";

export default function Fleet() {
  const { t } = useLanguage();

  return (
    <section className="section section-dark" id="fleet">
      <div className="container">
        <p className="eyebrow">{t("Premium Filo", "Premium Fleet")}</p>
        <h2 className="section-title">{t("Her Yolculuğa Uygun Araç", "The Right Vehicle for Every Journey")}</h2>
        <p className="section-lede">
          {t(
            "Executive sedanlardan geniş grup araçlarına kadar, özenle seçilmiş Mercedes-Benz filomuzla konforlu ve güvenli bir yolculuk.",
            "From executive sedans to spacious group vehicles, a comfortable and safe journey with our carefully selected Mercedes-Benz fleet.",
          )}
        </p>

        <div className="fleet-grid">
          {vehicles.map((vehicle) => (
            <Link href={`/fleet/${vehicle.slug}`} className="fleet-card" key={vehicle.slug}>
              <div className="fleet-card-media fleet-card-media-fade">
                <FleetImage
                  src={vehicle.image}
                  alt={t(`${vehicle.name} VIP transfer aracı`, `${vehicle.name} VIP transfer vehicle`)}
                />
              </div>
              <div className="fleet-card-body">
                <p className="fleet-card-subtitle">{t(vehicle.subtitle.tr, vehicle.subtitle.en)}</p>
                <h3 className="fleet-card-title">{vehicle.name}</h3>
                <span className="fleet-card-link">{t("Aracı İncele →", "View Vehicle →")}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
