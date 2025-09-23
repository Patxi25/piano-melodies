"use client";

import Head from "next/head";
import styles from "./styles.module.css";
import Button from "./components/button";
import Review from "./components/review";
import ContentSection from "./components/content-section";

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

    <main className={styles.mainContent}>
      <div className={styles.textContent}>
        {/* <h1 className={styles.title}>Welcome to Piano Melodies Studio</h1> */}
        {/* Section 1 */}
        <ContentSection
          title="Where Every Melody Sparks Joy"
          description={[
            "At Piano Melodies, we believe every child deserves the chance to experience the joy of music. Our mission is to make piano lessons fun, engaging, and enriching for all children, regardless of a diagnosis, challenge, or ability.",
            "We proudly serve the Miami community, offering personalized, in-home piano lessons in both English and Spanish. Whether your child is a complete beginner, already exploring their musical talents, or learning in unique ways, we meet them where they are and help them shine at their own pace.",
          ]}
          imageSrc="/images/logos/logo.png"
          imageAlt="Piano Melodies Studio Logo"
          imagePosition="right"
        />

        {/* Section 2 */}
        <ContentSection
          title="Our Lessons"
          description={[
            "Our lessons are more than piano practice. Through music, we nurture confidence, focus, creativity, and self-expression, skills that children carry with them long after the lesson ends.",
            "With our adaptive approach and strong foundation in music therapy principles, we design lessons that are playful, flexible, and meaningful. Children on the autism spectrum, those with ADHD, speech delays, other developmental or learning differences, and neurotypical students all thrive in an environment built on encouragement, patience, and joy.",
            <Button
              key="join-home"
              variant="cta"
              onClick={() =>
                window.open("https://forms.gle/R1aSvUebtKH8XTbn9", "_blank")
              }
            >
              Join Our Classes
            </Button>,
          ]}
          imageSrc="/images/teaching/group_picture_1.png"
          imageAlt="Piano Melodies Recital Group"
          imagePosition="left"
        />

        {/* Section 3 */}
        <ContentSection
          title="Our Commitment"
          description={[
            <p className={styles.description} key="commitment">
              We’re also committed to keeping music education within reach for
              families. That’s why Piano Melodies proudly accepts{" "}
              <a
                href="https://www.stepupforstudents.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Step Up For Students
              </a>{" "}
              scholarships, opening the door for more children to fall in love
              with music.
            </p>,
          ]}
          imageSrc="/images/teaching/begona_teaching_7.png"
          imageAlt="Piano Melodies Recital Group"
          imagePosition="right"
        />
      </div>

      {/* Reviews Section */}
      <section className={styles.reviewsSection}>
        <h1>Our Testimonials</h1>
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
          imageSrc="/images/teaching/nicole_teaching.png"
          imageAlt="Nicole"
          reviewText="My time at Piano Melodies has been a fulfilling and amazing experience. 
              The environment is supportive, and one feels valued as a teacher. The focus and 
              values of the company are what makes each students’ experience a great one. One 
              of the best aspects of working here is the fast, and easy communication with the 
              team. I am thankful to be a part of a team in which students can learn to express 
              themselves through music."
          reviewerName="Ms. Nicole"
          imageWidth={400}
          imageHeight={267}
        />
      </section>
    </main>
  </div>
);

export default HomePage;
