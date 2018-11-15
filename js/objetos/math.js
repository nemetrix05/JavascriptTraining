// El objeto MATH, se encuentra disponible en el objeto global Window. Sirve para hacer operaciones matematicas tales como redondeo de cifras

var numero = 90.489989;

console.log(numero);

// Con Math.round =  redondeamos el numero a la cifra mas cercana
// Para obtener los decimales multiplicamos por 100 y dividimos en la misma cifra
console.log(Math.round( numero*100 ) / 100);

// Floor: obtiene solo el valor entero sin redondear la cifra
console.log(Math.floor(numero));

// Ramdom: Genera un numero alearorio 
function Random (prev, next){
    return Math.floor( Math.random() * ( next-prev + 1) + prev );
}

console.log(Random(4,90));


// Mis protptipos
function Cuca (){
    return 90
}

Cuca.prototype.multiplicar = ['casilla','casilla2'];