import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { useState } from "react";
import Image from "next/image";

const BlogHeroSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [email, setEmail] = useState("");

  const filters = [
    "All",
    "Mediation",
    "Industry",
    "Wellbeing",
    "Culture",
    "Evolution",
    "Psychology",
    "Sleep",
    "Life",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Lessons Learned from Professional Challenges",
      category: "Career",
      author: "Ava Reynolds",
      date: "July 14, 2023",
      image: "/images/blog/blog-1.jpg",
      size: "large",
    },
    {
      id: 2,
      title: "Empowering Individuals for Professional Growth",
      category: "Career",
      author: "Ava Reynolds",
      date: "July 13, 2023",
      image: "/images/blog/blog-2.jpg",
      size: "medium",
    },
    {
      id: 3,
      title: "News and Updates from the Corporate World",
      category: "Career",
      author: "Phil Martinez",
      date: "July 11, 2023",
      image: "/images/blog/blog-3.jpg",
      size: "medium",
    },
  ];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.container}`}>
        {/* Header Content */}
        <div className={styles.headerContent}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.mainHeading}
          >
            Insights for your references
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.description}
          >
            Your resource for the latest SEO strategies, industry insights, thought
            leadership, and SEO news.
          </motion.p>

          {/* Email Signup Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.emailForm}
            onSubmit={handleEmailSubmit}
          >
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.emailInput}
              required
            />
            <button type="submit" className={styles.signupButton}>
              <span>Sign up</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16667M15.8337 10L10.0003 15.8333"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.form>
        </div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.filterSection}
        >
          <h3 className={styles.filterLabel}>Filters based on tags</h3>
          <div className={styles.filterTags}>
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`${styles.filterTag} ${
                  activeFilter === filter ? styles.active : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${styles.blogCard} ${styles[post.size]}`}
            >
              <div className={styles.cardImage}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={styles.postImage}
                />
                <div className={styles.overlay}></div>
              </div>
              
              <div className={styles.cardContent}>
                <span className={styles.categoryBadge}>{post.category}</span>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <div className={styles.cardMeta}>
                  <div className={styles.authorAvatar}>
                    <Image
                      src={`/images/avatars/${post.author.toLowerCase().replace(" ", "-")}.jpg`}
                      alt={post.author}
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className={styles.authorName}>{post.author}</span>
                  <span className={styles.dot}>•</span>
                  <span className={styles.date}>{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
