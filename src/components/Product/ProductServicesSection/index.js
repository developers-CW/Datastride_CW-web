import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const ProductServicesSection = () => {
  const services = [
    {
      title: "Conversational Intelligence",
      description: "Ask questions and get instant decision-ready insights.",
      link: "",
    },
    {
      title: "Real-Time Monitoring",
      description: "Track KPIs live and act before issues escalate.",
      link: "",
    },
    {
      title: "Unified Data Foundation",
      description: "Unify and orchestrate enterprise data with governance.",
      link: "",
    },
    {
      title: "Model Deployment ",
      description: "Train and deploy ML models via API-first architecture.",
      link: "",
    },
    {
      title: "Workflow Automation",
      description: "Embed AI into operational workflows with instant execution.",
      link: "",
    },
    {
      title: "Version Control & Governance",
      description: "Manage changes and collaborate with full visibility.",
      link: "",
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
            Core Features Of The AI Analytics Platform
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
              <a href="/contact-us" className={styles.learnMoreLink}>
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
