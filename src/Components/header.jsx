import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/header.module.css';

const header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <header  className={styles.header}>
        <div className= {styles.container} >
<div className={styles.itemContainer}>
        <a href="#">
          <Image
            src="/image/img_grid.svg"
            alt="grid"
            width={16}
            height={16}
            className={styles.icon}
          />
        </a>
        <p className={styles.text}>Lorem ipsum dolor</p>
      </div>

      <div className={styles.itemContainer}>
        <a href="#">
          <Image
            src="/image/img_grid.svg"
            alt="grid"
            width={16}
            height={16}
            className={styles.icon}
          />
        </a>
        <p className={styles.text}>Lorem ipsum dolor</p>
      </div>

      <div className={styles.itemContainer}>
        <a href="#">
          <Image
            src="/image/img_grid.svg"
            alt="grid"
            width={16}
            height={16}
            className={styles.icon}
          />
        </a>
        <p className={styles.text}>Lorem ipsum dolor</p>
      </div>
      </div>
          
      <nav className={styles.navbar}>
        {/* Top Section */}
        <div className={styles.logobox}>
         

          <div className={styles.brand}>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
            onClick={toggleActiveClass}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
            <Image src="/image/rightlogo.svg" alt="Brand Logo" width={40} height={40} />
          </div>

          <Link href="/" className={styles.logo}>LOGO</Link>

          <div className={styles.toplogobox}>
            <Image src="/image/search.svg" alt="Search Icon" width={24} height={24} />
            <Image src="/image/love.svg" alt="Love Icon" width={24} height={24} />
            <Image src="/image/bag.svg" alt="Bag Icon" width={24} height={24} />
            <Image src="/image/user.svg" alt="User Icon" width={24} height={24} />
            <div className={styles.eng}>
              <p className={styles.engp}>ENG</p>
              <Image src="/image/downlogo.svg" alt="Dropdown Arrow" width={16} height={16} />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className={`${styles.navMenu} ${styles.ul} ${isActive ? styles.active : ''}`}>
  {['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT US'].map((item) => (
    <li key={item} onClick={removeActive}>
      <a href="#" className={`${styles.navLink} ${styles.a}`}>{item}</a>
    </li>
  ))}
</ul>

      </nav>
    </header>
  );
};

export default header;
