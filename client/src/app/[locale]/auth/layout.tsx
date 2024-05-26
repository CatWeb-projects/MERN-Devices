import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin']
});

import "../../globals.scss";

export default function RegistrationLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  const messages = useMessages();
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="/images/play.png" />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={poppins.className}>{children}</body>
      </NextIntlClientProvider>
    </html>
  )
}
