import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Destinasyonlar — Türkiye Genelinde VIP Transfer",
  description:
    "Istanbul, Bodrum, Antalya, Cappadocia, Fethiye, Marmaris ve Türkiye genelindeki destinasyonlarda VIP transfer ve özel tur hizmeti.",
};

export default function DestinationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Destinasyonlar</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            Türkiye Genelinde Hizmet
          </h1>
          <p className="section-lede" style={{ maxWidth: "60ch" }}>
            İstanbul&rsquo;dan Kapadokya&rsquo;ya, Bodrum&rsquo;dan
            Antalya&rsquo;ya kadar Türkiye&rsquo;nin en özel
            destinasyonlarında VIP transfer ve özel tur hizmeti sunuyoruz.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="destination-grid">
            {destinations.map((d) => (
              <Link href={`/destinations/${d.slug}`} className="destination-card" key={d.slug}>
                <p className="destination-card-name">{d.name}</p>
                <p className="destination-card-teaser">{d.teaser}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
