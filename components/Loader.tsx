"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import NextImage from "next/image";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Blocking assets: the hero photo + window plate the intro animates, plus
 *  the loader's own logo. */
const CRITICAL = ["/images/hero-family.png", "/window.png", "/images/logo/logo-transparent.png"];

const MAX_HOLD_MS = 5000;
const MIN_HOLD_MS = 700;

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);
  const doneRef = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let loaded = 0;
    const start = Date.now();
    let minHoldTimer: number | null = null;

    const reveal = () => {
      if (doneRef.current || cancelled) return;
      doneRef.current = true;
      setProgress(1);
      setDone(true);
    };

    const finish = () => {
      const remaining = MIN_HOLD_MS - (Date.now() - start);
      if (remaining > 0) {
        minHoldTimer = window.setTimeout(reveal, remaining);
      } else {
        reveal();
      }
    };

    const bump = () => {
      loaded += 1;
      if (cancelled) return;
      setProgress(loaded / CRITICAL.length);
      if (loaded >= CRITICAL.length) finish();
    };

    CRITICAL.forEach((src) => {
      const img = new window.Image();
      img.decoding = "async";
      img.src = src;
      img.decode().then(bump).catch(() => bump());
    });

    const guard = window.setTimeout(reveal, MAX_HOLD_MS);
    return () => {
      cancelled = true;
      window.clearTimeout(guard);
      if (minHoldTimer) window.clearTimeout(minHoldTimer);
    };
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = window.setTimeout(() => setGone(true), 800);
    return () => window.clearTimeout(t);
  }, [done]);

  if (gone) return null;

  return (
    <div className={`site-loader${done ? " is-done" : ""}`} aria-hidden={done}>
      <div className="site-loader-inner">
        <NextImage
          src="/images/logo/logo-transparent.png"
          alt="myviptransfer"
          width={900}
          height={280}
          priority
          className="site-loader-logo"
        />
        <div
          className="site-loader-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
        >
          <span className="site-loader-bar" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </div>
  );
}
