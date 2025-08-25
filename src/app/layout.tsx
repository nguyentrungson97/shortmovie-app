import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata: Metadata = {
  title: 'Phim Drama - Watch Movies Online',
  description: 'Watch the latest movies and TV shows online',
  icons: {
    icon: '/logos/Logo01.png',
    shortcut: '/logos/Logo01.png',
    apple: '/logos/Logo01.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
