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
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h1 className={styles.textShad}>
            My name is Ed. I like coding, science and art.
          </h1>
          {/* <SocMedBar /> */}
        </div>
        <NavList className={styles.homePageNavList} />
      </div>
      <SpikeFlow />
      {/* <BckgrndSketch /> */}
    </div>
  );
};

export default HomePage;
