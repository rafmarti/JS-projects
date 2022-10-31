let canvas = document.querySelector('canvas');

canvas.width = (window.innerWidth) * 0.7;
canvas.height = (window.innerHeight) * 0.8;

var c = canvas.getContext('2d');


c.beginPath();
c.moveTo(300, 100)
c.lineTo(20, 20);
c.fillRect(300, 510, 15, 120)
c.stroke();