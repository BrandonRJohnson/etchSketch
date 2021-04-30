//Select the div container id
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.setAttribute("id", "sketch" + `${c}` );
  };
};

makeRows(4, 4);

// let gridItem = document.getElementsByClassName("grid-item");
let gridItems = document.getElementsByClassName("grid-item");

function changeColor() {
  // document.getElementById(`sketch${i}`).style.backgroundColor = "magenta";
  gridItems[4].style.backgroundColor = "peachpuff";
  console.log("1");
}

// document.getElementsByClassName("grid-item").addEventListener("mouseover", changeColor); 

for (i=0; i < gridItems.length; i++) {
  // gridItems[i].addEventListener("mouseenter",changeColor);
  gridItems[i].addEventListener("mouseenter", function(e) {
    e.target.style.background = "papayawhip";
  })
}

// include userInput box so the user can determine the size of the grid *work on this next I think it would be the easiest to get working