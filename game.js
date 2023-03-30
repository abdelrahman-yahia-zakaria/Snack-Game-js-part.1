
import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");


if (confirm("Welcome to the snake box: we hope you like the game ( ͡° ͜ʖ ͡°)")) {
}


function main(currentTime) {
  if (gameOver) {
    const gameOverScreen = document.querySelector("#overlay");
    gameOverScreen.style.display = "block";
    gameOverScreen.addEventListener("click", () => {
      board.innerHTML = "";
      gameOverScreen.remove();
      location.reload();
      return;
    });
  }
//responsible for the speed of the object\
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  // update it \\
  update();
  draw();
}

window.requestAnimationFrame(main);
function update() {
  updateSnake();
  updateFood();
  checkDeath();
}
// Responsible for deleting squares or copying the extra snake .
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

// for check the death case !
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
