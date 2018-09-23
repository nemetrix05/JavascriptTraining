/*FUNCIONES
1. Son objetos que dan un valor
2. las variables que vallan en la funcion, deben estar antes de la misma, para que no de error
3. Podemos asignar a una variable la funcion: var algo = mifuncion(); Esto convierte a algo en una funcion
*/

var ejercicio = "NACIONAL";

/*Los Nombres de las funciones se escriben en uppercase eej: minusculaCapital = holaMundo()*/
function nombreFuncion(){
	console.log('EL MEJOR EQUIPO DE COLOMBIA ES: ' + ejercicio);
}

/*Para llamar la funcion usamos: nombrefuncion();*/
nombreFuncion();

/*Guardar la funcion en una variable*/

var llamado = nombreFuncion();
console.log(llamado);