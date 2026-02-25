import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./FeaturesSectionMobile.module.scss";
import Image from "next/image";


const FeaturesSectionMobile = ({ cards }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    adaptiveHeight: false,
  };

  return (
    <div className={styles.mobileCardsWrapper}>
      <Slider {...sliderSettings} className={styles.slider}>
        {cards.map((card) => (
          <div key={card.id} className={styles.slide}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`${styles.card} ${styles.expanded}`}
            >
              {/* Number Badge */}
              <div className={styles.numberBadge}>
                <Image src={`/images/number-badge-${card.id}.svg`} alt="Number Badge" width={48} height={48} className={styles.numberBadgeImage} />
              </div>

              {/* Number Badge 
              <div className={styles.numberBadge}>
                <span className={styles.number}>{card.number}</span>
              </div>
              */}

              {/* Title */}
              <h3 className={styles.cardTitle}>
                {card.title}
              </h3>

              {/* Description - Always visible in mobile */}
              <div className={styles.descriptionContainer}>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturesSectionMobile;
