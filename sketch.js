
let textYpos = 200;
let textXpos = 0;

let dropSpeed = 5;

let xSpacing = 15;
let ySpacing = 10;

let yInitialPos = [];

let numberLength = [];

let textXposInLine = 0;

let textYposInLine = 0;

let timeCounter = 0;

let lineGaps = [];

let topLayer;
let slider;


function setup() {
  createCanvas(windowWidth, windowHeight);
  randomizer();

  topLayer = createGraphics(width, height);
  
  topLayer.background(238,255,52);
  topLayer.textSize(50);
  topLayer.textAlign(CENTER);
  topLayer.text("진실을 감당할 수 있는자", width/2, height/2.5);
  topLayer.text("클릭하시오", width/2, height/2);
  
  topLayer.blendMode(REMOVE);
  
}

function draw() {
  background(0);
  frameRate(300);
  timeCounter ++;
  movingNumberMatrix();

  if(mouseIsPressed){
    topLayer.fill(255);
    topLayer.noStroke();
    topLayer.rect(mouseX, mouseY, random(60));
    topLayer.rectMode(CENTER);
  }
  
  image(topLayer, 0, 0);
}



function randomizer() {
  for (let a = 0; a < 100;  a++) {
  numberLength[a] = int(random(2, 20));
  yInitialPos[a] = int(random(-50, 50));
  lineGaps[a] = int(random(2, 8));
 }
}


function generateNumberMatrix() {
  textSize(12);
  fill(color(255));
  for (let xRepCounter = 0; xRepCounter < 50;  xRepCounter++) {
    for(let yRepCounter = 0; yRepCounter < numberLength[xRepCounter]; yRepCounter ++) {
      textXposInLine = textXpos + xRepCounter * xSpacing;
      for (let lineRepCounter = 0; lineRepCounter < 30; lineRepCounter ++) {
        textYposInLine = textYpos + yInitialPos[xRepCounter] + yRepCounter * ySpacing - lineRepCounter * numberLength[xRepCounter] * (ySpacing + lineGaps[xRepCounter]);
        text(int(random(0, 10)), textXposInLine, textYposInLine);
      }
    }
  }
}


function movingNumberMatrix() {
  textYpos += dropSpeed;
  generateNumberMatrix();
}
