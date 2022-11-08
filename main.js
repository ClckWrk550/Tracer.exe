// List of changes
// Add ranked, add buttons, change colors, increase canvas size?, Teleporting Bot, Tracer, Object-oriented approach, hardware accel

// Variables
var MENU = 0
var x = 300
var y = 200
var xspeed = 5
var yspeed = 2
var r = 25
var initialTime = 30
var timer = initialTime
var counterMiss = 0
var counterHit = 0
var percentScore = 0



function setup() {
  createCanvas(700,500)
  frameRate(60)
  cursor(CROSS)
}

function draw() {
    background(0)
    fill(255,174,0)
    rectMode(CENTER)
    rect(width/2,height/3.8,200,60,20)
    fill(255)
    textSize(21)
    textStyle(BOLD)
    textAlign(CENTER, CENTER)
    text('- Instructions - ', width/2, height/2.5)
    text('Left-Click Anywhere to Start',width/2,height/2)
    text('Press "R" Key at Any Time to Reset', width/2, height/1.75)
    textSize(31)
    textAlign(CENTER,CENTER)
    text('TRACER',width/2,height/3.75)
  
    // Run game if statement
  if (MENU == 1) {
    
    // Check if mouse is within the bounds of the ellipse
  if (timer > 0) {
    if (mouseX > (x-r) && mouseX < (x+r) && mouseY > (y-r) && mouseY < (y+r)){
    counterHit++
    fill(255,174,0)
    }
  else {
    counterMiss++ 
    }
  }
    text(int(nf(percentScore, 2, 2)) + " %",100,15)
    
    // Create Ellipse Target, 2nd place because fill applies to ellipse
    background(0)
    ellipse(x, y, r*2, r*2)
    x += xspeed;
    y += yspeed;
    if (x > width - r || x < r) {
    xspeed = -xspeed;
    }
    if (y > height - r || y < r) {
    yspeed = -yspeed;
    }
    
    // Timer for game + green,yellow,red visuals
    if (frameCount % 60 == 0 && timer > 0) {
      timer--
    }
    
    textSize(15)
    textStyle(BOLD)
  
    if (timer > 19) {
    fill(0,255,0)
    text('Timer: ' + timer, 40, 15)
    }
    
    else if (timer > 9) {
    fill(255,255,0)
    text('Timer: ' + timer, 40, 15)
    }
    
    else if (timer > 0) {
    fill(255,0,0)
    text('Timer: ' + timer, 40, 15)
    }  
    
    // Define what happens when timer = 0
  if (timer == 0) {
    background(0)
    fill(255)
    textSize(31)
    textStyle(BOLD)
    text("GAME OVER", width/2, height/3)
    textSize(21)
    text("Score: " + int(counterHit) + " / " + (int(counterHit + counterMiss)), width/2, height/2.35)
    percentScore = (float(counterHit/(counterHit + counterMiss))) * 100
    text("Accuracy: " + nf(percentScore, 2, 2) + " %", width/2, height/2)
         
    }
    
    // Return to menu, Reset variables
  if (keyIsDown(82)) {
    MENU = 0
    timer = initialTime
    x = width/2
    y = height/2
    counterMiss = 0
    counterHit = 0
    percentScore = 0
    }
  }
}

// Start Game (mouseClicked = default function)
function mouseClicked() {
  if (MENU == 0) {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        MENU = 1
    }
  }
}
