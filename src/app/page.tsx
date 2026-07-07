"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import Button from "./components/button";
import Review from "./components/review";
import ContentSection from "./components/content-section";

const HomePage = () => (
  <div className={styles.pageWrapper}>
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <h1 className={styles.heroTitle}>Where Every Melody Sparks Joy</h1>
        <p className={styles.heroSubtitle}>
          Personalized in-home piano lessons in Miami with adaptive, bilingual
          instruction designed for children of all ages and abilities.
        </p>
        <div className={styles.heroCtas}>
          <Button
            variant="cta"
            onClick={() =>
              window.open("https://forms.gle/R1aSvUebtKH8XTbn9", "_blank")
            }
          >
            Join Our Classes
          </Button>
          <Link href="/about" className={styles.ghostLink}>
            Meet Our Teachers
          </Link>
        </div>
      </div>
    </section>

    {/* Section 0: Piano Melodies */}
    <div className={styles.sectionContainer}>
      <ContentSection
        title="Piano Melodies Studio"
        description={[
          "At Piano Melodies, we believe every child deserves the chance to experience the joy of music. Our mission is to make piano lessons fun, engaging, and enriching for all children, regardless of a diagnosis, challenge, or ability. We proudly serve the Miami community, offering personalized, in-home piano lessons in both English and Spanish. Whether your child is a complete beginner, already exploring their musical talents, or learning in unique ways, we meet them where they are and help them shine at their own pace.",
        ]}
        imageSrc="/images/recitals/student_teacher_2.jpg"
        imageAlt="Piano Melodies Recital Group"
        imagePosition="left"
      />
    </div>

    {/* Section 1: Our Lessons */}
    <div className={styles.commitmentBand}>
      <div className={styles.sectionContainer}>
        <ContentSection
          title="Our Lessons"
          description={[
            "Our lessons are more than piano instruction. Through music, we nurture confidence, focus, creativity, and self-expression, skills that children carry with them long after the lesson ends.",
            "Inspired by music therapy principles and guided by an adaptive teaching approach, we create lessons that are engaging, flexible, and meaningful. Children on the autism spectrum, those with ADHD, speech delays, other developmental or learning differences, and neurotypical students all thrive in an environment built on encouragement, patience, and joy.",
            "We are also proud providers for the Step Up For Students scholarship program, helping eligible families use their scholarship benefits toward piano lessons.",
          ]}
          imageSrc="/images/teaching/teaching.png"
          imageAlt="Piano Melodies Recital Group"
          imagePosition="right"
        />
      </div>
    </div>

    {/* Section 2: Performance Opportunities */}
    <div className={styles.sectionContainer}>
      <ContentSection
        title="Performance Opportunities"
        description={[
          "Each year, our students have the opportunity to perform in our annual recital, celebrating their hard work and musical growth in front of family and friends. Students may also choose to participate in adjudicated piano events, where they receive valuable feedback from experienced piano educators. These experiences help build confidence, strengthen performance skills, and inspire a lifelong love of music.",
        ]}
        imageSrc="/images/recitals/student_3.jpg"
        imageAlt="Piano Melodies Performance Opportunities"
        imagePosition="right"
      />
    </div>

    {/* Section 3: Our Commitment */}
    <div className={styles.commitmentBand}>
      <div className={styles.sectionContainer}>
        <ContentSection
          title="Our Commitment"
          description={[
            "We are dedicated to meeting each child where they are, adapting our teaching to their individual learning style, and fostering steady progress in a positive and encouraging environment. Our teachers are reliable, prepared, and passionate about helping students build both musical skills and confidence.",
            "We also value clear communication and consistency, working closely with families to ensure each student feels supported, understood, and motivated throughout their musical journey",
          ]}
          imageSrc="/images/recitals/student_teacher_7.png"
          imageAlt="Begona teaching piano"
          imagePosition="left"
        />
      </div>
    </div>

    {/* Testimonials */}
    <div className={styles.sectionContainer}>
      <div className={styles.reviewsSection}>
        <h2 className={styles.sectionHeading}>What Families are Saying</h2>
        <div className={styles.reviewsGrid}>
          <Review
            imageSrc="/images/recitals/student_teacher_3.jpg"
            imageAlt="Student 7"
            reviewText="Miss Begoña is truly an exceptional piano teacher! Her professionalism, and deep passion for music shine through in every lesson. She has a wonderful way with kids, making learning both fun and engaging while fostering a love for music. Her patience and encouragement create a supportive environment where student feel confidetn and excited to progress."
            reviewerName="Rashelle"
          />
          <Review
            imageSrc="/images/recitals/student_teacher_6.png"
            imageAlt="Student 5"
            reviewText="For two and a half years, Ms. Begoña has been teaching my boys piano, and they are thriving under her guidance! She is supportive, knowledgeable, and makes learning enjoyable for them. She strikes the perfect balance between kindness and discipline. We absolutely adore her!"
            reviewerName="Erika"
          />
          <Review
            imageSrc="/images/recitals/student_teacher_1.jpg"
            imageAlt="Parent Adrienne"
            reviewText="Begoña is amazing! She has been working with my son for three years, since he was three years old, and with my daughter for one year, since she was two. The kids love her, and so do I! She is patient, understanding, and truly tailors each lesson to the individual child, meeting them where they are. I have referred multiple people to her—including myself! Give her a try; you won’t be disappointed!"
            reviewerName="Adrienne"
          />
          {/* <Review
            imageSrc="/images/teaching/maria_teaching_2.png"
            imageAlt="Maria teaching piano"
            reviewText="FILL ME OUT PLEASE"
            reviewerName="Maria Karla Molina Hernandez"
          /> */}
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
