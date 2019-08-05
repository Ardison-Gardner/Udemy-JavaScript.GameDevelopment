var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = '#FF0000';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(320, 240, 25, 0, Math.PI * 2);
ctx.fillStyle = '#00FF00';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(175, 175, 50, 0, Math.PI * 2, true);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.moveTo(210, 175);
ctx.arc(175, 175, 35, 0, Math.PI, false); // Mouth (clockwise)
ctx.moveTo(165, 165);
ctx.arc(160, 165, 5, 0, Math.PI * 2, true); // Left eye
ctx.moveTo(195, 165);
ctx.arc(190, 165, 5, 0, Math.PI * 2, true); // Right eye
ctx.strokeStyle = '#000000';
ctx.stroke();
ctx.closePath();
