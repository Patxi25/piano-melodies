import { FaInstagram } from "react-icons/fa";
import styles from './styles.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.date}>&copy; 2025 Piano Melodies. All rights reserved.</p>
        <p className={styles.social}>
          Follow us on:
          <a href="https://www.instagram.com/pianomelodies_studio/" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
          <a href="https://www.facebook.com/p/Piano-Melodies-61567913116105/" target="_blank" rel="noopener noreferrer"> Facebook</a>
        </p>
      </div>
    </footer>
  );
};
