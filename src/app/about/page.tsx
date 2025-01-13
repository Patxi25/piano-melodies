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
            "Begoña graduated from the University of Miami in 2022 with a double major in Music Therapy and Psychology. She went on to pursue her Psychology Master’s degree in Madrid, Spain, where she specialized in Early Child Intervention.",
            "Begoña believes that creating a fun and engaging space for students to learn in enhances a curious mind and encourages students to continue learning music.",
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
