"use client";

import Bilingual from "@/components/Bilingual";
import { useLanguage } from "@/lib/i18n";

export default function TermsContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t("Yasal", "Legal")}</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
            {t("Kullanım Şartları", "Terms & Conditions")}
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content max-w-3xl">
          <Bilingual
            tr={
              <>
                <p>
                  Bu şartlar, myviptransfer üzerinden alınan tüm transfer, tur ve
                  şoförlü araç hizmetlerini kapsar. Rezervasyon yaptığınızda bu
                  şartları kabul etmiş sayılırsınız.
                </p>

                <h2>Hizmet Kapsamı</h2>
                <p>
                  Rezervasyon onayında belirtilen güzergâh, tarih, saat ve araç
                  tipi geçerlidir. Değişiklik talepleri WhatsApp üzerinden en az
                  24 saat önceden iletilmelidir.
                </p>

                <h2>Fiyatlandırma</h2>
                <p>
                  Fiyatlarımız rezervasyon onayından önce açıkça bildirilir.
                  Fiyata dahil ve dahil olmayan hizmetler booking sayfasında ayrıca
                  belirtilir. Gizli ek ücret uygulanmaz.
                </p>

                <h2>Sorumluluklar</h2>
                <p>
                  myviptransfer, mücbir sebepler (hava koşulları, trafik kazası,
                  resmi kısıtlamalar vb.) nedeniyle oluşabilecek gecikmelerden
                  sorumlu tutulamaz; ancak müşteriyi en kısa sürede bilgilendirir.
                </p>

                <h2>Uygulanacak Hukuk</h2>
                <p>Bu şartlar Türkiye Cumhuriyeti kanunlarına tabidir.</p>
              </>
            }
            en={
              <>
                <p>
                  These terms cover all transfer, tour and chauffeur-driven
                  services booked through myviptransfer. By making a booking,
                  you are deemed to have accepted these terms.
                </p>

                <h2>Scope of Service</h2>
                <p>
                  The route, date, time and vehicle type stated at booking
                  confirmation apply. Change requests must be sent via
                  WhatsApp at least 24 hours in advance.
                </p>

                <h2>Pricing</h2>
                <p>
                  Our prices are clearly stated before booking confirmation.
                  What is included and excluded is noted separately on the
                  booking page. No hidden extra charges apply.
                </p>

                <h2>Liability</h2>
                <p>
                  myviptransfer cannot be held liable for delays caused by
                  force majeure (weather conditions, traffic accidents,
                  official restrictions, etc.), but will inform the customer
                  as soon as possible.
                </p>

                <h2>Governing Law</h2>
                <p>These terms are governed by the laws of the Republic of Turkey.</p>
              </>
            }
          />
        </div>
      </section>
    </>
  );
}
