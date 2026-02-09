import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./styles.module.scss";
import PrimaryButton from "../../Shared/PrimaryButton";
import { useEffect } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    helpType: "",
    companyName: "",
    message: "",
    newsletter: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [statusMessage, setStatusMessage] = useState(''); // Message to display

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    // Clear status messages when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
      setStatusMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage('');

    // Debug: Log form data being sent
    console.log('Submitting form data:', formData);

    // Frontend validation
    if (!formData.helpType || formData.helpType === "How can we help") {
      setSubmitStatus('error');
      setStatusMessage('Please select how we can help you.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/create-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Thank you for reaching out! We\'ll get back to you soon.');
        // Reset form on success
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          helpType: "",
          companyName: "",
          message: "",
          newsletter: true,
        });
        console.log('Contact created successfully:', data);
      } else {
        setSubmitStatus('error');
        setStatusMessage('Failed to submit form. Please try again.');
        console.error('Error creating contact:', data);
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('An error occurred. Please check your connection and try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const helpOptions = [
    "How can we help",
    "AI Project Consultation",
    "Computer Vision Expertise",
    "General Inquiry",
    "Partnership Opportunity",
    "Other",
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/244447843.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <section id="contact-section" className={styles.contactSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentWrapper}>
          {/* Left Section - Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.leftContent}
          >
            {/* Main Heading */}
            <h2 className={styles.heading}>
            Request A Demo
            </h2>

            {/* Contact Number */}
            <div className={styles.contactInfo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_2099_6660)">
                <path d="M18.9657 14.8657C18.4744 14.3541 17.8817 14.0805 17.2536 14.0805C16.6306 14.0805 16.0329 14.349 15.5213 14.8606L13.9206 16.4562C13.7889 16.3853 13.6572 16.3194 13.5306 16.2536C13.3482 16.1624 13.176 16.0763 13.0291 15.9851C11.5298 15.0328 10.1672 13.7918 8.86033 12.1861C8.22716 11.3857 7.80167 10.7121 7.49268 10.0282C7.90804 9.64833 8.29301 9.25323 8.66785 8.87333C8.80968 8.7315 8.95151 8.5846 9.09334 8.44277C10.1571 7.37904 10.1571 6.00127 9.09334 4.93754L7.7105 3.55469C7.55347 3.39767 7.39138 3.23558 7.23942 3.07349C6.93549 2.75943 6.61638 2.43525 6.28713 2.13133C5.79579 1.64505 5.20821 1.38672 4.59023 1.38672C3.97226 1.38672 3.37454 1.64505 2.86801 2.13133C2.86294 2.13639 2.86294 2.13639 2.85788 2.14146L1.13565 3.87888C0.487286 4.52724 0.117514 5.31744 0.0364682 6.23427C-0.0851005 7.71336 0.350521 9.09114 0.684835 9.99277C1.50542 12.2063 2.73124 14.2578 4.55984 16.4562C6.77847 19.1054 9.44792 21.1974 12.4973 22.6714C13.6623 23.2235 15.2174 23.8769 16.9548 23.9884C17.0612 23.9934 17.1726 23.9985 17.2739 23.9985C18.444 23.9985 19.4267 23.5781 20.1966 22.7423C20.2017 22.7322 20.2118 22.7271 20.2169 22.717C20.4803 22.3979 20.7842 22.1091 21.1033 21.8001C21.3211 21.5925 21.544 21.3746 21.7618 21.1467C22.2633 20.625 22.5267 20.0171 22.5267 19.3941C22.5267 18.766 22.2582 18.1632 21.7466 17.6567L18.9657 14.8657ZM20.7791 20.1995C20.7741 20.2045 20.7741 20.1995 20.7791 20.1995C20.5816 20.4122 20.379 20.6047 20.1612 20.8175C19.8319 21.1315 19.4976 21.4608 19.1835 21.8305C18.6719 22.3776 18.0692 22.6359 17.279 22.6359C17.203 22.6359 17.1219 22.6359 17.046 22.6309C15.5415 22.5346 14.1435 21.947 13.095 21.4456C10.228 20.0577 7.7105 18.0872 5.6185 15.59C3.89121 13.5081 2.73631 11.5833 1.97144 9.51663C1.50036 8.25535 1.32814 7.27267 1.40412 6.34571C1.45477 5.75306 1.68271 5.26172 2.10314 4.8413L3.83043 3.11401C4.07863 2.881 4.34203 2.75437 4.60036 2.75437C4.91948 2.75437 5.17781 2.94685 5.3399 3.10894C5.34497 3.11401 5.35004 3.11907 5.3551 3.12414C5.66409 3.41286 5.95788 3.71172 6.26687 4.03084C6.42389 4.19293 6.58598 4.35502 6.74808 4.52218L8.13092 5.90502C8.66785 6.44195 8.66785 6.93836 8.13092 7.47529C7.98403 7.62218 7.84219 7.76908 7.6953 7.91091C7.26981 8.34653 6.86458 8.75176 6.42389 9.14686C6.41376 9.15699 6.40363 9.16205 6.39857 9.17218C5.96294 9.60781 6.04399 10.0333 6.13517 10.322C6.14023 10.3372 6.1453 10.3524 6.15036 10.3676C6.51 11.2389 7.01654 12.0594 7.78648 13.0371L7.79154 13.0421C9.18958 14.7643 10.6636 16.1067 12.2896 17.1349C12.4973 17.2666 12.71 17.373 12.9126 17.4743C13.095 17.5655 13.2672 17.6516 13.4141 17.7428C13.4344 17.7529 13.4546 17.7681 13.4749 17.7782C13.6471 17.8643 13.8092 17.9049 13.9764 17.9049C14.3968 17.9049 14.6602 17.6415 14.7463 17.5554L16.4786 15.823C16.6509 15.6508 16.9244 15.4431 17.2435 15.4431C17.5576 15.4431 17.8159 15.6407 17.9729 15.8129C17.978 15.8179 17.978 15.8179 17.9831 15.823L20.7741 18.614C21.2958 19.1307 21.2958 19.6626 20.7791 20.1995Z" fill="#0C8CE9"/>
                <path d="M12.9691 5.7081C14.2963 5.93098 15.5018 6.55909 16.4642 7.5215C17.4266 8.48392 18.0497 9.68948 18.2776 11.0166C18.3333 11.3509 18.6221 11.5839 18.9513 11.5839C18.9918 11.5839 19.0273 11.5789 19.0678 11.5738C19.4427 11.513 19.6909 11.1584 19.6301 10.7836C19.3565 9.17788 18.5967 7.71399 17.4368 6.55402C16.2768 5.39405 14.8129 4.63425 13.2072 4.36072C12.8324 4.29993 12.4828 4.54814 12.417 4.91791C12.3512 5.28768 12.5943 5.64732 12.9691 5.7081Z" fill="black"/>
                <path d="M23.9723 10.5869C23.5215 7.94279 22.2754 5.53674 20.3607 3.62203C18.446 1.70732 16.04 0.461243 13.3958 0.0104253C13.0261 -0.0554245 12.6766 0.197844 12.6107 0.567615C12.5499 0.942452 12.7981 1.29196 13.173 1.35781C15.5334 1.75798 17.6862 2.87742 19.3983 4.58445C21.1104 6.29654 22.2248 8.44932 22.6249 10.8098C22.6807 11.1441 22.9694 11.3771 23.2986 11.3771C23.3392 11.3771 23.3746 11.372 23.4151 11.367C23.7849 11.3113 24.0382 10.9567 23.9723 10.5869Z" fill="black"/>
              </g>
              <defs>
                <clipPath id="clip0_2099_6660">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
              <span className={styles.phoneNumber}>+91 91874 66014</span>
            </div>

            {/* Address block */}
            <div className={styles.description}>
            <p>
              <strong>Address:</strong> 104, 1st floor, Infantry Techno Park, Infantry Rd, Bengaluru, Karnataka 560001</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@datastride.ai">info@datastride.ai</a>
            </p>
          </div>

            {/* Secondary CTA Link */}
            <a href="#" className={styles.secondaryLink}>
            Or book a 15-minute call directly
              <span className={styles.linkArrow}>↗</span>
            </a>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.rightContent}
          >
            {/*

            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Company Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <select
                    name="helpType"
                    value={formData.helpType}
                    onChange={handleChange}
                    className={styles.formSelect}
                    required
                  >
                    {helpOptions.map((option, index) => (
                      <option 
                        key={index} 
                        value={index === 0 ? "" : option} 
                        disabled={index === 0}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  rows={5}
                  required
                />
              </div>

              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  name="newsletter"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className={styles.checkbox}
                />
                <label htmlFor="newsletter" className={styles.checkboxLabel}>
                  By submitting this form I accept{" "}
                <a href="#" className={styles.termsLink}>
                  Privacy Policy
                </a>{" "}
                &{" "}
                <a href="#" className={styles.termsLink}>
                  Terms of Service
                </a>
                </label>
              </div>

              <PrimaryButton
                type="submit"
                label={isSubmitting ? "Submitting..." : "Submit form"}
                fullWidth={true}
                disabled={isSubmitting}
                backgroundColor="#0C8CE9"
                textColor="#FFFFFF"
                arrowColor="#0C8CE9"
              />

              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.successMessage}
                >
                  <svg className={styles.messageIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="currentColor"/>
                  </svg>
                  {statusMessage}
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.errorMessage}
                >
                  <svg className={styles.messageIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="currentColor"/>
                  </svg>
                  {statusMessage}
                </motion.div>
              )}
            </form>

            */}

            <div
              className="hs-form-frame"
              data-region="na2"
              data-form-id="7b1dd0a5-befb-47a1-b8f9-3a704dfe105b"
              data-portal-id="244447843"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

