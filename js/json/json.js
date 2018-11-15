// Los objetos json son archivos de texto que son relacionados a los objetos en javascript

// Ejemplos

var Render =  document.getElementById('context');

var Myobjeto = {
    casa: "Mansion",
    numero: 90
}


console.log('Objeto de Javascript:', Myobjeto); 

// con este metodo convertimos JSON.stringify: un objeto javascript en JSON
var aJson =  JSON.stringify(Myobjeto);
console.log('Convertido a JSON:', aJson); 

Render.innerHTML = aJson;

// Con es lo contrario pasamos un JSON a objeto javascript

var aObjeto = JSON.parse(aJson);
console.log('Convertido Objeto Java:', aObjeto); 
