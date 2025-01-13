'use client';

import Head from "next/head";
import Image from 'next/image';
import styles from './styles.module.css';
import Button from "./components/button";

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
          At Piano Melodies, our mission is to make piano lessons accessible, enjoyable, and enriching for every child—regardless of diagnosis, challenge, or ability.
          </p>
          <p className={styles.description}>
          We proudly serve the Miami community, working with children of all ages, skill levels, and backgrounds. Our lessons are designed to go beyond musical knowledge, fostering growth that extends into students’ daily lives.
          </p>
          <p className={styles.description}>
          We specialize in adaptive piano lessons with a music therapy approach, creating a supportive and engaging environment for children on the autism spectrum, those with ADHD, and neurotypical students alike. At Piano Melodies, we believe everyone deserves the chance to fall in love with music in a fun, inclusive space.
          </p>
          <Button
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSehNapZOV3DjqfkuqMJQ9fqAjjG6MiNUI4ksfdlDmWWEdfNBA/viewform', '_blank')}
          >
          Join Our Classes</Button>
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
    
    <main className={styles.headerContent}>
    </main>
  </div>
);

export default HomePage;
