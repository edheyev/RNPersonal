import React from "react";
import styles from "../App.module.css";
import BckgrndSketch from "../components/BckgrndSketch";
import SocMedBar from "../components/SocMedBar";

const AboutMe = () => {
  const aboutMeText =
    "My name is Ed Heywood-Everett, I am a recent University of York PhD graduate, currently living in the city of York, UK. \n Just a few of my interests include research and psychology, particularly spatial memory and the use of virtual reality in research.\n I enjoy coding; developing in javascript and c# and use MATLAB and R for data. I also love creating things both digital and not. \n \n Please explore this site to see more! ";

  return (
    <div>
      <div style={{ backgroundColor: "pink" }}>
        <h1 className={styles.ahead}>About</h1>
      </div>
      <div style={{ backgroundColor: "pink" }}>
        <pre className={styles.pre_text}>{aboutMeText}</pre>
      </div>
      <SocMedBar />
      <BckgrndSketch />
    </div>
  );
};

export default AboutMe;
