import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";
import PrimaryButton from "../../Shared/PrimaryButton";
import { useRouter } from "next/router";

const AboutHeroSection = () => {

  const router = useRouter();

  return (
    <section className={styles.aboutHeroSection}>
      <div className={styles.aboutHeroLayover}></div>
      <div className={`container ${styles.container}`}>
        {/* Top Content - Heading and Button */}
        <div className={styles.topContent}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.mainHeading}
          >
            Building the Enterprise Analytics Future With  Agentic AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.subtitle}
          >
            Most enterprises lose 70% of their analytics potential to manual work. We built Sia to reclaim that, turning data chaos into AI-driven decisions without the bottlenecks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ display: 'inline-block' }}
            className={styles.btnWrapper}
          >
          <PrimaryButton
            label="Explore Sia "
            arrowColor="#021C2F"
            onClick={() => router.push("/contact-us")}
            className={styles.primaryButton}
            />
          </motion.div>

          {/* <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.ctaButton}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore Careers</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.buttonIcon}
            >
              <path
                d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16667M15.8337 10L10.0003 15.8333"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button> */}
        </div>

        {/* Bento Cols */}
        <div className={styles.bentoFacts}>
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${styles.bentoCol}`}
            >
            <div className={styles.bentoPill}>Adaptive</div>
            <div className={styles.bentoImg}>
              <Image
                src="/images/about-us-adaptive.webp"
                alt="Adaptive"
                fill
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`${styles.bentoCol}`}
          >
            <div className={styles.bentoImg}>
              <Image
                src="/images/about-usecases.webp"
                alt="Adaptive"
                fill
              />
            </div>
            <div className={styles.bentoStat}>
              <div className={styles.bentoNum}>2500+</div>
              <div className={styles.bentoTitle}>Use Cases</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`${styles.bentoCol}`}
          >
            <div className={styles.bentoImg}>
              <Image
                src="/images/about-undstanding.webp"
                alt="Adaptive"
                fill
              />
            </div>
            <div className={styles.bentoPill}>Understanding</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`${styles.bentoCol}`}
          >
            <div className={`${styles.bentoStat} ${styles.bentoStatAlt}`}>
              <div className={styles.bentoNum}>15+</div>
              <div className={styles.bentoTitle}>Years of Experience</div>
            </div>
            <div className={styles.bentoImg}>
              <Image
                src="/images/about-exp.webp"
                alt="Adaptive"
                fill
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`${styles.bentoCol}`}
          >
            <div className={styles.bentoPill}>Communication</div>
            <div className={styles.bentoImg}>
              <Image
                src="/images/about-comm.webp"
                alt="Adaptive"
                fill
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={`${styles.bentoCol}`}
          >
            <div className={styles.bentoImg}>
              <Image
                src="/images/about-clients.webp"
                alt="Adaptive"
                fill
              />
            </div>
            <div className={styles.bentoStat}>
              <div className={styles.bentoNum}>96%</div>
              <div className={styles.bentoTitle}>Client Satisfaction</div>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid 
          <div className={styles.bentoGrid}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`${styles.gridItem} ${styles.item1}`}
            >
              <div className={styles.valueCard}>
                <span className={styles.valueText}>Adaptive</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`${styles.gridItem} ${styles.item2}`}
            >
              <Image
                src="/images/about-team-1.jpg"
                alt="Team collaboration"
                fill
                className={styles.gridImage}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`${styles.gridItem} ${styles.item3}`}
            >
              <Image
                src="/images/about-team-2.jpg"
                alt="Office environment"
                fill
                className={styles.gridImage}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className={`${styles.gridItem} ${styles.item4}`}
            >
              <div className={styles.statCard}>
                <div className={styles.statNumber}>2500+</div>
                <div className={styles.statLabel}>Lorem ipsum dolor sit ame</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className={`${styles.gridItem} ${styles.item5}`}
            >
              <div className={styles.valueCard}>
                <span className={styles.valueText}>Understanding</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className={`${styles.gridItem} ${styles.item6}`}
            >
              <div className={styles.statCard}>
                <div className={styles.statNumber}>52+</div>
                <div className={styles.statLabel}>Lorem ipsum dolor sit</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className={`${styles.gridItem} ${styles.item7}`}
            >
              <div className={styles.valueCard}>
                <span className={styles.valueText}>Compassion</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className={`${styles.gridItem} ${styles.item8}`}
            >
              <Image
                src="/images/about-team-3.jpg"
                alt="Team meeting"
                fill
                className={styles.gridImage}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className={`${styles.gridItem} ${styles.item9}`}
            >
              <Image
                src="/images/about-team-4.jpg"
                alt="Collaborative workspace"
                fill
                className={styles.gridImage}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className={`${styles.gridItem} ${styles.item10}`}
            >
              <Image
                src="/images/about-team-5.jpg"
                alt="Office space"
                fill
                className={styles.gridImage}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className={`${styles.gridItem} ${styles.item11}`}
            >
              <div className={styles.statCard}>
                <div className={styles.statNumber}>96%</div>
                <div className={styles.statLabel}>Lorem ipsum</div>
              </div>
            </motion.div>
          </div>
        */}

      </div>
    </section>
  );
};

export default AboutHeroSection;
