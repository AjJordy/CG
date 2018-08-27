// ------------------- Instrodução a JavaScript ---------------------------------

// https://stackoverflow.com/tags/javascript/info
// http://eloquentjavascript.net/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
// https://www.w3schools.com/

// Palavra reservada debugger
// shift + ctrl + i

// "use strict";

// var -> global
// let -> local  (PRIORIZAR)
// const -> constante

// TIPOS: number(Infinity,inf e NaN), String, booleano, undefined(ou null)
// "" = ''

// PRIORIZAR === sobre == 

// Array  -> []
// Object -> {}

// Atalho || esquerda pra direita 

// typeof


// --------------------- Exercício --------------------------------- 
"use strict";
for(let i = 0;i <= 100;i++){
	if((i % 3) === 0 && i%5 === 0){
		console.log('FizzBuzz');
	}else if((i % 3) === 0){
		console.log('Fizz');
	}else if((i % 5) === 0){
		console.log('Buzz');
	}else{
		console.log(i);
	}
} 

