// Javascript dispone de metodos que permiten manejar exepciones o errores dentro de la aplicacion

// Metodo 1: TRY : Intenta lanzar un error para que sea capturado por el catch

try{
    console.log('try');

    var a =  20;

    if(a < 50){
        // con throw lanzamos el error a javascript
        // En el throw podemos enviar cualquier tipo de dato (funciones, objetos, new Error)
        throw 20
    } else {

        throw {
            'nombrerror': 'Tipo console'
        }
    }
}

// Metodo 2: catch: Captura el error en un argumento e, se ejecuta siempre y cuando un error exista en try

catch(e){
    Exepciones(e);
}


// Metodo 3: finally: Es la conclusion del error cuando se ejecuta es opcional si el catch no esta hay que ponerlo

finally{
    console.log('finally');

}

// Para obtimizar recursos se puede crear una funcion para manejar los errores y pasarlo en la ejecucion del catch

function Exepciones (e){
    var operation =  e*5;
    console.log(operation);
}