import Image from "next/image";
import styles from "./styles.module.css";

const photos = [
  {
    src: "/images/recitals/student_teacher_1.jpg",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_2.jpg",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_3.jpg",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_4.jpg",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_5.jpg",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/group_1.jpg",
    alt: "Group Picture at Recital",
  },
  {
    src: "/images/recitals/student_1.jpg",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_2.jpg",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_3.jpg",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_4.jpg",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_5.jpg",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_6.jpg",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_7.jpg",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_8.jpg",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_9.jpg",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_10.jpg",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_11.jpg",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_12.jpg",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_13.jpg",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_14.jpg",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_15.jpg",
    alt: "Student at Recital",
  },
];

const RecitalsPage = () => (
  <div className={styles.recitalsPage}>
    <div className={styles.pageBanner}>
      <h1>Our Recitals</h1>
      <p>Celebrating every student's musical journey.</p>
    </div>

    <main className={styles.mainContent}>
      <div className={styles.gallery}>
        {photos.map((photo, index) => (
          <div key={index} className={styles.photoWrapper}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={900}
              height={700}
              className={styles.photo}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default RecitalsPage;
