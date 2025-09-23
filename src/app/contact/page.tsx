"use client";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./styles.module.css";
import Button from "../components/button";
import ContentSection from "../components/content-section";

const ContactPage: React.FC = () => (
  <div className={styles.contactPage}>
    <div className={styles.header}>
      <h1>Contact Piano Melodies Studio</h1>
    </div>

    <main className={styles.mainContent}>
      <ContentSection
        title="Scholarships and Bilingual Lessons"
        description={[
          "We proudly accept Step Up For Students scholarships. Our lessons are bilingual, offered in both English and Spanish, and we provide piano and voice instruction right in the comfort of your home (Miami-based).",
          <Button
            key="stepup-cta"
            variant="cta"
            onClick={() =>
              window.open("https://www.stepupforstudents.org", "_blank")
            }
          >
            Step Up For Students
          </Button>,
        ]}
        imageSrc="/images/students/student_4.png"
        imageAlt="Student 4"
        imagePosition="right"
      />

      <ContentSection
        title="Interested in a Class?"
        description={[
          "We'd love to hear from you! Feel free to reach out to us via email, phone, or the form below.",
          <Button
            key="join-contact"
            variant="cta"
            onClick={() =>
              window.open("https://forms.gle/R1aSvUebtKH8XTbn9", "_blank")
            }
          >
            Join Our Classes
          </Button>,
          <div key="contact-block">
            <div className={styles.sectionContainer}>
              <address className={styles.contactCard}>
                <div className={styles.contactItem}>
                  <strong>Email</strong>
                  <a href="mailto:pianomelodiesstudio@gmail.com">
                    pianomelodiesstudio@gmail.com
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <strong>Phone</strong>
                  <a href="tel:+17866516600">+1 (786) 651-6600</a>
                </div>
              </address>
            </div>

            <div className={styles.socialList} key="social-list">
              <a
                className={styles.socialLink}
                href="https://www.instagram.com/pianomelodies_studio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles.icon} />
                Instagram
              </a>

              <a
                className={styles.socialLink}
                href="https://www.facebook.com/p/Piano-Melodies-61567913116105/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className={styles.icon} />
                Facebook
              </a>

              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/company/piano-melodies-llc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className={styles.icon} />
                LinkedIn
              </a>
            </div>
          </div>,
        ]}
        imageSrc="/images/teaching/begona_teaching_3.png"
        imageAlt="Student 4"
        imagePosition="left"
      />
    </main>
  </div>
);

export default ContactPage;
