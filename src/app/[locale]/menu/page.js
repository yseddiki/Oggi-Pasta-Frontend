// src/app/[locale]/menu/page.js
import {getTranslations} from 'next-intl/server';

export default async function Menu({params}) {
  // Handle params properly for Next.js 15
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  const t = await getTranslations();
  
  // Ensure that the translations are loaded correctly
  if (!t) {
    throw new Error('Translations not found');
  }

  const menuItems = [
    {
      category: locale === 'fr' ? 'Pâtes Classiques' : locale === 'nl' ? 'Klassieke Pasta' : 'Classic Pasta',
      items: [
        { 
          name: 'Pesto Verde', 
          price: locale === 'fr' ? 'Moyen € 8,00 / Grand € 10,00' : locale === 'nl' ? 'Medium € 8,00 / Groot € 10,00' : 'Medium € 8,00 / Large € 10,00' 
        },
        { 
          name: 'Arrabiata', 
          price: locale === 'fr' ? 'Moyen € 8,00 / Grand € 10,00' : locale === 'nl' ? 'Medium € 8,00 / Groot € 10,00' : 'Medium € 8,00 / Large € 10,00' 
        },
        { 
          name: locale === 'fr' ? 'Bolognaise' : 'Bolognese', 
          price: locale === 'fr' ? 'Moyen € 8,00 / Grand € 10,00' : locale === 'nl' ? 'Medium € 8,00 / Groot € 10,00' : 'Medium € 8,00 / Large € 10,00' 
        },
        { 
          name: 'Carbonara', 
          price: locale === 'fr' ? 'Moyen € 8,00 / Grand € 10,00' : locale === 'nl' ? 'Medium € 8,00 / Groot € 10,00' : 'Medium € 8,00 / Large € 10,00' 
        },
        { 
          name: locale === 'fr' ? 'Crème champignon poulet' : locale === 'nl' ? 'Champignonroom Kip' : 'Cream Mushroom Chicken', 
          price: locale === 'fr' ? 'Moyen € 8,00 / Grand € 10,00' : locale === 'nl' ? 'Medium € 8,00 / Groot € 10,00' : 'Medium € 8,00 / Large € 10,00' 
        },
        { 
          name: locale === 'fr' ? 'Scampi Crème' : locale === 'nl' ? 'Scampi Room' : 'Scampi Cream', 
          price: locale === 'fr' ? 'Moyen € 10,00 / Grand € 12,00' : locale === 'nl' ? 'Medium € 10,00 / Groot € 12,00' : 'Medium € 10,00 / Large € 12,00' 
        },
        { 
          name: locale === 'fr' ? '4 Fromages' : locale === 'nl' ? '4 Kazen' : '4 Cheeses', 
          price: locale === 'fr' ? 'Moyen € 8,00 / Grand € 10,00' : locale === 'nl' ? 'Medium € 8,00 / Groot € 10,00' : 'Medium € 8,00 / Large € 10,00' 
        },
        { 
          name: locale === 'fr' ? 'Indy (poulet curry)' : locale === 'nl' ? 'Indy (kip kerrie)' : 'Indy (Chicken Curry)', 
          price: locale === 'fr' ? 'Moyen € 8,00 / Grand € 10,00' : locale === 'nl' ? 'Medium € 8,00 / Groot € 10,00' : 'Medium € 8,00 / Large € 10,00' 
        },
        { 
          name: 'Oggi', 
          price: locale === 'fr' ? 'Moyen € 8,00 / Grand € 10,00' : locale === 'nl' ? 'Medium € 8,00 / Groot € 10,00' : 'Medium € 8,00 / Large € 10,00' 
        },
      ],
    },
    {
      category: locale === 'fr' ? 'Pâtes Farcies Bœuf' : locale === 'nl' ? 'Gevulde Pasta Rundvlees' : 'Stuffed Beef Pasta',
      items: [
        { name: 'Pesto Verde', price: '€ 12,00 / € 14,50' },
        { name: 'Arrabiata', price: '€ 12,00 / € 14,50' },
        { name: locale === 'fr' ? 'Bolognaise' : 'Bolognese', price: '€ 12,00 / € 14,50' },
        { name: 'Carbonara', price: '€ 12,00 / € 14,50' },
        { name: locale === 'fr' ? 'Crème champignon poulet' : locale === 'nl' ? 'Champignonroom Kip' : 'Cream Mushroom Chicken', price: '€ 12,00 / € 14,50' },
        { name: locale === 'fr' ? 'Scampi Crème' : locale === 'nl' ? 'Scampi Room' : 'Scampi Cream', price: '€ 14,00 / € 16,50' },
        { name: locale === 'fr' ? '4 Fromages' : locale === 'nl' ? '4 Kazen' : '4 Cheeses', price: '€ 12,00 / € 14,50' },
        { name: locale === 'fr' ? 'Indy (poulet curry)' : locale === 'nl' ? 'Indy (kip kerrie)' : 'Indy (Chicken Curry)', price: '€ 12,00 / € 14,50' },
        { name: 'Oggi', price: '€ 12,00 / € 14,50' },
      ],
    },
    {
      category: locale === 'fr' ? 'Pâtes Farcies Ricotta' : locale === 'nl' ? 'Gevulde Pasta Ricotta' : 'Stuffed Ricotta Pasta',
      items: [
        { name: 'Pesto Verde', price: '€ 12,00 / € 14,50' },
        { name: 'Arrabiata', price: '€ 12,00 / € 14,50' },
        { name: locale === 'fr' ? 'Bolognaise' : 'Bolognese', price: '€ 12,00 / € 14,50' },
        { name: 'Carbonara', price: '€ 12,00 / € 14,50' },
        { name: locale === 'fr' ? 'Crème champignon poulet' : locale === 'nl' ? 'Champignonroom Kip' : 'Cream Mushroom Chicken', price: '€ 12,00 / € 14,50' },
        { name: locale === 'fr' ? 'Scampi Crème' : locale === 'nl' ? 'Scampi Room' : 'Scampi Cream', price: '€ 14,00 / € 16,50' },
        { name: locale === 'fr' ? '4 Fromages' : locale === 'nl' ? '4 Kazen' : '4 Cheeses', price: '€ 12,00 / € 14,50' },
        { name: locale === 'fr' ? 'Indy (poulet curry)' : locale === 'nl' ? 'Indy (kip kerrie)' : 'Indy (Chicken Curry)', price: '€ 12,00 / € 14,50' },
        { name: 'Oggi', price: '€ 12,00 / € 14,50' },
      ],
    },
    {
      category: locale === 'fr' ? 'Lasagne' : 'Lasagna',
      items: [
        { name: locale === 'fr' ? 'Lasagne' : 'Lasagna', price: '€ 12,00' },
      ],
    },
    {
      category: locale === 'fr' ? 'Entrées' : locale === 'nl' ? 'Voorgerechten' : 'Starters',
      items: [
        { name: 'Burrata di Bufala', price: '€ 9,50' },
        { 
          name: locale === 'fr' ? 'Tomates cerises au pesto' : locale === 'nl' ? 'Kerstomaten met pesto' : 'Cherry Tomatoes with Pesto', 
          price: '€ 9,50' 
        },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { 
          name: locale === 'fr' ? 'Cheesecake Caramel' : locale === 'nl' ? 'Cheesecake Karamel' : 'Caramel Cheesecake', 
          price: '€ 5,50' 
        },
        { 
          name: locale === 'fr' ? 'Moelleux Chocolat' : locale === 'nl' ? 'Chocolade Moelleux' : 'Chocolate Fondant', 
          price: '€ 5,50' 
        },
        { name: 'Tiramisu', price: '€ 4,50' },
      ],
    },
    {
      category: locale === 'fr' ? 'Softs' : locale === 'nl' ? 'Dranken' : 'Drinks',
      items: [
        { 
          name: locale === 'fr' ? 'Soft' : locale === 'nl' ? 'Frisdrank' : 'Soft Drink', 
          price: '€ 2,00' 
        },
      ],
    },
  ];

  return (
    <div className="menu-container p-8">
      <h1 className="text-3xl font-bold mb-6 pt-8 text-center">
        {locale === 'fr' ? 'Notre Menu' : locale === 'nl' ? 'Ons Menu' : 'Our Menu'}
      </h1>
      <div className="menu-items space-y-8">
        {menuItems.map((category, index) => (
          <div key={index} className="menu-category">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{category.category}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, idx) => (
                <li key={idx} className="menu-item border p-4 rounded shadow hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium mb-2">{item.name}</h3>
                  <p className="text-md font-semibold text-primary">{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Debug info */}
      <p className="text-sm text-gray-400 text-center mt-8">Current locale: {locale}</p>
    </div>
  );
}