import Link from "next/link";
import { destinations } from "@/lib/content";

export default function DestinationsPreview() {
  return (
    <section className="section section-dark">
      <div className="container">
        <p className="eyebrow">Destinasyonlar</p>
        <h2 className="section-title">Türkiye Genelinde Hizmet</h2>
        <div className="destination-grid">
          {destinations.map((d) => (
            <Link href={`/destinations/${d.slug}`} className="destination-card" key={d.slug}>
              <p className="destination-card-name">{d.name}</p>
              <p className="destination-card-teaser">{d.teaser}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/destinations" className="btn-outline">Tüm Destinasyonları Görün →</Link>
        </div>
      </div>
    </section>
  );
}
