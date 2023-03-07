const colorPalette = document.getElementById("color-palette");
const colorBoxes = document.querySelectorAll(".color-box");
const generateButton = document.getElementById("generate-btn");

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette() {
  colorBoxes.forEach((box) => {
    const color = generateRandomColor();
    box.style.backgroundColor = color;
    box.innerText = color;
  });
}

generatePalette();

generateButton.addEventListener("click", generatePalette);
    