import type { Metadata } from "next";
import Head from "next/head";
import CacheProvider from 'react-inlinesvg/provider';
import NextTopLoader from 'nextjs-toploader';
import { Providers } from './providers'
import { Header } from "@/components";
import "./globals.scss";

export const metadata: Metadata = {
  title: "TechnoHeart",
  description: "Best devices you can find",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CacheProvider>
      <html lang="en">
        <link rel="icon" type="image/x-icon" href="/images/play.png" />
        <body>
          <NextTopLoader showSpinner={false} height={4} />
          <Header />
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </CacheProvider>
  );
}
