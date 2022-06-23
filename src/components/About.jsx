import styles from "../styles/about.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.content}>
        <div className={styles.title}>
          <span>About</span>
        </div>
        <div className={styles["about-details"]}>
          <div className={styles.left}>
            <div className={styles.topic}>
              I'm web developer / Systems Engineer
            </div>
            <p>
              I am Juan Felipe Ladino, I'm a System Engineer from the University
              of Cundinamarca, Colombia. I have ability adjustment, proactivity,
              creativity, teamwork and application of the acquired knowledge.
              Also, I have excellent learning faculty for the use of the best
              practices and new characteristics of the technologies that I use.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles["skills-title"]}>Skills</div>
            <div className={styles.skills}>
              <div>
                <span>HTML</span>
                <FontAwesomeIcon icon={faHtml5} />
              </div>
              <div>
                <span>CSS</span>
                <FontAwesomeIcon icon={faCss3Alt} />
              </div>
              <div>
                <span>Javascript</span>
                <FontAwesomeIcon icon={faJs} />
              </div>
              <div>
                <span>Node</span>
                <FontAwesomeIcon icon={faNodeJs} />
              </div>
              <div>
                <span>React</span>
                <FontAwesomeIcon icon={faReact} />
              </div>
              <div>
                <span>Database</span>
                <FontAwesomeIcon icon={faDatabase} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
