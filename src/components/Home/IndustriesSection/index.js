import styles from "./styles.module.scss";
import Image from "next/image";

const IndustriesSection = () => {
  const industries = [
    {
      id: 1,
      icon: "/images/icon-telecom.svg",
      title: "Telecom",
      description:
        "Fix data quality, speed processing, unlock upsell from network data.",
    },
    {
      id: 2,
      icon: "/images/icon-bfsi.svg",
      title: "BFSI",
      description:
        "99% AI confidence, faster analytics, reduced specialist dependency.",
    },
    {
      id: 3,
      icon: "/images/icon-automotive.svg",
      title: "Automotive",
      description:
        "Month-over-month R&D efficiency gains across 60+ countries.",
    },
    {
      id: 4,
      icon: "/images/icon-healthcare.svg",
      title: "Healthcare",
      description:
        "Faster clinical insights for a multi-speciality hospital chain or pharma companies.",
    },
    {
      id: 5,
      icon: "/images/icon-tech-services.svg",
      title: "Tech Services",
      description:
        "Automated data pipelines at scale to cut project delivery timelines & costs.",
    },
    {
      id: 6,
      icon: "/images/icon-consulting.svg",
      title: "Consulting",
      description:
        "Unified interface reduced delivery costs for clients at global level including GCC.",
    },
    {
      id: 7,
      icon: "/images/icon-manufacturing.svg",
      title: "Manufacturing",
      description:
        "Scalable data workflows for testing, monitoring and simulations.",
    },
    {
      id: 8,
      icon: "/images/icon-energy.svg",
      title: "Energy & Utilities",
      description:
        "Scalable analytics for high-volume sensor and monitoring data for predictive analysis.",
    },
  ];

  const stats = [
    { id: 1, value: "40%", label: "Less data engineering effort" },
    { id: 2, value: "50%", label: "Lower processing costs" },
    { id: 3, value: "60%", label: "Faster time-to-insights" },
    { id: 4, value: "80%", label: "Faster deployment" },
  ];

  return (
    <section className={styles.industriesSection} id="industries">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <p className={styles.subtitle}>Proven Across Industries</p>
          <h2 className={styles.title}>
            Different Industries. Common Challenges. One Platform.
          </h2>
        </div>

        <div className={styles.industriesGrid}>
          {industries.map((industry) => (
            <article
              key={industry.id}
              className={styles.industryCard}
            >

              <Image
                src={industry.icon}
                alt={industry.title}
                width={32}
                height={32}
                className={styles.icon}
              />
              <div className={styles.industryContent}>
                <h3 className={styles.industryTitle}>{industry.title}</h3>
                <p className={styles.industryDescription}>
                  {industry.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.statsSection}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
