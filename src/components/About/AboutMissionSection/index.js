import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";

const AboutMissionSection = () => {
  const teamMembers = [
    {
      name: "Divya Krishna R",
      image: "/images/team-member-1.png",
      role: "CEO",
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "Sumalata Kamat",
      image: "/images/team-member-2.png",
      role: "CTO",
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "Karthik Chandrashekhar",
      image: "/images/team-member-3.png",
      role: "COO",
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    }
  ];

  return (
    <section className={styles.missionSection}>
      <div className={`container ${styles.container}`}>
        {/* Top Row - Mission and Trust */}
        <div className={styles.topRow}>
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.missionCard}
          >
            <div className={styles.missionContent}>
              <span className={styles.missionLabel}>OUR MISSION</span>
              <p className={styles.missionTitle}>
                Datastride was founded by data veterans who spent years watching enterprises struggle with the same problem: powerful data platforms existed, but teams couldn't unlock their potential without specialists, countless tools, and endless waiting.
              </p>
              <p className={styles.missionTitle}>We set out to prove that sophisticated analytics doesn't have to be complicated.</p>
            </div>
          </motion.div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${styles.missionCard} ${styles.visionCard}`}
          >
            <div className={styles.visionBg}>
              <Image
                src="/images/about-vision.webp"
                alt="Hands reaching together"
                width={293}
                height={251}
                className={styles.visionBgImg}
              />
            </div>

            <div className={styles.missionContent}>
              <span className={`${styles.missionLabel} ${styles.visionLabel}`}>OUR VISION</span>
              <p className={`${styles.missionTitle} ${styles.visionTitle}`}>
                We aim to optimize the enterprize decision-making through strategic data intelligence.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row - Team Members */}

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={styles.teamCard}
            >
              <div className={styles.teamImageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={styles.teamImage}
                />
              </div>
              <h4 className={styles.teamName}>{member.name}</h4>
              <div className={styles.roleWithSocial}>
                <div className={styles.teamRole}>{member.role}</div>

                <span className={styles.separator}>|</span>

                <div className={styles.socialLinks}>
                  <a
                    href={member.linkedin}
                    className={styles.socialIcon}
                    aria-label="LinkedIn"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 5C0 2.23858 2.23858 0 5 0H25C27.7614 0 30 2.23858 30 5V25C30 27.7614 27.7614 30 25 30H5C2.23858 30 0 27.7614 0 25V5ZM10 8.33333C10 9.25381 9.25381 10 8.33333 10C7.41286 10 6.66667 9.25381 6.66667 8.33333C6.66667 7.41286 7.41286 6.66667 8.33333 6.66667C9.25381 6.66667 10 7.41286 10 8.33333ZM10 13.3333V21.6667C10 22.5871 9.25381 23.3333 8.33333 23.3333C7.41286 23.3333 6.66667 22.5871 6.66667 21.6667V13.3333C6.66667 12.4129 7.41286 11.6667 8.33333 11.6667C9.25381 11.6667 10 12.4129 10 13.3333ZM11.6667 15.0227V21.6667C11.6667 22.5871 12.4129 23.3333 13.3333 23.3333C14.2538 23.3333 15 22.5871 15 21.6667V15.5664C15.5081 14.9926 16.3678 14.3202 17.3222 13.912C18.7114 13.5799 20 13.882 20 14.9999V21.6666C20 22.5871 20.7462 23.3333 21.6667 23.3333C22.5871 23.3333 23.3333 22.5871 23.3333 21.6666V14.9999C23.3333 12.8904 21.0793 10.8302 18.7886 10.1099C16.0112 10.8473 14.9735 11.3688 13.3333 10C12.4129 10 11.6667 10.7462 11.6667 11.6667V15.0227Z"
                        fill="#1499E8"
                      />
                    </svg>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default AboutMissionSection;
