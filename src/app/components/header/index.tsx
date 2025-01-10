import Image from 'next/image';
import styles from './styles.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoTitleContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo_naked.PNG" // Replace this with the path to your logo file
            alt="Piano Melodies Logo"
            width={80}
            height={80}
          />
        </div>
        <h1 className={styles.title}>Piano Melodies Studio</h1>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/">Home</a></li>
          <li className={styles.navItem}><a href="/about">About Us</a></li>
          <li className={styles.navItem}><a href="/classes">Our Classes</a></li>
          <li className={styles.navItem}><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
