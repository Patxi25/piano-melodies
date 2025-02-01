"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname
import styles from "./styles.module.css";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null); // Ref for the navigation menu
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) // Check if the click is outside the nav
      ) {
        setMenuOpen(false); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the menu when the screen resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Close the menu on larger screens
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the menu when the pathname changes
  useEffect(() => {
    setMenuOpen(false); // Close the menu on route change (pathname change)
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.logoTitleContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo_naked.PNG"
            alt="Piano Melodies Logo"
            width={80}
            height={80}
          />
        </div>
        <h1 className={styles.title}>Piano Melodies Studio</h1>
      </div>
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className={styles.hamburgerBar}></span>
        <span className={styles.hamburgerBar}></span>
        <span className={styles.hamburgerBar}></span>
      </button>
      <nav
        ref={navRef} // Attach the ref to the nav element
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
      >
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About Us</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/joinus">Join Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
