// El switch evalua una condicion de acuerdo a su valor

var edad = 20;

switch(edad){
    case 40:
        console.log('Maduro');
    // Aqui ejecutamos la condicion
    // Break rompe el ciclo del valor
    break;

    case 90:
        console.log('Viejo');
    break;

    // Con funciones anominas
    case (function (){ return 20; }()):
        console.log('Joven');
    break;

    default:
        console.log('Viviendo...');

}

// podemos ejecutar alguna funcion entre las sentencias case: