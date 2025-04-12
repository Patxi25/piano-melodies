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
          "Begoña Alberdi is a Board-Certified Music Therapist. She graduated from the University of Miami in 2022 with a Bachelor Degree in Music Therapy and a Minor in Psychology.",
          "After completing her music therapy internship, she went to Spain to pursue her Master's Degree in Psychology specializing in Early Child Intervention and graduated in 2023. Since her time at the University of Miami, she has been teaching piano around the community. In January 2024 she founded Piano Melodies LLC.",
          "With five years of teaching experience, Begoña works with students on the autism spectrum, ADHD, and neurotypical students.",
        ]}
        imageSrc="/images/portraits/begona_portrait_3.jpg"
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
        title="Meet Valeria"
        description={[
          "Valeria Peñaranda is a versatile Bolivian artist based in Miami, FL. As a singer-songwriter, pianist, producer, arranger, and sound engineer, she has captivated audiences on international stages such as the Suena Caracas Latin American Music Festival, where she shared the spotlight with icons like Café Tacuba and Cultura Profética, the International Folk Festival, and the Latin American VIVE Music Festival at the prestigious Berklee Performance Center. In Bolivia, she has left her mark at Festijazz and Festiblues, and recently showcased her talent alongside Argentine legend Leo Dan at Miami’s renowned James Knight Center.",
          "She is a recipient of scholarships from Berklee College of Music and the Frost School of Music, Valeria combines academic excellence with artistic brilliance. In 2024, she was recognized as one of 10 women selected for the Latin GRAMMY Leading Ladies of Entertainment Mentorship Program, where she received guidance from influential leaders in the Latin music industry.",
          "Since 2017, Valeria has also been a dedicated educator, teaching voice and piano to students of all ages. She specializes in contemporary vocal styles like rock, pop, soul, musical theater, and Latin, while her piano instruction follows a classical approach rooted in conservatory standards.",
          "She further honed her teaching expertise as a Teaching Assistant at the Frost School of Music, focusing on Music Industry and Media Scoring & Production. With years of performance, production, and teaching expertise, she brings a dynamic and well-rounded approach to helping students excel in their musical journey.",
        ]}
        imageSrc="/images/portraits/valeria_portrait.png"
        imageAlt="Valeria Portrait"
        imagePosition="left"
      />
    </main>
  </div>
);

export default AboutPage;
