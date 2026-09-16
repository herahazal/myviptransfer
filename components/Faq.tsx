"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section section-dark">
      <div className="container max-w-3xl">
        <p className="eyebrow">{t("SSS", "FAQ")}</p>
        <h2 className="section-title">{t("Sıkça Sorulan Sorular", "Frequently Asked Questions")}</h2>
        <div className="faq-list">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className="faq-item" key={item.q.tr}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  {t(item.q.tr, item.q.en)}
                  <span>{open ? "−" : "+"}</span>
                </button>
                {open && <p className="faq-answer">{t(item.a.tr, item.a.en)}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
