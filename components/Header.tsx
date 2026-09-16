"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/content";
import { whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/whatsapp";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
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

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <Link href="/" className="site-header-logo" aria-label="myviptransfer">
          <Image
            src="/images/logo/logo-transparent.png"
            alt="myviptransfer"
            width={160}
            height={50}
            priority
          />
        </Link>

        <nav className="site-header-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-header-actions">
          <div className="site-header-meta">
            <p className="site-header-label">Premium Transfer Hizmeti</p>
            <LanguageToggle />
          </div>
          <button
            type="button"
            className="site-header-menu-btn"
            aria-label="Menüyü aç"
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
              src="/images/logo/logo-transparent.png"
              alt="myviptransfer"
              width={140}
              height={44}
            />
            <button
              type="button"
              aria-label="Menüyü kapat"
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
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-8 self-start"
          >
            Book via WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
