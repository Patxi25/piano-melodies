import Image from "next/image";
import styles from "./styles.module.css";

const photos = [
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
  {
    src: "/images/recitals/student_16.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_17.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_18.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_19.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_20.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_21.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_22.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_23.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_24.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_25.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_26.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_27.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_28.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_29.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_30.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_31.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_32.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_33.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_34.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_35.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_36.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_37.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_38.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_39.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_40.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_41.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_42.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_43.png",
    alt: "Student at Recital",
  },
  {
    src: "/images/recitals/student_44.png",
    alt: "Student at Recital",
  },
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
    src: "/images/recitals/student_teacher_6.png",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_7.png",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_8.png",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_9.png",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_10.png",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_11.png",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_12.png",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_13.png",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_14.png",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_15.png",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_16.png",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_17.png",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/student_teacher_18.png",
    alt: "Student and Teacher at Recital",
  },
  {
    src: "/images/recitals/group_2.png",
    alt: "Group Picture at Recital",
  },
  {
    src: "/images/recitals/group_3.png",
    alt: "Group Picture at Recital",
  },
  {
    src: "/images/recitals/group_4.png",
    alt: "Group Picture at Recital",
  },
  {
    src: "/images/recitals/teachers_group.png",
    alt: "Group Picture at Recital",
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
