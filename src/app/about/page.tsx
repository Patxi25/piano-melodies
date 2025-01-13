import Image from "next/image";
import styles from "./styles.module.css";
import ContentSection from "../components/content-section";

const AboutPage = () => (
  <div className={styles.aboutPage}>
    <div className={styles.header}>
      <h1>About Piano Melodies Studio</h1>
    </div>
    <main className={styles.content}>

      {/* Studio Section */}
      <ContentSection
          title="Piano Melodies"
          description={[
            "Piano Melodies is a piano studio working with both neurotypical and neurodivergent children and young adults, starting as young as 2 years of age.",
            "With a focus on making music a fun and engaging activity for any student, Piano Melodies is committed to providing a supportive space, regardless of any disability, challenge, or setback.",
          ]}
          imageSrc="/images/begona_teaching.png"
          imageAlt="Begoña Teaching Piano"
          imagePosition="right"
        />

        {/* Founder Section */}
        <ContentSection
          title="Meet the Founder"
          description={[
            "Begoña Alberdi is a Board-Certified Music Therapist. She graduated from the University of Miami in 2022 with a Bachelor Degree in Music Therapy and a Minor in Psychology.",
            "After completing her music therapy internship, she went to Spain to pursue her Master's Degree in Psychology specializing in Early Child Intervention and graduated in 2023. Since her time at the University of Miami, she has been teaching piano around the community. In January 2024 she founded Piano Melodies LLC.",
            "With five years of teaching experience, Begoña works with students on the autism spectrum, ADHD, and neurotypical students.",
          ]}
          imageSrc="/images/begona_portrait.png"
          imageAlt="Begoña Portrait"
          imagePosition="left"
        />

    </main>
  </div>
);

export default AboutPage;
