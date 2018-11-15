// WHILE : Este ciclo nos permite hacer repeticiones evaluando una condicion previa.

// Obligatoriamente debe tener una sumatoria del ciclo i++;

var condition = 30;

while( condition < 100 ){

    condition++
    
    // podemos seguir ejecutando pero se omite desde donde se evalua
    if (condition === 45){
        break
    }    
    
    /* podemos romper la ejecucion del cliclo con un break
    if (condition === 50){
        break
    }*/

    console.log('<p>'+condition+'</p>');
}


/* el cilo do While hace lo contrario cambia la sintaxis

do{

}while();
*/
