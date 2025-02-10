"use client";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./styles.module.css";
import Button from "../components/button";
import ContentSection from "../components/content-section";

const ContactPage: React.FC = () => (
  <div className={styles.contactPage}>
    <div className={styles.header}>
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Feel free to reach out to us via email,
        phone, or the form below.
      </p>
    </div>

    {/* Contact Details */}
    <div className={styles.sectionContainer}>
      <h2>Email</h2>
      <p>
        <a href="mailto:pianomelodiesstudio@gmail.com">
          pianomelodiesstudio@gmail.com
        </a>
      </p>
      <h2>Phone</h2>
      <p>
        <a href="tel:+123456789">+1 (786) 651-6600</a>
      </p>
    </div>

    {/* Contact Form */}
    <ContentSection
      title="Interested in a Class?"
      description={[
        "We accept scholarships from Step Up For Students. Our classes are bilingual and can be conducted in English and Spanish. We offer piano and voice lessons in the convenience of your home (Miami-based).",
      ]}
      imageSrc="/images/students/student_4.png"
      imageAlt="Student 4"
      imagePosition="right"
    />
    <div className={styles.sectionContainer}>
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

    {/* Social Media Links */}
    <div className={styles.sectionContainer}>
      <h2>Follow Us</h2>
      <p>
        <FaInstagram className={styles.icon} />
        <a
          href="https://www.instagram.com/pianomelodies_studio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Instagram
        </a>
      </p>
      <p>
        <FaFacebook className={styles.icon} />
        <a
          href="https://www.facebook.com/p/Piano-Melodies-61567913116105/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Facebook
        </a>
      </p>
      <p>
        <FaLinkedin className={styles.icon} />
        <a
          href="https://www.linkedin.com/company/piano-melodies-llc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;LinkedIn
        </a>
      </p>
    </div>
  </div>
);

export default ContactPage;
