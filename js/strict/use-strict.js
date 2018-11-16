// El use strict: Hace que todos el codigo Javascript sea evaluado de forma rigurosa.

// Si lo ponemos al inicio del documento afectara todo el codigo javascrip

// Si queremos evitarlo, hay que encapsular todo el codigo y poner use strict en la funcion



// Aqui generaria error porque no esta la variable definida
mama = 'Nombre mama';
console.log(mama);

/* En una funcion
function Test (){
    "use strict";
    algo = 90;
    return algo;
}

Test();
*/

// Se encapsula en una funcion anomima para que no afecte todo lo demas
(function (){
    //"use strict";

    var dom = 'Esfera';

    console.log(dom);


    // Exercise 1
    var miArray = [1, 2, 3, 4];

    function callback (num){
       console.log(num);
    }
    
    miArray.forEach(callback);

    // ejercicio 2
    setTimeout(function(){
        console.log("hola asincronico");
    }, 100)


})();