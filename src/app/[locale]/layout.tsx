import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { getMessages } from 'next-intl/server';
// import { notFound } from 'next/navigation';
// import { routing } from '@/i18n/routing';

export default async function RootLayout(
  {
    children,
    params,

  }: {
    children: React.ReactNode;
    params: { locale: string };

  }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });



  {
    return (
      <html lang={locale}>
        <body>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    );
  }
}


