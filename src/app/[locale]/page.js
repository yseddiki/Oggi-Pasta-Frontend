// src/app/[locale]/page.js
import React from 'react';
import {Link} from '../../i18n/navigation';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations();
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="text-center pt-50">
        <h1 className="text-4xl font-bold mb-4">{t('welcomeTitle')}</h1>
        <p className="text-lg text-gray-600">
          {t('welcomeDescription')}
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <Link href="/menu">
            {t('exploreMenu')}
          </Link>
        </button>
      </main>
    </div>
  );
}