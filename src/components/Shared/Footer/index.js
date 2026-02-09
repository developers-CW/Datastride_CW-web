import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./styles.module.scss";
import PrimaryButton from "../../Shared/PrimaryButton";
import Image from "next/image";
import { useRouter } from "next/router";

const Footer = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    ContactInfo: [
    {
      label: "Address: 104, 1st floor, Infantry Techno Park, Infantry Rd, Bengaluru, Karnataka 560001",
      href: null,
    },
    { label: "Phone: +91 91874 66014", href: "tel:+918431042564" },
    { label: "Email: info@datastride.ai", href: "mailto:info@datastride.ai" },
  ],
    Product: [
      { label: "Product Overview", href: "/product-overview" },
      { label: "Product Login", href: "https://sianalytics.ai/" },
      /*{ label: "Integrations", href: "#" },
      { label: "Download", href: "#" },
      { label: "Pricing", href: "#" },*/
    ],
    Company: [
      { label: "About Us", href: "/about-us" },
      /*{ label: "Latest Blog", href: "#" },
      { label: "Our Clients", href: "#" },
      { label: "Careers", href: "#" },*/
    ],
    /* Resources: [
      { label: "Blog", href: "#" },
      
    ], */
  };

  return (
    <footer className={styles.footer}>
      <Image src="/images/footer-color-grade.svg" alt="Footer Background" width={1000} height={1000} className={styles.footerBackgroundGradient} />
      <div className={`container ${styles.container}`}>
        {/* CTA Section - Top */}
          {router.pathname !== "/contact-us" && (
            <motion.section
              className={styles.ctaSection}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={styles.ctaContent}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className={styles.ctaBadge}>Get Started</span>

                <h2 className={styles.ctaHeading}>
                  Stop wasting time switching tools. Start making data-driven decisions.
                </h2>

                <p className={styles.ctaDescription}>
                  Connect your data sources. Let AI agents handle the grunt work. Deploy models and workflows that actually run in production.
                </p>

                <PrimaryButton
                  label="Request a Demo"
                  onClick={() => router.push("/contact-us")}
                  backgroundColor="#0C8CE9"
                  arrowColor="#0C8CE9"
                  className={styles.primaryCta}
                />
              </motion.div>
            </motion.section>
          )}


        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          <div className={styles.footerNavigation}>
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={styles.navColumn}
              >
                <h3 className={styles.navTitle}>{category}</h3>
                <ul className={styles.navList}>
                  {links.map((link, index) => (
                    <li key={index} className={styles.navItem}>
                      <a href={link.href} className={styles.navLink}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.newsletterSection}
          >
            <h3 className={styles.newsletterTitle}>Make Enterprise Data Finally Feel Simple!</h3>
            <p className={styles.newsletterDescription}>
              Datastride resolves the complexity of pipelines and models through an intuitive, agent‑driven experience your teams actually want to use.
            </p>
            
          </motion.div>
        </div> 

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.bottomText}>
            All Rights Reserved!
          </p>
          <div className={styles.bottomLinks}>
            <a href="/privacy-policy" className={styles.bottomLink}>
              Privacy Policy
            </a>
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.scrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

