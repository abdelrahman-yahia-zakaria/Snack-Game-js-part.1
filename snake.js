import { getInputDirection } from "./input.js";
//Responsible for the shape of the snake as length and width\\
export const SNAKE_SPEED = 7;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;
let score = 0;


function updateScore() {
  const scoreElem = document.querySelector("#score");
  scoreElem.innerText = `Score ${score}`;
}

//Responsible for increasing the size of the object
export function update() {
  addSegments();
  let inputDirection = getInputDirection(); //   Responsible for calling from input.js file
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  // Responsible for the location of the size of the snake
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
  
}
// segment x is the name of the snake's length and width
// The code expresses the drawing of the snake
export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

// to increase snackside every touch to red point
export function expandSnake(amount) {
  newSegments += amount;
  score += 1;
  updateScore();
    console.log('score:',score)

}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  });
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegments = 0;
}
