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

// let usuario1 = "JC";
// let usuario2 = null;

// if (usuario2) {
//     console.log(usuario2);
// } else {
//     console.log("El usuario no existe");
// }

// console.log( usuario1 || "El usuario no existe");
// console.log( usuario2 || "El usuario no existe");

/**************************************** */
/**************************************** */

// Operador ??
// NULLISH : null, undefinded

// let numero = 0;
// let numero2 = null;

// console.log( numero ?? "El numero no es valido");
// console.log( numero2 ?? "El numero no es valido");

/**************************************** */
/**************************************** */
// Acceso condicional a un objeto

//  const usuario = {
//     nombre : "jc",
//     cursos : {
//         css : "aprobado",
//         js : "aprobado"
//     }
//  }

//  console.log( usuario?.cursos?.css || "La propiedad no existe");
//  console.log( usuario?.trabajo?.youtube || "La propiedad no existe");


/**************************************** */
/**************************************** */
// Desestructuracion de objetos

//  const usuario = {
//     nombre : "jc",
//     edad : 30,
//     cursos : {
//         css : "aprobado",
//         js : "aprobado"
//     }
//  }

// let { nombre : nombreUsuario, edad, nacionalidad }= usuario;

// console.log(nombreUsuario);

/**************************************** */
/**************************************** */
// Desestructuracion de Arrays

// const nombres = ["juan", "carlos", "maria", "jesus"];

// const [ ,a, b] = nombres ;

// console.log(a);



/**************************************** */
/**************************************** */
// Spread de Arrays

const nombres = ["juan", "carlos", "maria", "jesus"];

const nombres2 = [...nombres];

nombres2[0] = "jean";

console.log(nombres);
console.log(nombres2);


