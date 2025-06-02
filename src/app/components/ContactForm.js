// src/app/components/ContactForm.js
"use client";

import { useState } from 'react';

const ContactForm = ({ locale }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.company) {
        setStatus('error');
        return;
      }

      // Prepare form data for Formspree
      const formDataToSend = new FormData();
      
      // Add form fields
      Object.keys(formData).forEach(key => {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Add additional metadata
      formDataToSend.append('_subject', `New Enterprise Inquiry from ${formData.company}`);
      formDataToSend.append('_language', locale);
      formDataToSend.append('_cc', 'youssef.seddiki@cbre.com'); // Optional: CC yourself
      
      // Add honeypot for spam protection
      formDataToSend.append('_gotcha', '');

      // Send to Formspree
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          employees: '',
          service: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getLabel = (key) => {
    const labels = {
      name: {
        en: 'Full Name *',
        fr: 'Nom complet *',
        nl: 'Volledige naam *'
      },
      email: {
        en: 'Email Address *',
        fr: 'Adresse e-mail *',
        nl: 'E-mailadres *'
      },
      company: {
        en: 'Company Name *',
        fr: 'Nom de l\'entreprise *',
        nl: 'Bedrijfsnaam *'
      },
      phone: {
        en: 'Phone Number',
        fr: 'Numéro de téléphone',
        nl: 'Telefoonnummer'
      },
      employees: {
        en: 'Number of Employees',
        fr: 'Nombre d\'employés',
        nl: 'Aantal werknemers'
      },
      service: {
        en: 'Service Interested In',
        fr: 'Service qui vous intéresse',
        nl: 'Service waarin u geïnteresseerd bent'
      },
      message: {
        en: 'Message',
        fr: 'Message',
        nl: 'Bericht'
      }
    };
    return labels[key]?.[locale] || labels[key]?.en || key;
  };

  const getPlaceholder = (key) => {
    const placeholders = {
      name: {
        en: 'Enter your full name',
        fr: 'Entrez votre nom complet',
        nl: 'Voer uw volledige naam in'
      },
      email: {
        en: 'your.email@company.com',
        fr: 'votre.email@entreprise.com',
        nl: 'uw.email@bedrijf.com'
      },
      company: {
        en: 'Your company name',
        fr: 'Le nom de votre entreprise',
        nl: 'Uw bedrijfsnaam'
      },
      phone: {
        en: '+32 2 XXX XX XX',
        fr: '+32 2 XXX XX XX',
        nl: '+32 2 XXX XX XX'
      },
      employees: {
        en: 'e.g., 5-15, 15+, etc.',
        fr: 'ex: 5-15, 15+, etc.',
        nl: 'bijv. 5-15, 15+, enz.'
      },
      message: {
        en: 'Tell us about your catering needs, event details, or any questions...',
        fr: 'Parlez-nous de vos besoins en restauration, détails de l\'événement, ou toute question...',
        nl: 'Vertel ons over uw cateringbehoeften, evenementdetails of eventuele vragen...'
      }
    };
    return placeholders[key]?.[locale] || placeholders[key]?.en || '';
  };

  const getServiceOptions = () => {
    const options = {
      en: [
        { value: '', label: 'Select a service' },
        { value: 'team-package', label: 'Team Package (5-15 people)' },
        { value: 'corporate-package', label: 'Corporate Package (15+ people)' },
        { value: 'catering-service', label: 'Catering Service' },
        { value: 'custom', label: 'Custom Solution' }
      ],
      fr: [
        { value: '', label: 'Sélectionnez un service' },
        { value: 'team-package', label: 'Forfait Équipe (5-15 personnes)' },
        { value: 'corporate-package', label: 'Forfait Entreprise (15+ personnes)' },
        { value: 'catering-service', label: 'Service Traiteur' },
        { value: 'custom', label: 'Solution Personnalisée' }
      ],
      nl: [
        { value: '', label: 'Selecteer een service' },
        { value: 'team-package', label: 'Teampakket (5-15 personen)' },
        { value: 'corporate-package', label: 'Bedrijfspakket (15+ personen)' },
        { value: 'catering-service', label: 'Catering Service' },
        { value: 'custom', label: 'Aangepaste Oplossing' }
      ]
    };
    return options[locale] || options.en;
  };

  const getStatusMessage = () => {
    if (status === 'success') {
      const messages = {
        en: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
        fr: 'Merci ! Votre message a été envoyé avec succès. Nous vous recontacterons bientôt.',
        nl: 'Dank je! Uw bericht is succesvol verzonden. We nemen binnenkort contact met u op.'
      };
      return messages[locale] || messages.en;
    }
    if (status === 'error') {
      const messages = {
        en: 'Sorry, there was an error sending your message. Please try again or call us directly.',
        fr: 'Désolé, il y a eu une erreur lors de l\'envoi de votre message. Veuillez réessayer ou nous appeler directement.',
        nl: 'Sorry, er is een fout opgetreden bij het verzenden van uw bericht. Probeer het opnieuw of bel ons rechtstreeks.'
      };
      return messages[locale] || messages.en;
    }
    return '';
  };

  const getSubmitButtonText = () => {
    if (isSubmitting) {
      const texts = {
        en: 'Sending...',
        fr: 'Envoi en cours...',
        nl: 'Verzenden...'
      };
      return texts[locale] || texts.en;
    }
    const texts = {
      en: 'Send Message',
      fr: 'Envoyer le message',
      nl: 'Bericht verzenden'
    };
    return texts[locale] || texts.en;
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">
        {locale === 'fr' ? 'Demande de Devis' : locale === 'nl' ? 'Offerte Aanvragen' : 'Request a Quote'}
      </h3>
      
      {status && (
        <div className={`p-4 rounded-lg mb-6 ${
          status === 'success' 
            ? 'bg-green-100 text-green-800 border border-green-300' 
            : 'bg-red-100 text-red-800 border border-red-300'
        }`}>
          {getStatusMessage()}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field for spam protection - hidden from users */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              {getLabel('name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={getPlaceholder('name')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {getLabel('email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={getPlaceholder('email')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              {getLabel('company')}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder={getPlaceholder('company')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              {getLabel('phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={getPlaceholder('phone')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
              {getLabel('employees')}
            </label>
            <input
              type="text"
              id="employees"
              name="employees"
              value={formData.employees}
              onChange={handleChange}
              placeholder={getPlaceholder('employees')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              {getLabel('service')}
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            >
              {getServiceOptions().map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {getLabel('message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder={getPlaceholder('message')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-md font-semibold text-white transition-colors ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary hover:bg-green-700 focus:ring-2 focus:ring-primary focus:ring-offset-2'
          }`}
        >
          {getSubmitButtonText()}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;