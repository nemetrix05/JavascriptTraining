/*PARAMETRO VARIABLE 
1. Creamos la funcion y le enviamos parametros de tipo variable
2. Las funciones siempre deben ir de primeras
3. Los parametros de las funciones deben ir separados por coma (pueden ser variables, objetos o funciones)
*/
 function variableTipo(puesto, salario){

 	/*Aqui muestro las operaciones que debo hacer con los parametros enviados*/

 	console.log(puesto + ' ' + '$' + salario + 'COP');

 	var i;

 	for (i = 0; i < 2; i++){
 		console.log('<p>' + puesto + '</p>' + i + '<br>');
 	}

 }

/*Aqui paso los valores de los parametros enviados*/
variableTipo( 'Web Developer', 60000000 );



/*PARAMETRO TIPO OBJETO*/
function objetoTipo (sisben){
	console.log('TIPO DE PARAMETRO OBJETO');
	console.log("El nombre del afiliado es: " + sisben.nombre + sisben.eps);

} 

/* Aqui defino el objeto datos que tiene los valores para pasar a la funcion
var datos = {
	nombre: "Andres C",
	eps: "Salud Total"
}*/


/*Forma anonima de enviar los valores
objetoTipo(datos);*/

/*Forma explicita de llamar los valores poner el objeto dentro del llamado*/
objetoTipo({
	nombre: 'JULIO',
	eps: 'Sanitas' 
});

/*PARAMETRO TIPO FUNCION*/
function funcionTipo(casas, texto){
	// Aqui muestro la funcion que recibi como parametro, pero con el nombre del parametro
	casas();
	console.log(texto);
}

funcionTipo(function protocolo(){
	console.log('MUESTRO UNA FUNCION DENTRO DE OTRA COMO VALOR');
},
"valor de texto"
);