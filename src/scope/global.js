// variables

var a; // estamos declarando la variable
var b = 'b' // estamos declarando y asignando a la variable
b= 'bb' // Reasignacion de la variable
var a ='aa' // redeclaracion de variable


// Global Scope

var fruit = 'Apple'; // global
console.log(fruit);
function bestFruit () {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'México'; // al no asignar la palabra reservada correspondiente ejemplo "var" estas declarando automaticamente la variable como global
    console.log(country);
}

countries();
console.log(country);