import React from "react";
import Sketch from "react-p5";

const SpikeFlow = () => {
  // Configuration Variables
  const scl = 25; // Scale
  const increment = 0.1; // Noise increment
  let zoff = 0; // Z-offset for noise

  // Responsive columns and rows
  let cols;
  let rows;

  const setup = (p5, canvasParentRef) => {
    const canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    p5.background("#03071e");
    p5.noStroke(); // Optimize by disabling strokes if not needed
    p5.frameRate(30); // Limit to 30 FPS for better performance

    cols = Math.floor(p5.width / scl);
    rows = Math.floor(p5.height / scl);

    // Position the canvas absolutely and set z-index to -1
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    canvas.style("position", "fixed"); // Ensures the canvas stays fixed during scroll
    canvas.style("top", "0");
    canvas.style("left", "0");
    canvas.style("width", "100%");
    canvas.style("height", "100%");
  };

  const draw = (p5) => {
    p5.background("#03071e");
    p5.fill("#f49d37");

    let yoff = 0;

    for (let y = 0; y < rows + 1; y++) {
      let xoff = 0;

      for (let x = 0; x < cols + 1; x++) {
        // Calculate noise value
        const noiseVal = p5.noise(xoff, yoff, zoff);
        const angle = noiseVal * p5.TWO_PI; // Convert noise to radians

        // Calculate positions
        const posX = x * scl;
        const posY = y * scl;

        // Vector from mouse to current position
        const dx = p5.mouseX - posX;
        const dy = p5.mouseY - posY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Determine stroke color based on distance
        let strokeColor;
        if (distance > 300) {
          strokeColor = "#9d0208"; // Farther away
        } else if (distance > 200) {
          strokeColor = "#d00000";
        } else if (distance > 100) {
          strokeColor = "#e85d04";
        } else {
          strokeColor = "#faa307"; // Closer
        }

        p5.stroke(strokeColor);
        p5.push();
        p5.translate(posX, posY);
        p5.rotate(angle); // Rotate based on noise angle
        p5.line(0, 0, 0, 20); // Shorter line for efficiency
        p5.pop();

        xoff += increment;
      }
      yoff += increment;
    }

    zoff += 0.003; // Slightly increase for smoother animation
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    cols = Math.floor(p5.width / scl);
    rows = Math.floor(p5.height / scl);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default SpikeFlow;
