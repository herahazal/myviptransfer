"use client";

import Link from "next/link";
import { destinations } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function DestinationsPreview() {
  const { t } = useLanguage();

  return (
    <section className="section section-dark">
      <div className="container">
        <p className="eyebrow">{t("Destinasyonlar", "Destinations")}</p>
        <h2 className="section-title">{t("Türkiye Genelinde Hizmet", "Service Across Turkey")}</h2>
        <div className="destination-grid">
          {destinations.map((d) => (
            <Link href={`/destinations/${d.slug}`} className="destination-card" key={d.slug}>
              <p className="destination-card-name">{d.name}</p>
              <p className="destination-card-teaser">{t(d.teaser.tr, d.teaser.en)}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/destinations" className="btn-outline">
            {t("Tüm Destinasyonları Görün →", "View All Destinations →")}
          </Link>
        </div>
      </div>
    </section>
  );
}
