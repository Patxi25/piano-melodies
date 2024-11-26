import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 Piano Melodies. All rights reserved.</p>
      <p>
        Follow us on:
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> |
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a> |
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>
      </p>
    </footer>
  );
};

export default Footer;
