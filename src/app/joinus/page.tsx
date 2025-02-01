"use client";

import styles from "./styles.module.css";
import Button from "../components/button";

const JoinUsPage: React.FC = () => (
  <div className={styles.joinUsPage}>
    <div className={styles.header}>
      <h1>Join Us</h1>
      <p></p>
    </div>

    {/* Join Us Form */}
    <div className={styles.sectionContainer}>
      <h2>Interested in a joining our team?</h2>
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
