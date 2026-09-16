import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "myviptransfer iptal ve değişiklik politikası.",
};

export default function CancellationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
            Cancellation Policy
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content max-w-3xl">
          <h2>İptal Şartları</h2>
          <ul>
            <li>Transfer saatinden 24 saatten önce yapılan iptallerde herhangi bir ücret alınmaz.</li>
            <li>24 saatten kısa süre kala yapılan iptallerde rezervasyon bedelinin bir kısmı tahsil edilebilir.</li>
            <li>No-show (bilgilendirme yapılmadan hizmete gelinmemesi) durumunda tam bedel tahsil edilir.</li>
          </ul>

          <h2>Değişiklik Talepleri</h2>
          <p>
            Tarih, saat veya güzergâh değişiklikleri WhatsApp üzerinden en
            az 24 saat önceden iletilmelidir; müsaitlik durumuna göre
            onaylanır.
          </p>

          <h2>Uçuş Gecikmeleri</h2>
          <p>
            Havalimanı transferlerinde uçuş takibi yapıldığından, uçuş
            gecikmeleri iptal ücretine tabi değildir.
          </p>
        </div>
      </section>
    </>
  );
}
