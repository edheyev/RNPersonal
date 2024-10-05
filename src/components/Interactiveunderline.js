import React, { useState } from "react";
import Sketch from "react-p5";

const InteractiveUnderline = () => {
  const [hoverX, setHoverX] = useState(0);
  const [hoverWidth, setHoverWidth] = useState(0);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, 60).parent(canvasParentRef);
    p5.noStroke();
  };

  const draw = (p5) => {
    p5.clear();
    p5.fill("#f49d37");
    p5.rect(hoverX, p5.height - 5, hoverWidth, 3);
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, 60);
  };

  const handleMouseMove = (e) => {
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
      const rect = link.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        setHoverX(rect.left);
        setHoverWidth(rect.width);
      }
    });
  };

  return (
    <div
      style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}
      onMouseMove={handleMouseMove}
    >
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default InteractiveUnderline;
