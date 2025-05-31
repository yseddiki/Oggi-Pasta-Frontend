// src/app/[locale]/entreprise/page.js
import {useTranslations} from 'next-intl';

export default function EntrepriseForfait() {
  const t = useTranslations('navigation');
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">{t('enterprise')}</h1>
      <p className="text-lg mb-8">
        Welcome to the Enterprise page. Here you can find information about our enterprise packages and offers.
      </p>
    </div>
  );
}