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

// src/app/[locale]/menu/page.js
import {useTranslations} from 'next-intl';

export default function Menu() {
  const t = useTranslations();

  const menuItems = [
    {
      category: t('categories.classicPasta'),
      items: [
        { name: t('items.pestoVerde'), price: "Medium € 8,00 / Large € 10,00" },
        { name: t('items.arrabiata'), price: "Medium € 8,00 / Large € 10,00" },
        { name: t('items.bolognaise'), price: "Medium € 8,00 / Large € 10,00" },
        { name: t('items.carbonara'), price: "Medium € 8,00 / Large € 10,00" },
        { name: t('items.cremeChampignonPoulet'), price: "Medium € 8,00 / Large € 10,00" },
        { name: t('items.scampiCreme'), price: "Medium € 10,00 / Large € 12,00" },
        { name: t('items.fourCheeses'), price: "Medium € 8,00 / Large € 10,00" },
        { name: t('items.indy'), price: "Medium € 8,00 / Large € 10,00" },
        { name: t('items.oggi'), price: "Medium € 8,00 / Large € 10,00" },
      ],
    },
    {
      category: t('categories.stuffedBeefPasta'),
      items: [
        { name: t('items.pestoVerde'), price: "€ 12,00 / € 14,50" },
        { name: t('items.arrabiata'), price: "€ 12,00 / € 14,50" },
        { name: t('items.bolognaise'), price: "€ 12,00 / € 14,50" },
        { name: t('items.carbonara'), price: "€ 12,00 / € 14,50" },
        { name: t('items.cremeChampignonPoulet'), price: "€ 12,00 / € 14,50" },
        { name: t('items.scampiCreme'), price: "€ 14,00 / € 16,50" },
        { name: t('items.fourCheeses'), price: "€ 12,00 / € 14,50" },
        { name: t('items.indy'), price: "€ 12,00 / € 14,50" },
        { name: t('items.oggi'), price: "€ 12,00 / € 14,50" },
      ],
    },
    {
      category: t('categories.stuffedRicottaPasta'),
      items: [
        { name: t('items.pestoVerde'), price: "€ 12,00 / € 14,50" },
        { name: t('items.arrabiata'), price: "€ 12,00 / € 14,50" },
        { name: t('items.bolognaise'), price: "€ 12,00 / € 14,50" },
        { name: t('items.carbonara'), price: "€ 12,00 / € 14,50" },
        { name: t('items.cremeChampignonPoulet'), price: "€ 12,00 / € 14,50" },
        { name: t('items.scampiCreme'), price: "€ 14,00 / € 16,50" },
        { name: t('items.fourCheeses'), price: "€ 12,00 / € 14,50" },
        { name: t('items.indy'), price: "€ 12,00 / € 14,50" },
        { name: t('items.oggi'), price: "€ 12,00 / € 14,50" },
      ],
    },
    {
      category: t('categories.lasagna'),
      items: [
        { name: t('items.lasagna'), price: "€ 12,00" },
      ],
    },
    {
      category: t('categories.starters'),
      items: [
        { name: t('items.burrata'), price: "€ 9,50" },
        { name: t('items.cherryTomatoes'), price: "€ 9,50" },
      ],
    },
    {
      category: t('categories.desserts'),
      items: [
        { name: t('items.cheesecake'), price: "€ 5,50" },
        { name: t('items.chocolateCake'), price: "€ 5,50" },
        { name: t('items.tiramisu'), price: "€ 4,50" },
      ],
    },
    {
      category: t('categories.drinks'),
      items: [
        { name: t('items.softDrink'), price: "€ 2,00" },
      ],
    },
  ];

  return (
    <div className="menu-container p-8">
      <h1 className="text-3xl font-bold mb-6 pt-8 text-center">{t('menuTitle')}</h1>
      <div className="menu-items space-y-8">
        {menuItems.map((category, index) => (
          <div key={index} className="menu-category">
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, idx) => (
                <li key={idx} className="menu-item border p-4 rounded shadow">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-md font-semibold text-primary">{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

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