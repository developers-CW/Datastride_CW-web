import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.scss";

const PrimaryButton = ({
  label = "Button",
  onClick = () => {},
  backgroundColor = "#0c8ce9",
  textColor = "#ffffff",
  arrowBackground = "#ffffff",
  arrowColor = "#0c8ce9",
  type = "button",
  disabled = false,
  className = "",
  fullWidth = false,
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`${styles.primaryButton} ${
        fullWidth ? styles.fullWidth : ""
      } ${className}`}
      style={{
        backgroundColor,
        color: textColor,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      <span className={styles.buttonLabel}>{label}</span>
      <span
        className={styles.buttonIconContainer}
        style={{
          backgroundColor: arrowBackground,
          color: arrowColor,
        }}
      >
        <svg
          width="20"
          height="20"
          className={styles.buttonIcon}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.3875 13.3594C6.50417 13.5053 6.7375 13.5053 6.88333 13.3594L12.9791 7.26354C13.125 7.11771 13.125 6.91354 12.9791 6.76771L6.88333 0.671875C6.7375 0.526042 6.50417 0.526042 6.3875 0.671875L5.80417 1.22604C5.65833 1.37187 5.65833 1.60521 5.80417 1.72187L10.325 6.24271H0.35C0.175 6.24271 0 6.41771 0 6.59271V7.40937C0 7.61354 0.175 7.75937 0.35 7.75937H10.325L5.80417 12.3094C5.65833 12.426 5.65833 12.6594 5.80417 12.8053L6.3875 13.3594Z"
            fill={arrowColor}
          />
        </svg>
      </span>
    </motion.button>
  );
};

export default PrimaryButton;
