"use client";

import Bilingual from "@/components/Bilingual";
import { useLanguage } from "@/lib/i18n";

export default function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t("Yasal", "Legal")}</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
            {t("KVKK & Gizlilik Politikası", "KVKK & Privacy Policy")}
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content max-w-3xl">
          <Bilingual
            tr={
              <>
                <p>
                  myviptransfer (&ldquo;MY VIP TRANSFER&rdquo;) olarak, 6698 sayılı
                  Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) kapsamında kişisel
                  verilerinizin güvenliğine önem veriyoruz. Bu sayfa, rezervasyon ve
                  iletişim süreçlerinde topladığımız verilerin nasıl işlendiğini
                  özetler.
                </p>

                <h2>Toplanan Veriler</h2>
                <ul>
                  <li>Ad soyad, telefon (WhatsApp) ve e-posta bilgileri</li>
                  <li>Rezervasyon detayları (tarih, güzergâh, uçuş numarası vb.)</li>
                  <li>WhatsApp üzerinden iletilen mesaj içerikleri</li>
                </ul>

                <h2>Verilerin Kullanım Amacı</h2>
                <p>
                  Toplanan veriler yalnızca rezervasyonunuzun oluşturulması,
                  onaylanması ve size ulaşılması amacıyla kullanılır; üçüncü
                  taraflarla pazarlama amaçlı paylaşılmaz.
                </p>

                <h2>Veri Sahibinin Hakları</h2>
                <p>
                  KVKK madde 11 kapsamındaki haklarınızı kullanmak için
                  info@myviptransfer.com adresinden bizimle iletişime
                  geçebilirsiniz.
                </p>

                <h2>İletişim</h2>
                <p>Sorularınız için: info@myviptransfer.com</p>
              </>
            }
            en={
              <>
                <p>
                  As myviptransfer (&ldquo;MY VIP TRANSFER&rdquo;), we take the
                  security of your personal data seriously under Turkey&rsquo;s Law No.
                  6698 on the Protection of Personal Data (&ldquo;KVKK&rdquo;). This page
                  summarizes how we process the data we collect during booking
                  and communication.
                </p>

                <h2>Data We Collect</h2>
                <ul>
                  <li>Full name, phone (WhatsApp) and email details</li>
                  <li>Booking details (date, route, flight number, etc.)</li>
                  <li>Message content sent via WhatsApp</li>
                </ul>

                <h2>Purpose of Use</h2>
                <p>
                  The data collected is used solely to create, confirm and
                  fulfil your booking, and to reach you; it is never shared
                  with third parties for marketing purposes.
                </p>

                <h2>Data Subject Rights</h2>
                <p>
                  To exercise your rights under KVKK Article 11, you can
                  contact us at info@myviptransfer.com.
                </p>

                <h2>Contact</h2>
                <p>For questions: info@myviptransfer.com</p>
              </>
            }
          />
        </div>
      </section>
    </>
  );
}
