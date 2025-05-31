// src/app/[locale]/page.js
"use client";

import React from 'react';
import { Link } from '../../i18n/navigation';
import BackgroundVideo from '../components/BackgroundVideo';
import useSimpleTranslate from '../hooks/useTranslate';

// Translation data
const translations = {
  restaurantName: {
    en: "Oggi Pasta",
    fr: "Oggi Pasta", 
    nl: "Oggi Pasta"
  },
  menu: {
    en: "Menu",
    fr: "Menu",
    nl: "Menu"
  },
  enterprise: {
    en: "Enterprise", 
    fr: "Entreprise",
    nl: "Onderneming"
  },
  contact: {
    en: "Contact",
    fr: "Contact", 
    nl: "Contact"
  },
  welcomeTitle: {
    en: "Welcome to Oggi Pasta",
    fr: "Bienvenue chez Oggi Pasta",
    nl: "Welkom bij Oggi Pasta"
  },
  welcomeDescription: {
    en: "Experience authentic Italian cuisine with our carefully crafted pasta dishes and warm hospitality in the heart of Brussels.",
    fr: "Découvrez la cuisine italienne authentique avec nos plats de pâtes soigneusement préparés et notre hospitalité chaleureuse au cœur de Bruxelles.", 
    nl: "Ervaar authentieke Italiaanse keuken met onze zorgvuldig bereide pastagerechten en warme gastvrijheid in het hart van Brussel."
  },
  exploreMenu: {
    en: "Explore Menu",
    fr: "Découvrir le Menu",
    nl: "Menu Ontdekken"
  },
  enterpriseServices: {
    en: "Enterprise Services",
    fr: "Services Entreprise", 
    nl: "Ondernemingsdiensten"
  },
  findUs: {
    en: "Find Us",
    fr: "Nous Trouver",
    nl: "Vind Ons"
  },
  address: {
    en: "Address",
    fr: "Adresse",
    nl: "Adres"
  },
  addressDetails: {
    en: "Chaussée de Charleroi 132, 1060 Saint-Gilles, Brussels",
    fr: "Chaussée de Charleroi 132, 1060 Saint-Gilles, Bruxelles",
    nl: "Chaussée de Charleroi 132, 1060 Sint-Gillis, Brussel"
  },
  phone: {
    en: "Phone",
    fr: "Téléphone", 
    nl: "Telefoon"
  },
  hours: {
    en: "Opening Hours",
    fr: "Heures d'Ouverture",
    nl: "Openingsuren"
  },
  hoursWeekdays: {
    en: "Mon-Thu: 11:30am-10:00pm",
    fr: "Lun-Jeu: 11h30-22h00",
    nl: "Ma-Do: 11u30-22u00"
  },
  hoursWeekend: {
    en: "Fri-Sat: 11:30am-10:30pm", 
    fr: "Ven-Sam: 11h30-22h30",
    nl: "Vr-Za: 11u30-22u30"
  },
  hoursSunday: {
    en: "Sun: 12:00pm-9:30pm",
    fr: "Dim: 12h00-21h30",
    nl: "Zo: 12u00-21u30"
  }
};

export default function Home() {
  const translate = useSimpleTranslate();
  
  return (
    <BackgroundVideo videoSrc="/homevideo.webm" overlayOpacity={40}>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <main className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
            {translate(translations.welcomeTitle)}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md max-w-2xl mx-auto leading-relaxed">
            {translate(translations.welcomeDescription)}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/menu">
              <button className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
                {translate(translations.exploreMenu)}
              </button>
            </Link>
            <Link href="/enterprise">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 shadow-lg">
                {translate(translations.enterpriseServices)}
              </button>
            </Link>
          </div>
        </main>
      </div>

      {/* Google Maps Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Location Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {translate(translations.findUs)}
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {translate(translations.address)}
                    </h3>
                    <p>{translate(translations.addressDetails)}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {translate(translations.phone)}
                    </h3>
                    <p>+32 2 537 15 89</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {translate(translations.hours)}
                    </h3>
                    <div className="space-y-1">
                      <p>{translate(translations.hoursWeekdays)}</p>
                      <p>{translate(translations.hoursWeekend)}</p>
                      <p>{translate(translations.hoursSunday)}</p>
                    </div>
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
    </BackgroundVideo>
  );
}