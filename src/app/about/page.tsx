import styles from "./styles.module.css";
import ContentSection from "../components/content-section";

const AboutPage = () => (
  <div className={styles.aboutPage}>
    <div className={styles.pageBanner}>
      <h1>About Piano Melodies Studio</h1>
      <p>Our story, mission, and the teachers who make it happen.</p>
    </div>

    <main className={styles.content}>
      <ContentSection
        title="Who We Are"
        description={[
          "Piano Melodies Studio is a team of passionate, classically trained piano teachers dedicated to inspiring a lifelong love of music. We believe every child deserves the opportunity to experience the joy of music. We specialize in working with both neurotypical and neurodivergent children and young adults, welcoming students as young as 3 years old.",
          "We believe music should be an adventure that every child can enjoy, regardless of their learning style, ability, or challenges. Our lessons are personalized, engaging, and playful, combining strong musical foundations with a supportive approach that helps every student build confidence, creativity, and a genuine love for the piano.",
        ]}
        imageSrc="/images/recitals/teachers_group.png"
        imageAlt="Begoña and Fellow Teachers"
        imagePosition="right"
      />

      <div className={styles.accentBand}>
        <ContentSection
          title="Our Mission"
          description={[
            "At Piano Melodies, our mission is to make piano lessons fun, engaging, and enriching for every child by celebrating individuality, inspiring confidence, and nurturing a lifelong love of music. Through personalized, high-quality instruction, we empower each student to develop their musical abilities, express themselves creatively, and reach their full potential.",
            "We envision a community where all children, regardless of their abilities or challenges, have the opportunity to grow, thrive, and experience the joy, confidence, and connection that music brings.",
          ]}
          imageSrc="/images/recitals/student_teacher_10.png"
          imageAlt="Begoña Teaching Piano"
          imagePosition="left"
        />
      </div>

      <ContentSection
        title="Meet the Founder"
        description={[
          "Begoña Alberdi is a Board-Certified Music Therapist and founder of Piano Melodies LLC. She earned her Bachelor's Degree in Music Therapy with a Minor in Psychology from the University of Miami in 2022. After completing her music therapy internship, she pursued a Master's Degree in Psychology with a specialization in Early Childhood Intervention in Spain, graduating in 2023.",
          "Since her time at the University of Miami, Begoña has been teaching piano throughout the community and, in January 2024, established Piano Melodies LLC. With over five years of teaching experience, she has worked with students across a wide range of abilities, including those on the autism spectrum, students with ADHD, speech delays, anxiety, and neurotypical learners.",
          "Drawing on her background in music therapy, Begoña uses a therapeutic and individualized approach to teaching. She is dedicated to creating accessible and meaningful music opportunities for children with high support needs, carefully adapting her methods to match each student’s strengths, challenges, and learning style. By integrating therapeutic strategies with piano instruction, she ensures that every child can experience not only musical growth, but also confidence, joy, and connection through music.",
        ]}
        imageSrc="/images/portraits/begona_portrait.png"
        imageAlt="Begoña Portrait"
        imagePosition="right"
      />

      {/* Employee 1 Section */}
      <div className={styles.accentBand}>
        <ContentSection
          title="Meet Nicole"
          description={[
            "Nicole Hidalgo began studying piano at the age of six at Texas Christian University School of Music. She later joined the Frost Preparatory Program, where she trained for 10 years. In her final year there, she volunteered as a Group Piano Teacher Assistant, gaining valuable experience working with young students.",
            "Nicole has since taught private piano lessons to children across Miami and continues to work with the Frost Preparatory Program. She currently assists and leads in the Suzuki for Tots Program and also teaches individual piano lessons.",
            "Alongside her love for music and teaching, Nicole is pursuing a degree in Nutritional Science and plans to continue her studies in Nursing.",
          ]}
          imageSrc="/images/portraits/nicole_portrait.jpeg"
          imageAlt="Nicole Portrait"
          imagePosition="left"
        />
      </div>

      {/* Employee 2 Section */}
      <ContentSection
        title="Meet Maria"
        description={[
          "Maria Karla Molina Hernandez is a flutist and pianist from Camagüey, Cuba, now based in Miami. She began studying music at age 8 and has performed with youth orchestras, bands, choirs, and chamber ensembles.",
          "After moving to the U.S., she joined the Musicall Youth Orchestra of Miami and performed at the 2024 Summa Cum Laude Festival in Austria, where her ensemble won 1st place. While there, she also took master classes with faculty from the University of Music and Performing Arts in Vienna.",
          "Maria is currently pursuing a Music Performance degree (Flute & Piano) at Florida International University. With several years of teaching experience, she brings dedication and care to every student — sharing her love for both music education and music therapy.",
        ]}
        imageSrc="/images/portraits/maria_portrait.png"
        imageAlt="Maria Portrait"
        imagePosition="right"
      />

      {/* Employee 3 Section */}
      <div className={styles.accentBand}>
        <ContentSection
          title="Meet Gabriela"
          description={[
            "Gabriela Timofte is a professional violinist, pianist, and educator. With extensive experience performing internationally as a soloist, chamber musician, and orchestral violinist, she has had the privilege of collaborating with renowned conductors and esteemed ensembles. In addition to her performance career, she is deeply passionate about music education and has over 8 years of experience. She has taught students ranging from young beginners to graduate-level musicians, providing both private instruction and ensemble coaching.",
            "Gabriela has also worked with students on the spectrum, thoughtfully adapting her teaching approach to support a wide range of learning styles and needs. She is committed to fostering an inclusive and encouraging environment where every student can thrive. Her experience as a Graduate Assistant at FIU further strengthened her ability to mentor students in violin technique, piano, musical interpretation, and performance preparation.",
          ]}
          imageSrc="/images/portraits/gabriela_portrait.png"
          imageAlt="Gabriela Portrait"
          imagePosition="left"
        />
      </div>

      {/* Employee 4 Section */}
      <ContentSection
        title="Meet Leidy"
        description={[
          "Leidy Laura is a passionate and dedicated music educator and performer with over eight years of experience teaching students of all ages and skill levels. She holds a Bachelor’s degree in Music Performance from the University of Art in Havana, as well as a Master’s degree in Musical Education and Musical Performance from the Conservatory of Liceu in Barcelona.",
          "Her goal is to inspire a lifelong love of music while fostering creativity, discipline, and confidence in her students. Skilled in teaching violin, viola, cello, piano, music theory, and ensemble performance, Leidy adapts her teaching methods to meet the unique needs of each student.",
          "With a background in both classical music and contemporary styles, she strives to make learning music engaging and accessible. Leidy is committed to creating an inclusive and supportive learning environment where students can thrive artistically and personally. Whether preparing students for performances, exams, or simply cultivating their musical interests, she brings enthusiasm, expertise, and a deep love for music to every lesson.",
        ]}
        imageSrc="/images/portraits/leidy_portrait.png"
        imageAlt="Leidy Portrait"
        imagePosition="right"
      />
    </main>
  </div>
);

export default AboutPage;
