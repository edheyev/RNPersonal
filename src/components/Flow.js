// import React, { useEffect } from "react";
// import Sketch from "react-p5";
// import axios from "axios";

// let centerX;
// let centerY;
// let scl = 50;
// let increment = 1;
// let cols = 0;
// let rows = 0;
// let zoff = 0;
// let def = 10;
// let blobAr = [];
// let blobAr2 = [];
// let blobception = 3;

// function Flow() {
//   const setup = (p5, canvasParentRef) => {
//     const canvas = p5
//       .createCanvas(p5.windowWidth, p5.windowHeight)
//       .parent(canvasParentRef);
//     canvas.position(0, 0);
//     p5.noStroke();
//     canvas.style("z-index", "-1");
//     centerX = p5.windowWidth / 2;
//     centerY = p5.windowHeight / 2;

//     cols = Math.floor(p5.windowWidth / scl);
//     rows = Math.floor(p5.windowHeight / scl);
//     blobAr = Array.apply(null, Array(5)).map(function () {});
//     let r = 300;
//     let pi = Math.Pi;

//     for (let j = 0; j < blobception; j++) {
//       for (let i = 0; i < def; i++) {
//         let wedge = (Math.PI * 2) / def;
//         let angle = wedge * i;

//         blobAr[j][i] = {
//           x: r * Math.cos(angle) + p5.windowWidth / 2,
//           y: r * Math.sin(angle) + p5.windowHeight / 2,
//           angle: angle,
//           noiseStep: 0,
//         };
//         blobAr2[j][i] = {
//           x: r * 0.75 * Math.cos(angle) + p5.windowWidth / 2,
//           y: r * 0.75 * Math.sin(angle) + p5.windowHeight / 2,
//           angle: angle,
//           noiseStep: 0,
//         };
//       }
//     }
//     // blobAr.map((point, i) => {
//     //   let angle = ((i * def) / Math.PI) * 2;
//     //   return (point = {
//     //     x: r * Math.cos(angle) + p5.windowWidth / 2,
//     //     y: r * Math.sin(angle) + p5.windowWidth / 2,
//     //     angle: angle,
//     //   });
//     // });
//     p5.background(100, 100, 100);
//   };

//   const draw = (p5) => {
//     p5.background(200, 200, 200);

//     p5.background(200, 200, 200);
//     // p5.pop();

//     p5.beginShape();
//     p5.fill("black");
//     console.log(blobAr);

//     blobAr[0].forEach((point) => {
//       let noisex = p5.noise(point.x, point.y, zoff);
//       let noisey = p5.noise(point.x, point.y, zoff + 100);

//       noisex = p5.map(noisex, 0, 1, -200, 200);
//       noisey = p5.map(noisey, 0, 1, -200, 200);

//       p5.vertex(point.x + noisex * 1, point.y + noisey * 1);
//     });
//     p5.endShape();

//     p5.fill("white");
//     p5.beginShape();
//     blobAr2.forEach((point) => {
//       let noisex = p5.noise(point.x, point.y, zoff);
//       let noisey = p5.noise(point.x, point.y, zoff + 100);

//       noisex = p5.map(noisex, 0, 1, -100, 100);
//       noisey = p5.map(noisey, 0, 1, -100, 100);

//       p5.vertex(point.x + noisex * 1, point.y + noisey * 1);
//     });
//     zoff += 0.001;

//     p5.endShape();
//     zoff += 0.001;

//     let yoff = 0;

//     for (let y = 0; y < rows + 1; y++) {
//       let xoff = 0;

//       for (let x = 0; x < cols; x++) {
//         let index = (x + y * p5.windowHeight) * 4;

//         // let noise = p5.noise(xoff, yoff, zoff);

//         // let v = p5.createVector(); //noise * (Math.PI / 180));
//         // console.log(xoff, yoff, zoff);
//         // v = p5.Vector.fromAngle(noise * (Math.PI / 180));

//         xoff += increment;
//         // p5.ellipse(100, noise * 1000, 5000, 100);
//         // p5.push();
//         // p5.translate(x * scl, y * scl);
//         // p5.rotate(noise * 10);

//         // p5.fill("black");
//         // p5.rect(0, 0, scl, scl);
//         // p5.background(200, 200, 200);
//         // // p5.pop();
//         // p5.beginShape();
//         // blobAr.forEach((point) => {
//         //   p5.vertex(point.x + noise * 100, point.y + noise * 100);
//         // });

//         // p5.endShape();

//         //
//         // p5.ellipse(blobAr[0].x, blobAr[0].y, 100, 100);
//       }
//       yoff += increment;
//       zoff += 0.0001;
//     }
//   };
//   return <Sketch setup={setup} draw={draw} />;
// }

// export default Flow;
