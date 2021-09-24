const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['red', 'yellow', 'green', 'white'];
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up')
});

const timeList = document.querySelector('#time-list');
timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
})

const setTime = (value) => {
  timeEl.innerHTML = `00:${value}`;
};
// Controls
function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
};

function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Ваш счет: <span class='primary'>${score}</span></h1>`
};

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
};

// UI
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
};

function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);;

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  setColor(circle);

  board.append(circle);
};

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px${color}`;
};

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index]
};

function winTheGame() {
  function kill() {
    const element = document.querySelector('.circle');
    if (element) {
      element.click()
    }
  }

  setInterval(kill, 42)
};