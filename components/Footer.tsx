import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/lib/content";

export default function Footer() {
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
              Premium Private Transfers Across Turkey — İstanbul, Bodrum,
              Antalya ve Türkiye genelinde VIP transfer, özel tur ve şoförlü
              araç hizmetleri.
            </p>
          </div>

          <div>
            <div className="footer-heading">Services</div>
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
            <div className="footer-heading">Destinations</div>
            <ul className="footer-links">
              {destinations.slice(0, 6).map((d) => (
                <li key={d.slug}>
                  <Link href={`/destinations/${d.slug}`}>{d.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/destinations">Tüm destinasyonlar →</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Contact & Legal</div>
            <ul className="footer-links">
              <li>
                <a href="mailto:info@myviptransfer.com">info@myviptransfer.com</a>
              </li>
              <li>WhatsApp: +90 542 627 58 47</li>
              <li><Link href="/privacy">KVKK & Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/cancellation-policy">Cancellation Policy</Link></li>
              <li><Link href="/booking-conditions">Booking Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="legal-box">
          MAQ BLUE ISLAND TRAVEL AGENCY — myviptransfer, Türkiye genelinde
          faaliyet gösteren bir seyahat acentası markasıdır. TÜRSAB belge
          numarası ve vergi bilgileri talep üzerine paylaşılır. Rezervasyon,
          iptal şartları ve fiyata dahil/dahil olmayan hizmetler booking ve
          fiyat sayfalarında ayrıca belirtilir.
        </div>

        <div className="footer-bottom">
          <span>© {year} myviptransfer. Tüm hakları saklıdır.</span>
          <span>Istanbul · Bodrum · Antalya · Cappadocia · Turkey Wide</span>
        </div>
      </div>
    </footer>
  );
}
