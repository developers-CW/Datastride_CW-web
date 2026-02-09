import styles from "./styles.module.scss";
import Image from "next/image";

const CRMIntegration = () => {
  return (
    <section className={styles.crmIntegrationSection} id="how-sia-works">
      <div className={`container ${styles.container}`}>
        <div className={styles.contentWrapper}>
          <p className={styles.subtitle}>
          Designed for Data-Driven Teams Across Functions
          </p>
          <h2 className={styles.title}>
          Unified Enterprise Data for Smarter Decisions
          </h2>
          <p className={styles.description}>
            Sia brings together analytics, model development, workflow automation, and data engineering into a single, cohesive platform. It supports both business and technical teams across the full decision lifecycle.
          </p>
        </div>
        <Image
          src="/images/crm-integrations2.webp"
          alt="CRM Integration"
          width={1000}
          height={1000}
          className={styles.integrationImage}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default CRMIntegration;
