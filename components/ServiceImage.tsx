"use client";

import { useState } from "react";
import Image from "next/image";

export default function ServiceImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="service-card-media">
      {errored ? (
        <div className="service-card-media-placeholder" />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1100px) 33vw, (min-width: 720px) 50vw, 100vw"
          style={{ objectFit: "cover" }}
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}
