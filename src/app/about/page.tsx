import Image from "next/image";
import styles from "./styles.module.css";

const AboutPage = () => (
  <div className={styles.aboutPage}>
    <div className={styles.header}>
      <h1>About Piano Melodies Studio</h1>
    </div>
    <div className={styles.content}>
      {/* Founder Section */}
      <div className={styles.founderSection}>
        <div className={styles.text}>
          <h2>Meet the Founder</h2>
          <p>
            Begoña graduated from the University of Miami in 2022 with a double major in Music Therapy and Psychology. She went on to pursue her Psychology Master’s degree in Madrid, Spain, where she specialized in Early Child Intervention. 
          </p>
          <p>
            Begoña believes that creating a fun and engaging space for students to learn in enhances a curious mind and encourages students to continue learning music.
          </p>
          <p>
            With five years of teaching experience, Begoña works with students on the autism spectrum, ADHD, and neurotypical students.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/begona_portrait.png"
            alt="Begoña Portrait"
            width={300}
            height={400}
            className={styles.image}
          />
        </div>
      </div>

      {/* Studio Section */}
      <div className={styles.studioSection}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/begona_teaching.png"
            alt="Begoña Teaching Piano"
            width={400}
            height={500}
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          <h2>Piano Melodies</h2>
          <p>
            Piano Melodies is a piano studio working with both neurotypical and neurodivergent children and young adults, starting as young as 2 years of age. 
          </p>
          <p>
            With a focus on making music a fun and engaging activity for any student, Piano Melodies is committed to providing a supportive space, regardless of any disability, challenge, or setback.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
