import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import CacheProvider from 'react-inlinesvg/provider';
import NextTopLoader from 'nextjs-toploader';
import { Providers } from './providers'
import { Footer, Header } from "@/components";

import "../../globals.scss";

export const metadata: Metadata = {
  title: "TechnoHeart",
  description: "Best devices you can find",
};

export default function LocaleLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: any
}>) {
  const messages = useMessages();
  return (
    <CacheProvider>
      <html lang={locale}>
        <link rel="icon" type="image/x-icon" href="/images/play.png" />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <body className="night">
            <NextTopLoader showSpinner={false} height={4} />
            <Header />
            <Providers>
              {children}
            </Providers>
            <Footer />
          </body>
        </NextIntlClientProvider>
      </html>
    </CacheProvider>
  );
}
