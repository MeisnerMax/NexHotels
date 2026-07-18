import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nexhotels.de";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/profit-control-check`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
