"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

interface ContentSectionProps {
  title: string;
  // Allow strings or React nodes (so callers can pass <a> links, <strong>, etc.)
  description: React.ReactNode | React.ReactNode[];
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
        {/* If description is an array, render each item. If it's a single node/string, render it directly. */}
        {Array.isArray(description) ? (
          description.map((paragraph, index) =>
            // If the item is a string, wrap in <p>. If it's a node (JSX), render as-is.
            typeof paragraph === "string" ? (
              <p key={index}>{paragraph}</p>
            ) : (
              <div key={index}>{paragraph}</div>
            )
          )
        ) : typeof description === "string" ? (
          <p>{description}</p>
        ) : (
          <div>{description}</div>
        )}
      </div>
      {!isMobile && (
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={800}
            className={styles.image}
          />
        </div>
      )}
    </div>
  );
};

export default ContentSection;
