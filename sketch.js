function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(255);
  
    // Draw a random ellipse at a random location
    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), random(10, 100), random(10, 100));
  }
  