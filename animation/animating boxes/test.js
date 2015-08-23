var b;
var dx = Math.random()*600;
var dy = Math.random()*600;

var dx2 = Math.random()*900;
var dy2 = Math.random()*900;

var x = 0;
var y = 0;

var x2 = 100;
var y2 = 100;

function randColor(){
	var randColor;
	randColor = Math.random()*99;	
	return Math.round(randColor);	
}

var b2 = document.createElement("div");
b2.className += "box";
document.body.appendChild(b2);


var box = document.getElementsByClassName("box");

console.log(box.length);

for(i=0; i<box.length; i++){
	var color = "rgb(" + randColor() + "," + randColor() + "," + randColor() + ")";
	box[i].style.backgroundColor = color;
	console.log(box[i].style.backgroundColor);
}

function init() { 


	moveDatShit();
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function moveDatShit() {
	x += (dx - x)*0.05;
	y += (dy - y)*0.05;
	box[0].style.left = x + "px";
	box[0].style.top = y + "px";

	x2 += (dx2 - x2)*0.05;
	y2 += (dy2 - y2)*0.05;
	box[1].style.left = x2 + "px";
	box[1].style.top = y2 + "px";

	if(Math.abs(x-dx) < 1){
		dx = Math.random()*600;
		dy = Math.random()*600;
		dx2 = Math.random()*600;
		dy2 = Math.random()*600;
	}

	requestAnimFrame(moveDatShit, box);
}