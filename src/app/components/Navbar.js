// src/app/components/Navbar.js
"use client";

import Image from 'next/image';
import { useState, useTransition } from 'react';
import {Link, useRouter, usePathname} from '../../i18n/navigation';
import {useLocale, useTranslations} from 'next-intl';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  
  // Add error handling for hooks
  let locale, router, pathname, t;
  
  try {
    locale = useLocale();
    router = useRouter();
    pathname = usePathname();
    t = useTranslations('navigation');
  } catch (error) {
    console.error('Navbar error:', error);
    // Fallback values
    locale = 'en';
    router = null;
    pathname = '/';
    t = (key) => key; // Fallback translation function
  }

  const handleLanguageChange = (newLocale) => {
    if (!router) {
      console.error('Router not available');
      return;
    }
    
    startTransition(() => {
      try {
        router.replace(pathname, {locale: newLocale});
        // Remove the forced reload - next-intl handles this automatically
      } catch (error) {
        console.error('Language change error:', error);
        // Fallback: navigate manually
        window.location.href = `/${newLocale}${pathname}`;
      }
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full text-white shadow-md z-50">
      <div className="flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="hover:underline">
            <Image src="/logo.jpg" alt="Logo" width={80} height={40} />
          </Link>
        </div>

        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-2xl">&#9776;</span>
        </button>

        <div className="hidden md:flex space-x-4 pr-6 items-center">
          <Link href="/menu" className="hover:underline">
            {t('menu')}
          </Link>
          <Link href="/entreprise" className="hover:underline">
            {t('enterprise')}
          </Link>
          
          {/* Language Switcher */}
          <div className="flex space-x-2">
            <button
              onClick={() => handleLanguageChange('en')}
              disabled={isPending}
              className={`px-2 py-1 rounded transition-colors ${
                locale === 'en' 
                  ? 'bg-white text-black' 
                  : 'hover:bg-gray-700 text-white'
              } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange('fr')}
              disabled={isPending}
              className={`px-2 py-1 rounded transition-colors ${
                locale === 'fr' 
                  ? 'bg-white text-black' 
                  : 'hover:bg-gray-700 text-white'
              } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              FR
            </button>
            <button
              onClick={() => handleLanguageChange('nl')}
              disabled={isPending}
              className={`px-2 py-1 rounded transition-colors ${
                locale === 'nl' 
                  ? 'bg-white text-black' 
                  : 'hover:bg-gray-700 text-white'
              } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              NL
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4 bg-gray-700">
          <Link href="/menu" className="hover:underline">
            {t('menu')}
          </Link>
          <Link href="/entreprise" className="hover:underline">
            {t('enterprise')}
          </Link>
          
          {/* Mobile Language Switcher */}
          <div className="flex space-x-2 pt-2">
            <button
              onClick={() => handleLanguageChange('en')}
              disabled={isPending}
              className={`px-2 py-1 rounded transition-colors ${
                locale === 'en' 
                  ? 'bg-white text-black' 
                  : 'hover:bg-gray-600 text-white'
              } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange('fr')}
              disabled={isPending}
              className={`px-2 py-1 rounded transition-colors ${
                locale === 'fr' 
                  ? 'bg-white text-black' 
                  : 'hover:bg-gray-600 text-white'
              } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              FR
            </button>
            <button
              onClick={() => handleLanguageChange('nl')}
              disabled={isPending}
              className={`px-2 py-1 rounded transition-colors ${
                locale === 'nl' 
                  ? 'bg-white text-black' 
                  : 'hover:bg-gray-600 text-white'
              } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              NL
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;