"use client";

import React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  variant?: "default" | "cta" | "ghost";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className,
  disabled = false,
  variant = "default",
}) => {
  const variantClass =
    variant === "cta"
      ? styles.cta
      : variant === "ghost"
      ? styles.ghost
      : styles.button;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantClass} ${className || ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
