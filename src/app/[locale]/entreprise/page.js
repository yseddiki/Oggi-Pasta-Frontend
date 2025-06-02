// src/app/[locale]/entreprise/page.js
import {getTranslations} from 'next-intl/server';
import ContactForm from '../../components/ContactForm';

export default async function EntreprisePage({params}) {
  // Handle params properly for Next.js 15
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  const t = await getTranslations();
  
  return (
    <div className="min-h-screen mt-12 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-green-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('navigation.enterprise')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {locale === 'fr' ? 
              "Découvrez nos solutions sur mesure pour votre entreprise. Des forfaits équipe aux services traiteur complets." :
              locale === 'nl' ? 
              "Ontdek onze op maat gemaakte oplossingen voor uw bedrijf. Van teampakketten tot volledige cateringdiensten." :
              "Discover our tailored solutions for your business. From team packages to complete catering services."
            }
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Services Description */}
        <div className="mb-16">
          <p className="text-lg mb-12 text-center text-gray-600 max-w-4xl mx-auto">
            {locale === 'fr' ? 
              "Chez Oggi Pasta, nous comprenons les besoins uniques des entreprises. Que vous organisiez un déjeuner d'équipe, un événement d'entreprise ou que vous cherchiez une solution de restauration régulière, nous avons l'offre parfaite pour vous." :
              locale === 'nl' ? 
              "Bij Oggi Pasta begrijpen we de unieke behoeften van bedrijven. Of u nu een teamlunch organiseert, een bedrijfsevenement of op zoek bent naar een reguliere cateringoplossing, wij hebben het perfecte aanbod voor u." :
              "At Oggi Pasta, we understand the unique needs of businesses. Whether you're organizing a team lunch, corporate event, or looking for a regular catering solution, we have the perfect offering for you."
            }
          </p>
          
          {/* Service Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {locale === 'fr' ? 'Forfait Équipe' : locale === 'nl' ? 'Teampakket' : 'Team Package'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {locale === 'fr' ? 
                    'Parfait pour les petites équipes de 5-15 personnes. Idéal pour les déjeuners d\'équipe réguliers.' :
                    locale === 'nl' ? 
                    'Perfect voor kleine teams van 5-15 personen. Ideaal voor reguliere teamlunches.' :
                    'Perfect for small teams of 5-15 people. Ideal for regular team lunches.'
                  }
                </p>
                <p className="text-sm text-gray-500">
                  {locale === 'fr' ? 'Prix dégressif selon volume' : locale === 'nl' ? 'Volumekortingen beschikbaar' : 'Volume discounts available'}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-primary">
              <div className="text-center">
                <div className="w-16 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full inline-block mb-2">
                  {locale === 'fr' ? 'POPULAIRE' : locale === 'nl' ? 'POPULAIR' : 'POPULAR'}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {locale === 'fr' ? 'Forfait Entreprise' : locale === 'nl' ? 'Bedrijfspakket' : 'Corporate Package'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {locale === 'fr' ? 
                    'Idéal pour les grandes entreprises de 15+ personnes. Solution complète avec service dédié.' :
                    locale === 'nl' ? 
                    'Ideaal voor grote bedrijven van 15+ personen. Volledige oplossing met toegewijde service.' :
                    'Ideal for large companies of 15+ people. Complete solution with dedicated service.'
                  }
                </p>
                <p className="text-sm text-gray-500">
                  {locale === 'fr' ? 'Tarifs préférentiels entreprise' : locale === 'nl' ? 'Voorkeurtarieven voor bedrijven' : 'Preferential corporate rates'}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 003 16.5v-.5c0-1.657 1.343-3 3-3h12c1.657 0 3 1.343 3 3v.546z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13h8M8 17h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {locale === 'fr' ? 'Service Traiteur' : locale === 'nl' ? 'Catering Service' : 'Catering Service'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {locale === 'fr' ? 
                    'Service complet pour vos événements d\'entreprise, séminaires et réceptions.' :
                    locale === 'nl' ? 
                    'Volledige service voor uw bedrijfsevenementen, seminars en recepties.' :
                    'Full service for your corporate events, seminars and receptions.'
                  }
                </p>
                <div className="text-2xl font-bold text-primary mb-2">
                  {locale === 'fr' ? 'Sur devis' : locale === 'nl' ? 'Op aanvraag' : 'Quote based'}
                </div>
                <p className="text-sm text-gray-500">
                  {locale === 'fr' ? 'Personnalisé selon vos besoins' : locale === 'nl' ? 'Aangepast aan uw behoeften' : 'Customized to your needs'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section with Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              {locale === 'fr' ? 'Contactez-nous' : locale === 'nl' ? 'Contacteer ons' : 'Contact Us'}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {locale === 'fr' ? 'Téléphone' : locale === 'nl' ? 'Telefoon' : 'Phone'}
                  </h3>
                  <p className="text-gray-600">
                    <a href="tel:+3226497535" className="text-primary hover:underline">+32 2 649 75 35</a>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {locale === 'fr' ? 
                      'Appelez-nous pour discuter de vos besoins' :
                      locale === 'nl' ? 
                      'Bel ons om uw behoeften te bespreken' :
                      'Call us to discuss your needs'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {locale === 'fr' ? 'Adresse' : locale === 'nl' ? 'Adres' : 'Address'}
                  </h3>
                  <p className="text-gray-600">35 Rue De Vergnies</p>
                  <p className="text-gray-600">1050 Ixelles, Belgique</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {locale === 'fr' ? 'Heures d\'ouverture' : locale === 'nl' ? 'Openingsuren' : 'Opening Hours'}
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <p>{locale === 'fr' ? 'Lun-Jeu: 11h30-22h00' : locale === 'nl' ? 'Ma-Do: 11u30-22u00' : 'Mon-Thu: 11:30am-10:00pm'}</p>
                    <p>{locale === 'fr' ? 'Ven-Sam: 11h30-22h30' : locale === 'nl' ? 'Vr-Za: 11u30-22u30' : 'Fri-Sat: 11:30am-10:30pm'}</p>
                    <p>{locale === 'fr' ? 'Dim: 12h00-21h30' : locale === 'nl' ? 'Zo: 12u00-21u30' : 'Sun: 12:00pm-9:30pm'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-4">
                {locale === 'fr' ? 'Pourquoi nous choisir ?' : locale === 'nl' ? 'Waarom ons kiezen?' : 'Why Choose Us?'}
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Ingrédients frais et de qualité' : locale === 'nl' ? 'Verse en kwaliteitsvolle ingrediënten' : 'Fresh and quality ingredients'}
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Livraison ponctuelle' : locale === 'nl' ? 'Tijdige levering' : 'Timely delivery'}
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Prix compétitifs' : locale === 'nl' ? 'Concurrerende prijzen' : 'Competitive pricing'}
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Service client dédié' : locale === 'nl' ? 'Toegewijde klantenservice' : 'Dedicated customer service'}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm locale={locale} />
        </div>
      </div>
    </div>
  );
}