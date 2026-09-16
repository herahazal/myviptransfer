"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/whatsapp";

gsap.registerPlugin(ScrollTrigger);

/** How long (in viewport heights) the intro stays pinned while the window
 *  aperture opens. Kept short and decisive — this is the site's one
 *  cinematic beat, not a scroll-heavy set piece. */
const PIN_VIEWPORTS = 2.2;
const PIN_VIEWPORTS_MOBILE = 1.8;

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);

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
            alt="myviptransfer VIP şoförü ailenin bagajlarına yardımcı oluyor"
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
            <p className="hero-eyebrow">Premium Transfer Hizmeti</p>
            <h1 className="hero-title">
              Havalimanından Varış Noktanıza, Ayrıcalıklı Bir Karşılama
            </h1>
            <p className="hero-subtitle">
              Türkiye&rsquo;ye indiğiniz andan itibaren konfor, güven ve
              profesyonellik sizinle. myviptransfer; İstanbul, Bodrum ve
              Türkiye&rsquo;nin farklı destinasyonlarında havalimanı
              karşılama ve özel VIP transfer hizmeti sunar.
            </p>
            <div className="hero-actions">
              <a href="#booking" className="btn-gold">
                Rezervasyonunuzu Oluşturun
              </a>
              <a
                href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>

        <p className="hero-scroll-hint">Kaydırın</p>
      </section>
    </div>
  );
}
