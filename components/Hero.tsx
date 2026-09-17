"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useLanguage } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

/** How long (in viewport heights) the intro stays pinned while the window
 *  aperture opens. Kept short and decisive — this is the site's one
 *  cinematic beat, not a scroll-heavy set piece. */
const PIN_VIEWPORTS = 2.2;
const PIN_VIEWPORTS_MOBILE = 1.8;

export default function Hero() {
  const { t } = useLanguage();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const scrollHintRef = useRef<HTMLParagraphElement | null>(null);
  const mobileLogoRef = useRef<HTMLAnchorElement | null>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const lenis = new Lenis();
    const resetToStart = () => lenis.scrollTo(0, { immediate: true, force: true });
    resetToStart();
    const resetRaf = requestAnimationFrame(resetToStart);

    const raf = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const windowEl = document.querySelector(".hero-window");
      const copyEl = copyRef.current;
      const hero = document.querySelector(".hero");
      if (!windowEl || !copyEl || !hero) return;

      const isMobile = window.matchMedia("(max-width: 900px)").matches;
      const pinViewports = isMobile ? PIN_VIEWPORTS_MOBILE : PIN_VIEWPORTS;

      // Mobile only (matches the CSS breakpoint `.hero-mobile-logo` shows
      // at): the pin holds the hero on screen for `PIN_VIEWPORTS_MOBILE`
      // (1.8) viewport-heights of scroll, but the bottom logo+"Kaydırın"
      // strip has no scroll-linked fade of its own, so it stays parked
      // there for that entire distance — long enough to read as "stuck"
      // once the aperture has opened and the next section is scrolling
      // into view behind it. Fading it out early (well before the pin
      // itself ends) keeps it a hero-only cue. Desktop's `.hero-scroll-hint`
      // is untouched — this branch never runs there.
      const isSmallMobile = window.matchMedia("(max-width: 640px)").matches;

      gsap.set(copyEl, { autoAlpha: 0, y: 24 });

      ScrollTrigger.create({
        trigger: hero,
        start: "top top",
        end: () => `+=${window.innerHeight * pinViewports}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          // Aperture: window scales up fast over the first 55% of the pin,
          // then holds fully open while the copy settles in.
          const ap = Math.min(1, progress / 0.55);
          const scale = 1 + ap * 5.2;
          const opacity = 1 - Math.min(1, progress / 0.7);

          gsap.set(windowEl, { scale, opacity });

          const copyProgress = gsap.utils.clamp(0, 1, (progress - 0.35) / 0.4);
          gsap.set(copyEl, {
            autoAlpha: copyProgress,
            y: 24 * (1 - copyProgress),
          });

          if (isSmallMobile) {
            const stripOpacity = 1 - gsap.utils.clamp(0, 1, progress / 0.12);
            if (scrollHintRef.current) {
              gsap.set(scrollHintRef.current, { autoAlpha: stripOpacity });
            }
            if (mobileLogoRef.current) {
              gsap.set(mobileLogoRef.current, { autoAlpha: stripOpacity });
            }
          }
        },
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => {
      cancelAnimationFrame(resetRaf);
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={rootRef}>
      <section className="hero">
        <div className="hero-sky">
          <Image
            src="/images/hero-family.png"
            alt={t(
              "myviptransfer VIP şoförü ailenin bagajlarına yardımcı oluyor",
              "myviptransfer VIP chauffeur helping a family with their luggage",
            )}
            fill
            priority
            sizes="100vw"
            quality={85}
          />
        </div>

        <div className="hero-window">
          <img src="/window.png" alt="" />
        </div>

        <div className="hero-header">
          <div ref={copyRef}>
            <p className="hero-eyebrow">{t("Premium Transfer Hizmeti", "Premium Transfer Service")}</p>
            <h1 className="hero-title">
              {t(
                "Havalimanından Varış Noktanıza, Ayrıcalıklı Bir Karşılama",
                "From the Airport to Your Destination, an Exclusive Welcome",
              )}
            </h1>
            <p className="hero-subtitle">
              {t(
                "Türkiye’ye indiğiniz andan itibaren konfor, güven ve profesyonellik sizinle. myviptransfer; İstanbul, Bodrum ve Türkiye’nin farklı destinasyonlarında havalimanı karşılama ve özel VIP transfer hizmeti sunar.",
                "From the moment you land in Turkey, comfort, trust and professionalism are with you. myviptransfer offers airport meet & greet and private VIP transfer services in Istanbul, Bodrum and destinations across Turkey.",
              )}
            </p>
            <div className="hero-actions">
              <a href="#booking" className="btn-gold">
                {t("Rezervasyonunuzu Oluşturun", "Make Your Reservation")}
              </a>
            </div>
          </div>
        </div>

        <p className="hero-scroll-hint" ref={scrollHintRef}>{t("Kaydırın", "Scroll")}</p>

        <Link href="/" className="hero-mobile-logo" ref={mobileLogoRef} aria-label="myviptransfer">
          <Image
            src="/images/logo/logo-monogram-transparent.png"
            alt="myviptransfer"
            width={80}
            height={53}
          />
        </Link>
      </section>
    </div>
  );
}
