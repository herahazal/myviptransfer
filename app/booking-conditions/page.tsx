import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Conditions",
  description: "myviptransfer rezervasyon koşulları.",
};

export default function BookingConditionsPage() {
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
        </div>
      </section>
    </>
  );
}
