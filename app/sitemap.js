export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: "https://severance.richchoi.kr/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
