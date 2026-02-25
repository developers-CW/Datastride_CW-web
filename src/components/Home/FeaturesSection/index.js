import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./styles.module.scss";
import FeaturesSectionMobile from "./FeaturesSectionMobile";
import Image from "next/image";

const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      number: "01",
      title: "Telecommunications",
      description: "Unify network and customer data to fix quality issues faster, prototype new services quickly, and cut decision time by up to 70% with automated, scalable workflows.",
      hasDescription: true,
    },
    {
      id: 2,
      number: "02",
      title: "Banking & Financial Services",
      description: "Standardize fragmented banking data, boost AI confidence to 99%, and deliver faster, more accurate analytics while reducing dependence on large specialist teams.",
      hasDescription: true,
    },
    {
      id: 3,
      number: "03",
      title: "Automotive & Manufacturing",
      description: "Turn high‑volume testing and monitoring data into rapid R&D cycles, with automated analytics that improve model accuracy, shorten time‑to‑insight, and streamline end‑to‑end workflows.",
      hasDescription: true,
    },
    {
      id: 4,
      number: "04",
      title: "Retail & Services",
      description: "Handle changing demand and data quality issues with automated pipelines, faster project delivery, and data‑driven decisions that improve customer satisfaction and margins across channels.",
      hasDescription: true,
    },
  ];

  const statistics = [
    { value: "35%", label: "Faster ROI" },
    { value: "6x", label: "Insight Velocity" },
    { value: "25+", label: "AI Agents" },
    { value: "4000+", label: "Hours Saved" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className={styles.featuresSection}>
      <div className={`container ${styles.container}`}>
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={styles.topTag}
        >
          Proven Across Industries
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.mainHeading}
        >
         Different Industries. Common Challenges. One Platform.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.description}
        >
         Across industries, organizations face similar data and decision challenges. Sia applies cross-industry learnings to deliver a consistent, scalable approach to decision intelligence.
        </motion.h2>

        {/* Desktop Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.cardsGrid}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              animate={{
                flex: hoveredCard === null
                  ? 1
                  : hoveredCard === card.id
                    ? 1.2
                    : 0.5,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`${styles.card} ${hoveredCard === card.id ? styles.highlightedCard : ""
                } ${hoveredCard === card.id ? styles.expanded : ""}`}
            >
              {/* Number Badge */}
              <div className={styles.numberBadge}>
                <Image src={`/images/number-badge-${card.id}.svg`} alt="Number Badge" width={72} height={72} className={styles.numberBadgeImage} />
              </div>
              
              {/* Number Badge 
              <div className={styles.numberBadge}>
                <span className={styles.number}>{card.number}</span>
              </div>
              */}

              {/* Title */}
              <motion.h3
                className={styles.cardTitle}
                initial={false}
                animate={hoveredCard === card.id ? "expanded" : "collapsed"}
                variants={{
                  collapsed: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    }
                  },
                  expanded: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }
                }}
              >
                {card.title}
              </motion.h3>


              {/* Description - Shows on hover */}
              <motion.div
                initial={false}
                animate={{
                  opacity: hoveredCard === card.id ? 1 : 0,
                  y: hoveredCard === card.id ? 0 : 30,
                  height: hoveredCard === card.id ? "auto" : 0,
                }}
                transition={{
                  y: {
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  },
                  height: {
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  },
                  opacity: {
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: hoveredCard === card.id ? 0.4 : 0, // Fade in after Y animation completes
                  },
                }}
                className={styles.descriptionContainer}
              >
                <p className={styles.cardDescription}>{card.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Feature Cards Slider */}
        <FeaturesSectionMobile cards={cards} />

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.statisticsSection}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={styles.statItem}
            >
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.partnersSection}>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

