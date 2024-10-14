import type { Metadata } from 'next';
import { Inter, Roboto_Mono, Roboto_Condensed } from 'next/font/google';
import Providers from './providers';
import './globals.css';
import { Footer } from '@/components';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-condensed',
});

export const metadata: Metadata = {
  title: 'Get Rich',
  description: 'Wonderful budgeting app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${roboto_mono.variable} ${roboto_condensed.variable}`}
    >
      <body
        className={`antialiased bg-white dark:bg-black`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
