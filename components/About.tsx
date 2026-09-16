"use client";

import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="section" id="about">
      <div className="container max-w-3xl">
        <p className="eyebrow">{t("myviptransfer Hakkında", "About myviptransfer")}</p>
        <h2 className="section-title">{t("Profesyonel. Özel. Kişisel.", "Professional. Private. Personal.")}</h2>
        <p className="section-lede">
          {t(
            "Türkiye genelinde VIP transfer, özel tur ve şoförlü araç hizmetleri sunan profesyonel bir ulaşım markasıyız. İstanbul, Bodrum, Antalya ve Kapadokya başta olmak üzere Türkiye’nin dört bir yanında; profesyonel şoför kadromuz, özenle seçilmiş Mercedes-Benz araç filomuz ve müşteri memnuniyetini önceliğimiz haline getiren yaklaşımımızla hizmet veriyoruz.",
            "We are a professional transportation brand offering VIP transfer, private tour and chauffeur service across Turkey. From Istanbul, Bodrum, Antalya and Cappadocia to every corner of the country, we serve with our professional chauffeur team, carefully selected Mercedes-Benz fleet, and an approach that puts customer satisfaction first.",
          )}
        </p>
        <p className="section-lede">
          {t(
            "Her karşılamayı özel, her yolculuğu VIP kılmak için çalışıyoruz — ister havalimanı transferi, ister özel bir tur, ister düğününüzün ulaşım detayları olsun.",
            "We work to make every welcome special and every journey VIP — whether it's an airport transfer, a private tour, or the transportation details of your wedding.",
          )}
        </p>
      </div>
    </section>
  );
}
