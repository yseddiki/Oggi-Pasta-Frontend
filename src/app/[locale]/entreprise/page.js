// src/app/[locale]/entreprise/page.js
import {getTranslations} from 'next-intl/server';

export default async function EntreprisePage({params}) {
  // Handle params properly for Next.js 15
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  const t = await getTranslations();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">{t('navigation.enterprise')}</h1>
      <div className="max-w-4xl text-center">
        <p className="text-lg mb-8">
          {locale === 'fr' ? 
            "Bienvenue sur notre page Entreprise. Découvrez nos offres spéciales pour les entreprises et nos forfaits dédiés aux professionnels." :
            locale === 'nl' ? 
            "Welkom op onze bedrijfspagina. Ontdek onze speciale aanbiedingen voor bedrijven en onze pakketten voor professionals." :
            "Welcome to our Enterprise page. Discover our special offers for businesses and our packages dedicated to professionals."
          }
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="border p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">
              {locale === 'fr' ? 'Forfait Équipe' : locale === 'nl' ? 'Teampakket' : 'Team Package'}
            </h3>
            <p className="text-gray-600">
              {locale === 'fr' ? 
                'Parfait pour les petites équipes de 5-15 personnes.' :
                locale === 'nl' ? 
                'Perfect voor kleine teams van 5-15 personen.' :
                'Perfect for small teams of 5-15 people.'
              }
            </p>
            <p className="text-2xl font-bold text-primary mt-4">€12/person</p>
          </div>
          
          <div className="border p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">
              {locale === 'fr' ? 'Forfait Entreprise' : locale === 'nl' ? 'Bedrijfspakket' : 'Corporate Package'}
            </h3>
            <p className="text-gray-600">
              {locale === 'fr' ? 
                'Idéal pour les grandes entreprises de 15+ personnes.' :
                locale === 'nl' ? 
                'Ideaal voor grote bedrijven van 15+ personen.' :
                'Ideal for large companies of 15+ people.'
              }
            </p>
            <p className="text-2xl font-bold text-primary mt-4">€10/person</p>
          </div>
          
          <div className="border p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">
              {locale === 'fr' ? 'Service Traiteur' : locale === 'nl' ? 'Catering Service' : 'Catering Service'}
            </h3>
            <p className="text-gray-600">
              {locale === 'fr' ? 
                'Service complet pour vos événements d\'entreprise.' :
                locale === 'nl' ? 
                'Volledige service voor uw bedrijfsevenementen.' :
                'Full service for your corporate events.'
              }
            </p>
            <p className="text-2xl font-bold text-primary mt-4">
              {locale === 'fr' ? 'Sur devis' : locale === 'nl' ? 'Op aanvraag' : 'Quote based'}
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            {locale === 'fr' ? 'Contactez-nous' : locale === 'nl' ? 'Contacteer ons' : 'Contact Us'}
          </h2>
          <p className="text-lg">
            {locale === 'fr' ? 
              'Appelez-nous au ' :
              locale === 'nl' ? 
              'Bel ons op ' :
              'Call us at '
            }
            <a href="tel:+3226497535" className="text-primary font-semibold">+32 2 649 75 35</a>
          </p>
          <p className="text-gray-600 mt-2">
            {locale === 'fr' ? 
              'ou envoyez-nous un email pour discuter de vos besoins.' :
              locale === 'nl' ? 
              'of stuur ons een e-mail om uw behoeften te bespreken.' :
              'or send us an email to discuss your needs.'
            }
          </p>
        </div>
      </div>
    </div>
  );
}