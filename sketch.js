let inc = 0.1;
let xscl = 50;
let yscl = 50;
let scl = 50;
let cols, rows, alph;
let zoff = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  xscl = floor(windowWidth / 20);
  yscl = floor(windowHeight / 30);

  cols = floor(windowWidth / xscl);
  rows = floor(windowHeight / yscl);
  noStroke();
}

function draw() {
  rows = floor(windowWidth / xscl);
  cols = floor(windowHeight / yscl);
  background("#003840");
  fill(" #f1bd33 ");
  ellipse(mouseX, mouseY, 500, 500);
  let yoff = 0;
  for (let y = 0; y < cols + 1; y++) {
    let xoff = 0;
    for (let x = 0; x < rows + 1; x++) {
      //let index = (x + y * windowWidth) * 4;

      let angle = noise(xoff, yoff, zoff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      xoff += inc;

      push();

      translate(x * xscl, y * yscl);
      rotate(PI / 4);
      fill("#005A5B");
      rect(0, 0, scl, scl);
      rotate(v.heading());
      fill("#007369");
      line(0, 0, scl, 0);
      fill("#008C72");
      ellipse(0, 0, scl, scl / 2);
      fill("#02A676");
      rect(scl, scl, scl / 2, scl / 2);

      pop();
    }
    yoff += inc;
    zoff += 0.0001;
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
