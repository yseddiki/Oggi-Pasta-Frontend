// src/app/components/Footer.js
import React from 'react';
import Image from 'next/image';
import {Link} from '../../i18n/navigation';
import {getTranslations} from 'next-intl/server';
import {useLocale} from 'next-intl';

const Footer = async () => {
    const currentYear = new Date().getFullYear();
    const t = await getTranslations();
    
    return (
        <footer style={{ padding: '20px'  }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '200px', textAlign: 'left', marginBottom: '20px' }}>
                    <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Oggi Pasta</p>
                    <p style={{ margin: '5px 0' }}>35 Rue De Vergnies</p>
                    <p style={{ margin: '5px 0' }}>1050 Ixelles</p>
                    <p style={{ margin: '5px 0' }}>Belgique</p>
                    <a href="tel:+3226497535" style={{ margin: '5px 0', display: 'block', textDecoration: 'underline', }}>
                        +32 2 649 75 35
                    </a>
                </div>

                {/* Column 2: Links */}
                <div style={{ flex: '1', minWidth: '200px', textAlign: 'left', marginBottom: '20px' }}>
                    <Link href="/menu" style={{ display: 'block', margin: '5px 0', textDecoration: 'underline', fontWeight: 'normal', transition: 'font-weight 0.2s' }}>
                        {t('navigation.menu')}
                    </Link>
                    <Link href="/entreprise" style={{ display: 'block', margin: '5px 0', textDecoration: 'underline', fontWeight: 'normal', transition: 'font-weight 0.2s' }}>
                        {t('navigation.enterprise')}
                    </Link>
                </div>

                {/* Column 3: Social Media */}
                <div style={{ flex: '1', textAlign: 'right', marginBottom: '20px', display: 'flex', gap: '10px' }}>
                    <a href="https://www.instagram.com/oggipasta/" target="_blank" rel="noopener noreferrer">
                        <Image src="/instagram.svg" alt="Instagram" width={34} height={54} />
                    </a>
                    <a href="https://www.facebook.com/akelot/" target="_blank" style={{paddingTop: '2px'}} rel="noopener noreferrer">
                        <Image src="/facebook.svg" alt="Facebook" width={30} height={24} />
                    </a>
                    <a href="https://www.ubereats.com/be-en/store/oggi-pasta/" target="_blank" style={{paddingTop: '2px'}} rel="noopener noreferrer">
                        <Image src="/uber-eats.svg" alt="Uber Eats" width={34} height={24} />
                    </a>
                    <a href="https://www.takeaway.com/be-en/menu/oggi-pasta" target="_blank" style={{paddingTop: '1px'}} rel="noopener noreferrer">
                        <Image src="/takeway.png" alt="Takeaway" width={34} height={24} />
                    </a>
                </div>
            </div>
            <p style={{ textAlign: 'center', margin: '10px 0', fontSize: '14px' }}>
                © {currentYear} Oggi Pasta. {t('footer.allRightsReserved')}
            </p>
        </footer>
    );
};

export default Footer;