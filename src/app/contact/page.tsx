import { FaInstagram } from "react-icons/fa";
import styles from "./styles.module.css";

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
        {/* TODO: replace EMAIL HERE with the actual email address */}
          <a href="mailto:EMAIL HERE">EMAIL HERE</a>
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
    <div className={styles.formContainer}>
      <h2>Interested in a Class?</h2>
      <form className={styles.contactForm}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} placeholder="Tell us about your interest in piano classes" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>

    {/* Social Media Links */}
    <div className={styles.socialMedia}>
      <h2>Follow Us</h2>
      <p>
        <FaInstagram className={styles.icon} />
        <a href="https://www.instagram.com/pianomelodies_studio/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </p>
    </div>
  </div>
);

export default ContactPage;
