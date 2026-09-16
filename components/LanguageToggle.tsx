"use client";

import { useState } from "react";

/**
 * Presentational TR/EN switch — the site's content is Turkish-only for now,
 * so this only tracks which option looks active; it doesn't translate the
 * page. Placeholder for a future full i18n pass.
 */
export default function LanguageToggle() {
  const [lang, setLang] = useState<"tr" | "en">("tr");

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => setLang((l) => (l === "tr" ? "en" : "tr"))}
      aria-label={lang === "tr" ? "Switch to English" : "Türkçeye geç"}
    >
      <span className={lang === "tr" ? "is-active" : undefined}>TR</span>
      <span className="lang-toggle-sep" aria-hidden>/</span>
      <span className={lang === "en" ? "is-active" : undefined}>EN</span>
    </button>
  );
}
