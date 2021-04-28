//Select the div container id
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);
// Need to create 64 squares in container div using DOM
// Wondering here if we can use a while loop to create these 64 squares instead of doing them all individually 
let content = document.createElement('div');
let squareCount = 0;

while (squareCount < 64) {
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


