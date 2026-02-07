import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";
import PrimaryButton from "../../Shared/PrimaryButton";
import { useRouter } from "next/router";

const TrustSection = () => {
  const router = useRouter();
  
  const features = [
    {
      id: 1,
      icon: "/images/trust-1.svg",
      text: "Role-based access control",
    },
    {
      id: 2,
      icon: "/images/trust-2.svg",
      text: "Audit trails & activity logs",
    },
    {
      id: 3,
      icon: "/images/trust-3.svg",
      text: "Data Encryption (In Transit & At Rest)",
    },
    {
      id: 4,
      icon: "/images/trust-4.svg",
      text: "ISO 27001 & SOC 2 Certified",
    },
    {
      id: 6,
      icon: "/images/trust-6.svg",
      text: "Governance-ready workflows",
    },
    {
      id: 7,
      icon: "/images/trust-7.svg",
      text: "Data quality checks built-in",
    },
    {
      id: 8,
      icon: "/images/trust-8.svg",
      text: "Automated monitoring & alerts",
    },
    {
      id: 9,
      icon: "/images/trust-9.svg",
      text: "Secure data connectors",
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className={styles.trustSection}>
      <div className={styles.overlay1}></div>
      <div className={styles.overlay2}></div>
      <div className={`container ${styles.container}`}>
        {/* Shield Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.taglineText}
        >
          Enterprise-Ready
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.headline}
        >
          <span className={styles.headlineFirst}>Security and Governance Built into Every Layer
          </span>
          {/* <span className={styles.headlineSecond}> audit and manage</span> */}
        </motion.h2>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.featuresGrid}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={styles.featureCard}
            >
              {/* Icon Placeholder */}
              <div className={styles.iconContainer}>
                <Image
                  src={feature.icon}
                  alt={feature.text}
                  width={48}
                  height={48}
                />
              </div>

              {/* Text */}
              <p className={styles.featureText}>{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <PrimaryButton
          label="Request a Demo"
          onClick={() => router.push("/contact-us")}
          className={styles.primaryButton}
          backgroundColor="#0C8CE9"
          textColor="#FFFFFF"
          arrowColor="#021C2F"
        />
      </div>
    </section>
  );
};

export default TrustSection;
