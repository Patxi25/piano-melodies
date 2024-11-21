import Head from "next/head";
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Piano Melodies</title>
        <meta name="description" content="Do you want a personal piano class? Call us today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Piano Melodies</h1>
        <p className={styles.description}>
          Learn paino from the best instructors.
        </p>
        <button className={styles.ctaButton}>Join Our Classes</button>
      </header>
      
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Experienced Instructors</li>
            <li>Flexible Schedules</li>
            <li>Personalized Lessons</li>
            <li>Performance Opportunities</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Our Classes</h2>
          <p> We offer classes for all levels, from beginners to advanced pianists.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 Piano Melodies. All rights reserved.</p>
      </footer>
    </div>

  );
}
