'use client';

import styles from "./styles.module.css";
import Button from "../components/button";

const AboutPage = () => (
    <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>Our Piano Classes</h1>
      <p className={styles.description}>
        Piano classes for children of all ages, skill levels, and diagnoses. We make piano playing a fun and engaging experience, tailored to each student’s unique needs.
      </p>
    </header>

    <main className={styles.main}>
      <section className={styles.classList}>
        <div className={styles.classItem}>
          <h2>Beginner Classes</h2>
          <p>
            Perfect for those just starting their musical journey. These classes focus on the fundamentals of piano playing, including basic techniques, note reading, and rhythm exercises.
          </p>
        </div>

        <div className={styles.classItem}>
          <h2>Intermediate Classes</h2>
          <p>
            Designed for students who have a solid foundation in piano. These classes focus on improving technique, exploring more complex pieces, and developing musicality.
          </p>
        </div>

        <div className={styles.classItem}>
          <h2>Advanced Classes</h2>
          <p>
            Tailored for experienced pianists looking to refine their skills and master challenging pieces. These classes include advanced technique, performance preparation, and music theory.
          </p>
        </div>

        <div className={styles.classItem}>
          <h2>Special Needs Classes</h2>
          <p>
            We offer customized lessons for students with autism, ADHD, and other diagnoses. Our goal is to create a supportive and engaging environment for every student.
          </p>
        </div>
      </section>

      <div className={styles.ctaSection}>
        <p>Ready to start your piano journey? Reach out to us for more information!</p>
        {/* TODO: Fix link */}
        <Button
          onClick={() =>
            window.open(
              'https://docs.google.com/forms/d/e/1FAIpQLSdagbhutWCwhnFpWNNuGhkcSsnRV5aEC_aA5z-cc7rCDXOYXw/viewform',
              '_blank'
            )
          }
        >
          Sign Up for Classes
        </Button>
      </div>
    </main>
  </div>
);

export default AboutPage;
