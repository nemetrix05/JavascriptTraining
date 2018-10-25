// Cuando se ejecuta una funcion, estas crear un contexto, en el cual las variables que se le pasan si se cambia su valor toma el ultimo. Para generar varias funciones a la vez y con el mismo var, se deben usar funciones anominas, ya que estas se ejecutan en su propio contexto. 


function ArrayDinamica(){
    var arr = [];

    var numero = 1;

    // Si son varios procesos a la vez lo mejor es ejecutar un bucle for y le pasamos los numeros que ejecutaran la misma funcion

    for(var numero = 1; numero <=2; numero ++){
        arr.push( 
            // Se crea la funcion anonima para evitar apartar el contexto de la funcion
            (function(numero){
                return function(){
                    // Esto evita que aparezca undefined
                    return numero;
                }
            })(numero)
        )
    }
    // Lo que hace esta funcion anonima dentro del push es poner en la primer casilla el valor numero

    // Si declaramos la variable de nuevo toma el ultimo valor

    return arr;
}

var showFunction = ArrayDinamica();

// La envocamos en la pocision 1 que llama una funcion dentro de la array
console.log(showFunction[0]());
console.log(showFunction[1]());