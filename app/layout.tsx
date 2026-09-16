import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  metadataBase: new URL("https://myviptransfer.com"),
  title: {
    default: "myviptransfer — Premium VIP Transfer & Private Tours in Turkey",
    template: "%s | myviptransfer",
  },
  description:
    "İstanbul, Bodrum, Antalya ve Türkiye genelinde havalimanı karşılama, VIP transfer, şoförlü araç, özel tur ve düğün transferi hizmetleri.",
  keywords: [
    "vip transfer",
    "havalimanı transfer",
    "istanbul transfer",
    "bodrum transfer",
    "antalya transfer",
    "şoförlü araç kiralama",
    "private tour turkey",
  ],
  openGraph: {
    title: "myviptransfer — Premium VIP Transfer & Private Tours in Turkey",
    description:
      "Havalimanı karşılama, VIP transfer, şoförlü araç, özel tur ve düğün transferi. Türkiye genelinde profesyonel hizmet.",
    url: "https://myviptransfer.com",
    siteName: "myviptransfer",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Loader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
