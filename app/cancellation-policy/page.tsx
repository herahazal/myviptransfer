import type { Metadata } from "next";
import CancellationContent from "@/components/pages/CancellationContent";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "myviptransfer iptal ve değişiklik politikası.",
};

export default function CancellationPage() {
  return <CancellationContent />;
}
