// src/app/components/Navbar.js
"use client";

import Image from 'next/image';
import { useState } from 'react';
import {Link, useRouter, usePathname} from '../../i18n/navigation';
import {useLocale, useTranslations} from 'next-intl';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('navigation');

  const handleLanguageChange = (newLocale) => {
    router.replace(pathname, {locale: newLocale});
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
              className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-white text-black' : 'hover:bg-gray-700'}`}
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange('fr')}
              className={`px-2 py-1 rounded ${locale === 'fr' ? 'bg-white text-black' : 'hover:bg-gray-700'}`}
            >
              FR
            </button>
            <button
              onClick={() => handleLanguageChange('nl')}
              className={`px-2 py-1 rounded ${locale === 'nl' ? 'bg-white text-black' : 'hover:bg-gray-700'}`}
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
              className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-white text-black' : 'hover:bg-gray-600'}`}
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange('fr')}
              className={`px-2 py-1 rounded ${locale === 'fr' ? 'bg-white text-black' : 'hover:bg-gray-600'}`}
            >
              FR
            </button>
            <button
              onClick={() => handleLanguageChange('nl')}
              className={`px-2 py-1 rounded ${locale === 'nl' ? 'bg-white text-black' : 'hover:bg-gray-600'}`}
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