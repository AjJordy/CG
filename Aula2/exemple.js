"use strict";

function makeCircle(radius, resolution){
	return range(0,2*Math.PI,resolution).map(angle => polar(angle,radius));
}

function range(begin,end,resolution){
	let circle = [];
	let increment = 2*Math.PI/resolution; 	
	for(let i=begin; i<end; i+=increment){
		circle.push(i);
	}
	return circle;
}

function polar(angle,radius){
	let x = Math.cos(angle) * radius;
	let y = Math.sin(angle) * radius;
	return [Math.round(x), Math.round(y)]
}

console.log(makeCircle(1,4));