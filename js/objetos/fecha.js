// Objetos Fecha
// Las fechas en javascript se definen con el metodo Date() y se le pasar argumentos para personalizar la fecha.

// 1. Fecha actual
//var fecha = new Date();

// 2. Fecha fija argumentos(año, mes, dia, hora(24), minuto, segundo )
var hoy = new Date();
var fecha = new Date(1991, 03, 06, 03, 50, 00);

// Muestra en el DOM y console.log
var boxshow = document.getElementById('context');
boxshow.innerHTML = fecha;
console.log( fecha );

// Tipos de metodos aplicables a las fechas:

// getfullyear : obtiene el año actual de la fecha 
console.log(hoy.getFullYear())

// fecha en milisegundos 
console.log(hoy.getTime())

var i;
var setend = 0;
for(i = 0; i < 3000; i++) {
    console.log('iterando ...');
    setend = i;
}

if(setend === 2999){
    console.log('bucle terminado');
}

// Recurso de plugin para manejar el tiempo: https://momentjs.com/

