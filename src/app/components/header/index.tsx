import styles from './styles.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Piano Melodies</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/classes">Our Classes</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
