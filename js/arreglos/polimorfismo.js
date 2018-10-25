// El polimorfismo es la capacidad de los objetos de compartir informacion entre ellos o en diferentes clases. Documentacion: https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos


function QueDatoES(c){
    // podemos hacer validaciones de acuerdo al tipo de dato que se reciben por argumento

    if(c === undefined){
        console.info('Mande un parametro');
    }

    if(typeof c === 'number'){
        console.info('Tipo Numero');
    }

    if(typeof c === 'object'){
        console.info('Tipo Objeto');
        if(c instanceof String){
            console.info('No entendi');
        }
    }
}

// Javascript detecta el objeto new
c = new String(90);

QueDatoES(c);