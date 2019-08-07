var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

let xAxis = canvas.width / 2;
let yAxis = canvas.height - 30;

const dX = -2;
const dY = -2;

const drawBall = () => {
  ctx.beginPath();
  ctx.arc(xAxis, yAxis, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
};

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  xAxis += dX;
  yAxis += dY;
};

setInterval(render, 10);
