var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

let xAxis = canvas.width / 2;
let yAxis = canvas.height - 30;

const draw = () => {
  ctx.beginPath();
  ctx.arc(xAxis, yAxis, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
};

setInterval(draw, 10);
