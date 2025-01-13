import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

interface ContentSectionProps {
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}) => {
  return (
    <div
      className={`${styles.section} ${
        imagePosition === "left" ? styles.reverse : ""
      }`}
    >
      <div className={styles.text}>
        <h2>{title}</h2>
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={500}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ContentSection;
