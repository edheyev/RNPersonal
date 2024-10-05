import React, { useEffect } from "react";
import Sketch from "react-p5";
import axios from "axios";

const BckgrndSketch = () => {
  let eyes = [];
  let t = 0;
  useEffect(() => {
    axios
      .get("http://palett.es/API/v1/palette/monochrome/between/0.55/0.99")
      .then((response) => {
        console.log(response);
      });
  });

  const setup = (p5, canvasParentRef) => {
    const canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");

    p5.background(150);

    while (eyes.length < 150) {
      var circle = {
        x: p5.random(p5.windowWidth),
        y: p5.random(p5.windowHeight),
        r: p5.random(600),
      };

      var overlapping = false;

      for (let j = 0; j < eyes.length; j++) {
        let other = eyes[j];
        let d = Math.sqrt(
          Math.pow(other.cenX - circle.x, 2) +
            Math.pow(other.cenY - circle.y, 2)
        );
        console.log(other.x, circle.x);
        if (d < circle.r + other.r) {
          //overlapping
          overlapping = true;
          break;
        }
      }
      if (!overlapping) {
        // const c = colorAr[]
        const bt = Math.floor(p5.random(100, 1000));
        eyes.push(new Eyeball(circle.x, circle.y, circle.r));
      }
    }
  };

  const draw = (p5) => {
    t++;
    if (t > 10000) {
      t = 0;
    }
    p5.background(60);
    for (let i = 0; i < eyes.length; i++) {
      eyes[i].Display(p5);
    }
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

function Eyeball(_cenX, _cenY, _r, _color, _blinkTime) {
  this.cenX = _cenX;
  this.cenY = _cenY;
  this.r = _r;
  this.color = _color;
  this.blinkTime = _blinkTime;
}

Eyeball.prototype.Display = function (p5) {
  p5.strokeWeight(this.r / 15);
  p5.fill(255);
  p5.ellipse(this.cenX, this.cenY, this.r * 2, this.r * 2);
  let v1 = p5.createVector(p5.mouseX - this.cenX, p5.mouseY - this.cenY);
  v1.normalize();
  p5.fill(30, 40, 100);
  p5.ellipse(
    v1.mult(this.r / 2).x + this.cenX,
    v1.y + this.cenY,
    this.r / 2,
    this.r / 2
  );
  p5.fill(0);
  p5.ellipse(
    v1.x + this.cenX + this.r / 100,
    v1.y + this.cenY + this.r / 100,
    this.r / 6,
    this.r / 6
  );
};

export default BckgrndSketch;
