// Funciones de tiempo: Nos ayudan a ejecutar alguna accion en un periodo de tiempo definido que puede ser por intervado o ciclico.

// Metodo Set Time out: Se ejecuta una funcion solo en el tiempo indicado

setTimeout(function(){
    
    console.log('al segundos se ejecuta esto;');

}, 1000);

// METODO SET INTERVAL: Ejecuta una accion de manera ciclica
var time = 0;


// Los set interval deben estar en una variable para poder pararlos
var change = setInterval(function(){
    // Se envoca la variable y se aumenta 1 cada segundo 
    time ++;

    console.log('time:', time);

    if(time === 5){
        // con clear interval limpiamos la ejecucion del tiempo
        clearInterval( change );
    }

}, 1000);

// La palabra this siempre apunta al objeto global, pero podemos guardar this en una variable en el contexto solicitado y envocarla en donde se necesite

var fix = {
    nombre: 'Andres',
    cargo: function(){

        // Asi se obtiene el this actual
        var where = this;

        setTimeout(function(){
            console.log('Nombre es:', where.nombre);
        }, 6000)
    }
}

fix.cargo();