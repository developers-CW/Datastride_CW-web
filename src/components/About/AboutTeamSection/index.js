import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";

const AboutTeamSection = () => {
  const teamMembers = [
    {
      name: "Arupahtha Raju Jude Darren",
      role: "VP - Business Development",
      image: "/images/team/member-1.jpg",
      bgColor: "blue",
    },
    {
      name: "Harish Kumar",
      role: "VP - Client Operations",
      image: "/images/team/member-2.jpg",
      bgColor: "mint",
    },
    {
      name: "Kundan Krishna",
      role: "Chief Technology Architect",
      image: "/images/team/member-3.jpg",
      bgColor: "blue",
    },
    {
      name: "Kinnari Acharya",
      role: "Lead Content Manager",
      image: "/images/team/member-4.jpg",
      bgColor: "mint",
    },
    {
      name: "Rohan Dhareshwar",
      role: "VP - Business Ops and Quality",
      image: "/images/team/member-5.jpg",
      bgColor: "mint",
    },
    {
      name: "Shivang Joshi",
      role: "Head of Design",
      image: "/images/team/member-6.jpg",
      bgColor: "blue",
    },
    {
      name: "Anna Varghese",
      role: "Senior Content Creator",
      image: "/images/team/member-7.jpg",
      bgColor: "mint",
    },
    {
      name: "Astin Johnson",
      role: "Software Engineer",
      image: "/images/team/member-8.jpg",
      bgColor: "blue",
    },
  ];

  return (
    <section className={styles.teamSection}>
      <div className={`container ${styles.container}`}>
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.sectionHeading}
        >
          Meet Our team
        </motion.h2>

        {/* Team Grid */}
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={styles.teamCard}
            >
              <div className={`${styles.imageWrapper} ${styles[member.bgColor]}`}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
