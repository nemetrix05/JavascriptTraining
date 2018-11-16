// EVENTOS: sirven para controlar acciones sobre cualquier elemento del DOM

// se usa con el prefijo on si esta en el html y sin el on si lo hace desde el javascript


function onDom(arg){
    
    console.log('Evento Funcionando');
    
    var position = arg.offsetX;

    if(position){
        console.log(position);
        
    }else{
        console.log('No existe el argumento');
    }

}

var elemento = document.getElementById('fromJa');

var text = document.getElementById('input');

// Con este metodo no inscribimos a un evento del dom, No se debe poner ON al comienzo
elemento.addEventListener('click', onDom);

text.addEventListener('keypress', onDom);


// Para bloquear el clic derecho desde el js EJECUTAMOS:

document.onmousedown = function(arg){

    // para filtrar solo el clic derecho accedemos a los argumentos
    if(arg.button === 2){
        alert('boton bloqueado');
        // con esto evitamos violacion de de JS y paramos la ejecucion
        return;
    }

    console.log('se puede');

}

// Para obtener lo que selecciona el usuario

document.onmouseup = function (){

    let box = document.getElementById('result');
    
    // Obtiene el texto seleccionado y lo convierte a string
    var textos = window.getSelection().toString();
    console.log(textos);

    box.innerHTML = textos;
}