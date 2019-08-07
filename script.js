// Canvas module.
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//Variables.
let xAxis = canvas.width / 2;
let yAxis = canvas.height - 30;
let dX = -2;
let dY = -2;

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

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  if (yAxis + dY < 5 || yAxis + dY > canvas.height - 5) {
    dY = -dY;
  }
  if (xAxis + dX < 5 || xAxis + dX > canvas.width - 5) {
    dX = -dX;
  }
  xAxis += dX;
  yAxis += dY;
};

setInterval(render, 10);
