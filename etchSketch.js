//Select the div container id

const container = document.querySelector('#container');

// Need to create 64 squares in container div using DOM
// Wondering here if we can use a while loop to create these 64 squares instead of doing them all individually 
let div = document.createElement('div');
let squareCount = 0;

While (squareCount < 64); {
    document.createElement('div');
    container.appendChild('div');
    squareCount ++;
}

console.log(squareCount);
// Those squares need to be formatted into a larger square using CSS

// Set up a hover effect so that the grid divs
    // Can set up event listeners in order to receive that input

// Make the color of the divs change
    // Option 1: adding a new class to the div1
    // Option 2: changing the div's background color using javascript

// Add a button at the top of the screen to clear the current grid


