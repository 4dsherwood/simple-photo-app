import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Disco Dance Floor - A Story of Making Dreams Real',
  description: 'The story of Melinda\'s handmade LED disco dance floor - vision, planning, building, and delivery.',
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
