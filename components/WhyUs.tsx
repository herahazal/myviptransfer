const items = [
  { icon: "🛬", title: "Uçuş Takibi" },
  { icon: "⏱️", title: "Zamanında Karşılama" },
  { icon: "🎩", title: "Profesyonel VIP Şoför" },
  { icon: "🪧", title: "İsimli Karşılama Hizmeti" },
  { icon: "🧳", title: "Bagaj Desteği" },
  { icon: "🚘", title: "Luxury & VIP Araç Seçenekleri" },
  { icon: "☎️", title: "7/24 Rezervasyon Desteği" },
  { icon: "🇹🇷", title: "Türkiye Genelinde Özel Transfer" },
];

export default function WhyUs() {
  return (
    <section className="section section-dark">
      <div className="container">
        <p className="eyebrow">Neden myviptransfer?</p>
        <h2 className="section-title">Seyahatinizin İlk Anından İtibaren Ayrıcalıklı</h2>
        <div className="why-grid">
          {items.map((item) => (
            <div className="why-item" key={item.title}>
              <span className="why-item-icon">{item.icon}</span>
              <p className="why-item-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
