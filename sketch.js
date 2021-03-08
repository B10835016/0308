let x=0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  //if(mousePresssed){} else{}
  if(mousePresssed){
  fill(mouseX, mouseY, 20+5*sin(x));
  circle(mouseX, mouseY, 20+5*sin(x));
  }else{
  fill(mouseX, mouseY, 20+5*sin(x));
  rect(mouseX, mouseY, 20+5*sin(x), 20+5*sin(x));
  }
  x=x+0.1;
}