import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";

const AboutValuesSection = () => {
  const values = [
    {
      title: "Simplicity at Scale",
      description: "We design analytics that stay simple to use, even as data, teams, and complexity grow.",
      icon: "/images/fly.svg",
      // icon: "fly",
      bgColor: "mint",
    },
    {
      title: "Intelligent Automation",
      description: "We automate repetitive work with agentic AI while keeping humans in control of outcomes.",
      icon: "/images/tri.svg",
      // icon: "tri",
      bgColor: "lavender",
    },
    {
      title: "Security by Design",
      description: "Enterprise data demands strong governance, secure deployment, and compliance-first thinking.",
      icon: "/images/blob.svg",
      // icon: "blob",
      bgColor: "mint",
    },
    {
      title: "Outcome-Focused Thinking",
      description: "We measure success by real business impact, not just technical delivery.",
      icon: "/images/fly.svg",
      // icon: "fly",
      bgColor: "lavender",
    },
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
                    width={42}
                    height={48}
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
