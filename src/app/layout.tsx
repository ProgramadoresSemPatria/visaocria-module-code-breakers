import type { Metadata } from 'next';
import './globals.css';
import MainLayout from '@/components/templates/MainLayout';
import logo from '../../public/images/logoBgTransparent.webp';

export const metadata: Metadata = {
  title: 'PSPCode Breakers',
  description: 'Code Breakers for PSP',
  icons: {
    icon: logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
