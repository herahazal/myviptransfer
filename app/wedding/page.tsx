import type { Metadata } from "next";
import WeddingContent from "@/components/pages/WeddingContent";

export const metadata: Metadata = {
  title: "Wedding & Events — Düğün Transferi",
  description:
    "Gelin & damat özel transferi, davetli grup ulaşımı ve düğün organizasyonlarınız için Türkiye genelinde VIP transfer çözümleri.",
};

export default function WeddingPage() {
  return <WeddingContent />;
}
