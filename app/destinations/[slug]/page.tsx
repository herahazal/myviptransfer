import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations } from "@/lib/content";
import DestinationContent from "@/components/pages/DestinationContent";

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
    description: `${destination.name} için havalimanı transferi, özel tur ve şoförlü araç hizmeti. ${destination.teaser.tr}`,
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

  return <DestinationContent destination={destination} />;
}
