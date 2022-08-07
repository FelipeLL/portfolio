import styles from "../styles/projects.module.css";
import mapa from "../images/mapaSS.PNG";
import inventory from "../images/invSS.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Projects = () => {
  const cardBody1Ref = useRef(null);
  const cardImg1Ref = useRef(null);
  const cardBody2Ref = useRef(null);
  const cardImg2Ref = useRef(null);

  const showCardOne = () => {
    cardBody1Ref.current.style.bottom = "0";
    cardImg1Ref.current.style.transform = "scale(1.7)";
  };

  const showCardTwo = () => {
    cardBody2Ref.current.style.bottom = "0";
    cardImg2Ref.current.style.transform = "scale(1.7)";
  };

  const hiddenCardOne = () => {
    cardBody1Ref.current.style.bottom = "-300px";
    cardImg1Ref.current.style.transform = "scale(1)";
  };

  const hiddenCardTwo = () => {
    cardBody2Ref.current.style.bottom = "-300px";
    cardImg2Ref.current.style.transform = "scale(1)";
  };

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.content}>
        <div className={styles.title}>
          <span>Projects</span>
        </div>
        <span>Here you can see the projects I have worked on</span>
        <div className={styles["cards"]}>
          <div className={`${styles["card"]} ${styles["card-1"]}`}>
            <img
              src={mapa}
              alt=""
              onMouseEnter={showCardOne}
              ref={cardImg1Ref}
            />
            <div
              className={styles["card-body"]}
              ref={cardBody1Ref}
              onMouseLeave={hiddenCardOne}
            >
              <div>
                <a
                  href="https://github.com/FelipeLL/backend_touristic"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} /> Repository
                </a>
                <a href="https://zoratama-map.netlify.app/" target="_blank">
                  <FontAwesomeIcon icon={faGlobe} /> Website
                </a>
              </div>
              <p>
                Zoratama Map is development with Mapbox API for display maps in
                the app and and with following technologies: React.js, Node.js
                MySQL and JWT.
              </p>
            </div>
          </div>
          <div className={`${styles["card"]} ${styles["card-2"]}`}>
            <img
              src={inventory}
              alt=""
              onMouseEnter={showCardTwo}
              ref={cardImg2Ref}
            />
            <div
              className={styles["card-body"]}
              ref={cardBody2Ref}
              onMouseLeave={hiddenCardTwo}
            >
              <div>
                <a
                  href="https://github.com/FelipeLL/Inventarios_back"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} /> Repository
                </a>
                <a
                  href="https://github.com/FelipeLL/Inventarios_front"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGlobe} /> Website
                </a>
              </div>
              <p>
                Inventories JAK, it is an inventory control system development
                with HTML, CSS, JsonWebToken, React.js, Node.js and MySQL
                database
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
