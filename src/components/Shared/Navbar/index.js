import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryButton from "../PrimaryButton";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "product-overview" },
    { name: "About Us", href: "about-us" },
    //{ name: "Blog", href: "blog-overview" },

    // { name: "Solutions", href: "#solutions" },
    // { name: "Resources", href: "#resources" },
    // { name: "About us", href: "#about" },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={styles.navbar}
    >
      <div className={`container ${styles.navContainer}`}>
        <a href="/" className={styles.logo}>
          <Image src="/images/SIALogo.svg" alt="Logo" width={100} height={100} />
        </a>
        {/* Navigation Links */}
        <ul className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <li key={index} className={styles.navItem}>
              <a href={link.href} className={`${styles.navLink} ${router.pathname === link.href ? styles.active : ""}`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className={styles.ctaButton}>
          <PrimaryButton arrowColor="#200B56" label="Contact Us" className={styles.contactButton} onClick={() => router.push("contact-us")} />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
          >
            {/* Close Button */}
            <button
              className={styles.mobileMenuClose}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link, index) => (
                <li key={index} className={styles.mobileNavItem}>
                  <a
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.mobileCta}>
              <PrimaryButton
                arrowColor="#200B56"
                label="Contact Us"
                className={styles.contactButton}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push("contact-us");
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
