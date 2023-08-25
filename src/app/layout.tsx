import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: 'Coding Resources',
  description: 'Full-Stack Coding Resources',
};

const inter = Inter({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-bs-theme="dark" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
