//Select the div container id
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("button");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(4, 4);

const gridItem = document.getElementById("grid-item");

function changeColor() {
    document.getElementById("grid-item").style.color =
}

gridItem.addEventListener("mouseenter", changeColor);
  // This handler will be executed every time the cursor
  // is moved over a different list item
gridItem.addEventListener("mouseover", changeColor); 

function adjustGrid() {
    return "poop poop";
}
// need to get the grid boxes to change color based on hover


// include userInput box so the user can determine the size of the grid *work on this next I think it would be the easiest to get working