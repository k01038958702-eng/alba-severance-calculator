import "./globals.css";

export const metadata = {
  title: "알바 퇴직금 계산기(무료) | 로그인 없이 바로 계산",
  description:
    "재직기간과 최근 3개월 임금으로 아르바이트 퇴직금을 간편하게 예상해 보세요.",

  other: {
    "naver-site-verification":
      "d829e52154db8eb164bcb7cd93a4f5775ca7f4bf",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F5EF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
