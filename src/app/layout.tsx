import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "강우현",
  description: "강우현 KANG Woohyun",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-std.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
