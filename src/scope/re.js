var firstName; // Por default es undefined
firstName = 'Miguel'; // Asignando valor 
console.log(firstName);

var lastName ='Angel'; // declarando y asignando
lastName ='Carlos' ; // reasignando
console.log(lastName);

var secondName='David'; // declarando y asignando
var secondName='Ana'; // reasignando
console.log(secondName);


// Manejo de palabra reservada Let

let fruit = 'Apple'; // declarar y asignar;
fruit ='Kiwi'; // reasignar
console.log(fruit);
// let fruit ='Banana';

// Manejo de palabra reservada Const

const animal= 'dog'; // declarando y asignando
// animal ='cat'; // reasignando * Esto no se puede hacer no se permite 
// const animal ='cat'; // redeclarando * Esto no se puede hacer no se permite 
console.log(animal);

// Const se debe trabajar con cuidado para no confundir con conceptos de inmutabilidad, ejemplo manejo de arrays u objetos
const vehicles = [];
vehicles.push('🚗');
console.log(vehicles);
vehicles.pop();
console.log(vehicles);
