"use client";

import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.css";
import Button from "./components/button";
import Review from "./components/review";

const HomePage = () => (
  <div className={styles.homePage}>
    <Head>
      <title>Welcome to Piano Melodies Studio</title>
      <meta
        title="Piano Melodies Studio"
        name="description"
        content="Piano Melodies Studio offers personalized piano lessons in Miami, specializing in adaptive lessons with a music therapy approach for children of all ages and abilities."
      />
      <link rel="icon" href="/public/images/logos/logo_cropped.jpg" />
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
            We proudly serve the Miami community, offering in-home lessons in
            both English and Spanish for children of all ages, skill levels, and
            backgrounds. Our lessons are designed to go beyond musical
            knowledge, fostering growth that extends into students’ daily lives.
          </p>
          <p className={styles.description}>
            We specialize in adaptive piano lessons with a music therapy
            approach, creating a supportive and engaging environment for
            children on the autism spectrum, those with ADHD, and neurotypical
            students alike. At Piano Melodies, we believe everyone deserves the
            chance to fall in love with music in a fun, inclusive space.
          </p>
          <p className={styles.description}>
            Piano Melodies proudly accepts scholarships from{" "}
            <a
              href="https://www.stepupforstudents.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Step Up For Students
            </a>
            , making high-quality music education more accessible. We believe
            every child deserves the opportunity to fall in love with music in a
            fun, inclusive space.
          </p>
          <p className={styles.description}>
            Each year, we organize a recital to highlight the achievements and
            progress of our students.
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
            src="/images/logos/logo.png"
            alt="Piano Melodies Studio Logo"
            width={500}
            height={500}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </header>

    <main className={styles.mainContent}>
      {/* Reviews Section */}
      <section className={styles.reviewsSection}>
        <h2>What Parents Say About Us</h2>
        <Review
          imageSrc="/images/students/student_7.png"
          imageAlt="Parent 1"
          reviewText="Miss Begoña is truly an exceptional piano teacher! Her professionalism and deep passion for 
            music shine through in every lesson. She has a wonderful way with kids, making learning both fun and 
            engaging while fostering a love for music. Her patience and encouragement create a supportive environment 
            where students feel confident and excited to progress. 
            Beyond her incredible teaching skills, Miss Begona goes the extra mile to make her students feel 
            special—she even brings delicious baked goods during the holidays, adding a warm and personal touch to her 
            lessons. If you’re looking for a dedicated, talented, and caring piano teacher, 
            Miss Begona is the absolute best!"
          reviewerName="Rashelle"
          imageWidth={200}
          imageHeight={250}
        />
        <Review
          imageSrc="/images/students/student_5.png"
          imageAlt="Parent 2"
          reviewText="For two and a half years, Ms. Begoña has been teaching my boys
              piano, and they are thriving under her guidance! She is
              supportive, knowledgeable, and makes learning enjoyable for them.
              She strikes the perfect balance between kindness and discipline.
              We absolutely adore her!"
          reviewerName="Erika"
          imageWidth={200}
          imageHeight={250}
        />
        <Review
          imageSrc="/images/students/student_1.png"
          imageAlt="Parent 3"
          reviewText="Begoña is amazing! She has been working with my son for three
              years, since he was three years old, and with my daughter for one
              year, since she was two. The kids love her, and so do I! She is
              patient, understanding, and truly tailors each lesson to the
              individual child, meeting them where they are. I have referred
              multiple people to her—including myself! Give her a try; you won’t
              be disappointed!"
          reviewerName="Adrienne"
          imageWidth={200}
          imageHeight={300}
        />
        <Review
          imageSrc="/images/portraits/nicole_portrait.jpeg"
          imageAlt="Nicole"
          reviewText="My time at Piano Melodies has been a fulfilling and amazing experience. 
              The environment is supportive, and one feels valued as a teacher. The focus and 
              values of the company are what makes each students’ experience a great one. One 
              of the best aspects of working here is the fast, and easy communication with the 
              team. I am thankful to be a part of a team in which students can learn to express 
              themselves through music."
          reviewerName="Ms. Nicole"
          imageWidth={200}
          imageHeight={267}
        />
      </section>
    </main>
  </div>
);

export default HomePage;
