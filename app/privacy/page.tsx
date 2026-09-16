import type { Metadata } from "next";
import PrivacyContent from "@/components/pages/PrivacyContent";

export const metadata: Metadata = {
  title: "KVKK & Privacy Policy",
  description: "myviptransfer kişisel verilerin korunması ve gizlilik politikası.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
