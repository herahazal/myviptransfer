import { whatsappLink } from "@/lib/whatsapp";

const items = [
  "Executive airport transfer",
  "VIP guest transportation",
  "Business meetings",
  "Roadshows",
  "Corporate events",
  "Congress & fairs",
  "Hotel transportation",
  "Long-term chauffeur service",
];

export default function Corporate() {
  return (
    <section className="section section-dark" id="corporate">
      <div className="container">
        <p className="eyebrow">Corporate Travel</p>
        <h2 className="section-title">Kurumsal Hizmetler</h2>
        <p className="section-lede">
          Şirketiniz için üst düzey misafir ağırlama, toplantı ve organizasyon
          ulaşımından uzun vadeli şoförlü araç anlaşmalarına kadar kurumsal
          çözümler sunuyoruz.
        </p>
        <ul className="corporate-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-10">
          <a
            href={whatsappLink("Merhaba, şirketimiz için kurumsal transfer anlaşması hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Kurumsal Teklif Al
          </a>
        </div>
      </div>
    </section>
  );
}
