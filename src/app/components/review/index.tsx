import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

interface ReviewProps {
  imageSrc: string;
  imageAlt: string;
  reviewText: string;
  reviewerName: string;
}

const Review: React.FC<ReviewProps> = ({
  imageSrc,
  imageAlt,
  reviewText,
  reviewerName,
}) => (
  <div className={styles.review}>
    <div className={styles.reviewImageContainer}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={150}
        height={150}
        className={styles.reviewImage}
      />
    </div>
    <div className={styles.reviewContent}>
      <p>{reviewText}</p>
      <footer>- {reviewerName}</footer>
    </div>
  </div>
);

export default Review;
