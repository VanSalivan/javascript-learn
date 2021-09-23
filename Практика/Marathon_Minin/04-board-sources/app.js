const board = document.querySelector('#board');
const SQUARES_NUMBER = 700;
const color = "#1d1d1d";
const colors = ['#03045e', '#023e8a', '#0077b6', '#0096c7', '#00b4d8', '#48cae4', '#90e0ef', '#ade8f4', '#caf0f8'];

function setColor(event) {
  const color = getRandomColor();
  const element = event.target;
 
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px${color}`;
}

function removeColor(event) {
  const element = event.target;
  
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);

  // Или через замыкание
  // square.addEventListener('mouseover', () => {
  //   setColor(square)
  // })

  // square.addEventListener('mouseleave', () => {
  //   removeColor(square)
  // })

  board.append(square);
}



