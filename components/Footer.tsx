"use client";

import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Image
              src="/images/logo/logo-transparent.png"
              alt="myviptransfer"
              width={170}
              height={54}
            />
            <p className="mt-4 text-sm opacity-70 max-w-xs">
              {t(
                "Premium Private Transfers Across Turkey — İstanbul, Bodrum, Antalya ve Türkiye genelinde VIP transfer, özel tur ve şoförlü araç hizmetleri.",
                "Premium Private Transfers Across Turkey — VIP transfer, private tour and chauffeur services in Istanbul, Bodrum, Antalya and across Turkey.",
              )}
            </p>
          </div>

          <div>
            <div className="footer-heading">{t("Hizmetler", "Services")}</div>
            <ul className="footer-links">
              <li><Link href="/#services">Airport Transfer</Link></li>
              <li><Link href="/#services">Private Tours</Link></li>
              <li><Link href="/#services">Chauffeur Service</Link></li>
              <li><Link href="/#services">Intercity Transfer</Link></li>
              <li><Link href="/wedding">Wedding & Events</Link></li>
              <li><Link href="/#corporate">Corporate Travel</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">{t("Destinasyonlar", "Destinations")}</div>
            <ul className="footer-links">
              {destinations.slice(0, 6).map((d) => (
                <li key={d.slug}>
                  <Link href={`/destinations/${d.slug}`}>{d.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/destinations">{t("Tüm destinasyonlar →", "All destinations →")}</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">{t("İletişim & Yasal", "Contact & Legal")}</div>
            <ul className="footer-links">
              <li>
                <a href="mailto:info@myviptransfer.com">info@myviptransfer.com</a>
              </li>
              <li>WhatsApp: +90 542 627 58 47</li>
              <li><Link href="/privacy">KVKK & Privacy Policy</Link></li>
              <li><Link href="/terms">{t("Kullanım Şartları", "Terms & Conditions")}</Link></li>
              <li><Link href="/cancellation-policy">{t("İptal Politikası", "Cancellation Policy")}</Link></li>
              <li><Link href="/booking-conditions">{t("Rezervasyon Koşulları", "Booking Conditions")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="legal-box">
          {t(
            "MAQ BLUE ISLAND TRAVEL AGENCY — myviptransfer, Türkiye genelinde faaliyet gösteren bir seyahat acentası markasıdır. TÜRSAB belge numarası ve vergi bilgileri talep üzerine paylaşılır. Rezervasyon, iptal şartları ve fiyata dahil/dahil olmayan hizmetler booking ve fiyat sayfalarında ayrıca belirtilir.",
            "MAQ BLUE ISLAND TRAVEL AGENCY — myviptransfer is a travel agency brand operating across Turkey. TÜRSAB license number and tax details are available on request. Booking, cancellation terms and what's included or excluded are stated separately on the booking and pricing pages.",
          )}
        </div>

        <div className="footer-bottom">
          <span>© {year} myviptransfer. {t("Tüm hakları saklıdır.", "All rights reserved.")}</span>
          <span>Istanbul · Bodrum · Antalya · Cappadocia · Turkey Wide</span>
        </div>
      </div>
    </footer>
  );
}
