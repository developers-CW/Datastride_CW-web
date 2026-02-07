import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";

const AboutWorkspaceSection = () => {
  const workspaceImages = [
    {
      src: "/images/workspace/workspace-1.jpg",
      alt: "Team collaboration",
      size: "large",
    },
    {
      src: "/images/workspace/workspace-2.jpg",
      alt: "Workspace desk setup",
      size: "medium",
    },
    {
      src: "/images/workspace/workspace-3.jpg",
      alt: "Developer working",
      size: "medium",
    },
    {
      src: "/images/workspace/workspace-4.jpg",
      alt: "Focus workspace",
      size: "medium",
    },
    {
      src: "/images/workspace/workspace-5.jpg",
      alt: "Creative workspace",
      size: "medium",
    },
    {
      src: "/images/workspace/workspace-6.jpg",
      alt: "Meeting space",
      size: "medium-tall",
    },
    {
      src: "/images/workspace/workspace-7.jpg",
      alt: "Team discussion",
      size: "large",
    },
  ];

  return (
    <section className={styles.workspaceSection}>
      <div className={`container ${styles.container}`}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.sectionHeading}>Our Workspace</h2>
          <p className={styles.sectionSubtitle}>Lorem ipsum dolor sit amet consectetur.</p>
        </motion.div>

        {/* Masonry Grid */}
        <div className={styles.masonryGrid}>
          {workspaceImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${styles.gridItem} ${styles[image.size]}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.workspaceImage}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWorkspaceSection;
