"use client";

import { FormEvent, useState } from "react";
import { vehicles } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";

type Tab = "book" | "quote";

export default function BookingSection() {
  const [tab, setTab] = useState<Tab>("book");

  function handleBookSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => (data.get(k) as string)?.trim() || "—";

    const lines = [
      "*BOOK YOUR TRANSFER*",
      `Pickup: ${get("pickup")}`,
      `Destination: ${get("destination")}`,
      `Date: ${get("date")}`,
      `Time: ${get("time")}`,
      `Passengers: ${get("passengers")}`,
      `Vehicle: ${get("vehicle")}`,
      `Flight Number: ${get("flight")}`,
      `Name: ${get("name")}`,
      `WhatsApp: ${get("phone")}`,
      `Email: ${get("email")}`,
    ];

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  function handleQuoteSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => (data.get(k) as string)?.trim() || "—";

    const lines = [
      "*REQUEST A QUOTE*",
      `Service: ${get("service")}`,
      `Route / Destination: ${get("route")}`,
      `Date: ${get("date")}`,
      `Passengers: ${get("passengers")}`,
      `Name: ${get("name")}`,
      `WhatsApp: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Notes: ${get("notes")}`,
    ];

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="section section-dark" id="booking">
      <div className="container">
        <p className="eyebrow">Online Rezervasyon</p>
        <h2 className="section-title">Seyahatinize VIP Bir Başlangıç Yapın</h2>
        <p className="section-lede">
          Rezervasyonunuzu şimdi oluşturun ve havalimanından varış noktanıza
          kadar konforun keyfini çıkarın. Özel turlar, düğün, günlük araç ve
          şehirler arası seyahatler için fiyat teklifi talep edebilirsiniz.
        </p>

        <div className="form-tabs">
          <button
            type="button"
            className={`form-tab${tab === "book" ? " is-active" : ""}`}
            onClick={() => setTab("book")}
          >
            Book Your Transfer
          </button>
          <button
            type="button"
            className={`form-tab${tab === "quote" ? " is-active" : ""}`}
            onClick={() => setTab("quote")}
          >
            Request a Quote
          </button>
        </div>

        {tab === "book" ? (
          <form className="form-grid" onSubmit={handleBookSubmit}>
            <div>
              <label className="form-label" htmlFor="pickup">Pickup Location</label>
              <input className="form-input" id="pickup" name="pickup" required placeholder="Örn. Istanbul Airport (IST)" />
            </div>
            <div>
              <label className="form-label" htmlFor="destination">Destination</label>
              <input className="form-input" id="destination" name="destination" required placeholder="Örn. Şişli, İstanbul" />
            </div>
            <div>
              <label className="form-label" htmlFor="date">Date</label>
              <input className="form-input" id="date" name="date" type="date" required />
            </div>
            <div>
              <label className="form-label" htmlFor="time">Time</label>
              <input className="form-input" id="time" name="time" type="time" required />
            </div>
            <div>
              <label className="form-label" htmlFor="passengers">Passengers</label>
              <input className="form-input" id="passengers" name="passengers" type="number" min={1} required placeholder="2" />
            </div>
            <div>
              <label className="form-label" htmlFor="vehicle">Vehicle</label>
              <select className="form-select" id="vehicle" name="vehicle" defaultValue="">
                <option value="" disabled>Araç seçin</option>
                {vehicles.map((v) => (
                  <option key={v.slug} value={v.name}>{v.name}</option>
                ))}
                <option value="Fark etmez">Fark etmez / Önerin</option>
              </select>
            </div>
            <div>
              <label className="form-label" htmlFor="flight">Flight Number</label>
              <input className="form-input" id="flight" name="flight" placeholder="TK1234" />
            </div>
            <div>
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-input" id="name" name="name" required placeholder="Ad Soyad" />
            </div>
            <div>
              <label className="form-label" htmlFor="phone">WhatsApp</label>
              <input className="form-input" id="phone" name="phone" required placeholder="+90 5xx xxx xx xx" />
            </div>
            <div>
              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-input" id="email" name="email" type="email" placeholder="ornek@mail.com" />
            </div>

            <div className="form-field-wide form-foot">
              <button type="submit" className="btn-gold">Teklif Al</button>
              <span className="form-note">Gizli ücret yok — fiyatınız onaydan önce bildirilir.</span>
            </div>
          </form>
        ) : (
          <form className="form-grid" onSubmit={handleQuoteSubmit}>
            <div>
              <label className="form-label" htmlFor="q-service">Service</label>
              <select className="form-select" id="q-service" name="service" defaultValue="">
                <option value="" disabled>Hizmet seçin</option>
                <option>Private Tour</option>
                <option>Wedding & Events</option>
                <option>Chauffeur-Driven Car Service</option>
                <option>Intercity Transfer</option>
                <option>Corporate Travel</option>
              </select>
            </div>
            <div>
              <label className="form-label" htmlFor="q-route">Route / Destination</label>
              <input className="form-input" id="q-route" name="route" required placeholder="Örn. İstanbul → Bodrum" />
            </div>
            <div>
              <label className="form-label" htmlFor="q-date">Date</label>
              <input className="form-input" id="q-date" name="date" type="date" required />
            </div>
            <div>
              <label className="form-label" htmlFor="q-passengers">Passengers</label>
              <input className="form-input" id="q-passengers" name="passengers" type="number" min={1} placeholder="4" />
            </div>
            <div>
              <label className="form-label" htmlFor="q-name">Name</label>
              <input className="form-input" id="q-name" name="name" required placeholder="Ad Soyad" />
            </div>
            <div>
              <label className="form-label" htmlFor="q-phone">WhatsApp</label>
              <input className="form-input" id="q-phone" name="phone" required placeholder="+90 5xx xxx xx xx" />
            </div>
            <div className="form-field-wide">
              <label className="form-label" htmlFor="q-email">Email</label>
              <input className="form-input" id="q-email" name="email" type="email" placeholder="ornek@mail.com" />
            </div>
            <div className="form-field-wide">
              <label className="form-label" htmlFor="q-notes">Notes</label>
              <textarea className="form-textarea" id="q-notes" name="notes" placeholder="Programınız hakkında ek bilgi verin" />
            </div>

            <div className="form-field-wide form-foot">
              <button type="submit" className="btn-gold">Teklif Talebini Gönder</button>
              <span className="form-note">Ekibimiz en kısa sürede WhatsApp üzerinden dönüş yapar.</span>
            </div>
          </form>
        )}

        <Pricing />
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <div className="mt-20">
      <p className="eyebrow">Fiyatlandırma</p>
      <h3 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
        Şeffaf, Önceden Bildirilen Fiyatlar
      </h3>
      <div className="pricing-grid">
        <div className="pricing-card">
          <p className="pricing-card-title">Fixed Price</p>
          <p className="pricing-card-note">
            Popüler havalimanı rotalarında sabit fiyat garantisi. Rezervasyon
            onayında fiyatınızı görürsünüz — sürpriz ek ücret yoktur.
          </p>
        </div>
        <div className="pricing-card">
          <p className="pricing-card-title">Request a Quote</p>
          <p className="pricing-card-note">
            Özel turlar, düğünler, günlük şoförlü araç ve şehirler arası
            seyahatler için programınıza özel fiyat teklifi hazırlanır.
          </p>
        </div>
      </div>
      <div className="pricing-banner">
        <span>🔒</span>
        <span>
          <strong>Gizli ücret yok.</strong> Tüm fiyatlarımız rezervasyon
          onayından önce açıkça bildirilir; fiyata dahil ve dahil olmayan
          hizmetler booking sayfasında belirtilir.
        </span>
      </div>
    </div>
  );
}
