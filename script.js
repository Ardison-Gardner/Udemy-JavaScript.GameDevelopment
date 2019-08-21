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
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
var score = 0;

//Constants.
const ballRadius = 10;

// Game functions

const drawBall = () => {
  ctx.beginPath();
  ctx.arc(xAxis, yAxis, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#0000ff';
  ctx.fill();
  ctx.closePath();
};

const drawPaddle = () => {
  ctx.beginPath();
  ctx.rect(paddlePosX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#00ff00';
  ctx.fill();
  ctx.closePath();
};

const drawBricks = () => {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = '#ff0000';
        ctx.fill();
        ctx.closePath();
      }
    }
  }
};

const collisionDetection = () => {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let brick = bricks[c][r];
      if (brick.status === 1) {
        if (
          xAxis > brick.x &&
          xAxis < brick.x + brickWidth &&
          yAxis > brick.y &&
          yAxis < brick.y + brickHeight
        ) {
          brick.status = 0;
          dY = -dY;
          score++;
          if (score === brickRowCount * brickColumnCount) {
            alert('You win!');
            document.location.reload();
          }
        }
      }
    }
  }
};

const drawScore = () => {
  ctx.font = '16px Ariel';
  ctx.fillStyle = '#ff00ff';
  ctx.fillText('Score: ' + score, 8, 20);
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

// eslint-disable-next-line complexity
const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();
  collisionDetection();
  drawScore();
  // Ball behavior.
  if (yAxis + dY < ballRadius) {
    dY = -dY;
  } else if (yAxis + dY > canvas.height - ballRadius) {
    if (xAxis > paddlePosX && xAxis < paddlePosX + paddleWidth) {
      dY = -dY;
    } else {
      alert('GAME OVER');
      document.location.reload();
    }
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
