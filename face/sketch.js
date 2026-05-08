function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

}

function draw() {
  background(220);
  
  fill(251,206,177); //얼굴 색
  ellipse(200,200,300,275); // 얼굴
  fill(0,0,0); // 눈
  circle(130,150,30);
  circle(270,150,30);
  fill(251,206,177); //코
  triangle(200,175,170,225,230,225);
  fill(255,0,0);
  arc(200,250,200,100,0,180,OPEN,);
  fill(0,0,0);
  arc(200,75,200,100,360,0,OPEN,);
  
}