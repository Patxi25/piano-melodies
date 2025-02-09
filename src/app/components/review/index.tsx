import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

interface ReviewProps {
  imageSrc: string;
  imageAlt: string;
  reviewText: string;
  reviewerName: string;
  imageWidth: number;
  imageHeight: number;
}

const Review: React.FC<ReviewProps> = ({
  imageSrc,
  imageAlt,
  reviewText,
  reviewerName,
  imageWidth,
  imageHeight,
}) => (
  <div className={styles.review}>
    <div className={styles.reviewImageContainer}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
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
