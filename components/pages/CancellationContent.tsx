"use client";

import Bilingual from "@/components/Bilingual";

export default function CancellationContent() {
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
          <Bilingual
            tr={
              <>
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
              </>
            }
            en={
              <>
                <h2>Cancellation Terms</h2>
                <ul>
                  <li>No charge applies to cancellations made more than 24 hours before the transfer time.</li>
                  <li>A portion of the booking fee may be charged for cancellations made less than 24 hours in advance.</li>
                  <li>In case of a no-show (not showing up for the service without notice), the full fee is charged.</li>
                </ul>

                <h2>Change Requests</h2>
                <p>
                  Changes to date, time or route must be sent via WhatsApp at
                  least 24 hours in advance; they are confirmed subject to
                  availability.
                </p>

                <h2>Flight Delays</h2>
                <p>
                  Since airport transfers include flight tracking, flight
                  delays are not subject to a cancellation fee.
                </p>
              </>
            }
          />
        </div>
      </section>
    </>
  );
}
