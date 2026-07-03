import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

interface ReviewProps {
  imageSrc: string;
  imageAlt: string;
  reviewText: string;
  reviewerName: string;
  imageWidth?: number;
  imageHeight?: number;
}

const Review: React.FC<ReviewProps> = ({
  imageSrc,
  imageAlt,
  reviewText,
  reviewerName,
}) => (
  <div className={styles.review}>
    <span className={styles.quote}>&ldquo;</span>
    <p className={styles.reviewText}>{reviewText}</p>
    <div className={styles.reviewFooter}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={250}
        height={250}
        className={styles.reviewImage}
      />
      <span className={styles.reviewerName}>{reviewerName}</span>
    </div>
  </div>
);

export default Review;
