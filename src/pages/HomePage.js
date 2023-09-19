import React from "react";
import BckgrndSketch from "../components/BckgrndSketch";
import Flow from "../components/Flow";
import FlowGarden from "../components/FlowGarden";
import NavList from "../components/NavList";
import SocMedBar from "../components/SocMedBar";
import SpikeFlow from "../components/SpikeFlow";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.textShad}>
          My name is Ed. I like coding, science, and art.
        </h1>
      </header>
      <main className={styles.mainContent}>
        <SpikeFlow />
      </main>
    </div>
  );
};

export default HomePage;
