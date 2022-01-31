import React from "react";
import BckgrndSketch from "../components/BckgrndSketch";
import NavList from "../components/NavList";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h1 className={styles.textShad}>
          My name is Ed. I like coding, science and art.
        </h1>
        <NavList className={styles.homePageNavList} />
      </div>
      <BckgrndSketch />
    </div>
  );
};

export default HomePage;
