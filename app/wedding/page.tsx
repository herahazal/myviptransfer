import type { Metadata } from "next";
import Link from "next/link";
import { vehicles } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import FleetImage from "@/components/FleetImage";

export const metadata: Metadata = {
  title: "Wedding & Events — Düğün Transferi",
  description:
    "Gelin & damat özel transferi, davetli grup ulaşımı ve düğün organizasyonlarınız için Türkiye genelinde VIP transfer çözümleri.",
};

const services = [
  "Gelin & damat özel transferi",
  "VIP araç ile ulaşım",
  "Havalimanı-otel transferleri",
  "Otel-düğün mekânı transferleri",
  "Davetli transferleri",
  "Grup ve aile transferleri",
  "Günlük şoförlü araç",
  "Düğün öncesi/sonrası transferler",
  "Fotoğraf çekimi için özel araç",
  "Şehirler arası düğün transferleri",
  "Düğün/nişan/özel davet organizasyonları",
  "Türkiye genelinde hizmet",
];

const weddingVehicleSlugs = [
  "mercedes-s-class",
  "premium-vip-vito",
  "premium-vip-sprinter",
  "premium-suv",
];

export default function WeddingPage() {
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
            Make Your Special Day Even More Special. Hayatınızın en özel
            günlerinden birinde ulaşım detaylarını düşünmenize gerek
            kalmasın. myviptransfer, düğün, nikâh, nişan ve özel
            organizasyonlarınız için gelin-damat ve davetlilere özel VIP
            transfer çözümleri sunar.
          </p>
          <div className="mt-8">
            <a
              href={whatsappLink("Merhaba, düğünümüz için VIP transfer hizmeti almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Düğün Transferi İçin Teklif Alın
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <p className="section-lede">
            Gelin ve damadın otel, hazırlık alanı, fotoğraf çekimi ve düğün
            mekânı arasındaki ulaşımından, davetlilerin havalimanı, otel ve
            organizasyon alanları arasındaki transferlerine kadar tüm
            ulaşım sürecini profesyonel şekilde planlıyoruz.
          </p>
          <p className="section-lede">
            Düğün gününüzde zamanlama her şeydir. Transfer saatlerini,
            güzergâhları, araç sayılarını ve karşılama noktalarını önceden
            planlayarak organizasyonunuzun ulaşım tarafını sorunsuz şekilde
            yönetiyoruz. Siz en özel anlarınızın tadını çıkarın. Biz
            ulaşımınızı düşünelim.
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <p className="eyebrow">Düğün Transfer Hizmetlerimiz</p>
          <ul className="corporate-list">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Araç Seçenekleri</p>
          <h2 className="section-title">Düğününüze Uygun VIP Araç</h2>
          <div className="fleet-grid">
            {weddingVehicles.map((v) => (
              <Link href={`/fleet/${v.slug}`} className="fleet-card" key={v.slug}>
                <div className="fleet-card-media">
                  <FleetImage src={v.image} alt={v.name} />
                </div>
                <div className="fleet-card-body">
                  <p className="fleet-card-subtitle">{v.subtitle}</p>
                  <h3 className="fleet-card-title">{v.name}</h3>
                  <span className="fleet-card-link">View Vehicle →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
