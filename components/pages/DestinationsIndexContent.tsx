"use client";

import Link from "next/link";
import { destinations } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function DestinationsIndexContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t("Destinasyonlar", "Destinations")}</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            {t("Türkiye Genelinde Hizmet", "Service Across Turkey")}
          </h1>
          <p className="section-lede" style={{ maxWidth: "60ch" }}>
            {t(
              "İstanbul’dan Kapadokya’ya, Bodrum’dan Antalya’ya kadar Türkiye’nin en özel destinasyonlarında VIP transfer ve özel tur hizmeti sunuyoruz.",
              "From Istanbul to Cappadocia, Bodrum to Antalya, we offer VIP transfer and private tour services in Turkey's most special destinations.",
            )}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="destination-grid">
            {destinations.map((d) => (
              <Link href={`/destinations/${d.slug}`} className="destination-card" key={d.slug}>
                <p className="destination-card-name">{d.name}</p>
                <p className="destination-card-teaser">{t(d.teaser.tr, d.teaser.en)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
