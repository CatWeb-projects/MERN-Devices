import type { Metadata } from "next";
import CacheProvider from 'react-inlinesvg/provider';
import NextTopLoader from 'nextjs-toploader';
import { Providers } from './providers'
import { Header } from "@/components";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Devices",
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
