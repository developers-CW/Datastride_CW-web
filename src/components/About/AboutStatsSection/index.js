import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const AboutStatsSection = () => {
  const stats = [
    {
      number: "35%",
      label: "Faster ROI",
      delay: 0.2,
    },
    {
      number: "6x",
      label: "Insight Velocity",
      delay: 0.3,
    },
    {
      number: "25+",
      label: "AI Agents",
      delay: 0.4,
    },
    {
      number: "4000+",
      label: "Hours Saved",
      delay: 0.5,
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={`container ${styles.container}`}>
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.mainHeading}
        >
          Accelerating Enterprise Decision Velocity
          {/* <span className={styles.highlight}>help of Database</span> */}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.description}
        >
          Datastride Analytics is an Al-native technology company focused on accelerating enterprise decision velocity. Through Sia, our unified decision intelligence platform, we enable organizations to move from fragmented data to decisive action, transforming Data to Decisions faster and simpler. By combining advanced Al with deep business insight, we eliminate decision bottlenecks, unify intelligence across teams, and deliver measurable enterprise impact.
        </motion.p>

        {/* Statistics Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className={styles.statItem}
            >
              <div className={`${styles.statNumber}`}>
                {stat.number}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;
