document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("grid");
  const gridInputBtn = document.getElementById("gridBtn");
  const clearBtn = document.getElementById("clear");

  gridInputBtn.addEventListener("click", () => {
    const gridInput = +prompt("Enter size of the grid between (1-100)");
    if (gridInput < 1 || gridInput > 100) {
      alert("Grid size should be between 1 - 100");
      return;
    }
    getGridSize(gridInput);
  });

  clearBtn.addEventListener("click", () => {
    const cells = container.querySelectorAll(".grid-cell");

    cells.forEach((cell) => {
      cell.style.backgroundColor = "#fafafa";
    });
  });
  function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getGridSize(size) {
    container.innerHTML = "";

    const containerWidth = 400;
    const cellSize = containerWidth / size;

    for (let i = 0; i < size * size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
      cell.style.border = "1px solid black";
      cell.style.backgroundColor = "#fafafa";
      cell.style.cursor = "pointer";

      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = generateRandomColor();
      });

      container.appendChild(cell);
    }
  }

  getGridSize(16);
});
