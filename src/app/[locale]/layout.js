// src/app/[locale]/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '../../i18n/routing';
import {notFound} from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({ children, params }) {
  // Await params before using its properties
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="pt-16">{/* Add padding to avoid overlap with fixed navbar */}
            {children}
          </div>
          {/* Footer will be displayed on all pages */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateMetadata({ params }) {
  // Await params before using its properties
  const { locale } = await params;
  const messages = await getMessages({locale});
  
  return {
    title: 'Oggi Pasta',
    description: messages.welcomeDescription || 'Discover the finest pasta dishes made with love and fresh ingredients.',
  };
}