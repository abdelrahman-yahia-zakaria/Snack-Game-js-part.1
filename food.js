import { randomGridPosition } from "./grid.js";
import { onSnake, expandSnake } from "./snake.js";
// Responsible for moving food randomly
let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;  // The main responsible for random movement EXPANSION_RATE

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridColumnStart = food.x;
  foodElement.style.gridRowStart = food.y;               // Responsible for having the form of food
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }

  return newFoodPosition;
}
