"use client";

import { testimonials } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">What Our Guests Say</p>
        <h2 className="section-title">{t("Müşteri Yorumları", "Customer Reviews")}</h2>
        <div className="mt-10 flex flex-col gap-6">
          {testimonials.map((item, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-stars">{"★".repeat(item.rating)}</div>
              <p className="testimonial-text">&ldquo;{t(item.text.tr, item.text.en)}&rdquo;</p>
              <p className="testimonial-name">{t(item.name.tr, item.name.en)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
