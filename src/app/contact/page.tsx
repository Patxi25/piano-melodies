'use client';

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./styles.module.css";
import Button from "../components/button";

const ContactPage: React.FC = () => (
  <div className={styles.contactPage}>
    <div className={styles.header}>
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Feel free to reach out to us via email, phone, or the form below.</p>
    </div>

    {/* Contact Details */}
    <div className={styles.contactDetails}>
      <div>
        <h2>Email</h2>
        <p>
          <a href="mailto:pianomelodiesstudio@gmail.com">pianomelodiesstudio@gmail.com</a>
        </p>
      </div>
      <div>
        <h2>Phone</h2>
        <p>
          <a href="tel:+123456789">+1 (786) 651-6600</a>
        </p>
      </div>
    </div>

    {/* Contact Form */}
    <div className={styles.sectionContainer}>
      <h2>Interested in a Class?</h2>
      <p>Fill out the form below and we’ll get back to you soon.</p>
      <div className={styles.sectionContainer}>
      <Button
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSehNapZOV3DjqfkuqMJQ9fqAjjG6MiNUI4ksfdlDmWWEdfNBA/viewform', '_blank')}
        >
          Fill Out Inquiry Form
        </Button>
      </div>
    </div>

    {/* Social Media Links */}
    <div className={styles.sectionContainer}>
      <h2>Follow Us</h2>
      <p>
        <FaInstagram className={styles.icon} />
        <a href="https://www.instagram.com/pianomelodies_studio/" target="_blank" rel="noopener noreferrer">
        &nbsp;Instagram
        </a>
        </p>
      <p>
        <FaFacebook className={styles.icon} />
        <a href="https://www.facebook.com/p/Piano-Melodies-61567913116105/" target="_blank" rel="noopener noreferrer">
        &nbsp;Facebook
        </a>
      </p>
      <p>
        <FaLinkedin className={styles.icon} />
        <a href="https://www.linkedin.com/company/piano-melodies-llc/" target="_blank" rel="noopener noreferrer">
        &nbsp;LinkedIn
        </a>
      </p>
    </div>
  </div>
);

export default ContactPage;
