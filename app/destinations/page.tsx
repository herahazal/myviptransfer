import type { Metadata } from "next";
import DestinationsIndexContent from "@/components/pages/DestinationsIndexContent";

export const metadata: Metadata = {
  title: "Destinasyonlar — Türkiye Genelinde VIP Transfer",
  description:
    "Istanbul, Bodrum, Antalya, Cappadocia, Fethiye, Marmaris ve Türkiye genelindeki destinasyonlarda VIP transfer ve özel tur hizmeti.",
};

export default function DestinationsPage() {
  return <DestinationsIndexContent />;
}
