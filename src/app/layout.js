import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // Load messages for the current locale

  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />
          <div className="pt-16">{/* Add padding to avoid overlap with fixed navbar */}
            {children}
          </div>
          {/* Footer will be displayed on all pages */}
          <Footer />
      </body>
    </html>
  );
}
