import styles from "./styles.module.scss";
import Image from "next/image";
import PrimaryButton from "../../Shared/PrimaryButton";

const FeatureCardsSection = () => {
  // Partner logos data
  const partnerLogos = [
    { id: 1, src: "/images/partner-1.png", alt: "Medium" },
    { id: 2, src: "/images/partner-2.png", alt: "Dropbox" },
    { id: 3, src: "/images/partner-3.png", alt: "HubSpot" },
    { id: 4, src: "/images/partner-4.png", alt: "Quantum Metric" },
    { id: 5, src: "/images/partner-5.png", alt: "Quora" },
    { id: 6, src: "/images/partner-1.png", alt: "Medium" },
    { id: 7, src: "/images/partner-2.png", alt: "Dropbox" },
    { id: 8, src: "/images/partner-3.png", alt: "HubSpot" },
    { id: 9, src: "/images/partner-4.png", alt: "Quantum Metric" },
    { id: 10, src: "/images/partner-5.png", alt: "Quora" },
  ];

  return (
    <section className={styles.featureCardsSection} id="product">
      <div className={`container ${styles.container}`}>
        <div className={styles.intro}>
          <p className={styles.kicker}>
            What Sia Brings Together
          </p>
          <h2 className={styles.heading}>
            From Data Ingestion to Decision Intelligence.
          </h2>
          <p className={styles.description}>
            Sia brings together analytics, model development, workflow automation, and data engineering into a single, cohesive platform. It supports both business and technical teams across the full decision lifecycle.
          </p>
        </div>
        <div className={styles.cardsGrid}>
          <article className={`${styles.card} ${styles.heroCard}`}>
            <div className={styles.primaryHeaderRow}>
              <div className={styles.primaryHeaderRowContent}>
                <p className={styles.heroTagline}>
                  BUSINESS SUITE
                </p>
                <div className={styles.heroIconContainer}>
                  <h3 className={styles.cardTitle}>
                    Analytics for teams that need answers, not SQL
                  </h3>
                </div>
              </div>
              <ul className={styles.checkList}>
                <li>
                  <Image
                    src="/images/check-white.svg"
                    alt="Check List Icon"
                    width={24}
                    height={24}
                  />
                  Scheduled insights across apps
                </li>
                <li>
                  <Image
                    src="/images/check-white.svg"
                    alt="Check List Icon"
                    width={24}
                    height={24}
                  />
                  Auto-generated dashboards
                </li>
                <li>
                  <Image
                    src="/images/check-white.svg"
                    alt="Check List Icon"
                    width={24}
                    height={24}
                  />
                  Chat-based data exploration
                </li>
              </ul>
              <Image
                src="/images/card-1-sideimage-1.png"
                alt="Hero Icon"
                width={200}
                height={200}
                className={styles.sideImageOne}
              />
              <Image
                src="/images/card-1-sideimage-2.png"
                alt="Hero Icon"
                width={200}
                height={200}
                className={styles.sideImageTwo}
              />
            </div>
          </article>


          <article className={`${styles.card} ${styles.tealCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <Image
                  src="/images/feature-2.svg"
                  alt="Hero Icon"
                  width={48}
                  height={48}
                  className={styles.cardIconImage}
                />
              </div>

              <h3 className={styles.cardTitle}>
                Data-Driven Analytics, Without The Complexity
              </h3>
            </div>
            <p className={styles.cardDescription}>
              Run forecasting, anomaly detection, and trend analysis through guided workflows. Sia handles the modeling; you focus on decisions.
            </p>
          </article>

          <article className={`${styles.card} ${styles.slimCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <Image
                  src="/images/feature-3.svg"
                  alt="Hero Icon"
                  width={48}
                  height={48}
                  className={styles.cardIconImage}
                />
              </div>

              <h3 className={styles.cardTitle}>Real-time monitoring for operations</h3>
            </div>

            <p className={styles.cardDescription}>
              Track KPIs, and business metrics as they happen. Set alerts for anomalies and error-proof the complete strategy. Act before problems escalate.
            </p>

          </article>

          <article className={`${styles.card} ${styles.miniCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <Image
                  src="/images/feature-4.svg"
                  alt="Hero Icon"
                  width={48}
                  height={48}
                  className={styles.cardIconImage}
                />
              </div>

              <h3 className={styles.cardTitle}>
                Workflow automation and API deployment
              </h3>
            </div>

            <p className={styles.cardDescription}>
              Design automated workflows with scheduling, alerts, and instant API deployment.
            </p>

          </article>

          <article className={`${styles.card} ${styles.miniCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <Image
                  src="/images/feature-5.svg"
                  alt="Hero Icon"
                  width={48}
                  height={48}
                  className={styles.cardIconImage}
                />
              </div>

              <h3 className={styles.cardTitle}>
                Model building, testing, and deployment
              </h3>
            </div>

            <p className={styles.cardDescription}>
              Train ML models, validate performance, and deploy via API, all within Sia. No separate MLOps stack required.
            </p>

          </article>

          <article
            className={`${styles.card} ${styles.heroCard} ${styles.largeInfoCard} `}
          >
            <div className={styles.primaryHeaderRow}>
              <div>
                <p className={styles.heroTagline}>DEVELOPER SUITE</p>
                <div className={styles.heroIconContainer}>

                  <h3 className={styles.cardTitle}>
                    Data engineering and transformation at scale
                  </h3>
                </div>
              </div>
              <ul className={styles.checkList}>
                <li>
                  <Image
                    src="/images/check-white.svg"
                    alt="Check List Icon"
                    width={24}
                    height={24}
                  />
                  No-code transformations
                </li>
                <li>
                  <Image
                    src="/images/check-white.svg"
                    alt="Check List Icon"
                    width={24}
                    height={24}
                  />
                  Custom code generation
                </li>
                <li>
                  <Image
                    src="/images/check-white.svg"
                    alt="Check List Icon"
                    width={24}
                    height={24}
                  />
                  Version-controlled pipelines
                </li>
              </ul>


            </div>
            <div className={styles.sideImageContainer}>

              <Image
                src="/images/card-6-sideimage-2.png"
                alt="Hero Icon"
                width={200}
                height={200}
                className={styles.sideImageSTwo}
              />

            </div>
          </article>
        </div>

        {/* Partner Section */}
        {/* <div className={styles.partnerSection}>
          <h2 className={styles.partnerText}>All the people we have worked with</h2>
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeContent}>
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div key={`${logo.id}-${index}`} className={styles.logoItem}>
                  <span className={styles.logoText}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={100}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FeatureCardsSection;
