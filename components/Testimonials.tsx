import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">What Our Guests Say</p>
        <h2 className="section-title">Müşteri Yorumları</h2>
        <div className="mt-10 flex flex-col gap-6">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-stars">{"★".repeat(t.rating)}</div>
              <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <p className="testimonial-name">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
