import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const ProductServicesSection = () => {
  const services = [
    {
      title: "Conversational Insights",
      description: "Ask questions in plain language. Get instant answers from any connected dataset.",
    },
    {
      title: "Automated Workflows",
      description: "Describe what you need. Sia builds interactive dashboards automatically.",
    },
    {
      title: "Predictive Analytics",
      description: "Run forecasting, anomaly detection, and trend analysis through guided workflows.",
    },
    {
      title: "Real-Time Data Monitoring",
      description: "Track KPIs as they update. Set alerts and act before problems escalate.",
    },
    {
      title: "Data Engineering at Scale",
      description: "Build ETL pipelines using 350+ Pandas and PySpark functions or custom code.",
    },
    {
      title: "Model Building and Deployment",
      description: "Train ML models, validate performance, and deploy via API. No separate MLOps needed.",
    },
    {
      title: "Workflow Automation",
      description: "Design automated workflows with scheduling, triggers, and instant API deployment.",
    },
    {
      title: "Version-Controlled Pipelines",
      description: "Track changes, roll back when needed, and collaborate without conflicts.",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={`container ${styles.container}`}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.sectionHeading}>
            Core Features Of The Ai Analytics Platform
          </h2>
          <p className={styles.sectionSubtitle}>
            Sia Analytics gives business users, analysts, and developers direct access to data either without technical dependencies, via a chat-based interface or with complete code-level control.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={styles.serviceCard}
            >
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <a href="#" className={styles.learnMoreLink}>
                <span>Learn more</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.arrowIcon}
                >
                  <path
                    d="M3.33301 8H12.6663M12.6663 8L7.99967 3.33333M12.6663 8L7.99967 12.6667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductServicesSection;
