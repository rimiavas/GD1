// Setting up initial values for the waveform
let wavelength = 200;
let amplitude = 50;
let frequency = 0.05;
let phase = 0;
var music;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
}


function draw() {
  background(0);
// Creating a sinusoidal waveform using the sin() function
// which is a combination of two sin functions with different frequencies
  for (let x = 0; x < width; x += 10) {
    const y = height / 2 + sin((x + phase) * frequency) * amplitude * sin(x / wavelength);
    const col = color((x / width) * 360, 80, 80);
    stroke(col);
    line(x, y, x + 10, y);
  }
// Adjusting the phase, amplitude, frequency and wavelength based on the mouse position
  phase += 10;
  amplitude = map(mouseY, 0, height, 10, 100);
  frequency = map(mouseX, 0, width, 0.01, 0.1);
  wavelength = map(mouseY, 0, height, 50, 200);
}

/*
function keyPressed() {
    if (!(audioInitialised || audioStarting)) {
        startAudio();
    }
}
*/
/*Q1. Which assignment it is?
sinusoidal animation technique.

Q2. How your code uses the featured technique to achieve interesting results?
The code generates a sound wave-like pattern by using the sin() function, which creates a smooth sinusoidal curve. It uses different variables, such as wavelength, amplitude, frequency, and phase, to alter the appearance of the wave.

The code draws a series of lines that move up and down, creating a visually pleasing wave-like effect. The color of each line is determined by its position along the x-axis, creating a gradient that moves from red to blue.

The code also maps the amplitude, frequency, and wavelength variables to the user's mouse movements, which allows for interactivity and a personalized viewing experience.

Q3. What you like about the end results?
I like how the code creates a dynamic  wave-like effect that responds to user input. The interactivity provided by mapping the variables to mouse movement is a great addition and makes the code even more engaging. however, i would have liked to add sound to it so that it. So that the waves moves according to the sound.*/