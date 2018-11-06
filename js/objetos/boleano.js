// Objetos Boleanos
// Por defecto al definirlos como objeto son falsos, hay que validarlos con el metodo. valueOf(), si le pasamos cualquier valor string por ejemplo siempre inicializa en false



function MyObjeto( persona, profesion){
    this.persona = persona,
    this.profesion = profesion
}


var bolean = new MyObjeto('Andres', 'Web UI');


// Muestra en el DOM y console.log
var boxshow = document.getElementById('context');
boxshow.innerHTML = bolean.persona + ' ' + bolean.profesion;
console.log( bolean );

