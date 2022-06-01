
var minuteInSeconds = (minute() * 60) + second();
var hourInSeconds = (hour() % 12) * 3600 + minuteInSeconds;
var secondInSeconds = second();

function setup(){
  createCanvas(500,500);
  background(255);
  frameRate(60);
  timeToAngle(10, 's');
}

function draw(){
  background(255);
  updateTime();
  clockFace();
}


function timeToAngle(time, type){
if(type == 'h'){
  return(time * (TWO_PI / (12.0 * 60.0 * 60.0)) -  PI/2);
}
if(type == 'm'){
  return(time * (TWO_PI / 3600.0) - PI/2);
}
if(type == 's'){
  return(time * (TWO_PI / 60.0) - PI/2);
}
else{
  return(0.0);
}
}
function drawHand(time, type){
  stroke(0);
if(type == 'h'){
  line(250,250, 250 + (100 * cos(timeToAngle(time, type))), 250 + (100 * sin(timeToAngle(time,type))));
}
if(type == 'm'){
  line(250,250, 250 + (150 * cos(timeToAngle(time, type))), 250 + (150 * sin(timeToAngle(time,type))));
}
if(type == 's'){
  stroke(255,0,0);
  line(250,250, 250 + (150 * cos(timeToAngle(time, type))), 250 + (150 * sin(timeToAngle(time,type))));
}
}
function clockFace(){
  fill(100,100,255,50);
  stroke(100,100,255);
  circle(250,250,450);
  for(var i = 0; i < 12; i++){
    float angle = (TWO_PI / 12) * i;
    line(225 * cos(angle) + 250, 225 * sin(angle) + 250, 200 * cos(angle) + 250, 200 * sin(angle) + 250);
   }
  drawHand(secondInSeconds, 's');
  drawHand(minuteInSeconds, 'm');
  drawHand(hourInSeconds,'h');
}
function updateTime(){
  minuteInSeconds = (minute() * 60) + second();
  secondInSeconds = second();
  hourInSeconds = (hour() % 12) * 3600 + minuteInSeconds;
}
