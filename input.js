// Responsible for controlling a snake, not for it to move randomly

let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };


// Responsible for controlling the game through the arrows of the keyboard
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break; //break : An official at the move stands a second before the other move, 
      inputDirection = { x: 1, y: 0 };
      break;
  }
});
// lastinputdirection is responsible for correctly receiving the x y pass
export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
