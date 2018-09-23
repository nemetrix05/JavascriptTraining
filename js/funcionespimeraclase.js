/*
1. Las funciones de primera clase, se refiere que al definir una funcion 
pueden ser tomadas como variables y estas a su vez pueden tener objetos.

2. siempre las funciones retornan algo, pero al envocarlas como variable pueden llevar parametros u objetos en ellas
Ej: funcion a(){} al ser llamada como variable a.propiedad = "valor de propiedad"
*/

function bg(){
    return console.log("Something");
}

bg();

bg.team = "Mauricio";
bg.llaves = {
    anotacion: 10,
    clave: true,
    resultado:{
        ph:100
    }
}