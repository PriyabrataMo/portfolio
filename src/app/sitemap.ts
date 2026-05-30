import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://priyabratamondal.com";
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/v1`, lastModified: new Date() },
  ];
}
