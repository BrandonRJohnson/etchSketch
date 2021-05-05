//Select the div container id
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.setAttribute("id", `${c}` );
  };
};

makeRows(4, 4);

let gridItems = document.getElementsByClassName("grid-item");

function changeColor() {
  gridItems[4].style.backgroundColor = "peachpuff";
  console.log("1");
}

function generateRandomColor() {
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

for (i=0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("mouseenter", function(e) {
    e.target.style.background = generateRandomColor();
  })
}

//make it so makeRows takes user input

// make it so there's a reset button that wipes the grid the clean
function resetGrid() {
 // need to add event listener (might not need this
 // when event happens, it should trigger the deleting the background color from every object that belongs to the class grid-item
 for (i=0; i < gridItems.length; i++) {
  let x = document.getElementById(i);
  x.style.backgroundColor = null;
  console.log('crap');
 }
}

// include userInput box so the user can determine the size of the grid *work on this next I think it would be the easiest to get working