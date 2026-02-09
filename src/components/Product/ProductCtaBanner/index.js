import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductCtaBanner = () => {
  const teamPhotos = [
    "/images/about-p-1.png",
    "/images/about-p-2.png",
    "/images/about-p-3.png",
    "/images/about-p-4.png",
    "/images/about-p-5.png",
    "/images/about-p-6.png",
  ];

  const router = useRouter();
  
  return (
    <section className={styles.ctaBannerSection}>
      <div className={`container ${styles.container}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.bannerCard}
        >
          {/* Team Photos */}
          <div className={styles.teamPhotos}>
            {teamPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                className={styles.photoWrapper}
              >
                <Image
                  src={photo}
                  alt={`Team member ${index + 1}`}
                  width={80}
                  height={80}
                  className={styles.teamPhoto}
                />
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.content}
          >
            <h2 className={styles.mainHeading}>
              {/* We're dedicated to <span className={styles.emphasize}>JUST</span> one thing<br />"your success." */}
              We Stay With You From Setup To Scale
            </h2>

            <p className={styles.description}>
              Get onboarding, use-case guidance, and ongoing optimization for your AI analytics platform. Our team helps you get faster outcomes from AI analytics software, without long handoffs.
            </p>

            <motion.button
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/contact-us")}
            >
              <span>Contact Us</span>
              <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16667M15.8337 10L10.0003 15.8333"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCtaBanner;
