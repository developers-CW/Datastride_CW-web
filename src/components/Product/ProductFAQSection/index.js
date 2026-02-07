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
      title: "Is Sia just a BI tool or a dashboard platform?",
      content:
        "Neither. Sia is an end-to-end data analytics platform. It handles data ingestion, transformation, analysis, modeling, automation, and deployment. Dashboards and reports are outputs, not the core function. Teams choose Sia when they need the full data lifecycle managed in one environment, not just visualization.",
    },
    {
      id: 2,
      title: "How is Sia different from tools like Tableau, Power BI, or Looker?",
      content:
        "Those tools focus on visualization and reporting. Sia starts earlier, at data ingestion, and goes further, to model deployment and workflow automation. If you need a dashboard on top of clean data, traditional BI works fine. If you need to connect raw sources, transform data, build models, and deploy them as APIs, Sia handles that without additional tooling.",
    },
    {
      id: 3,
      title: "Can non-technical users actually use Sia without SQL or coding?",
      content:
        "Yes, Sia is architected for rapid onboarding and intuitive usability. Teams can connect data sources quickly, start exploring insights right away, and adopt the platform with minimal training.",
    },
    {
      id: 4,
      title: "What types of analysis can Sia run?",
      content:
        "Sia supports descriptive analysis (what happened), diagnostic analysis (why it happened), predictive analysis (what will happen), and prescriptive analysis (what to do about it). Specific capabilities include forecasting, anomaly detection, trend analysis, impact analysis, and performance monitoring.",
    },
    {
      id: 5,
      title: "How secure is SIA? Does the LLM leak data?",
      content:
        "Sia is built with enterprise-grade privacy controls, including secure isolation, encrypted processing, and stateless LLM workflows. That means your data isn’t used to train the model and it doesn’t leave your secure environment. Sia also aligns with SOC 2 and ISO 27001 standards, with controls designed to protect security, availability, and confidentiality.",
    },
    {
      id: 6,
      title: "What data sources does Sia connect to?",
      content:
        "Sia integrates with AWS, Azure, Snowflake, GCP, Oracle, SQL databases, streaming systems, and file storage. Pre-built connectors handle authentication and schema detection. Custom connectors are available for proprietary systems. In the free tier, Sia supports only PostgreSQL and MySQL.",
    },
    {
      id: 7,
      title: "Can we deploy Sia on-premise?",
      content:
        "Yes. Sia supports cloud deployment (Sia-managed or your cloud account), hybrid deployment, and fully on-premise installation. Your data residency and compliance requirements determine the right model.",
    },
    {
      id: 8,
      title: "How long does implementation typically take?",
      content:
        "Initial setup, connecting data sources and running first analyses, takes days. Full production deployment with custom workflows, models, and integrations typically takes 4-8 weeks depending on complexity. Sia's services team can accelerate this through guided implementation.",
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
            Answers for teams evaluating Datastride

            </h2>

            {/* Description */}
            <p className={styles.description}>
            These FAQs cover what Sia replaces, how it works, and what you can automate with our enterprise business intelligence platform.
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

