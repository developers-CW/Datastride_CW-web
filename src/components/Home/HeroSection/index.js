import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import PrimaryButton from "../../Shared/PrimaryButton";
import SecondaryButton from "../../Shared/SecondaryButton";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className={styles.heroSection}>
      <Image
        src="/images/checkedBg.svg"
        alt="Hero Image"
        width={1000}
        height={1000}
        className={styles.checkedBg}
      />
      <Image
        src="/images/bg-hero-grade.svg"
        alt="Hero Image"
        width={1000}
        height={1000}
        className={styles.bgHeroGrade}
      />
      <div className={`container ${styles.container}`}>
        <div className={styles.heroContent}>
          {/* Left Side - Marketing Content */}
          <div className={styles.marketingContent}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.contentWrapper}
            >
              {/* Tagline */}
              <p className={styles.tagline}>
                Decision Intelligence for Data-Driven Organizations
              </p>

              {/* Main Headline */}
              <h1 className={styles.headline}>
                Data to Decisions. Faster & Simpler.
              </h1>

              {/* Description */}
              <p className={styles.description}>
                Connects and analyses your data using AI to turn it into actionable insights. Ask questions, build models, and deploy workflows through a conversational interface for business and data teams.
              </p>

              <div className={styles.statistics}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>35%</div>
                  <div className={styles.statLabel}>
                    Faster ROI</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>6x</div>
                  <div className={styles.statLabel}>
                    Insight Velocity
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>25+</div>
                  <div className={styles.statLabel}>
                    AI Agents
                  </div>
                </div>
              </div>
              {/* CTA Buttons */}
              <div className={styles.ctaButtons}>
                {/* <PrimaryButton
                  label="Request a Demo"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-section');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={styles.primaryButton}
                /> */}
                <SecondaryButton
                  label="Explore the Platform"
                  onClick={() => router.push("/contact-us")}
                  className={styles.secondaryButton}
                />
              </div>

              {/* Statistics */}

            </motion.div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className={styles.dashboardPreview}>
            <Image
              src="/images/hero-dashboard.png"
              alt="Dashboard Preview"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
