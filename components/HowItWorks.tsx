const steps = [
  { n: "01", title: "Book", text: "Tarih, saat, güzergâh ve yolcu sayısını gönderin." },
  { n: "02", title: "Confirm", text: "Araç ve fiyat bilgisi tarafınıza iletilsin." },
  { n: "03", title: "Meet", text: "Şoförünüz sizi belirlenen noktada karşılasın." },
  { n: "04", title: "Enjoy", text: "Konforlu yolculuğunuzun keyfini çıkarın." },
];

export default function HowItWorks() {
  return (
    <section className="section section-dark">
      <div className="container">
        <p className="eyebrow">Nasıl Çalışıyor?</p>
        <h2 className="section-title">Dört Adımda VIP Transfer</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.n}>
              <span className="step-number">{step.n}</span>
              <p className="step-title">{step.title}</p>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
