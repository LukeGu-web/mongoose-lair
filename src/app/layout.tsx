import type { Metadata } from 'next';
import Providers from './providers';
import './globals.css';
import { Footer } from '@/components';

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
    <html lang='en'>
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
