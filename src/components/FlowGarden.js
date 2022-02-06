import React, { useEffect } from "react";
import Sketch from "react-p5";
import axios from "axios";

let centerX;
let centerY;
let scl = 50;
let increment = 0.1;
let cols = 0;
let rows = 0;
let zoff = 0;
let def = 10;
let blobAr = [];
let blobAr2 = [];
let blobception = 3;

function FlowGarden() {
  const setup = (p5, canvasParentRef) => {
    const canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    canvas.position(0, 0);
    p5.noStroke();
    canvas.style("z-index", "-1");
    centerX = p5.windowWidth / 2;
    centerY = p5.windowHeight / 2;

    cols = Math.floor(p5.windowWidth / scl);
    rows = Math.floor(p5.windowHeight / scl);
    console.log(rows, cols, "rows/cols");
    // blobAr.map((point, i) => {
    //   let angle = ((i * def) / Math.PI) * 2;
    //   return (point = {
    //     x: r * Math.cos(angle) + p5.windowWidth / 2,
    //     y: r * Math.sin(angle) + p5.windowWidth / 2,
    //     angle: angle,
    //   });
    // });
    p5.background(100, 100, 100);
  };

  const draw = (p5) => {
    p5.background("#f49d37");
    p5.pop();

    let yoff = 0;

    for (let y = 0; y < rows + 1; y++) {
      let xoff = 0;

      for (let x = 0; x < cols + 1; x++) {
        let index = (x + y * p5.windowHeight) * 4;

        let noise = p5.noise(xoff, yoff, zoff);

        let angle = noise * 360;
        angle = angle * (Math.PI / 180);
        // v = p5.Vector.fromAngle(noise * (Math.PI / 180));

        xoff += increment;
        p5.push();
        p5.translate(x * scl, y * scl);
        p5.rotate(Math.PI / 4);
        let v = p5.createVector(Math.cos(angle), Math.sin(angle)); //noise * (Math.PI / 180));
        console.log(v);
        p5.rotate(v.heading());

        p5.fill("#f22b29");
        p5.ellipse(0, 0, scl, scl / 2);
        p5.fill("#140f2d");
        p5.rect(0, 0, scl, scl);

        p5.pop();
        // p5.beginShape();
        // blobAr.forEach((point) => {
        //   p5.vertex(point.x + noise * 100, point.y + noise * 100);
        // });

        // p5.endShape();
      }
      yoff += increment;
      zoff += 0.0001;
    }
  };
  return <Sketch setup={setup} draw={draw} />;
}

export default FlowGarden;
