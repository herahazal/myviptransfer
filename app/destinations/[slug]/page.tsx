import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { destinations } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) return {};
  return {
    title: `${destination.name} VIP Transfer & Private Tours`,
    description: `${destination.name} için havalimanı transferi, özel tur ve şoförlü araç hizmeti. ${destination.teaser}`,
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Destinasyon</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            {destination.name} VIP Transfer
          </h1>
          <p className="section-lede" style={{ maxWidth: "60ch" }}>
            {destination.teaser}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#booking" className="btn-gold">Rezervasyon Yapın</Link>
            <a
              href={whatsappLink(`Merhaba, ${destination.name} için transfer/tur hakkında bilgi almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp&apos;tan Sor
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <p className="eyebrow">Öne Çıkan Noktalar</p>
          <h2 className="section-title">{destination.name}&rsquo;da Görülmesi Gerekenler</h2>
          <ul className="mt-6 flex flex-col gap-3">
            {destination.highlights.map((h) => (
              <li key={h} className="text-base" style={{ color: "rgba(18,33,42,0.75)" }}>
                • {h}
              </li>
            ))}
          </ul>
          <p className="section-lede mt-6">
            Programınızı ve ziyaret etmek istediğiniz noktaları siz belirleyin;
            biz yolculuğunuzu konforlu, güvenli ve keyifli hale getirelim.
            {" "}{destination.name} için özel VIP araç ve profesyonel
            şoförünüzle, otel/villa/havalimanı pickup &amp; drop-off dahil
            esnek bir günlük program oluşturabiliriz.
          </p>
        </div>
      </section>
    </>
  );
}
