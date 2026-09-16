"use client";

import Link from "next/link";
import type { Destination } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n";

export default function DestinationContent({ destination }: { destination: Destination }) {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t("Destinasyon", "Destination")}</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            {destination.name} VIP Transfer
          </h1>
          <p className="section-lede" style={{ maxWidth: "60ch" }}>
            {t(destination.teaser.tr, destination.teaser.en)}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#booking" className="btn-gold">{t("Rezervasyon Yapın", "Make a Reservation")}</Link>
            <a
              href={whatsappLink(`Merhaba, ${destination.name} için transfer/tur hakkında bilgi almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              {t("WhatsApp'tan Sor", "Ask on WhatsApp")}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <p className="eyebrow">{t("Öne Çıkan Noktalar", "Highlights")}</p>
          <h2 className="section-title">
            {t(`${destination.name}’da Görülmesi Gerekenler`, `Must-See in ${destination.name}`)}
          </h2>
          <ul className="mt-6 flex flex-col gap-3">
            {destination.highlights.map((h) => (
              <li key={h.tr} className="text-base" style={{ color: "rgba(18,33,42,0.75)" }}>
                • {t(h.tr, h.en)}
              </li>
            ))}
          </ul>
          <p className="section-lede mt-6">
            {t(
              `Programınızı ve ziyaret etmek istediğiniz noktaları siz belirleyin; biz yolculuğunuzu konforlu, güvenli ve keyifli hale getirelim. ${destination.name} için özel VIP araç ve profesyonel şoförünüzle, otel/villa/havalimanı pickup & drop-off dahil esnek bir günlük program oluşturabiliriz.`,
              `You choose your itinerary and the places you'd like to visit; we'll make your journey comfortable, safe and enjoyable. For ${destination.name}, we can put together a flexible day program with your own VIP vehicle and professional chauffeur, including hotel/villa/airport pickup & drop-off.`,
            )}
          </p>
        </div>
      </section>
    </>
  );
}
