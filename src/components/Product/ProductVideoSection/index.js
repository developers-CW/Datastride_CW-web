import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { useState } from "react";

const ProductVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Here you would typically trigger video playback
    console.log("Play video");
  };

  return (
    <section className={styles.videoSection}>
      <div className={`container ${styles.container}`}>
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.sectionHeading}
        >
          Ai Analytics Platform Workflow, End To End
        </motion.h2>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.videoContainer}
        >
          <div className={styles.videoWrapper}>
            {!isPlaying && (
              <motion.button
                className={styles.playButton}
                onClick={handlePlayClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.4 
                }}
              >
                <div className={styles.playIconWrapper}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.playIcon}
                  >
                    <path
                      d="M10.6667 8L21.3333 16L10.6667 24V8Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </motion.button>
            )}
            
            {/* Placeholder for actual video */}
            <div className={styles.videoPlaceholder}>
              {/* You can replace this with an actual video component or iframe */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductVideoSection;
