// src/components/GradientNavBar.js

import React from "react";
import Sketch from "react-p5";
import styles from "./GradientNavBar.module.css"; // Create this CSS module

const GradientNavBar = ({ className }) => {
  let t = 0; // Time variable for animation

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, 60).parent(canvasParentRef); // Height matches AppBar
    p5.noStroke();
  };

  const draw = (p5) => {
    p5.clear(); // Transparent background
    for (let x = 0; x <= p5.width; x++) {
      let inter = p5.map(x, 0, p5.width, 0, 1);
      let c = p5.lerpColor(
        p5.color(66, 10, 200),
        p5.color(20, 206, 13),
        p5.noise(inter * 2, t)
      );
      p5.stroke(c);
      p5.line(x, 0, x, p5.height);
    }
    t += 0.005; // Adjust speed of animation
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, 60);
  };

  return (
    <div className={`${styles.gradientNavBar} ${className}`}>
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default GradientNavBar;
