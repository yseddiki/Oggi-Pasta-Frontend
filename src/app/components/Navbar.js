"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = ({ onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en'); // Default to 'en'

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage); // Notify parent component
  };

  return (
    <nav className="fixed top-0 left-0 w-full text-white shadow-md z-50">
      <div className="flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link href="/" locale={language} className="hover:underline">
            <Image src="/logo.jpg" alt="Logo" width={80} height={40} />
          </Link>
        </div>

        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-2xl">&#9776;</span>
        </button>

        <div className="hidden md:flex space-x-4 pr-6">
          <Link href="/menu" locale={language} className="hover:underline">
            Menu
          </Link>
          <Link href="/entreprise" locale={language} className="hover:underline">
            Entreprise
          </Link>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="text-white bg-primary rounded"
            style={{ backgroundColor: 'var(--primary)', border: 'none' }}
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="nl">NL</option>
          </select>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4 bg-gray-700">
          <Link href="/menu" locale={language} className="hover:underline">
            Menu
          </Link>
          <Link href="/entreprise" locale={language} className="hover:underline">
            Entreprise
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;