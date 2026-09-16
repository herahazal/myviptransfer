"use client";

import { FormEvent, useState } from "react";
import { vehicles } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n";

type Tab = "book" | "quote";

export default function BookingSection() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<Tab>("book");

  function handleBookSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => (data.get(k) as string)?.trim() || "—";

    const lines = [
      "Merhaba, fiyat teklifi almak istiyorum:",
      `Alış: ${get("pickup")}`,
      `Varış: ${get("destination")}`,
      `Tarih: ${get("date")}`,
      `Saat: ${get("time")}`,
      `Yolcu: ${get("passengers")}`,
      `Araç: ${get("vehicle")}`,
      `Uçuş No: ${get("flight")}`,
      `Ad Soyad: ${get("name")}`,
      `WhatsApp: ${get("phone")}`,
      `E-posta: ${get("email")}`,
    ];

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  function handleQuoteSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => (data.get(k) as string)?.trim() || "—";

    const lines = [
      "Merhaba, fiyat teklifi almak istiyorum:",
      `Hizmet: ${get("service")}`,
      `Güzergâh: ${get("route")}`,
      `Tarih: ${get("date")}`,
      `Yolcu: ${get("passengers")}`,
      `Ad Soyad: ${get("name")}`,
      `WhatsApp: ${get("phone")}`,
      `E-posta: ${get("email")}`,
      `Not: ${get("notes")}`,
    ];

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="section section-dark" id="booking">
      <div className="container">
        <p className="eyebrow">{t("Online Rezervasyon", "Online Booking")}</p>
        <h2 className="section-title">{t("Seyahatinize VIP Bir Başlangıç Yapın", "Give Your Trip a VIP Start")}</h2>
        <p className="section-lede">
          {t(
            "Rezervasyonunuzu şimdi oluşturun ve havalimanından varış noktanıza kadar konforun keyfini çıkarın. Özel turlar, düğün, günlük araç ve şehirler arası seyahatler için fiyat teklifi talep edebilirsiniz.",
            "Make your reservation now and enjoy comfort from the airport all the way to your destination. Request a quote for private tours, weddings, daily vehicles and intercity travel.",
          )}
        </p>

        <div className="form-tabs">
          <button
            type="button"
            className={`form-tab${tab === "book" ? " is-active" : ""}`}
            onClick={() => setTab("book")}
          >
            {t("Transfer Rezervasyonu", "Book Your Transfer")}
          </button>
          <button
            type="button"
            className={`form-tab${tab === "quote" ? " is-active" : ""}`}
            onClick={() => setTab("quote")}
          >
            {t("Fiyat Teklifi İste", "Request a Quote")}
          </button>
        </div>

        {tab === "book" ? (
          <form className="form-grid" onSubmit={handleBookSubmit}>
            <div>
              <label className="form-label" htmlFor="pickup">{t("Alış Noktası", "Pickup Location")}</label>
              <input
                className="form-input"
                id="pickup"
                name="pickup"
                required
                placeholder={t("Örn. Istanbul Airport (IST)", "e.g. Istanbul Airport (IST)")}
              />
            </div>
            <div>
              <label className="form-label" htmlFor="destination">{t("Varış Noktası", "Destination")}</label>
              <input
                className="form-input"
                id="destination"
                name="destination"
                required
                placeholder={t("Örn. Şişli, İstanbul", "e.g. Şişli, Istanbul")}
              />
            </div>
            <div>
              <label className="form-label" htmlFor="date">{t("Tarih", "Date")}</label>
              <input className="form-input" id="date" name="date" type="date" required />
            </div>
            <div>
              <label className="form-label" htmlFor="time">{t("Saat", "Time")}</label>
              <input className="form-input" id="time" name="time" type="time" required />
            </div>
            <div>
              <label className="form-label" htmlFor="passengers">{t("Yolcu Sayısı", "Passengers")}</label>
              <input className="form-input" id="passengers" name="passengers" type="number" min={1} required placeholder="2" />
            </div>
            <div>
              <label className="form-label" htmlFor="vehicle">{t("Araç", "Vehicle")}</label>
              <select className="form-select" id="vehicle" name="vehicle" defaultValue="">
                <option value="" disabled>{t("Araç seçin", "Select a vehicle")}</option>
                {vehicles.map((v) => (
                  <option key={v.slug} value={v.name}>{v.name}</option>
                ))}
                <option value="Fark etmez">{t("Fark etmez / Önerin", "No preference / Suggest one")}</option>
              </select>
            </div>
            <div>
              <label className="form-label" htmlFor="flight">{t("Uçuş Numarası", "Flight Number")}</label>
              <input className="form-input" id="flight" name="flight" placeholder="TK1234" />
            </div>
            <div>
              <label className="form-label" htmlFor="name">{t("Ad Soyad", "Name")}</label>
              <input className="form-input" id="name" name="name" required placeholder={t("Ad Soyad", "Full name")} />
            </div>
            <div>
              <label className="form-label" htmlFor="phone">WhatsApp</label>
              <input className="form-input" id="phone" name="phone" required placeholder="+90 5xx xxx xx xx" />
            </div>
            <div>
              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-input" id="email" name="email" type="email" placeholder={t("ornek@mail.com", "you@example.com")} />
            </div>

            <div className="form-field-wide form-foot">
              <button type="submit" className="btn-gold">{t("Teklif Al", "Get a Quote")}</button>
              <span className="form-note">
                {t("Gizli ücret yok — fiyatınız onaydan önce bildirilir.", "No hidden fees — your price is confirmed before booking.")}
              </span>
            </div>
          </form>
        ) : (
          <form className="form-grid" onSubmit={handleQuoteSubmit}>
            <div>
              <label className="form-label" htmlFor="q-service">{t("Hizmet", "Service")}</label>
              <select className="form-select" id="q-service" name="service" defaultValue="">
                <option value="" disabled>{t("Hizmet seçin", "Select a service")}</option>
                <option value="Özel Tur">{t("Özel Tur", "Private Tour")}</option>
                <option value="Düğün & Etkinlik">{t("Düğün & Etkinlik", "Wedding & Events")}</option>
                <option value="Şoförlü Araç Hizmeti">{t("Şoförlü Araç Hizmeti", "Chauffeur-Driven Car Service")}</option>
                <option value="Şehirlerarası Transfer">{t("Şehirlerarası Transfer", "Intercity Transfer")}</option>
                <option value="Kurumsal Ulaşım">{t("Kurumsal Ulaşım", "Corporate Travel")}</option>
              </select>
            </div>
            <div>
              <label className="form-label" htmlFor="q-route">{t("Güzergâh / Varış Noktası", "Route / Destination")}</label>
              <input
                className="form-input"
                id="q-route"
                name="route"
                required
                placeholder={t("Örn. İstanbul → Bodrum", "e.g. Istanbul → Bodrum")}
              />
            </div>
            <div>
              <label className="form-label" htmlFor="q-date">{t("Tarih", "Date")}</label>
              <input className="form-input" id="q-date" name="date" type="date" required />
            </div>
            <div>
              <label className="form-label" htmlFor="q-passengers">{t("Yolcu Sayısı", "Passengers")}</label>
              <input className="form-input" id="q-passengers" name="passengers" type="number" min={1} placeholder="4" />
            </div>
            <div>
              <label className="form-label" htmlFor="q-name">{t("Ad Soyad", "Name")}</label>
              <input className="form-input" id="q-name" name="name" required placeholder={t("Ad Soyad", "Full name")} />
            </div>
            <div>
              <label className="form-label" htmlFor="q-phone">WhatsApp</label>
              <input className="form-input" id="q-phone" name="phone" required placeholder="+90 5xx xxx xx xx" />
            </div>
            <div className="form-field-wide">
              <label className="form-label" htmlFor="q-email">Email</label>
              <input className="form-input" id="q-email" name="email" type="email" placeholder={t("ornek@mail.com", "you@example.com")} />
            </div>
            <div className="form-field-wide">
              <label className="form-label" htmlFor="q-notes">{t("Notlar", "Notes")}</label>
              <textarea
                className="form-textarea"
                id="q-notes"
                name="notes"
                placeholder={t("Programınız hakkında ek bilgi verin", "Tell us more about your plans")}
              />
            </div>

            <div className="form-field-wide form-foot">
              <button type="submit" className="btn-gold">{t("Teklif Talebini Gönder", "Send Quote Request")}</button>
              <span className="form-note">
                {t("Ekibimiz en kısa sürede WhatsApp üzerinden dönüş yapar.", "Our team will get back to you on WhatsApp as soon as possible.")}
              </span>
            </div>
          </form>
        )}

        <Pricing />
      </div>
    </section>
  );
}

function Pricing() {
  const { t } = useLanguage();

  return (
    <div className="mt-20">
      <div className="pricing-grid">
        <div className="pricing-card">
          <p className="pricing-card-title">{t("Sabit Fiyat", "Fixed Price")}</p>
          <p className="pricing-card-note">
            {t(
              "Popüler havalimanı rotalarında sabit fiyat garantisi. Rezervasyon onayında fiyatınızı görürsünüz — sürpriz ek ücret yoktur.",
              "Guaranteed fixed pricing on popular airport routes. You see your price at booking confirmation — no surprise extra charges.",
            )}
          </p>
        </div>
        <div className="pricing-card">
          <p className="pricing-card-title">{t("Fiyat Teklifi İste", "Request a Quote")}</p>
          <p className="pricing-card-note">
            {t(
              "Özel turlar, düğünler, günlük şoförlü araç ve şehirler arası seyahatler için programınıza özel fiyat teklifi hazırlanır.",
              "For private tours, weddings, daily chauffeur service and intercity travel, we prepare a quote tailored to your itinerary.",
            )}
          </p>
        </div>
      </div>
      <div className="pricing-banner">
        <span>🔒</span>
        <span>
          <strong>{t("Gizli ücret yok.", "No hidden fees.")}</strong>{" "}
          {t(
            "Tüm fiyatlarımız rezervasyon onayından önce açıkça bildirilir; fiyata dahil ve dahil olmayan hizmetler booking sayfasında belirtilir.",
            "All our prices are clearly stated before booking confirmation; what's included and excluded is noted on the booking page.",
          )}
        </span>
      </div>
    </div>
  );
}
