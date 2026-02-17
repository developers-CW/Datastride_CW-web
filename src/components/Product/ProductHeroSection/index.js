import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductHeroSection = () => {
  const brandLogos = [
    { name: "upGrad", logo: "/images/brands/upgrad.svg" },
    { name: "BCG", logo: "/images/brands/bcg.svg" },
    { name: "ICICI", logo: "/images/brands/icici.svg" },
    { name: "TATA", logo: "/images/brands/tata.svg" },
    { name: "redBus", logo: "/images/brands/redbus.svg" },
    { name: "HSBC", logo: "/images/brands/hsbc.svg" },
    { name: "Thomas Cook", logo: "/images/brands/thomas-cook.svg" },
    { name: "wazirx", logo: "/images/brands/wazirx.svg" },
  ];
  
  const router = useRouter();

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.container}`}>
        {/* Main Content */}
        <div className={styles.contentWrapper}>
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.mainHeading}
          >
            AI Analytics Platform That Turns Raw Data into Decisions
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.description}
          >
            Build on an AI analytics platform that connects your data, answers questions fast, and automates analysis end to end. Use AI analytics software to run real-time insights, predictive analytics, and reusable workflows without manual reporting.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/contact-us")}
          >
            <span>Request a Demo</span>
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

          {/*
          //Rating Badge 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.ratingBadge}
          >
            <Image src="/images/stars.svg" alt="Logo" width={20} height={20} />
            <span className={styles.ratingText}>
              Built for enterprise AI analytics and governed self-serve reporting
            </span>
          </motion.div>
          */}
        </div>

        {/* Trust Section */}
        
        {/*
        <div className={styles.trustSection}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.trustHeading}
          >
            Trusted by 3000+ Brands Globally
          </motion.h2>

          <div className={styles.brandsGrid}>
            {brandLogos.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={styles.brandLogo}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={40}
                  className={styles.logoImage}
                />
              </motion.div>
            ))}
          </div>
        </div>
        */}

      </div>
    </section>
  );
};

export default ProductHeroSection;
