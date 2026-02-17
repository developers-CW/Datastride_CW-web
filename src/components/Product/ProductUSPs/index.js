import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./styles.module.scss";
import FeaturesSectionMobile from "./FeaturesSectionMobile";
import Image from "next/image";

const ProductUSPs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      number: "01",
      title: "One Platform, End To End",
      description: "Sia connects data ingestion, preparation, analysis, and reporting into a single flow, so teams don’t have to stitch together separate tools or wait on manual handoffs.",
      hasDescription: true,
    },
    {
      id: 2,
      number: "02",
      title: "Faster Answers, Less Effort",
      description: "Ask questions in natural language and get clear, conversational insights instead of digging through static dashboards, backlogs, and SQL.",
      hasDescription: true,
    },
    {
      id: 3,
      number: "03",
      title: "Automation That Scales",
      description: "Turn your best analyses into reusable workflows that refresh data, run checks, and deliver outputs automatically on schedules or events.",
      hasDescription: true,
    },
    {
      id: 4,
      number: "04",
      title: "Enterprise-Ready by Design",
      description: "Run Sia in your own environment with role-based access, audit trails, and controls that keep sensitive data and real-time operations governed.",
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
    <section className={styles.ProductUSPs}>
      <div className={`container ${styles.container}`}>
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={styles.topTag}
        >
          Why Choose Sia
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.mainHeading}
        >
         Sia Goes Beyond Dashboard-Only Analytics Tools
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.description}
        >
         Sia connects your data sources, runs analysis through AI agents, builds models, and deploys workflows, without switching tools or waiting on specialists. All through chat.
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
              {/* <div className={styles.numberBadge}>
                <Image src={`/images/number-badge-${card.id}.svg`} alt="Number Badge" width={48} height={48} className={styles.numberBadgeImage} />
              </div> */}
              
              {/* Number Badge */}
              <div className={styles.numberBadge}>
                <span className={styles.number}>{card.number}</span>
              </div>

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

export default ProductUSPs;

