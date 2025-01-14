import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoTitleContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo_naked.PNG"
            alt="Piano Melodies Logo"
            width={80}
            height={80}
          />
        </div>
        <h1 className={styles.title}>Piano Melodies Studio</h1>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About Us</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
