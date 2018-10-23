// Las funciones anonimas, sirven para ocultar cualquier variable o proceso del OBJETO GLOBAL. Esto quiere decir que no sera afectado nada asi este fuera de la funcion

// Las funciones anonimas se definen entre () y las funciones van sin nombre function(){}


(function(){

    var ac = 60;
    var operador = 40;

    cambiarvar(operador);

    function cambiarvar(operador){
        return ac = ac * operador;
    }

    console.log(ac);

}())

// Ejemplo dos con funciones anonimas:
// Puedo enviar como parametro otras funciones dentro de una, a su vez estas pueden ser anonimas

function Proceso (fanonim){
    if(fanonim() === 5){
        return true
    }else{
        return false
    }
}

// podemos llamar la funcion anonima dentro del llamado de la padre o en un console log, recordar que todo lo que tenda ( ) se toma como funcion

console.log(

    Proceso( function(){
        var ab =  'Cambiable'
        console.log('Retorna el valor en una anonima');
        return 5
    })

);




