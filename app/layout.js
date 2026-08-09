import "./globals.css";

const siteUrl = "https://severance.richchoi.kr";

const siteName = "알바 퇴직금 계산기(무료)";

const searchTitle =
  "알바 퇴직금 계산기(무료) | 로그인 없이 바로 계산";

const searchDescription =
  "알바·아르바이트 퇴직금을 무료로 계산하세요. 재직기간과 최근 3개월 임금을 입력하면 예상 퇴직금을 로그인 없이 간편하게 확인할 수 있습니다.";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: searchTitle,
    template: `%s | ${siteName}`,
  },

  description: searchDescription,

  keywords: [
    "알바 퇴직금 계산기",
    "알바퇴직금계산기",
    "아르바이트 퇴직금 계산기",
    "퇴직금 계산기",
    "무료 퇴직금 계산기",
    "알바 퇴직금",
    "아르바이트 퇴직금",
    "퇴직금 계산",
    "예상 퇴직금",
    "퇴직금 지급 기준",
    "퇴직금 계산 방법",
  ],

  applicationName: siteName,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName,
    title: searchTitle,
    description: searchDescription,
  },

  twitter: {
    card: "summary",
    title: searchTitle,
    description: searchDescription,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    other: {
      "naver-site-verification":
        "d829e52154db8eb164bcb7cd93a4f5775ca7f4bf",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F5EF",
};

export default function RootLayout({ children }) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: [
      "알바퇴직금계산기",
      "무료 퇴직금 계산기",
      "아르바이트 퇴직금 계산기",
    ],
    url: siteUrl,
    description: searchDescription,
    inLanguage: "ko-KR",
  };

  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        {children}
      </body>
    </html>
  );
}
