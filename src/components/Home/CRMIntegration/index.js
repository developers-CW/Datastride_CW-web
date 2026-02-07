import styles from "./styles.module.scss";
import Image from "next/image";

const CRMIntegration = () => {
  return (
    <section className={styles.crmIntegrationSection} id="how-sia-works">
      <div className={`container ${styles.container}`}>
        <div className={styles.contentWrapper}>
          <p className={styles.subtitle}>
          Enterprise-Ready
          </p>
          <h2 className={styles.title}>
          Security and Governance Built into Every Layer
          </h2>
        </div>
        <Image
          src="/images/crm-integrations2.png"
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
