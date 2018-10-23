// Ejemplos con arreglos, todos los arreglos pueden tener: Funciones, objetos y anidarlos dentro de otros no hay limites y podemos acceder a ellos por anotacion de puntos o jeranquia

var myArray = [
    {
        "Nombre": "Andres Cruz",
        "Perfil": "Web UI"
    },
    true,
    false,
    function(){
        console.log('Funcion dentro de una array');
    },
    'Cadena dentro del Array',
    45,
    function(valor){
        console.log(valor.Nombre)
    },
    ['Ttitulo', 0, 7, 0, 8]
]

// Aqui se muestran los resultados envocando las pociciones en la array
console.log(myArray[0].Nombre + ' ' + myArray[0].Perfil);
// las funciones Anonimas que estan dentro de una array se llaman con()
console.log(myArray[3]());

console.log(myArray[6](myArray[0]));

// mostrar una array dentro de otra
var setarr = myArray[7];
setarr.push(40);

console.log(setarr);

// Se puede cambiar el valor de una casilla de la Array
myArray[7][0] = 'CAMBIO!';

console.log(myArray[7]);

// Al devolver la array principal ya tiene los valores cambiados
console.log(myArray);



