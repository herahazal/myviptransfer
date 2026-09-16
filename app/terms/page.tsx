import type { Metadata } from "next";
import TermsContent from "@/components/pages/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "myviptransfer kullanım ve hizmet şartları.",
};

export default function TermsPage() {
  return <TermsContent />;
}
