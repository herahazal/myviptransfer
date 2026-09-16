"use client";

import Bilingual from "@/components/Bilingual";

export default function BookingConditionsContent() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
            Booking Conditions
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content max-w-3xl">
          <Bilingual
            tr={
              <>
                <h2>Rezervasyon Süreci</h2>
                <p>
                  Rezervasyonunuz, online form veya WhatsApp üzerinden iletilen
                  bilgilerin ekibimiz tarafından onaylanmasıyla kesinleşir. Onay,
                  araç ve fiyat bilgisiyle birlikte WhatsApp üzerinden size
                  iletilir.
                </p>

                <h2>Fiyata Dahil Olan Hizmetler</h2>
                <ul>
                  <li>Uçuş takibi ve karşılama</li>
                  <li>Profesyonel şoför hizmeti</li>
                  <li>Bagaj desteği</li>
                  <li>Belirtilen güzergâh için yakıt ve araç kullanımı</li>
                </ul>

                <h2>Fiyata Dahil Olmayan Hizmetler</h2>
                <ul>
                  <li>Ek durak veya güzergâh değişiklikleri (önceden bildirilmeyen)</li>
                  <li>Bekleme süresinin sözleşmede belirtilen süreyi aşması</li>
                  <li>Özel talepler (ekstra araç, dekorasyon vb.)</li>
                </ul>

                <h2>Ödeme</h2>
                <p>
                  Ödeme koşulları rezervasyon onayında ayrıca belirtilir; fiyat
                  her zaman onaydan önce açıkça bildirilir.
                </p>
              </>
            }
            en={
              <>
                <h2>Booking Process</h2>
                <p>
                  Your booking is confirmed once the details submitted via the
                  online form or WhatsApp are verified by our team.
                  Confirmation, along with vehicle and price details, is sent
                  to you via WhatsApp.
                </p>

                <h2>Included in the Price</h2>
                <ul>
                  <li>Flight tracking and meet & greet</li>
                  <li>Professional chauffeur service</li>
                  <li>Luggage assistance</li>
                  <li>Fuel and vehicle use for the stated route</li>
                </ul>

                <h2>Not Included in the Price</h2>
                <ul>
                  <li>Extra stops or route changes (not notified in advance)</li>
                  <li>Waiting time exceeding the period stated in the agreement</li>
                  <li>Special requests (extra vehicle, decoration, etc.)</li>
                </ul>

                <h2>Payment</h2>
                <p>
                  Payment terms are stated separately at booking confirmation;
                  the price is always clearly communicated before
                  confirmation.
                </p>
              </>
            }
          />
        </div>
      </section>
    </>
  );
}
