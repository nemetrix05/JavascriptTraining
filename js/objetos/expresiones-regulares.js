// Las expresiones regulares son usadas para hacer busquedas sobre algun valor, por ejemplo una string.

var patron = 'Mi Nombre es\n 70';

// Existen varias busquedas por ejemplo rango entre letras
//var expresiones = patron.match( /[a-z]/ );

// Con ^ le indicamos que letra queremos al comienzo
// var expresiones = patron.match( /^M[i]/ );

// Con . le señalamos que busque cualquier caracter
// Con $ L eindicamos que busque al final
var expresiones = patron.match( /[aeiou]./ );

// Para encontrar un espacio entre el texto
var espacios = patron.match( /\s/ );

// Para encontrar un solo letras usamos \w y numeros \d
var numeros = patron.match( /\d/ );

// Constructores adicionales a la validacion
// i: insensible a mayuscula o minuscula
// g: Todas las apariciones
// n: Espaciado

var multiples = patron.match( /[aei]/ig );

console.log(expresiones);
console.log(espacios);
console.log(numeros);
console.log(multiples);


/*Expresiones Regulares Parte 2*/

// con la validacion {2,2}, buscamos que existan 2 palabras unidas

var newText = 'Terrateniente cono';

// La tuberia quiere decir que busque otra opcion dentro de la condicion
var regular =  newText.match(/[aei]{2,2}|cono/ig);

console.log(regular);