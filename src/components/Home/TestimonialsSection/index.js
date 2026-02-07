import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.scss";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "From static dashboards to live analytics workflow",
      description:
        "Sia helped us move from static dashboards to a live analytics workflow that our teams actually use. We now ask questions in plain language and get operational answers across all our data sources.",
      name: "VP Data and Analytics",
      title: "Telecom",
      rating: 5,
      avatar: "/images/test-1.png",
    },
    {
      id: 2,
      quote: "One platform handles ingestion, modeling and insights",
      description:
        "Before Sia we had multiple teams building the same reports in different tools. Now one platform handles ingestion modeling and insights in one place. That alone removed months of duplicated work.",
      name: "Head of Analytics Engineering",
      title: "Banking",
      rating: 5,
      avatar: "/images/test-2.png",
    },
    {
      id: 3,
      quote: "Early warnings without a large data science team",
      description:
        "We run thousands of sensors across plants and vehicles. Sia finally gave us a way to turn that stream into early warnings and maintenance actions without needing a large data science team.",
      name: "Director of Digital Manufacturing",
      title: "Automotive",
      rating: 5,
      avatar: "/images/test-3.png",
    },
    {
      id: 4,
      quote: "Teams explore trends instead of waiting in the data queue",
      description:
        "Sia changed how our business teams use data. Product and finance can now explore trends and test scenarios on their own instead of waiting in the data queue.",
      name: "Chief Digital Officer",
      title: "SaaS",
      rating: 5,
      avatar: "/images/test-4.png",
    },
    {
      id: 5,
      quote: "Multi-agent workflows shortened decision cycles",
      description:
        "The multi agent workflows are what sold us. We can run forecasting quality checks and reporting in parallel instead of one slow pipeline. That shortened our decision cycles across the company.",
      name: "Chief Data Officer",
      title: "Energy and Utilities",
      rating: 5,
      avatar: "/images/test-1.png",
    },
    {
      id: 6,
      quote: "AI-driven analytics at scale with confidence",
      description:
        "We deal with sensitive financial data and strict compliance. Being able to deploy Sia in our own environment gave us confidence to use AI driven analytics at scale.",
      name: "Head of Risk and Compliance Analytics",
      title: "BFSI",
      rating: 5,
      avatar: "/images/test-2.png",
    },
    {
      id: 7,
      quote: "Focus on insights that drive business actions",
      description:
        "Our analysts spend far less time cleaning and preparing data. Sia guides them through every step so they focus on insights that drive business actions.",
      name: "Senior Business Intelligence Manager",
      title: "Retail",
      rating: 5,
      avatar: "/images/test-3.png",
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className={styles.starFull}>
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className={styles.starHalf}>
          ★
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className={styles.starEmpty}>
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={`container ${styles.container}`}>
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={styles.topTag}
        >
          What Customers Say
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.mainHeading}
        >Why Sia Becomes the Default Platform for Enterprises

        </motion.h2>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.subHeading}
        >
          From faster insights to automated workflows, teams use Sia to run analytics with less manual effort and fewer tool switches.
        </motion.p>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.carouselWrapper}
        >
          <Slider {...sliderSettings} className={styles.slider}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.slide}>
                <div className={styles.testimonialCard}>
                  {/* Quote */}
                  <div>
                    <h3 className={styles.quote}>"{testimonial.quote}"</h3>

                    {/* Description */}
                    <p className={styles.description}>
                      {testimonial.description}
                    </p>

                    {/* User Info */}
                  </div>
                  <div className={styles.userInfo}>
                    {/* <div className={styles.avatarContainer}>
                      <div className={styles.avatar}>
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                        />
                        
                      </div>
                    </div> */}
                    <div className={styles.userDetails}>
                      {testimonial.name && (
                        <span className={styles.name}>{testimonial.name}, </span>
                      )}
                      <span className={styles.title}>{testimonial.title}</span>
                    </div>
                    <div className={styles.rating}>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
