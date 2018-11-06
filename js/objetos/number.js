// Objetos Number

// Existen variedad de metodos que actuan sobre los numeros, entre ellos estan los siguientes:

var number = 50.59;

/*function NumberOne(){
    // to fixed : Convierte un numero a decimal o aproxima el valor
    number.toFixed(10)
    return number;
}*/

/*function NumberTwo(){
    // to string : Convierte un elemento numerico en un string
    number.toString
    return number;
}*/


/*
valueOf()
Convierte un valor string a numero si aplica
*/

var number = new Number('67');

// Muestra en el DOM y console.log
var boxshow = document.getElementById('context');
boxshow.innerHTML = number;
console.log( number.valueOf() );

