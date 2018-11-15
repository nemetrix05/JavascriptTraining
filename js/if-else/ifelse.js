// El metodo IF else se encarga de validar la informacion y mostrarla de acuerdo a su valor

// METODO CLASICO

var a = Math.random();

if(a < 70){
    console.log('Es menor');
}else if(a > 900){
    console.log('Es undefined');
}else{
    console.log('Es mayor');
}


// METODO CON TERNARIAS

// ? si : entonces

var c = 'Nacional';

var d = (c === 'Nacional') ? 60 : 'OTRO';

console.log(d);

// METODO CON TUBERIAS: valida si un valor tiene algun dato o viene null o indefine, siempre la prioridad es un tipo de valor numero, string, objeto, etc

var g = 50;
var t = null;

// || quiere decir si alguno de los valores tiene un valor 
var e = g || t || undefined;

console.log(e);