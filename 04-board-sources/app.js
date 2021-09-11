const board = document.querySelector("#board");
const colors = [
  "#e40303",
  "#ff8c00",
  "#ffed00",
  "#008026",
  "#004dff",
  "#750787",
];
const SQUARES_NUMBERS = 450;

let currentSerial = 0;

for (let i = 0; i < SQUARES_NUMBERS; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  const color = getSerialColor();

  square.addEventListener("mouseover", () => {
    setColor(square, color);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square, color);
  });
  board.append(square);
}

function setColor(element, color) {
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${colors}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getSerialColor() {
  if (currentSerial >= colors.length) currentSerial = 0;
  return colors[currentSerial++];
}
