import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vehicles } from "@/lib/content";
import VehicleContent from "@/components/pages/VehicleContent";

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
    description: vehicle.description.tr,
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

  return <VehicleContent vehicle={vehicle} />;
}
