import type { MetadataRoute } from "next";
import { destinations, vehicles } from "@/lib/content";

const BASE_URL = "https://myviptransfer.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/wedding",
    "/destinations",
    "/privacy",
    "/terms",
    "/cancellation-policy",
    "/booking-conditions",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const destinationRoutes = destinations.map((d) => ({
    url: `${BASE_URL}/destinations/${d.slug}`,
    lastModified: new Date(),
  }));

  const vehicleRoutes = vehicles.map((v) => ({
    url: `${BASE_URL}/fleet/${v.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...destinationRoutes, ...vehicleRoutes];
}
