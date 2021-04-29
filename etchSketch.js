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

let gridItem = document.getElementById("grid-item");

gridItem.addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    event.target.style.color = "purple";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
  
  // This handler will be executed every time the cursor
  // is moved over a different list item
gridItem.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
// need to get the grid boxes to change color based on hover


// include userInput box so the user can determine the size of the grid *work on this next I think it would be the easiest to get working