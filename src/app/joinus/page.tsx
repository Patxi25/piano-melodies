"use client";

import styles from "./styles.module.css";
import Button from "../components/button";
import ContentSection from "../components/content-section";

const JoinUsPage: React.FC = () => (
  <div className={styles.joinUsPage}>
    <div className={styles.header}>
      <h1>Join Piano Melodies Studio</h1>
    </div>

    <main className={styles.mainContent}>
      <ContentSection
        title="About Our Team"
        description={[
          "At Piano Melodies, our teachers share a passion for helping children grow through music. More than just instructors, they are mentors who bring patience, creativity, and joy into every lesson.",
          "Our team believes that learning music should be fun, supportive, and meaningful. Lessons go beyond teaching notes and rhythms, they help children build confidence, focus, and life skills that extend into their daily lives.",
          "We proudly work with both neurotypical and neurodiverse students, including children with autism, ADHD, speech delays, and other developmental or learning differences. Using an adaptive teaching approach rooted in music therapy principles, our teachers make lessons flexible, engaging, and tailored to each child’s unique strengths.",
          "Every member of our team is committed to creating an environment where students feel encouraged, celebrated, and inspired to fall in love with music.",
          <div key="why-join-us">
            <h3>Why Join Us?</h3>
            <ul>
              <li>
                Make a Positive Impact: Inspire children through music and help
                them build confidence, creativity, and life skills.
              </li>
              <li>
                Collaborative & Supportive Team: Work alongside a team that
                values encouragement, innovation, and shared success.
              </li>
              <li>
                Professional Growth & Development: Opportunities to enhance your
                teaching skills and explore adaptive and music therapy-based
                methods.
              </li>
              <li>
                Flexible Working Hours: Enjoy a schedule that fits your
                lifestyle while making a difference in students’ lives.
              </li>
            </ul>
          </div>,
          <div key="join-team-block">
            <p>Fill out the form below and we’ll get back to you soon.</p>
            <div className={styles.sectionContainer}>
              <Button
                key="join-team-btn"
                variant="cta"
                onClick={() =>
                  window.open("https://forms.gle/43GvHfD6edjfpMS16", "_blank")
                }
              >
                Join Our Team
              </Button>
            </div>
          </div>,
        ]}
        imageSrc="/images/teaching/nicole_teaching_2.png"
        imageAlt="Begoña with Student"
        imagePosition="right"
      />

      <ContentSection
        title="Employee Testimonial"
        description={[
          "My time at Piano Melodies has been a fulfilling and amazing experience. The environment is supportive, and one feels valued as a teacher. The focus and values of the company are what makes each students’ experience a great one. One of the best aspects of working here is the fast, and easy communication with the team. I am thankful to be a part of a team in which students can learn to express themselves through music.",
        ]}
        imageSrc="/images/teaching/nicole_teaching_3.png"
        imageAlt="Begoña Teaching Piano"
        imagePosition="left"
      />

      {/* Benefits Section */}
      <div className={styles.sectionContainer}></div>

      {/* FAQ Section */}
      <div className={styles.sectionContainer}>
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>What qualifications do I need to join the team?</summary>
          <p>
            We are looking for individuals with a passion for teaching music to
            children of all ages and abilities. Music Therapy Board
            Certification (MT-BC) is preferred, and previous experience in music
            education is a plus.
          </p>
        </details>
        <details>
          <summary>What is the application process?</summary>
          <p>
            Fill out the form below, and we will get back to you with the next
            steps.
          </p>
        </details>
      </div>
    </main>
  </div>
);

export default JoinUsPage;
