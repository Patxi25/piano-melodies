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
        imageSrc="/images/teaching/begona_teaching_2.jpeg"
        imageAlt="Begoña Teaching Piano"
        imagePosition="right"
      />

      {/* Founder Section */}
      <ContentSection
        title="Meet the Founder"
        description={[
          "Begoña Alberdi is a Board-Certified Music Therapist and founder of Piano Melodies LLC. She earned her Bachelor's Degree in Music Therapy with a Minor in Psychology from the University of Miami in 2022. After completing her music therapy internship, she pursued a Master's Degree in Psychology with a specialization in Early Childhood Intervention in Spain, graduating in 2023.",
          "Since her time at the University of Miami, Begoña has been teaching piano throughout the community and, in January 2024, established Piano Melodies LLC. With over five years of teaching experience, she has worked with students across a wide range of abilities, including those on the autism spectrum, students with ADHD, speech delays, anxiety, and neurotypical learners.",
          "Drawing on her background in music therapy, Begoña uses a therapeutic and individualized approach to teaching. She is dedicated to creating accessible and meaningful music opportunities for children with high support needs, carefully adapting her methods to match each student’s strengths, challenges, and learning style. By integrating therapeutic strategies with piano instruction, she ensures that every child can experience not only musical growth, but also confidence, joy, and connection through music.",
        ]}
        imageSrc="/images/portraits/begona_portrait_4.png"
        imageAlt="Begoña Portrait"
        imagePosition="left"
      />

      {/* Employee 1 Section */}
      <ContentSection
        title="Meet Nicole"
        description={[
          "Nicole Hidalgo began learning piano at the age of six at Texas Christian University School of Music. She later became a part of the Frost Preparatory Program, where she was involved for 10 years. During her last year at the Frost Prep Program, she had the opportunity to volunteer as a Group Piano teacher assistant.",
          "Nicole has worked as a private piano teacher for children throughout Miami and she is currently working with the Frost Preparatory Program, specifically leading and assisting the Suzuki for Tots Program and teaching piano lessons.",
          "In addition to her musical passion, she is currently pursuing a degree in Nutritional Science and will go on to pursue another degree in Nursing.",
        ]}
        imageSrc="/images/portraits/nicole_portrait.jpeg"
        imageAlt="Nicole Portrait"
        imagePosition="right"
      />

      {/* Employee 2 Section */}
      <ContentSection
        title="Meet Brenda"
        description={[
          "Born in Cuba, Brenda Lorenzo pursued undergraduate degrees in both piano and music theory at the National School of Music, majoring afterwards, with highest honors from the University of the Arts in Musicology. She has performed in various editions of the Contemporary Music Festival of Habana. ",
          "Whilst working at the Cuban Institute of Music, she advocated for social support of living composers. Additionally, has shared her expertise as a lecturer at the Latin American Studies Association (LASA)Congress in 2019. ",
          "Brenda served as faculty collaborative pianist at the National School of Music and the Conservatory Amadeo Roldan of Havana from 2018 to 2023. She was accepted into Lynn Conservatory of Music's Instrumental Collaborative Piano Program in the fall of 2023, under the tutelage of distinguished professor Lisa Leonard, where she held the Teaching Assistantship for Ear Training Studies. ",
          "She has been awarded the Special Jury Prize for Best Orchestral Realization in the 2023 and 2024 Lynn Concerto Competition, as well as First Prize at the John Olivera String Competition on Piano Performance 2024 and first alternate position for Lynn Chamber Competition 2024. Miss Lorenzo completed her Master degree in Piano Performance in 2025. She has participated in masterclasses by professors Norman Krieger, Pamela Ryan, Julian Schwarz and Marita Rodriguez. ",
        ]}
        imageSrc="/images/portraits/brenda_portrait.png"
        imageAlt="Brenda Portrait"
        imagePosition="left"
      />
    </main>
  </div>
);

export default AboutPage;
