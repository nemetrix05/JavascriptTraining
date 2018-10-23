// las instancias typeof =  Sirve para saber que tipo de dato estamos pasando, string, boleano, objeto, numero

// la instancia instanceof =  Sirve para validar el tipo de dato, equivalente al hacer en el if ( === )
function Test (props){
    console.log(typeof props);
}

function Modelo(){
   return 'algo'
}

var casilla = Modelo();

Test(casilla);

// Ejemplo con instanceof solo devuelve true o false

function Suma(numero){
    // en el instanceof, se sabe el que numero guarda en el objeto Name
    console.log(numero instanceof Name);
}

function Name(){
    this.valor = 40;
}

// guardo el nuevo parametro para el objeto Name
var result = new Name();

Suma(result);