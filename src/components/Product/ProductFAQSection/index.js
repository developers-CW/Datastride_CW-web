import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./styles.module.scss";
import PrimaryButton from "../../Shared/PrimaryButton";
import Image from "next/image";

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(1); // Second item expanded by default

  const faqItems = [
    {
      id: 1,
      title: "What is AI data analytics?",
      content:
        "AI data analytics uses machine learning, automation, and natural language to turn raw data into decisions. An AI analytics platform like Sia connects sources, runs AI‑driven data analytics, and surfaces intelligent analytics solutions that go beyond dashboards to recommendations and workflows for data‑driven decision intelligence.",
    },
    {
      id: 2,
      title: "Which AI platform is best for analyzing data?",
      content:
        "The best AI analytics platform should connect to your stack, support enterprise AI analytics, and automate the full journey from data prep to deployment. Sia is built exactly for this, combining AI-powered business analytics, predictive analytics, and workflow automation in one place instead of stitching together separate tools.",
    },
    {
      id: 3,
      title: "What is 4 big data analytics?",
      content:
        "The four types are descriptive, diagnostic, predictive, and prescriptive analytics. A modern AI analytics platform like Sia supports all four: from describing what happened to running predictive analytics and recommending next actions. That lets enterprises move from static reports to a continuous, AI-driven data analytics loop.",
    },
    {
      id: 4,
      title: "What skills are needed for data analytics?",
      content:
        "Core skills include data cleaning, SQL, statistics, and domain understanding. With an AI analytics platform like Sia, non‑technical users can work through chat and guided flows, while experts still leverage machine learning analytics software capabilities—code, models, and pipelines—inside one advanced analytics platform.",
    },
    {
      id: 5,
      title: "How is Sia different from typical AI analytics software?",
      content:
        "Most AI analytics software focuses on reports or models in isolation. Sia is an automated analytics platform that uses coordinated AI agents to handle ingestion, transformation, predictive analytics, monitoring, and deployment. Instead of point tools, you get an end‑to‑end, data-driven decision intelligence platform for teams across the enterprise.",
    },
    {
      id: 6,
      title: "How Sia compares to traditional data analytics tools?",
      content:
        "Traditional tools rely on manual SQL, static dashboards, and separate ML stacks. Sia’s AI analytics platform adds chat-based access, real-time AI analytics, and orchestrated workflows in one environment. It reduces handoffs between teams, cuts infrastructure sprawl, and turns analytics into continuously running, AI-powered business analytics.",
    },
    {
      id: 7,
      title: "Will AI replace data analyst?",
      content:
        "AI won’t replace good analysts, but analysts using an AI analytics platform will replace those who don’t. Sia automates repetitive work—joins, summaries, monitoring—so people focus on framing questions, validating AI-driven data analytics, and driving decisions. It augments human judgment instead of trying to remove it.",
    },
    {
      id: 8,
      title: "What is the best AI tool for analytics?",
      content:
        "The “best” AI tool depends on your stack and team maturity. If you need an enterprise AI analytics solution that unifies data engineering, models, and BI, Sia stands out as an AI analytics platform that functions as a predictive analytics platform, automated analytics platform, and deployment layer in one.",
    },
  ];

  const toggleItem = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentWrapper}>
          {/* Left Section - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.leftContent}
          >
            {/* Tagline */}
            <div className={styles.tagline}>
            FAQs

            </div>

            {/* Headline */}
            <h2 className={styles.headline}>
            Answers for teams evaluating Sia

            </h2>

            {/* Description */}
            <p className={styles.description}>
            These FAQs cover what Sia is, how it works, and all common questions people have about our AI analytics platform.
            </p>

            {/* CTA Button */}
            {/* <PrimaryButton
              label="Request a Demo"
              className={styles.ctaButton}
              onClick={() => console.log("FAQ CTA clicked")}
              arrowBackground="#0E0E0E"
              arrowColor="#FFF"
            /> */}
          </motion.div>

          {/* Right Section - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.rightContent}
          >
            <div className={styles.accordion}>
              {faqItems.map((item, index) => {
                const isExpanded = expandedIndex === index;
                return (
                  <div key={item.id} className={styles.accordionItem}>
                    <button
                      onClick={() => toggleItem(index)}
                      className={`${styles.accordionHeader} ${
                        isExpanded ? styles.expanded : ""
                      }`}
                    >
                      <span className={styles.accordionTitle}>{item.title}</span>
                      <motion.span
                        animate={{ rotate: isExpanded ? 0 : 90 }}
                        transition={{ duration: 0.3 }}
                        className={`${styles.accordionIcon} ${
                          isExpanded ? styles.iconExpanded : ""
                        }`}
                      >
                        <Image src="/images/up-chevron.svg" alt="Arrow Down" width={20} height={20} className={styles.accordionIconImage} />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className={styles.accordionContent}
                        >
                          <p className={styles.accordionText}>{item.content}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

