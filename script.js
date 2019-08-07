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

//Constants.
const ballRadius = 10;

//Functions
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

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  if (yAxis + dY < ballRadius || yAxis + dY > canvas.height - ballRadius) {
    dY = -dY;
  }
  if (xAxis + dX < ballRadius || xAxis + dX > canvas.width - ballRadius) {
    dX = -dX;
  }
  xAxis += dX;
  yAxis += dY;
};

setInterval(render, 10);
