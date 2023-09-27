import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { GA_TRACKING_ID } from "@/lib/gtag";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "arizuk.github.io",
  description: "This is my personal website.",
  authors: [{ name: "Masaki Ariuzka" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
        `,
          }}
        ></script>
      </head>
      <body
        className={`${inter.className}
           p-[20px] leading-[20px] lg:px-[50px] lg:py-[35px]
           bg-slate-50
           `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
