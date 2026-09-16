import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK & Privacy Policy",
  description: "myviptransfer kişisel verilerin korunması ve gizlilik politikası.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
            KVKK & Privacy Policy
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content max-w-3xl">
          <p>
            myviptransfer (&ldquo;MAQ BLUE ISLAND TRAVEL AGENCY&rdquo;) olarak, 6698 sayılı
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
        </div>
      </section>
    </>
  );
}
