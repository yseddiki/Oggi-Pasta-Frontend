// src/app/api/send-email/route.js
import sgMail from '@sendgrid/mail';

// Set your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, employees, service, message, locale } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get localized content
    const getLocalizedContent = (locale) => {
      const content = {
        en: {
          subject: `New Enterprise Inquiry from ${company}`,
          heading: 'New Enterprise Contact Form Submission',
          labels: {
            name: 'Name',
            email: 'Email',
            company: 'Company',
            phone: 'Phone',
            employees: 'Number of Employees',
            service: 'Service of Interest',
            message: 'Message'
          },
          serviceMap: {
            'team-package': 'Team Package (5-15 people)',
            'corporate-package': 'Corporate Package (15+ people)',
            'catering-service': 'Catering Service',
            'custom': 'Custom Solution'
          }
        },
        fr: {
          subject: `Nouvelle demande entreprise de ${company}`,
          heading: 'Nouvelle soumission du formulaire de contact entreprise',
          labels: {
            name: 'Nom',
            email: 'E-mail',
            company: 'Entreprise',
            phone: 'Téléphone',
            employees: 'Nombre d\'employés',
            service: 'Service d\'intérêt',
            message: 'Message'
          },
          serviceMap: {
            'team-package': 'Forfait Équipe (5-15 personnes)',
            'corporate-package': 'Forfait Entreprise (15+ personnes)',
            'catering-service': 'Service Traiteur',
            'custom': 'Solution Personnalisée'
          }
        },
        nl: {
          subject: `Nieuwe ondernemingsaanvraag van ${company}`,
          heading: 'Nieuwe indiening contactformulier onderneming',
          labels: {
            name: 'Naam',
            email: 'E-mail',
            company: 'Bedrijf',
            phone: 'Telefoon',
            employees: 'Aantal werknemers',
            service: 'Service van interesse',
            message: 'Bericht'
          },
          serviceMap: {
            'team-package': 'Teampakket (5-15 personen)',
            'corporate-package': 'Bedrijfspakket (15+ personen)',
            'catering-service': 'Catering Service',
            'custom': 'Aangepaste Oplossing'
          }
        }
      };
      return content[locale] || content.en;
    };

    const localizedContent = getLocalizedContent(locale);
    const serviceName = service ? localizedContent.serviceMap[service] || service : 'Not specified';

    // Create the email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #0D3B1C; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">${localizedContent.heading}</h1>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px;">
          <div style="margin-bottom: 20px;">
            <h2 style="color: #0D3B1C; margin-bottom: 15px; font-size: 20px;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; color: #333; width: 40%;">${localizedContent.labels.name}:</td>
                <td style="padding: 10px 0; color: #666;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; color: #333;">${localizedContent.labels.email}:</td>
                <td style="padding: 10px 0; color: #666;"><a href="mailto:${email}" style="color: #0D3B1C;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; color: #333;">${localizedContent.labels.company}:</td>
                <td style="padding: 10px 0; color: #666;">${company}</td>
              </tr>
              ${phone ? `
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; color: #333;">${localizedContent.labels.phone}:</td>
                <td style="padding: 10px 0; color: #666;"><a href="tel:${phone}" style="color: #0D3B1C;">${phone}</a></td>
              </tr>
              ` : ''}
              ${employees ? `
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; color: #333;">${localizedContent.labels.employees}:</td>
                <td style="padding: 10px 0; color: #666;">${employees}</td>
              </tr>
              ` : ''}
              ${service ? `
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; color: #333;">${localizedContent.labels.service}:</td>
                <td style="padding: 10px 0; color: #666;">${serviceName}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          ${message ? `
          <div style="margin-top: 25px;">
            <h3 style="color: #0D3B1C; margin-bottom: 10px;">${localizedContent.labels.message}:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #0D3B1C; border-radius: 4px;">
              <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p style="margin: 0;">This email was sent from the Oggi Pasta enterprise contact form.</p>
            <p style="margin: 5px 0 0 0;">Received on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    `;

    // Email configuration
    const msg = {
      to: process.env.SENDGRID_TO_EMAIL, // Your email address
      from: {
        email: process.env.SENDGRID_FROM_EMAIL, // Must be verified in SendGrid
        name: 'Oggi Pasta Website'
      },
      replyTo: {
        email: email,
        name: name
      },
      subject: localizedContent.subject,
      html: emailHtml,
      text: `
${localizedContent.heading}

${localizedContent.labels.name}: ${name}
${localizedContent.labels.email}: ${email}
${localizedContent.labels.company}: ${company}
${phone ? `${localizedContent.labels.phone}: ${phone}` : ''}
${employees ? `${localizedContent.labels.employees}: ${employees}` : ''}
${service ? `${localizedContent.labels.service}: ${serviceName}` : ''}

${message ? `${localizedContent.labels.message}:\n${message}` : ''}

---
This email was sent from the Oggi Pasta enterprise contact form.
Received on: ${new Date().toLocaleString()}
      `.trim()
    };

    // Send the email
    await sgMail.send(msg);

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('SendGrid error:', error);
    
    // Log more detailed error information
    if (error.response) {
      console.error('SendGrid response error:', error.response.body);
    }

    return Response.json(
      { 
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}