import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { useState } from "react";
import Image from "next/image";

const BlogListingSection = () => {
  const [visiblePosts, setVisiblePosts] = useState(9);

  const blogPosts = [
    {
      id: 1,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      image: "/images/blog/listing-1.jpg",
    },
    {
      id: 2,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Jason Francisco",
      date: "August 20, 2022",
      image: "/images/blog/listing-2.jpg",
    },
    {
      id: 3,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Elizabeth Slavin",
      date: "August 20, 2022",
      image: "/images/blog/listing-3.jpg",
    },
    {
      id: 4,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Ernie Smith",
      date: "August 20, 2022",
      image: "/images/blog/listing-4.jpg",
    },
    {
      id: 5,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Eric Smith",
      date: "August 20, 2022",
      image: "/images/blog/listing-5.jpg",
    },
    {
      id: 6,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      image: "/images/blog/listing-6.jpg",
    },
    {
      id: 7,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Jason Francisco",
      date: "August 20, 2022",
      image: "/images/blog/listing-7.jpg",
    },
    {
      id: 8,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Elizabeth Slavin",
      date: "August 20, 2022",
      image: "/images/blog/listing-8.jpg",
    },
    {
      id: 9,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Ernie Smith",
      date: "August 20, 2022",
      image: "/images/blog/listing-9.jpg",
    },
  ];

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  return (
    <section className={styles.listingSection}>
      <div className={`container ${styles.container}`}>
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.sectionHeading}
        >
          Insights for your references
        </motion.h2>

        {/* Blog Grid */}
        <div className={styles.blogGrid}>
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 9) * 0.05 }}
              className={styles.blogCard}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={styles.postImage}
                />
              </div>

              <div className={styles.cardContent}>
                <span className={styles.categoryBadge}>{post.category}</span>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                
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
                  <span className={styles.date}>{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        {visiblePosts < blogPosts.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.loadMoreWrapper}
          >
            <button
              onClick={handleLoadMore}
              className={styles.loadMoreButton}
            >
              Load More
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogListingSection;
