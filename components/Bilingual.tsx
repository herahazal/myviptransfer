"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/lib/i18n";

/** Renders one of two full content blocks depending on the active language.
 *  Used for longer, structured content (legal pages) where wrapping every
 *  string in `t()` would be unwieldy. */
export default function Bilingual({ tr, en }: { tr: ReactNode; en: ReactNode }) {
  const { lang } = useLanguage();
  return <>{lang === "tr" ? tr : en}</>;
}
