import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";

const AboutValuesSection = () => {
  const values = [
    {
      title: "Impact That Matters",
      description: "We focus on business challenges and build meaningful solutions that create measurable impact for the organizations.",
      icon: "/images/impact-matters.svg",
      // icon: "/images/fly.svg",
      // icon: "fly",
      bgColor: "mint",
    },
    {
      title: "Progress Together",
      description: "Talent can emerge from anywhere. We invest in people, nurture their potential, and create an environment where individuals evolve alongside the company.",
      icon: "/images/progress-together.svg",
      // icon: "/images/tri.svg",
      // icon: "tri",
      bgColor: "lavender",
    },
    {
      title: "Diversity & Equity",
      description: "Diverse perspectives lead to stronger ideas and better outcomes. We cultivate an environment of equity, inclusion, and respect where everyone has the opportunity to contribute.",
      icon: "/images/diversity-equity.svg",
      // icon: "/images/blob.svg",
      // icon: "blob",
      bgColor: "mint",
    },
    {
      title: "Think Beyond",
      description: "We question assumptions and understand context to reframe problems and uncover better, more effective paths forward.",
      icon: "/images/think-beyond.svg",
      // icon: "/images/fly.svg",
      // icon: "fly",
      bgColor: "lavender",
    },
    /*
    {
      title: "Responsible AI",
      description: "We build AI systems that are transparent, guided, and designed to support human decision-making.",
      icon: "/images/tri.svg",
      // icon: "tri",
      bgColor: "mint",
    },
    {
      title: "Continuous Innovation",
      description: "We constantly evolve our platform to meet changing enterprise data and analytics needs.",
      icon: "/images/blob.svg",
      // icon: "blob",
      bgColor: "lavender",
    },
    */
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={`container ${styles.container}`}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.sectionHeading}>Our values</h2>
          <p className={styles.sectionSubtitle}>Principles that guide how we design Sia and work with enterprise customers.</p>
        </motion.div>

        {/* Values Grid */}
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${styles.valueCard} ${styles[value.bgColor]}`}
            >
              <div>
                <div className={styles.iconWrapper}>
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
              </div>
              <p className={styles.valueDescription}>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;
