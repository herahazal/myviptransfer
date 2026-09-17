"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/content";
import { whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Only the homepage has a dark hero image behind the header at scroll
  // position 0. Every other route opens straight onto a light body
  // background, so the header's nav links, TR/EN toggle and hamburger
  // icon (all styled light-on-dark) need the solid backdrop immediately
  // rather than waiting for the scroll threshold.
  const solid = scrolled || pathname !== "/";

  return (
    <>
      <header className={`site-header${solid ? " is-scrolled" : ""}`}>
        <Link href="/" className="site-header-logo" aria-label="myviptransfer">
          <Image
            src="/images/logo/logo-monogram-transparent.png"
            alt="myviptransfer"
            width={90}
            height={60}
            priority
          />
        </Link>

        <nav className="site-header-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {t(link.label.tr, link.label.en)}
            </Link>
          ))}
        </nav>

        <div className="site-header-actions">
          <div className="site-header-meta">
            <p className="site-header-label">{t("Premium Transfer Hizmeti", "Premium Transfer Service")}</p>
            <LanguageToggle />
          </div>
          <button
            type="button"
            className="site-header-menu-btn"
            aria-label={t("Menüyü aç", "Open menu")}
            onClick={() => setOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-nav">
          <div className="flex items-center justify-between mb-8">
            <Image
              src="/images/logo/logo-monogram-transparent.png"
              alt="myviptransfer"
              width={99}
              height={66}
              className="mobile-nav-logo"
            />
            <button
              type="button"
              aria-label={t("Menüyü kapat", "Close menu")}
              onClick={() => setOpen(false)}
              className="site-header-menu-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {t(link.label.tr, link.label.en)}
            </Link>
          ))}
          <div className="mt-8 self-start">
            <LanguageToggle />
          </div>
          <a
            href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mobile-nav-whatsapp mt-4 self-start"
          >
            {t("WhatsApp'tan Yazın", "Book via WhatsApp")}
          </a>
        </div>
      )}
    </>
  );
}
