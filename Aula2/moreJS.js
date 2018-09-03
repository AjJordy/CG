// Curso de JavaScript

"use strict";
/*--------------------------Funções---------------------------------------*/ 
function square(x){
	return x + x;
}

const square = function(x){
	return x + x;
}

const square = (x) => {return x + x;};
const square2 = x => x*x;

// Closures -> aumentar a vida util de variáveis

const multiplier = factor => number => number * factor;
let twice = multiplier(2);
console.log(twice(5)); // 10 

/*--------------------------Arrrays---------------------------------------*/
let example1 = [];
let example2 = [1,2,3];
let example3 = [5, "teste", x  => x * x]; // Que coisa feia 

let a = [1,2,3];
a[5] = 5;
console.log(a); // [1, 2, 3, <2 empty items>, 5]
console.log(a.length); // 6

for(i of array) console.log(i);

array.slice(inicio,fim);
array.concat(array); 
// recude
// map
/*--------------------------Objetos---------------------------------------*/
let e = {}; // objeto vazio
let o = {
	name:"nome do objeto",
	"2 valor": "valor",
	square: x => x * x
};

console.log(o.name);
console.log(o["2 valor"]);
console.log(o.square(5));
console.log(o["square"](5));

// Prototype -> herança
Object.create(prototipo);

// Construtor 
class Rabbit{
	constructor(type){
		this.type = type;
	}

	speak(line){
		console.log(The ${this.line} rabbit says '${line}');
	}
}
