function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  noFill(); //This sets the fill color of any shapes drawn to transparent, so that only the stroke color is visible.
  strokeWeight(1);
  for (let i = 1; i < 3; i++) {  //This loop iterates twice, creating two cylinders.
    let x = random(width); //his assigns a random x position for the cylinder within the canvas.
    let size = random(200, 60); //This assigns a random size for the cylinder between 200 and 60 pixels.
    let r = random(255); //These lines generate a random RGB color and set it as the stroke color for the cylinder.
    let g = random(255);
    let b = random(255);
    stroke(r, g, b);
    cylinder(x + size, size);
  }
}

/*Q1. Which assignment it is?
stochastic drawing technique.

Q2. How your code uses the featured technique to achieve interesting results?
The code creates two randomly positioned and colored cylinders using the random() function. The random() function generates a random number between a 1 and 3.
The code uses the stroke() function to set the color of the cylinders and the cylinder() function to draw the shapes. The noFill() function is used to make the cylinders appear as wireframes.

Q3. What you like about the end results?
I like how the code creates two distinct 3D shapes that have a random size and color. The unpredictability of the output is a great feature of the stochastic drawing technique and makes the results unique and interesting. I also like the the way the black background makes the cylinders pop. Overall, this code is a great example of how the stochastic drawing technique can be used to create visually appealing and interactive drawings.*/