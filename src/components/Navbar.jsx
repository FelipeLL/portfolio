import styles from "../styles/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  useEffect(() => {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  });

  const [scroll, setScroll] = useState(false);
  const [sider, setSider] = useState(false);

  return (
    <nav className={scroll ? `${styles.sticky}` : ""}>
      <div className={`${styles.navbar}`}>
        <div className={`${styles.logo}`}>&#60;FL /&#62;</div>
        <ul
          className={
            sider ? `${styles.menu} ${styles.active}` : `${styles.menu} $`
          }
        >
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>

          <div className={`${styles["cancel-btn"]}`}>
            <FontAwesomeIcon icon={faXmark} onClick={() => setSider(false)} />
          </div>
        </ul>
        <div className={`${styles["media-icons"]}`}>
          <a href="https://github.com/FelipeLL" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/jfelipeladino/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div
        className={
          sider
            ? `${styles["menu-btn"]} ${styles["open"]}`
            : `${styles["menu-btn"]}`
        }
      >
        <FontAwesomeIcon icon={faBars} onClick={() => setSider(true)} />
      </div>
    </nav>
  );
};

export default Navbar;
