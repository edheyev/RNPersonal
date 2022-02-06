import React, { useEffect } from "react";
import Sketch from "react-p5";
import axios from "axios";
import { LineShareButton } from "react-share";
import { SiTampermonkey } from "react-icons/si";

let centerX;
let centerY;
let scl = 25;
let increment = 0.1;
let cols = 0;
let rows = 0;
let zoff = 0;
let def = 10;
let blobAr = [];
let blobAr2 = [];
let blobception = 3;

function SpikeFlow() {
  const setup = (p5, canvasParentRef) => {
    const canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    canvas.position(0, 0);
    // p5.noStroke();
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
    p5.background("#03071e");
    p5.fill("#f49d37");
    // p5.ellipse(p5.mouseX, p5.mouseY, 600, 600);

    let yoff = 0;

    for (let y = 0; y < rows + 1; y++) {
      let xoff = 0;

      for (let x = 0; x < cols + 1; x++) {
        let index = (x + y * p5.windowHeight) * 4;

        let noise = p5.noise(xoff, yoff, zoff);
        let mV = p5.createVector(p5.mouseX, p5.mouseY); //noise * (Math.PI / 180));
        let bV = p5.createVector(x * scl, y * scl);
        let angle = noise * 360;
        angle = angle * (Math.PI / 180);
        // v = p5.Vector.fromAngle(noise * (Math.PI / 180));

        xoff += increment;
        p5.push();
        p5.translate(x * scl, y * scl);
        p5.rotate(Math.PI / 4);
        let v = p5.createVector(Math.cos(angle), Math.sin(angle)); //noise * (Math.PI / 180));
        let distance = p5.dist(mV.x, mV.y, x * scl, y * scl);

        if (distance > 300) {
          p5.fill("blue");
          p5.stroke("#9d0208");
          p5.rotate(v.heading());
          p5.line(0, 0, 0, 30);
        } else if (distance > 250 && distance < 300) {
          p5.stroke("#d00000");

          let dV = mV.sub(bV).normalize();
          // dV = dV / 1;
          // let combV = dV.add(v);
          // combV.mult(distance);
          p5.rotate(dV.heading());
          // p5.rect(0, 0, scl / 2, scl);

          p5.line(0, 0, 0, 30);
        } else if (distance > 200 && distance < 250) {
          p5.stroke("#e85d04");

          let dV = mV.sub(bV).normalize();
          // dV = dV / 1;
          // let combV = dV.add(v);
          // combV.mult(distance);
          p5.rotate(dV.heading());
          // p5.rect(0, 0, scl / 2, scl);

          p5.line(0, 0, 0, 30);
        } else if (distance > 150 && distance < 200) {
          p5.stroke("#faa307");

          let dV = mV.sub(bV).normalize();
          // dV = dV / 1;
          // let combV = dV.add(v);
          // combV.mult(distance);
          p5.rotate(dV.heading());
          // p5.rect(0, 0, scl / 2, scl);

          p5.line(0, 0, 0, 30);
        } else {
          p5.stroke("#ffba08");

          let dV = mV.sub(bV).normalize();
          // dV = dV / 1;
          // let combV = dV.add(v);
          // combV.mult(distance);
          p5.rotate(dV.heading());
          // p5.rect(0, 0, scl / 2, scl);

          p5.line(0, 0, 0, 30);
        }
        // console.log(v);

        // p5.fill("#f22b29");
        // p5.ellipse(0, 0, scl, scl / 2);
        //  p5.rect(0, 0, scl / 2, scl);

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

export default SpikeFlow;
