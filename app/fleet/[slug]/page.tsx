import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { vehicles } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import FleetImage from "@/components/FleetImage";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);
  if (!vehicle) return {};
  return {
    title: `${vehicle.name} — ${vehicle.subtitle}`,
    description: vehicle.description,
  };
}

export default async function VehiclePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);
  if (!vehicle) notFound();

  return (
    <section className="section" style={{ paddingTop: "8rem" }}>
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="fleet-card-media" style={{ aspectRatio: "4/3" }}>
          <FleetImage src={vehicle.image} alt={vehicle.name} />
        </div>

        <div>
          <p className="eyebrow">{vehicle.subtitle}</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
            {vehicle.name}
          </h1>
          {vehicle.slogan && (
            <p className="mt-2 text-sm font-semibold tracking-wide" style={{ color: "var(--gold-dim)" }}>
              {vehicle.slogan}
            </p>
          )}
          <p className="section-lede">{vehicle.description}</p>

          <div className="mt-8">
            <p className="footer-heading" style={{ color: "var(--gold-dim)" }}>Özellikler</p>
            <ul className="service-points mt-3">
              {vehicle.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="footer-heading" style={{ color: "var(--gold-dim)" }}>Kullanım Alanları</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {vehicle.usage.map((u) => (
                <span
                  key={u}
                  className="text-xs font-semibold uppercase tracking-wide px-3 py-1.5"
                  style={{ border: "1px solid var(--line)" }}
                >
                  {u}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/#booking" className="btn-gold">Bu Araçla Rezervasyon Yapın</Link>
            <a
              href={whatsappLink(`Merhaba, ${vehicle.name} hakkında bilgi almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp&apos;tan Sor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
