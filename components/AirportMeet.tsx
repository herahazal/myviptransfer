const items = [
  { icon: "🛰️", title: "Flight Tracking", text: "Uçuşunuz gerçek zamanlı takip edilir, gecikmelerde karşılama saati otomatik güncellenir." },
  { icon: "🪧", title: "Personalized Name Sign", text: "Şoförünüz terminal çıkışında adınıza özel karşılama tabelasıyla sizi bekler." },
  { icon: "🎩", title: "Professional Chauffeur", text: "Deneyimli, profesyonel ve güler yüzlü VIP şoförler." },
  { icon: "🧳", title: "Luggage Assistance", text: "Bagajlarınızla ilgilenir, araca kadar size eşlik eder." },
  { icon: "⏳", title: "Airport Waiting", text: "Uçuşunuz gecikse dahi şoförünüz sizi bekler." },
  { icon: "🚪", title: "Door-to-Door Service", text: "Terminalden varış adresinize kadar kesintisiz hizmet." },
  { icon: "☎️", title: "24/7 Support", text: "Rezervasyon ve destek ekibimiz her zaman ulaşılabilir." },
];

export default function AirportMeet() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">VIP Meet & Greet</p>
        <h2 className="section-title">Havalimanı Karşılama</h2>
        <p className="section-lede">
          Terminal çıkışında profesyonel şoförümüz sizi adınıza özel
          karşılama tabelasıyla karşılar, bagajlarınıza yardımcı olur ve
          sizi konforlu VIP aracınıza kadar eşlik eder.
        </p>
        <div className="meet-grid">
          {items.map((item) => (
            <div className="meet-item" key={item.title}>
              <span className="service-icon">{item.icon}</span>
              <p className="fleet-card-title" style={{ fontSize: "1.15rem" }}>
                {item.title}
              </p>
              <p className="service-summary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
