// Es un objeto del que viene en el prototipe de cualquier funcion y se refiere a los parametros que se le pasan a una  funcion

function Test(a, b){
    // Se valida que tiene dos argumentos
    console.log(arguments);

    // Podemos validar que se pasen obligatorio todos los parametros
    if(arguments.length !== 2){
        console.error('Incluir todos los argumentos');
        return;
    }else{
        console.log('Mostro todos los argumentos');
            
        // Muestra los argumentos pasados
        console.log(a + ' ' + b);
    }
    
}

// Se pasan los argumentos o valores de la funcion
Test(4, '789');