import styles from './styles.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.date}>&copy; 2025 Piano Melodies. All rights reserved.</p>
        <p className={styles.social}>
          Follow us on:
          <a href="https://www.instagram.com/pianomelodies_studio/" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </div>
    </footer>
  );
};
