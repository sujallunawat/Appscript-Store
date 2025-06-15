import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/footer.module.css';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 775);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.upbox}>
        <div className={styles.emailpart}>
          <p className={styles.font1}>BE THE FIRST TO KNOW</p>
          <p className={styles.mt1}>Sign up to update from metta muse</p>
          <div className={styles.inputbox}>
            <input type="text" className={styles.inputtag} />
            <button className={styles.inputbtn}>
              <span className={styles.inputspan}>Subscribe</span>
            </button>
          </div>
        </div>

        <div className={styles.infopart}>
          <p className={styles.font1}>CONTACT US</p>
          <p className={styles.mt}>+44 221 133 5360</p>
          <p className={styles.mt}>customercare@mettamuse.com</p>
          <p className={styles.currency}>CURRENCY</p>
          <div className={styles.usabox}>
            <Image src="/image/usa.svg" alt="USA Flag" width={24} height={24} />
            <p className={`${styles.font1} ${styles.mt}`}>
              <span className={styles.small}>  ✚</span> USD
            </p>
          </div>
          <p className={styles.mt}>
            Transaction completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      <div className={styles.horizontal}></div>

      <div className={styles.lowerbox}>
        {/* metta muse */}
        <div className={styles.section}>
          <div className={styles.sectionHeader} onClick={() => toggleSection('metta')}>
            <p className={styles.font1M}>metta muse</p>
            {isMobile && <span className={styles.arrow}>{openSection === 'metta' ? '▲' : '▼'}</span>}
          </div>
          <div className={`${styles.sectionContent} ${openSection === 'metta' ? styles.open : ''}`}>
            <p className={styles.mt}>About Us</p>
            <p className={styles.mt}>Stories</p>
            <p className={styles.mt}>Artisans</p>
            <p className={styles.mt}>Boutiques</p>
            <p className={styles.mt}>Contact Us</p>
            <p className={styles.mt}>EU Compliance Docs</p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.section}>
          <div className={styles.sectionHeader} onClick={() => toggleSection('quick')}>
            <p className={styles.font1}>QUICK LINKS</p>
            {isMobile && <span className={styles.arrow}>{openSection === 'quick' ? '▲' : '▼'}</span>}
          </div>
          <div className={`${styles.sectionContent} ${openSection === 'quick' ? styles.open : ''}`}>
            <p className={styles.mt}>Order & Shipping</p>
            <p className={styles.mt}>Join/Login as a Seller</p>
            <p className={styles.mt}>Payment & Pricing</p>
            <p className={styles.mt}>Returns & Refunds</p>
            <p className={styles.mt}>FAQs</p>
            <p className={styles.mt}>Privacy Policy</p>
            <p className={styles.mt}>Terms & Conditions</p>
          </div>
        </div>

        {/* FOLLOW US */}
        <div className={styles.section}>
          <div className={styles.sectionHeader} onClick={() => toggleSection('follow')}>
            <p className={styles.font1}>FOLLOW US</p>
            {isMobile && <span className={styles.arrow}>{openSection === 'follow' ? '▲' : '▼'}</span>}
          </div>
          <div className={`${styles.sectionContent} ${openSection === 'follow' ? styles.open : ''}`}>
            <div className={styles.instabox}>
              <Image src="/image/insta.svg" alt="Instagram" width={24} height={24} />
              <Image src="/image/linkden.svg" alt="LinkedIn" width={24} height={24} />
            </div>
          </div>
          
          <p>metta muse Accepts</p>
            <div className={styles.paybox}>
              <Image src="/image/gpay.svg" alt="Google Pay" width={40} height={24} />
              <Image src="/image/voda.svg" alt="Vodafone" width={40} height={24} />
              <Image src="/image/paypal.svg" alt="PayPal" width={40} height={24} />
              <Image src="/image/amex.svg" alt="American Express" width={40} height={24} />
              <Image src="/image/applepay.svg" alt="Apple Pay" width={40} height={24} />
              <Image src="/image/opay.svg" alt="Open Pay" width={40} height={24} />
            </div>
        </div>
      </div>

      <p className={styles.end}>© Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
  );
};

export default Footer;
