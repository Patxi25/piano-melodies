"use client";

import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.css";
import Button from "./components/button";

const HomePage = () => (
  <div className={styles.homePage}>
    <Head>
      <title>Welcome to Piano Melodies Studio</title>
      <meta
        name="description"
        content="Do you want a personal piano class? Call us today!"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Welcome to Piano Melodies Studio</h1>
          <p className={styles.description}>
            At Piano Melodies, our mission is to make piano lessons accessible,
            enjoyable, and enriching for every child—regardless of diagnosis,
            challenge, or ability.
          </p>
          <p className={styles.description}>
            We proudly serve the Miami community, working with children of all
            ages, skill levels, and backgrounds. Our lessons are designed to go
            beyond musical knowledge, fostering growth that extends into
            students’ daily lives.
          </p>
          <p className={styles.description}>
            We specialize in adaptive piano lessons with a music therapy
            approach, creating a supportive and engaging environment for
            children on the autism spectrum, those with ADHD, and neurotypical
            students alike. At Piano Melodies, we believe everyone deserves the
            chance to fall in love with music in a fun, inclusive space.
          </p>
          <Button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSehNapZOV3DjqfkuqMJQ9fqAjjG6MiNUI4ksfdlDmWWEdfNBA/viewform",
                "_blank"
              )
            }
          >
            Join Our Classes
          </Button>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/images/logo.PNG"
            alt="Piano Melodies Studio Logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </header>

    <main className={styles.mainContent}>
      {/* Reviews Section */}
      <section className={styles.reviewsSection}>
        <h2>What Parents Say About Us</h2>
        <div className={styles.review}>
          <div className={styles.reviewImageContainer}>
            <Image
              src="/images/student_1.png"
              alt="Parent 1"
              width={200}
              height={300}
              className={styles.reviewImage}
            />
          </div>
          <div className={styles.reviewContent}>
            <p>
              "Begoña is amazing! She has been working with my son for three
              years, since he was three years old, and with my daughter for one
              year, since she was two. The kids love her, and so do I! She is
              patient, understanding, and truly tailors each lesson to the
              individual child, meeting them where they are. I have referred
              multiple people to her—including myself! Give her a try; you won’t
              be disappointed!"
            </p>
            <footer>- Parent Name</footer>
          </div>
        </div>
        <div className={styles.review}>
          <div className={styles.reviewImageContainer}>
            <Image
              src="/images/student_2.png"
              alt="Parent 2"
              width={200}
              height={200}
              className={styles.reviewImage}
            />
          </div>
          <div className={styles.reviewContent}>
            <p>
              "The adaptive piano lessons have made a huge difference for my
              child with ADHD. The supportive environment has helped them
              thrive."
            </p>
            <footer>- Parent Name</footer>
          </div>
        </div>
        <div className={styles.review}>
          <div className={styles.reviewImageContainer}>
            <Image
              src="/images/student_3.png"
              alt="Parent 3"
              width={200}
              height={200}
              className={styles.reviewImage}
            />
          </div>
          <div className={styles.reviewContent}>
            <p>
              "I highly recommend Piano Melodies to any parent looking for
              quality music education for their children."
            </p>
            <footer>- Parent Name</footer>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default HomePage;
