"use client";

import { useState } from "react";
import Image from "next/image";

export default function FleetImage({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="fleet-placeholder">
        <svg viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 27h48v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1H16v1a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-6Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M10 27 14 14a4 4 0 0 1 3.8-2.7h28.4A4 4 0 0 1 50 14l4 13H10Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M20 13.5 17 23h30l-3-9.5" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
          <circle cx="17" cy="29" r="3" fill="#0a0e17" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="47" cy="29" r="3" fill="#0a0e17" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(min-width: 1100px) 33vw, (min-width: 640px) 50vw, 100vw"}
      style={{ objectFit: "cover" }}
      onError={() => setErrored(true)}
    />
  );
}
