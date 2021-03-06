let density = 15;
let noiseVal = 0.5;
let width = 1000;
let height = 1000;
let speed = 1;
let x = 0;
let y = 0;
let dir = 0;
let size = 20;
let canvas;

function setup(){
  width = windowWidth;
  height = windowHeight;
  canvas = createCanvas(width, height);
  drawMap();
}

function draw(){
  checkKeys();
  noStroke();
  fill(0);
  rect(width / 2, height / 2, size, size);

  fill(255, 0, 0);
  if(dir == 0){
    rect(width / 2, (height / 2) - size, size, size);
  }else if(dir == 1){
    rect((width / 2) + size, height / 2, size, size);
  }else if(dir == 2){
    rect(width / 2, (height / 2) + size, size, size);
  }else{
    rect((width / 2) - size, height / 2, size, size);
  }
}

function drawMap(){
  noStroke();
  for(let i = x; i < (width / density) + x; i++){
    for(let j = y; j < (height / density) + y; j++){
      let n = noise((i * 5) / (1000), (j * 5) / (500));
      if(n > 0 && n <= noiseVal){
        if(n <= 0.25){
          fill(50, 50, 50);
        }else{
          fill(0, 255, 0);
        }
      }else if(n > noiseVal){
        if(n <= noiseVal + .03){
          // Yellow
          fill(205, 185, 105);
        }else if(n <= noiseVal + .06 && n > noiseVal + 0.3){
          // BLUE
          fill(0, 0, 155);
        }else{
          fill(0, 0, 255);
        }
      }

      // BLACK AND WHITE
      //fill(255 * n, 255 * n, 255 * n);
      rect((i - x) * density, (j - y) * density, density, density);
      //line((i - x) * density, (j - y) * density, (i - x) * density, (j - y) * density);
    }
  }
}


function checkKeys(){

  if(keyIsDown(16)){
    speed = 2;
  }else{
    speed = 1;
  }

  if(keyIsDown(68)){
    x += speed;
    dir = 1;
    drawMap();
  }if(keyIsDown(65)){
    x -= speed;
    dir = 3;
    drawMap();
  }if(keyIsDown(87)){
    y -= speed;
    dir = 0;
    drawMap();
  }if(keyIsDown(83)){
    y += speed;
    dir = 2;
    drawMap();
  }
}
