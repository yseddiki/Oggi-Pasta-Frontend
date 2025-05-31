// src/app/[locale]/page.js
import React from 'react';
import {Link} from '../../i18n/navigation';
import {getTranslations} from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations();
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/home.mp4" type="video/mp4" />
          {/* Optionally keep the webm or fallback sources if available */}
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-20 flex justify-between items-center p-6 bg-black bg-opacity-20 backdrop-blur-sm">
        <div className="text-white text-xl font-bold">
          {t('restaurantName', {default: 'Restaurant Name'})}
        </div>
        <div className="flex space-x-6">
          <Link 
            href="/menu" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
          >
            {t('menu', {default: 'Menu'})}
          </Link>
          <Link 
            href="/enterprise" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
          >
            {t('enterprise', {default: 'Enterprise'})}
          </Link>
          <Link 
            href="/contact" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
          >
            {t('contact', {default: 'Contact'})}
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <main className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
            {t('welcomeTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md max-w-2xl mx-auto leading-relaxed">
            {t('welcomeDescription')}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/menu">
              <button className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
                {t('exploreMenu')}
              </button>
            </Link>
            <Link href="/enterprise">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 shadow-lg">
                {t('enterprise', {default: 'Enterprise Services'})}
              </button>
            </Link>
          </div>
        </main>
      </div>

      {/* Google Maps Section */}
      <div className="relative z-10 bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Location Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {t('findUs', {default: 'Find Us'})}
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t('address', {default: 'Address'})}</h3>
                    <p>123 Restaurant Street<br />City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t('phone', {default: 'Phone'})}</h3>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t('hours', {default: 'Hours'})}</h3>
                    <p>Mon-Thu: 11am-10pm<br />Fri-Sat: 11am-11pm<br />Sun: 12pm-9pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.131638052545!2d4.369225177073028!3d50.828725571666936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c49306f33c47%3A0x4c6ab44bedcfdfbf!2sOggi%20Pasta!5e0!3m2!1sfr!2suk!4v1748719047729!5m2!1sfr!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oggi Pasta Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}