
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import WhatsAppButton from '@/components/common/whatsapp-button';
import { LanguageProvider } from '@/components/common/language-provider';

export const metadata: Metadata = {
  title: 'Solutiontemple - Spiritual Consultant',
  description:
    'A sanctuary where love, energy, and intention align. Licensed spiritual consultant helping souls reunite with their true partners.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton phoneNumber="+2348139375655" />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}

    