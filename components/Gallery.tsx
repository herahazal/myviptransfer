"use client";

import { vehicles } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import FleetImage from "./FleetImage";

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="section section-dark">
      <div className="container">
        <p className="eyebrow">{t("Fotoğraf Galerisi", "Photo Gallery")}</p>
        <h2 className="section-title">{t("Filomuzdan Kareler", "Glimpses of Our Fleet")}</h2>
        <div className="gallery-grid">
          {vehicles.map((v) => (
            <div className="gallery-tile" key={v.slug}>
              <FleetImage src={v.image} alt={v.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
