// Canvas module.
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//Variables.
let xAxis = canvas.width / 2;
let yAxis = canvas.height - 30;
let dX = -2;
let dY = -2;
let paddleHeight = 10;
let paddleWidth = 75;
let paddlePosX = canvas.width - paddleWidth / 2;
let rightMove = false;
let leftMove = false;

//Constants.
const ballRadius = 10;

// Game functions
const drawBall = () => {
  ctx.beginPath();
  ctx.arc(xAxis, yAxis, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
};

const drawPaddle = () => {
  ctx.beginPath();
  ctx.rect(paddlePosX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '00ff00';
  ctx.fill();
  ctx.closePath();
};

// Key handlers.

const keyDownHandler = e => {
  if (e.keyCode === 39) {
    rightMove = true;
  } else if (e.keyCode === 37) {
    leftMove = true;
  }
};

const keyUpHandler = e => {
  if (e.keyCode === 39) {
    rightMove = false;
  } else if (e.keyCode === 37) {
    leftMove = false;
  }
};

//Canvas renderer.

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  // Ball behavior.
  if (yAxis + dY < ballRadius) {
    dY = -dY;
  } else if (yAxis + dY > canvas.height - ballRadius) {
    alert('GAME OVER');
    document.location.reload();
  }
  if (xAxis + dX < ballRadius || xAxis + dX > canvas.width - ballRadius) {
    dX = -dX;
  }
  // Player input.
  if (rightMove && paddlePosX < canvas.width - paddleWidth) {
    paddlePosX += 7;
  } else if (leftMove && paddlePosX > 0) {
    paddlePosX -= 7;
  }
  xAxis += dX;
  yAxis += dY;
};

setInterval(render, 10);

//Event listeners.
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
