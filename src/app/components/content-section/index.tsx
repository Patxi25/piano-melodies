"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

interface ContentSectionProps {
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={styles.section}
      style={{
        flexDirection: isMobile
          ? "column"
          : imagePosition === "left"
          ? "row-reverse"
          : "row", // Dynamically set layout
      }}
    >
      <div className={styles.text}>
        <h2>{title}</h2>
        {isMobile && (
          <div className={styles.imageContainer}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={500}
              className={styles.image}
            />
          </div>
        )}
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {!isMobile && (
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={500}
            className={styles.image}
          />
        </div>
      )}
    </div>
  );
};

export default ContentSection;
