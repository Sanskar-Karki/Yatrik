import styles from "./Footer.module.css"
import { FaFacebook, FaPhone, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['contact-info']}>
        <div className={styles['Footer-title']}>
          <a href="/" className={styles['Footer-title-title']}>
          <img src="../../../../public/yatrik-logo.png" alt="" />
          </a>
        </div>
        <div className={styles["foot"]}>
          <h3>Contact Us</h3>
          <div className={styles['info-item']}>
            <FaMapMarkerAlt className={styles["icon"]} />
            <p>672 Putalisadak,Kathmandu</p>
          </div>
          <div className={styles['info-item']}>
            <FaPhone className={styles["icon"]} />
            <p>056-571345<br />+977 9865003545</p>
          </div>
          <div className={styles['info-item']}>
            <FaEnvelope className={styles["icon"]} />
            <p>TravelNepal.Yatrik@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles['social-media']}>
        <h3>Follow Us</h3>
        <div className={styles['social-item']}>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className={styles.icon} />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className={styles.icon} />
          </a>
          <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className={styles.icon} />
          </a>
          <a href='https://Linkedin.com/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles['legal']}>
        <p>&copy; 2023 YATRIK. All rights reserved.</p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </footer>
  );
}
export default Footer