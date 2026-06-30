"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/joinus", label: "Join Us" },
];

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoTitleContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/logos/logo_cropped.jpg"
            alt="Piano Melodies Logo"
            width={48}
            height={48}
          />
        </div>
        <h1 className={styles.title}>Piano Melodies Studio</h1>
      </Link>
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
          {navLinks.map(({ href, label }) => (
            <li key={href} className={styles.navItem}>
              <Link
                href={href}
                className={
                  pathname == href ? styles.navLinkActive : styles.navLink
                }
              >
                {label}
              </Link>
            </li>
          ))}
          <li className={styles.navItem}>
            <a
              href="https://forms.gle/R1aSvUebtKH8XTbn9"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bookNowBtn}
            >
              Book Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
