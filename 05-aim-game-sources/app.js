const startBtn = document.querySelector("#start");
const reStartBtn = document.querySelector("#re-start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector(".time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
let time = 0;
let score = 0;
let refreshIntervalId;

const colors = [
  "#e40303",
  "#ff8c00",
  "#ffed00",
  "#008026",
  "#004dff",
  "#750787",
];

const history = [];

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

reStartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens.forEach((s) => {
    s.classList.remove("up");
  });
  timeEl.parentNode.classList.remove("hide");
  screens[0].classList.add("up");
  board.innerHTML = ``;
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  refreshIntervalId = setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
    clearInterval(refreshIntervalId);
  } else {
    let current = --time;
    if (current < 10) current = `0${current}`;
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.classList.add("hide");
  const result = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`;
  board.innerHTML = result;
  history.push(score);
  if (history) {
    board.innerHTML = `${result}
    <p>Previous results: ${history.join(", ")}</p>`;
  }
  if (!history) board.innerHTML = result;
}

function restartGame() {
  startGame();
}

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  const color = getRandomColor();
  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.backgroundColor = `${color}`;
  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
