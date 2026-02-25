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
            Request a Demo
            </h2>

            {/* Contact Number */}
            <div className={styles.contactInfo}>
             
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M352.08 382.624C358.752 393.584 360.752 406.464 357.712 418.928C354.688 431.376 346.976 441.92 336.016 448.592L296.272 472.784C288.64 477.424 280.08 479.76 271.456 479.76C263.712 479.76 255.904 477.888 248.656 474.112C165.2 430.832 117.552 366.56 96.5758 332.112C50.0958 255.76 40.3358 180.528 40.3198 130.88C40.3198 114.144 48.9278 98.8796 63.3598 90.0796L103.12 65.8876C114.064 59.2156 126.944 57.2156 139.424 60.2556C151.872 63.2796 162.416 70.9756 169.072 81.9356L194.032 122.928C207.792 145.552 200.592 175.136 177.984 188.896L157.392 201.424C151.216 205.184 148.208 212.736 150.272 219.36C157.072 241.36 166.608 262.496 178.592 282.192C190.544 301.824 204.928 319.968 221.312 336.128C226.384 341.12 234.304 341.936 240.592 338.112L261.168 325.584C283.744 311.792 313.36 319.008 327.136 341.616L352.096 382.624H352.08Z" fill="#0C8CE9"/>
<path d="M310.912 263.312C316.288 228.448 292.304 195.68 257.424 190.304V190.288C248.704 188.944 242.72 180.768 244.064 172.032C245.408 163.312 253.6 157.36 262.32 158.672C314.624 166.752 350.608 215.872 342.544 268.192C341.328 276.096 334.512 281.76 326.752 281.76C325.936 281.76 325.12 281.696 324.288 281.568C315.552 280.224 309.568 272.048 310.912 263.312Z" fill="black"/>
<path d="M253.808 108.8C255.152 100.064 263.408 94.0796 272.064 95.4236C314.304 101.952 351.472 124.528 376.736 159.008C402 193.488 412.32 235.728 405.792 277.968C404.576 285.872 397.76 291.536 390 291.536C389.184 291.536 388.352 291.472 387.536 291.344C378.8 289.984 372.816 281.808 374.16 273.088C379.376 239.296 371.12 205.504 350.912 177.92C330.704 150.336 300.976 132.272 267.184 127.056C258.448 125.696 252.464 117.52 253.808 108.8Z" fill="black"/>
<path d="M263.568 45.5516C264.912 36.8156 273.12 30.8796 281.824 32.1756V32.1916C403.904 51.0396 487.888 165.664 469.04 287.728C467.824 295.632 461.008 301.296 453.248 301.296C452.432 301.296 451.6 301.232 450.784 301.104C442.048 299.744 436.064 291.568 437.408 282.848C453.552 178.208 381.568 79.9516 276.944 63.8076C268.208 62.4476 262.224 54.2716 263.568 45.5516Z" fill="black"/>
</svg>

              <span className={styles.phoneNumber}> 
                <strong>Phone:</strong> +91 91874 66014
              </span>
            </div>

            {/* Address block */}
            <div className={styles.description}>
              <p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C7.78289 0 4.26562 3.39703 4.26562 7.73438C4.26562 9.38447 4.76147 10.8559 5.71308 12.2347L11.4081 21.1212C11.6844 21.5532 12.3162 21.5524 12.5919 21.1212L18.3116 12.2044C19.2428 10.8881 19.7344 9.34252 19.7344 7.73438C19.7344 3.46964 16.2647 0 12 0ZM12 11.25C10.0616 11.25 8.48438 9.6728 8.48438 7.73438C8.48438 5.79595 10.0616 4.21875 12 4.21875C13.9384 4.21875 15.5156 5.79595 15.5156 7.73438C15.5156 9.6728 13.9384 11.25 12 11.25Z" fill="#0C8CE9"/>
                  <path d="M17.4968 16.1572L13.9562 21.6926C13.0398 23.1214 10.9551 23.1167 10.0431 21.6939L6.49678 16.1587C3.37659 16.8801 1.45312 18.2016 1.45312 19.7809C1.45312 22.5213 6.88725 23.9996 12 23.9996C17.1127 23.9996 22.5469 22.5213 22.5469 19.7809C22.5469 18.2005 20.6207 16.8783 17.4968 16.1572Z" fill="black"/>
                </svg>


                <span>
                  <strong>Address:</strong> 104, 1st floor, Infantry Techno Park, Infantry Rd, Bengaluru, Karnataka 560 001
                </span>
              </p>
              <p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.7885 4.76855L16.5098 12.0004L23.7885 19.2322C23.92 18.9572 23.9999 18.6532 23.9999 18.3285V5.67226C23.9999 5.34755 23.92 5.04357 23.7885 4.76855Z" fill="black"/>
                  <path d="M21.891 3.5625H2.10976C1.78505 3.5625 1.48107 3.64233 1.20605 3.77391L10.509 13.03C11.3316 13.8525 12.6692 13.8525 13.4918 13.03L22.7947 3.77391C22.5197 3.64233 22.2157 3.5625 21.891 3.5625Z" fill="#0C8CE9"/>
                  <path d="M0.211406 4.76855C0.0798281 5.04357 0 5.34755 0 5.67226V18.3285C0 18.6532 0.0798281 18.9572 0.211406 19.2322L7.49011 12.0004L0.211406 4.76855Z" fill="black"/>
                  <path d="M15.516 12.9941L14.486 14.0241C13.1154 15.3947 10.8853 15.3947 9.5147 14.0241L8.48476 12.9941L1.20605 20.226C1.48107 20.3575 1.78505 20.4374 2.10976 20.4374H21.891C22.2157 20.4374 22.5197 20.3575 22.7947 20.226L15.516 12.9941Z" fill="black"/>
                </svg>

                <span>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@datastride.ai">info@datastride.ai</a>
                </span>
              </p>
            </div>

            {/* Secondary CTA Link */}
            <a href="https://calendly.com/rsuha" target="_blank" className={styles.secondaryLink}>
            Or book a 15-minute call directly
              <span className={styles.linkArrow}>↗</span>
            </a>

            {/* Google Maps 
            <div className={styles.gmaps}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4e562dce2f22faa9%3A0x6327bb7c7020762a!2sDatastride%20analytics!5e0!3m2!1sen!2sin!4v1771862783697!5m2!1sen!2sin" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            */}
            
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

