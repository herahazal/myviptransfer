import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "myviptransfer kullanım ve hizmet şartları.",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
            Terms & Conditions
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content max-w-3xl">
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
        </div>
      </section>
    </>
  );
}
