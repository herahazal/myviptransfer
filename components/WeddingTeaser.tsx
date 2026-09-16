"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function WeddingTeaser() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="eyebrow">{t("Düğün & Etkinlik", "Wedding & Events")}</p>
          <h2 className="section-title">{t("Özel Gününüz, Bizim Özel İlgimiz", "Your Special Day, Our Special Care")}</h2>
          <p className="section-lede">
            {t(
              "Gelin & damat özel transferinden davetli grup ulaşımına kadar, düğün gününüzün tüm transfer detaylarını profesyonelce planlıyoruz.",
              "From a private bride & groom transfer to guest group transportation, we professionally plan every transfer detail of your wedding day.",
            )}
          </p>
        </div>
        <Link href="/wedding" className="btn-outline whitespace-nowrap">
          {t("Düğün Transferini İnceleyin →", "Explore Wedding Transfers →")}
        </Link>
      </div>
    </section>
  );
}
