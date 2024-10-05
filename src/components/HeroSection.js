import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>
          Hello, I'm Ed. I like to blend <span>code</span>, <span>science</span>
          , and <span>art</span>.
        </h1>
        <p>Explore my projects below.</p>
      </div>
    </section>
  );
};

export default HeroSection;
