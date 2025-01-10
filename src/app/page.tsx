import Head from "next/head";
import Image from 'next/image';
import styles from './styles.module.css';

const HomePage = () => (
  <div className={styles.container}>
    <Head>
      <title>Welcome to Piano Melodies Studio</title>
      <meta name="description" content="Do you want a personal piano class? Call us today!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Welcome to Piano Melodies Studio</h1>
          <p className={styles.description}>
            Piano Melodies Studio offers piano classes for children of all ages, skill levels, and diagnoses. We make piano playing a fun and engaging experience! 🎶
          </p>
          <p className={styles.description}>
            Scroll down and take a look through our site to see what we have to offer, and get in touch with questions.
          </p>
          <p>We offer classes for all levels, from beginners to advanced pianists.</p>
          <button className={styles.ctaButton}>Join Our Classes</button>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/images/logo.PNG"
            alt="Piano Melodies Studio Logo"
            width={500}
            height={300}
            layout="intrinsic"
          />
        </div>
      </div>
    </header>
    
    <main className={styles.main}>
    </main>
  </div>
);

export default HomePage;
