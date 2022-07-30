import styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <div className={styles.logo}>&#60;FL /&#62;</div>
          <ul className={styles.contact}>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
            <li>
              <p>Contact me</p>
            </li>
          </ul>
        </div>
        <div>
          Copyright <span>Felipe-Ladino</span> | &#169; 2022 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
