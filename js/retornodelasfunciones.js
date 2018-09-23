/*RETORNO DE FUNCIONES - VALORES PRIMITIVOS*/

function primitivoType(){
	// palabra clave para que las funciones devuelvan algun valor, SIN QUE SE LES PASE PARAMETROS
	// Return
	return "TEXTO DE ESTA FUNCION"
}

var queMuestra = primitivoType();

// Forma anonima de mostrar la funcion
console.log(queMuestra);


/*RETORNO DE FUNCIONES - VALORES OBJETOS*/

function textObject(aerolinea, destino){
	// aqui paso el parametro que recibi para el objeto
	return {
		aerolinea: aerolinea,
		destino: destino
	}
}
/*Se puede mostrar de manera implicita -  los parametros de la funcion*/
console.log(textObject('avianca', 'canada'));
var sacarDatos = textObject('avianca', 'canada');


/*RETORNO DE FUNCIONES - VALORES FUNCIONES ANIDADAS
1. Creo una funcion padre
2. Retorno otra funcion dentro de ella y le paso un parametro
3. Podemos retornar las funciones que querramos
*/

function primeraClase(){
	return function segundaClase(aerolinea){
		console.log(aerolinea);

			return function(){
				console.log("Estas Adentro Nivel 2");

				/*Tercer nivel*/
				return function(){
					console.log('ERES UN: Master');
				}
			}


	}

}

/*Obtenemos la primer funcion*/
var nivelUno = primeraClase();
/*para acceder al nivel 2 creamos la variable y le asignamos la primera*/
var nivelDos = nivelUno(sacarDatos.aerolinea);

// para acceder al tercer nivel
var nivelTres = nivelDos();

nivelTres();