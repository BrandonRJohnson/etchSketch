//Select the div container id
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.setAttribute("id", "sketch");
  };
};

makeRows(4, 4);

let gridItem = document.getElementsByClassName("grid-item");

function changeColor() {
  document.getElementById("sketch").style.color = purple;
  console.log("1")
}

document.getElementById("sketch").addEventListener("mouseenter", changeColor);
document.getElementById("sketch").addEventListener("mouseover", changeColor); 

function adjustGrid() {
    return "poop poop";
}

// include userInput box so the user can determine the size of the grid *work on this next I think it would be the easiest to get working