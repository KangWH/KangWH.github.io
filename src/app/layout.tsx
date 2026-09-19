import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <div className="flex flex-1 flex-col items-stretch justify-center bg-white font-sans dark:bg-black">
          <Header />
          <main className="flex-1">
            <article className="mx-auto mt-8 max-w-240 leading-7 px-4 pb-20">
              {children}
            </article>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
