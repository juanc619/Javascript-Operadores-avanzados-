/***

VALORES FLASY
0, null, undefinded, NaN, false, string vacio

VALORES NULLISH
null, undefined

***/

// Operadores += y ++

// let numero = 10;

// numero = numero + 1;
// numero += 1;
// numero++;
// console.log(numero);

/**************************************** */
/**************************************** */

// Operador ternario

// let edad = 21;

// console.log( edad >=  18 ? "Puedes ingresar" : "No puedes ingresar");

// Operador &&

// const carrito = [];

// carrito.length === 0 && console.log("El carrito esta vacio");

// Operador ||
// FALSY : 0, null, undefinded, NaN, false, string vacio

let usuario1 = "JC";
let usuario2 = null;

// if (usuario2) {
//     console.log(usuario2);
// } else {
//     console.log("El usuario no existe");
// }

console.log( usuario1 || "El usuario no existe");
console.log( usuario2 || "El usuario no existe");