
let res = 30;
let numshapes = 10;
//let [][] field;
let cols, rows;
var shapes = [];
let shadowposx, shadowposy,shadowlimx, shadowlimy, shadowincy;
let shadowinc = 0.1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	canvas.style('z-index', '-1');
	stroke(0)
	strokeWeight(res/10);
	smooth();
	background(150,150,255)
	cols = floor(width / res);
  rows = floor(height / res);
	for(let i = 0; i < 6; i++){//(let i = 0; i < numshapes; i++){
		 shapes.push(new Shape(createVector(random(windowWidth*0.25, windowWidth*0.75), random(windowHeight*0.25, windowHeight*0.75)),i));//,int(random(0, 6))));
	}

	shadowlimx = res/1.3;
	shadowlimy = res/2;

	shadowposx = 0
	shadowposy = 0;
	shadowincy = shadowinc/5;
}

function draw() {
	background(150,150,255)

	shapes.sort((a, b) => (a.position.y > b.position.y) ? 1 : -1)

	for(let i = 0; i < 6; i++){
		let tempRand = random()
		if(tempRand < 0.0005){
			shapes[i].getnewpos();
		}
		 shapes[i].run()
	}

	//shadowposx += shadowinc;
		//shadowposy += shadowincy
	//print(shadowposx)
	if ((shadowposx > shadowlimx) ){
		shadowinc =  shadowinc * -1;

	} else if (shadowposx < (shadowlimx*-1 + res/1.3)) {
		shadowinc =  shadowinc * -1;
	}
	if (shadowposx> (shadowlimx/2)-0.1 && shadowposx < (shadowlimx/2)+0.01){
		shadowincy *= -1
		print("now!")
	}



//myCircle(100,100);
//myTriangle(200, 100);
//mySquare(300, 100);
//myCone(400, 100)
//myTorus(500,100, 30)
}

function mouseClicked() {
    shapes[int(random(0,numshapes))].getnewpos();
}


class Shape {
	constructor(position, type){
		this.position = position.copy();
		this.acceleration = createVector(0, 0);
		this.velocity = createVector(1000,1000);
		this.newpos = createVector(1000,1000);
		this.type = type;
		this.moving = false;
		this.hasnewpos = false;
		this.res = map(this.position.y, 0, windowHeight, 20, 60)
	}

	run(){
		this.display()
		if(this.moving){
			this.update()
		}
	}

	update(){
		if(this.hasnewpos == false){
			//this.newpos = createVector(random(windowWidth*0.25, windowWidth*0.75), random(windowHeight*0.25, windowHeight*0.75));
		//	this.newpos = createVector(500,500);
			//this.hasnewpos = true
			//this.velocity = p5.Vector.sub(this.newpos , this.position);
		}
		//this.newpos.sub(this.position);
		//this.acceleration = this.newpos.sub(this.position)
		//this.velocity = this.newpos
		//this.velocity.mult(.5)
		//this.velocity.add(this.acceleration);
		this.velocity.limit(2)
		this.position.add(this.velocity);

		this.res = map(this.position.y, 0, windowHeight, 10, 60)

		let distance = p5.Vector.dist(this.newpos, this.position)
		if(distance<=10){

			this.moving = false;
		}
	}

	getnewpos(){
		this.moving = true
		this.newpos = createVector(random(windowWidth*0.25, windowWidth*0.75), random(windowHeight*0.25, windowHeight*0.75));
		this.velocity = p5.Vector.sub(this.newpos , this.position);

	}


	display(){
		if(this.type == 0){
			myCircle(this.position.x, this.position.y, this.res)
		} else if(this.type ==1){
			myTriangle(this.position.x, this.position.y, this.res)
		}else if(this.type ==2){
			mySquare(this.position.x, this.position.y, this.res)
		}else if(this.type ==3){
			myCone(this.position.x, this.position.y, this.res)
		}else if(this.type ==4){
			myCylinder(this.position.x, this.position.y, this.res)
		}else if(this.type ==5){
			myTorus(this.position.x, this.position.y, this.res)
		}
	}
}



function myCircle(x, y, res){
	strokeWeight(res/10);
	//shadow
	fill(10,10,10)
	noStroke()
	//ellipse(x, y+res, res, res/5)
	//ellipse(x + shadowposx, y+res + shadowposy, res, res/5)
	ellipse(x + shadowposx, y+res + shadowposy, res, shadowposy*2 + res/5)

	stroke(0)
	//shape
	fill(240,30,0)
	ellipse(x + res/2,y+res/2,res,res);
	noStroke()
	fill(240,130,30)
	ellipse(x + res/1.3,y+res/3,res/4,res/4);
	stroke(0)
	strokeWeight(res/10);
}

function myTriangle(x, y,res){
	strokeWeight(res/10);
	//shadow
	fill(10,10,10)
	noStroke()
	ellipse(x + shadowposx, y+res + shadowposy, res, shadowposy*2 + res/5)
	stroke(0)
	//shape
	fill(25,100,30)
	 triangle(x + (res/2), y, x, y+res, x+res, y+res);
	 //noStroke()
 	stroke(65,150,30)
 	line(x + (res/2), y, x+res/1.2, y+res);
	noFill()
	stroke(0)
	triangle(x + (res/2), y, x, y+res, x+res, y+res);
 	stroke(0)
 	strokeWeight(res/10);
}

function mySquare(x, y, res){
	strokeWeight(res/10);
	//shadow
	fill(10,10,10)
	noStroke()
	//ellipse(x, y+res, res, res/5)
	ellipse(x + shadowposx, y+res + shadowposy, res, shadowposy*2 + res/5)
	stroke(0)
	//shape
	fill(255,255,100)
	//rect(x+res/3,y-res/3,res,res);
	beginShape();
	vertex(x, y);
	vertex(x+(res/3), y-(res/3));
	vertex(x +res + (res/3), y - (res/3));
	vertex(x + res +res/3, y + res - res/3);
	vertex(x +res, y + res);
	vertex(x + res, y);
	endShape(CLOSE);
	line(x+res,y,x+res + res/3, y-res/3)
	fill(235,135,10)
	line(x,y+res/10,x+res, y+res/10)
	line(x+res - res/10, y+res/10, x+res-res/10, y+res)
	//noFill();
	stroke(0)
	rect(x,y,res-res/50,res+res/15);
 	strokeWeight(res/10);
}

function myCone(x, y, res){
	strokeWeight(res/10);
	//shadow
	fill(10,10,10)
	noStroke()
	//ellipse(x, y+res+res/10, res, res/5)
	ellipse(x + shadowposx, y+res*1.1 + shadowposy, res, shadowposy*2 + res/5)
	stroke(0)
	//shape
	noStroke()
	fill(200,0,200)
	triangle(x + (res/2), y, x, y+res, x+res, y+res);
	strokeWeight(res/10);
	line(x+res/2, y, x, y+res )
	line(x+res/2, y, x+res, y+res)
	stroke(250,0,250)
	line(x + (res/2), y, x+res/1.2, y+res);
	stroke(0)
	line(x+res/2, y, x, y+res )
	line(x+res/2, y, x+res, y+res)
	curve(x+(res), y+ res +(-res),x, y+res, x+res, y+res, x+res-(res), y+res - (+res));
}

function myCylinder(x, y, res){
	strokeWeight(res/10);
	//shadow
	fill(10,10,10)
	noStroke()
	//ellipse(x+res/5, y+res+res/10, res, res/5)
	ellipse(x + shadowposx, y+res + shadowposy, res, shadowposy*2 + res/5)
	stroke(0)
	//shape
	fill(20,0,240)
	rect(x+ res/4,y,res/2,res);
	stroke(40,40,255)
	line(x + res/1.6,y,x + res/1.6,y+res)
	stroke(0);
	noFill()
	rect(x+ res/4,y,res/2,res);
	fill(40,40,255)
	ellipse(x + res/2,y,res/2,res/5);
}
function myTorus(x, y, res){
	strokeWeight(res/10);
	//shadow
	fill(10,10,10)
	noStroke()
	//ellipse(x, y+res, res, res/5)
	//ellipse(x + shadowposx, y+res + shadowposy, res, res/5)
	ellipse(x + shadowposx, y+res + shadowposy, res, shadowposy*2 + res/5)

	stroke(0)
	//shape
	fill(200,200,200)
	ellipse(x + res/2,y+res/2,res*1.5,res);
	fill(255,255,255)
	noStroke()
	ellipse(x + res/2,y+res/3,res*1.1,res/2);
	stroke(0)
	//fill(240,130,30)
	line(x + res/3,y+res/3, x+ res - res/3, y + res/3);
	stroke(0)
	strokeWeight(res/10);
}
