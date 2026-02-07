import { useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className={styles.videoSection}>
      <div className={`container ${styles.container}`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.heading}
        >
         How It Works
          {/* <span className={styles.highlight}>data analytics run itself</span>? */}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.videoContainer}
        >
          <video
            ref={videoRef}
            className={styles.video}
            onEnded={handleVideoEnd}
            controls={isPlaying}
          >
            <source src="/video/Sia.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={styles.playButton}
              onClick={handlePlayClick}
              aria-label="Play video"
            >
              <Image
                src="/images/play-btn.svg"
                alt="Play Video"
                width={80}
                height={80}
                className={styles.playIcon}
              />
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
