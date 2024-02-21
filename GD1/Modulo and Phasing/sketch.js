let colorPhase = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);
}

function draw() {
  background(0);
  noFill();
  strokeWeight(1);

  const radius = height / 2 - 50;//command calculates the radius of the circle.
  let angle = TWO_PI / 20 / 2;//command calculates the angle between each ellipse.
    
// Loop through each ellipse. The outer loop iterates over each ellipse, while the inner loop iterates over the y values for each ellipse.
  for (let i = 0; i < 20; i++) {//// Loop through 20 times to draw each ellipse
    push();
    translate(width / 2, height / 2);
    rotate(angle * i + PI / 20);

    for (let y = -radius; y < radius; y += 9) {
      const x1 = width / 2 + cos(angle * i) * radius;
      const phase = (frameCount / 100) + y / 50;
      const diameter = sin(phase) * 30 + 50;
      const col = color((colorPhase + y) % 360, 100, 100, 1);
      stroke(col);
      ellipse(0, y, diameter, diameter);
    }
    pop();
  }

  colorPhase = (colorPhase + 1) % 360;
}

/*Q1. Which assignment it is?
the modulo and phasing

Q2. How your code uses the featured technique to achieve interesting results?
The code creates a cyclical color gradient using modulo to determine the hue of each ellipse, and uses phasing to animate the size of the ellipses along the y-axis. The combination of these techniques creates a visually appealing wave-like animation. I wanted it to create a kalidoscope like effect.

Q3. What you like about the end results?
I particularly like how the combination of the color gradient and ling and yang like animation creates a split represented in differnt colour and shape size. Each wave is drawn independently of the others, adding to the overall effect of the animation. Overall, this is a really neat piece of code that showcases the power of combining different techniques to create interesting results.*/
