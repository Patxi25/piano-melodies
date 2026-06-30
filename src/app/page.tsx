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
          Personalized, in-home piano lessons in Miami. Adaptive, bilingual
          instruction rooted in music therapy -- for children of all ages and
          abilities.
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

    {/* Section 1: Our Lessons */}
    <div className={styles.sectionsContainer}>
      <ContentSection
        title="Our Lessons"
        description={[
          "Our lessons are more than piano practice. Through music, we nurture confidence, focus, creativity, and self-expression, skills that children carry with them long after the lesson ends.",
          "With our adaptive approach and strong foundation in music therapy principles, we design lessons that are playful, flexible, and meaningful. Children on the autism spectrum, those with ADHD, speech delays, other developmental or learning differences, and neurotypical students all thrive in an environment built on encouragement, patience, and joy.",
        ]}
        imageSrc="/images/teaching/group_picture_1.png"
        imageAlt="Piano Melodies Recital Group"
        imagePosition="left"
      />
    </div>

    {/* Our Commitment - accent band */}
    <div className={styles.commitmentBand}>
      <div className={styles.sectionContainer}>
        <ContentSection
          title="Our Commitment"
          description={[
            <p className={styles.bodyText}>
              We are committed to keeping music education within reach for every
              family. That is why Piano Melodies proudly accepts{" "}
              <a
                href="https://www.stepupforstudents.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inlineLink}
              >
                Step up for Students
              </a>{" "}
              scholarships, opening the door for more children to fall in love
              with music.
            </p>,
          ]}
          imageSrc="/images/teaching/begona_teaching_7.png"
          imageAlt="Begona teaching piano"
          imagePosition="right"
        />
      </div>
    </div>

    {/* Testimonials */}
    <div className={styles.sectionContainer}>
      <div className={styles.reviewsSection}>
        <h2 className={styles.sectionHeading}>What Families are Saying</h2>
        <div className={styles.reviewsGrid}>
          <Review
            imageSrc="/images/students/student_7.png"
            imageAlt="Student 7"
            reviewText="Miss Begoña is truly an exceptional piano teacher! Her professionalism, and deep passion for music shine through in every lesson. She has a wonderful way with kids, making learning both fun and engaging while fostering a love for music. Her patience and encouragement create a supportive environment where student feel confidetn and excited to progress."
            reviewerName="Rashelle"
          />
          <Review
            imageSrc="/images/students/student_5.png"
            imageAlt="Student 5"
            reviewText="For two and a half years, Ms. Begoña has been teaching my boys piano, and they are thriving under her guidance! She is supportive, knowledgeable, and makes learning enjoyable for them. She strikes the perfect balance between kindness and discipline. We absolutely adore her!"
            reviewerName="Erika"
          />
          <Review
            imageSrc="/images/students/student_1.png"
            imageAlt="Parent Adreienne"
            reviewText="Begoña is amazing! She has been working with my son for three years, since he was three years old, and with my daughter for one year, since she was two. The kids love her, and so do I! She is patient, understanding, and truly tailors each lesson to the individual child, meeting them where they are. I have referred multiple people to her—including myself! Give her a try; you won’t be disappointed!"
            reviewerName="Adreienne"
          />
          <Review
            imageSrc="/images/students/nicole_teaching.png"
            imageAlt="Ms. Nicole"
            reviewText="My time at Piano Melodies has been a fulfilling and amazing experience. The environment is supportive, and one feels valued as a teacher. The focus and values of the company are what makes each students’ experience a great one. One of the best aspects of working here is the fast, and easy communication with the team. I am thankful to be a part of a team in which students can learn to express themselves through music."
            reviewerName="Ms. Nicole"
          />
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
