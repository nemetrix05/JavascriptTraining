// La sobrecarga de operadores ocurre cuando queremos usar la misma funcion y modificar sus argumentos con diferentes valores

function CreaPersona(name, age){
    // Podemos definir valores por defecto si no recibe parametros la funcion=

    nombre  = name || 'Andres';
    edad    = age || 50; 

    console.log('Nombre: ' + nombre + ' Edad: ' + edad);
}

// Envocamos la funcion principal
CreaPersona();

// Para modificar esa funcion podemos hacer otra que le pase el parametro que queremos cambiar

function ChangeName(nombre){
    CreaPersona(nombre, 90);
}

ChangeName('Antanas');

