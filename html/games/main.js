const gridSize = 20;
const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');

const cells = [];
for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  game.appendChild(cell);
  cells.push(cell);
}

let snake = [42, 41];
let direction = 1;
let food = 0;
let score = 0;
let interval = 200;

function draw() {
  cells.forEach(cell => cell.className = 'cell');
  snake.forEach(i => cells[i].classList.add('snake'));
  cells[food].classList.add('food');
}

function placeFood() {
  do {
    food = Math.floor(Math.random() * cells.length);
  } while (snake.includes(food));
}

function move() {
  const head = snake[0];
  const x = head % gridSize;
  const y = Math.floor(head / gridSize);

  let newHead = head + direction;

  // Mur
  if (
    (direction === 1 && x === gridSize - 1) ||
    (direction === -1 && x === 0) ||
    (direction === gridSize && y === gridSize - 1) ||
    (direction === -gridSize && y === 0)
  ) return gameOver();

  if (snake.includes(newHead)) return gameOver();

  snake.unshift(newHead);

  if (newHead === food) {
    score++;
    scoreDisplay.textContent = 'Score : ' + score;
    placeFood();
  } else {
    snake.pop();
  }

  draw();
}

function gameOver() {
  clearInterval(gameLoop);
  alert('Game Over ! Score : ' + score);
  location.reload();
}

function changeDirection(dir) {
  if (dir === 'up' && direction !== gridSize) direction = -gridSize;
  else if (dir === 'down' && direction !== -gridSize) direction = gridSize;
  else if (dir === 'left' && direction !== 1) direction = -1;
  else if (dir === 'right' && direction !== -1) direction = 1;
}

// Clavier
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') changeDirection('up');
  if (e.key === 'ArrowDown') changeDirection('down');
  if (e.key === 'ArrowLeft') changeDirection('left');
  if (e.key === 'ArrowRight') changeDirection('right');
});

// Mobile
document.getElementById('up').addEventListener('click', () => changeDirection('up'));
document.getElementById('down').addEventListener('click', () => changeDirection('down'));
document.getElementById('left').addEventListener('click', () => changeDirection('left'));
document.getElementById('right').addEventListener('click', () => changeDirection('right'));

placeFood();
draw();
const gameLoop = setInterval(move, interval);
