"use client";

import styles from "./styles.module.css";
import Button from "../components/button";
import ContentSection from "../components/content-section";

const JoinUsPage: React.FC = () => (
  <div className={styles.joinUsPage}>
    <div className={styles.pageBanner}>
      <h1>Join Piano Melodies Studio</h1>
      <p>Help children discover the joy of music.</p>
    </div>

    <main className={styles.mainContent}>
      <ContentSection
        title="About Our Team"
        description={[
          "At Piano Melodies, our teachers share a passion for helping children grow through music. More than instructors, they are mentors who bring patience, creativity, and joy into every lesson.",
          "Our team believes that learning music should be fun, supportive, and meaningful. Lessons go beyond teaching notes and rhythm—they help children build confidence, focus, and life skills that extend far beyond the piano.",
          "We proudly work with both neurotypical and neurodiverse students, including children with autism, ADHD, speech delays, and other developmental or learning differences. Using an adaptive, child-centered teaching approach informed by therapeutic principles, our teachers create lessons that are flexible, engaging, and tailored to each student’s unique strengths.",
          "Every member of our team is committed to creating an environment where students feel encouraged, celebrated, and inspired to fall in love with music",
          <div key="why-join-us">
            <h3>Why Join Us?</h3>
            <ul>
              <li>
                <strong>Make a Positive Impact:</strong> Inspire children
                through music and help them build confidence, creativity, and
                life skills.
              </li>
              <li>
                <strong>Collaborative & Supportive Team:</strong> Work alongside
                a team that values encouragement, innovation, and shared
                success.
              </li>
              <li>
                <strong>Professional Growth & Development:</strong>{" "}
                Opportunities to enhance your teaching skills and explore
                adaptive and music therapy-based methods.
              </li>
              <li>
                <strong>Flexible Working Hours:</strong>
                Enjoy a schedule that fits your lifestyle while making a
                difference in students' lives.
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
        imageSrc="/images/recitals/teachers_group.png"
        imageAlt="Group Picture of Piano Melodies Teachers"
        imagePosition="right"
      />

      <ContentSection
        title="Employee Testimonial"
        description={[
          '"I really enjoy teaching at Piano Melodies. The work environment is so welcoming, and all of the teachers, students, and their families are very sweet and make the studio feel like a great community. One of my favorite parts of teaching here is getting to watch my students grow—not just as musicians, but as kind and wonderful people."',
          " - Maria Karla Molina Hernandez, Piano Melodies Teacher",
        ]}
        imageSrc="/images/teaching/maria_teaching_2.png"
        imageAlt="Maria Teaching Piano"
        imagePosition="left"
      />

      <ContentSection
        title="Employee Testimonial"
        description={[
          '"My time at Piano Melodies has been a fulfilling and amazing experience. The environment is supportive, and one feels valued as a teacher. The focus and values of the company are what makes each students’ experience a great one. One of the best aspects of working here is the fast, and easy communication with the team. I am thankful to be a part of a team in which students can learn to express themselves through music."',
          " - Nicole Hidalgo, Piano Melodies Teacher",
        ]}
        imageSrc="/images/recitals/student_teacher_9.png"
        imageAlt="Nicole Teaching Piano"
        imagePosition="right"
      />

      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>What qualifications do I need to join the team?</summary>
          <p>
            We are looking for passionate musicians who love teaching and
            working with children of all ages and abilities. Applicants should
            hold (or be currently pursuing) a Bachelor’s or Master’s degree in
            Music, Music Education, Piano Performance, or a related field.
          </p>
          <p>
            Previous experience in music education is highly valued. Music
            Therapy Board Certification (MT-BC) or a background in adaptive or
            special needs instruction is a plus, but not required.
          </p>
        </details>
        <details>
          <summary>What is the application process?</summary>
          <p>
            Fill out the form below, and we will get back to you with the next
            steps.
          </p>
          <Button
            key="join-team-btn"
            variant="cta"
            onClick={() =>
              window.open("https://forms.gle/43GvHfD6edjfpMS16", "_blank")
            }
          >
            Join Our Team
          </Button>
        </details>
      </div>
    </main>
  </div>
);

export default JoinUsPage;
