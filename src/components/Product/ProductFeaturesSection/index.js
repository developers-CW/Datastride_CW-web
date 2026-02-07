import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const ProductFeaturesSection = () => {
  const features = [
    {
      icon: "google",
      title: "One Platform, End To End",
      description:
        "Sia is an ai analytics platform that unifies ingestion, analysis, automation, and reporting in one workflow.",
    },
    {
      icon: "chart",
      title: "Faster Answers, Less Effort",
      description:
        "Use ai analytics software for ai powered business analytics with conversational insights and self-serve exploration.",
    },
    {
      icon: "search",
      title: "Automation That Scales",
      description:
        "Run repeatable pipelines in an automated analytics platform and standardize outcomes with reusable workflows.",
    },
    {
      icon: "growth",
      title: "Enterprise-Ready By Design",
      description:
        "Built for enterprise ai analytics with governance, controlled access, and real time ai analytics for operations.",
    },
  ];

  const stats = [
    { number: "40%", label: "Less data engineering effort" },
    { number: "50%", label: "Lower data processing & handling cost" },
    { number: "60%", label: "Faster time-to-insights" },
    { number: "80%", label: "Faster project deployment time" },
  ];

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "google":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
            <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
            <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
            <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
          </svg>
        );
      case "chart":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M6 42V18L16 8L26 18L42 2V26L32 36L22 26L6 42Z" fill="url(#gradient1)"/>
            <defs>
              <linearGradient id="gradient1" x1="6" y1="2" x2="42" y2="42" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF6B6B"/>
                <stop offset="1" stopColor="#FFA500"/>
              </linearGradient>
            </defs>
          </svg>
        );
      case "search":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="20" cy="20" r="14" stroke="#FF9500" strokeWidth="4" fill="none"/>
            <path d="M30 30L42 42" stroke="#FF9500" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="20" cy="20" r="8" fill="#FFB84D" opacity="0.3"/>
          </svg>
        );
      case "growth":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M12 36L12 24M24 36V16M36 36V8" stroke="#84cc16" strokeWidth="4" strokeLinecap="round"/>
            <path d="M12 36L12 24M24 36V16M36 36V8" stroke="#65a30d" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="24" r="3" fill="#84cc16"/>
            <circle cx="24" cy="16" r="3" fill="#84cc16"/>
            <circle cx="36" cy="8" r="3" fill="#84cc16"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.featuresSection}>
      <div className={`container ${styles.container}`}>
        {/* Top Section - Features */}
        <div className={styles.topSection}>
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.mainHeading}
          >
            How Sia Replaces Dashboard-Only Analytics Tools
          </motion.h2>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact us</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16667M15.8337 10L10.0003 15.8333"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>

          {/* Feature Cards */}
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={styles.featureCard}
              >
                <div className={styles.iconWrapper}>
                  {renderIcon(feature.icon)}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Impact Stats */}
        <div className={styles.impactSection}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.impactHeading}
          >
            {/* We are <span className={styles.proudText}>PROUD</span> of the impact we made */}
            We’re proud of the impact teams create with Sia
          </motion.h2>

          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.statItem}
              >
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeaturesSection;
