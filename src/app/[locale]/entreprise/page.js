// src/app/[locale]/entreprise/page.js
import {getTranslations} from 'next-intl/server';

export default async function EntrepriseForfait({params: {locale}}) {
  const t = await getTranslations('navigation');
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">{t('enterprise')}</h1>
      <p className="text-lg mb-8">
        Welcome to the Enterprise page. Here you can find information about our enterprise packages and offers.
      </p>
      <p className="text-sm text-gray-500">Current locale: {locale}</p>
    </div>
  );
}