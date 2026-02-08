import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Simple Photo App',
  description: 'A VERY static-first Next.js photo gallery - stepping stone to Aroma App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
