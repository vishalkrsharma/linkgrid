import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';

const manrope = localFont({
  src: './fonts/Manrope.woff2',
  variable: '--font-manrope',
  weight: '200 800',
});

export const metadata: Metadata = {
  title: 'LinkPort',
  description: 'Your personal link aggregator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('antialiased font-manrope', manrope.variable)}>
        <Navbar />
        <main className='h-[calc(100vh-57px)]'>{children}</main>
      </body>
    </html>
  );
}
