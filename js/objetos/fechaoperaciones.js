// Podemos hacer protoipos para manejar las fechas

var fecha = new Date(2000, 03, 15);
console.log(fecha);

// Para modificar la fecha usamos el metodo set date de javascript y le devolvemos lo que vamos a cambiar.
fecha.setDate(1);
console.log(fecha);


// Creamos un prototipo para que haga la sumatoria de las fechas

Date.prototype.sumarDias = function( dias ){
    // Obtiene la fecha actual y le suma los dias que le pasamos por parametro
    this.setDate( this.getDate() + dias );
    return this;
}


Date.prototype.FormatearFecha = function(mes){
    return ( 11 - mes );
}

// Para usar el prototipo le pasamos la fecha actual y envocamos el metodo del prototipo

console.log( fecha.sumarDias(10) );

// prototipo para saber cuantos meses le quedan al año
console.log( 'le quedan al año: ', fecha.FormatearFecha(9), ' MESES' );