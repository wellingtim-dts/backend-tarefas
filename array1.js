// de frutas array - ARRAY

const { cloneElement } = require("react");

const frutas =["maçã","Banana","uva", "manga"];


console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas.length);
frutas[1] = "morango"; //altera o valor do elemento


frutas[3] = "Abacate";
frutas.push("melão");
console.log(frutas);

