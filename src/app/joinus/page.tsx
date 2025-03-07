"use client";

import styles from "./styles.module.css";
import Button from "../components/button";
import ContentSection from "../components/content-section";

const JoinUsPage: React.FC = () => (
  <div className={styles.joinUsPage}>
    <div className={styles.header}>
      <h1>Join Us</h1>
      <p>
        Become a part of our amazing team and help us make a difference through
        music.
      </p>
    </div>

    {/* Introduction Section */}
    <ContentSection
      title="About Our Team"
      description={[
        "At Piano Melodies, we are passionate about making piano lessons accessible and enjoyable for everyone. We are looking for dedicated individuals to join our team and help us achieve our mission.",
      ]}
      imageSrc="/images/teaching/begona_teaching_5.png"
      imageAlt="Begoña with Student"
      imagePosition="right"
    />

    {/* Introduction Section */}
    <ContentSection
      title="Employee Testimonial"
      description={[
        <>
          "My time at Piano Melodies has been a fulfilling and amazing
          experience. The environment is supportive, and one feels valued as a
          teacher. The focus and values of the company are what makes each
          students’ experience a great one. One of the best aspects of working
          here is the fast, and easy communication with the team. I am thankful
          to be a part of a team in which students can learn to express
          themselves through music."
          <br />- Ms. Nicole
        </>,
      ]}
      imageSrc="/images/students/student_6.png"
      imageAlt="Begoña Teaching Piano"
      imagePosition="left"
    />

    {/* Benefits Section */}
    <div className={styles.sectionContainer}>
      <h2>Why Join Us?</h2>
      <ul>
        <li>Opportunity to make a positive impact</li>
        <li>Collaborative and supportive work environment</li>
        <li>Professional growth and development</li>
        <li>Flexible working hours</li>
      </ul>
    </div>

    {/* FAQ Section */}
    <div className={styles.sectionContainer}>
      <h2>Frequently Asked Questions</h2>
      <details>
        <summary>What qualifications do I need to join the team?</summary>
        <p>
          We are looking for individuals with a passion for teaching music to
          children of all ages and abilities. Music Therapy Board Certification
          (MT-BC) is preferred, and previous experience in music education is a
          plus.
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

    {/* Join Us Form */}
    <div className={styles.sectionContainer}>
      <h2>Interested in joining our team?</h2>
      <p>Fill out the form below and we’ll get back to you soon.</p>
      <div className={styles.sectionContainer}>
        <Button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdagbhutWCwhnFpWNNuGhkcSsnRV5aEC_aA5z-cc7rCDXOYXw/viewform?pli=1",
              "_blank"
            )
          }
        >
          Join Our Team
        </Button>
      </div>
    </div>
  </div>
);

export default JoinUsPage;
