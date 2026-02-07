import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const TopBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={styles.topBanner}
    >
      <div className={`container ${styles.container}`}>
        <p className={styles.bannerText}>
          Lorem ipsum dolor sit amet consectetur. Id turpis nullam eget sit ac
          lorem nisi tincidunt nec.
        </p>
      </div>
    </motion.section>
  );
};

export default TopBanner;

