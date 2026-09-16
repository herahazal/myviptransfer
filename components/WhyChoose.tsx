const items = [
  { title: "Professional Chauffeurs", text: "Deneyimli, güler yüzlü ve profesyonel şoför kadromuz." },
  { title: "Premium Vehicles", text: "Özenle seçilmiş, düzenli bakımlı Mercedes-Benz araç filosu." },
  { title: "Flight Tracking", text: "Uçuşunuz takip edilir, gecikmelerde karşılama otomatik güncellenir." },
  { title: "24/7 Support", text: "Rezervasyon ve müşteri desteği her zaman ulaşılabilir." },
  { title: "Private & Direct", text: "Paylaşımsız, size özel doğrudan transfer." },
  { title: "Turkey Wide", text: "İstanbul, Bodrum, Antalya, Kapadokya ve Türkiye genelinde hizmet." },
];

export default function WhyChoose() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Neden myviptransfer?</p>
        <h2 className="section-title">Güvenle Tercih Edilen VIP Transfer Markası</h2>
        <div className="choose-grid">
          {items.map((item) => (
            <div className="choose-item" key={item.title}>
              <span className="choose-check">✓</span>
              <div>
                <p className="fleet-card-title" style={{ fontSize: "1.15rem" }}>{item.title}</p>
                <p className="service-summary">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
