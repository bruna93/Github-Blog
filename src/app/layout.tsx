import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Header } from '@/components/Header';
import './globals.css';

const nunito = Nunito({
  subsets: ["latin"],
  variable: '--font-nunito',
  weight: ["400", "600", "700", "800"]
})

export const metadata: Metadata = {
  title: 'GitHub Blog',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />

        {children}
      </body>
    </html>
  );
};