import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <section className={`${styles.home}`} id="home">
      <div className={`${styles["home-content"]}`}>
        <div className={styles.text}>
          <div className={styles["text-1"]}>Hello,</div>
          <div className={styles["text-2"]}>I'm Felipe Ladino</div>
          <div className={styles["text-3"]}>Full stack Javascript dev</div>
          <div className={styles["text-4"]}>From Colombia</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
