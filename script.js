var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.beginPath();
context.rect(25, 50, 50, 25);
context.fillStyle = '#FF00FF';
context.fill();
context.closePath();
