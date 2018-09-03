"use strict";

function criaCirculo(raio, resolucao){
	return range(0,2*Math.PI,resolucao).map(angle => polar(raio,angle));
}

function range(inicio,fim,incremento){
	let circulo = [];
	for(i=inicio;i<fim;incremento){
		circulo.push(i);
	}
	return circulo;
}

function polar(){
	
}

console.log(criaCirculo(1,4));