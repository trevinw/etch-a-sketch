let gridContainer = document.getElementById("grid-container");
let clearButton = document.getElementById("clear-grid");
clearButton.addEventListener("click", clearGrid);
gridContainer.onload = createGrid();

function createGrid() {
    let size = prompt("Enter width/height of grid:");
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let gridDiv = document.createElement("div");
            let edgeLength = 700/size;
            gridDiv.className = "grid";
            gridDiv.style.width = edgeLength + "px";
            gridDiv.style.height = edgeLength + "px";
            gridDiv.addEventListener("mouseover", fillGrid);
            gridContainer.append(gridDiv);
        }
    }
}

function fillGrid() {
    this.style.backgroundColor = "black";
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid();
}