// Los Arreglos son una coleccion de objetos

function Showing(agre){
    var contenedor = document.getElementById('context');
    contenedor.innerHTML = agre;
}

// Cada array tiene disponible una serie de metodos que transforman el arreglo
var arra = [1,2,3,4,5];
console.log(arra);

//1. Reverse: cambia el orden de la array
arra.reverse();
console.log(arra);

//2. map() = por cada elemento aplica una funcion determinada
arra = arra.map(
    function(elem) {
        elem *= elem;
        return elem;
    }
);
console.log(arra);

//3. Join= convierte en string el array y le da una separacion por cualquier caracter que querramos

arr = arra.join('|');
console.log(arr);

// 4. split: Corta mas no separa cada elemento de la Array
arr = arra.splice('|');
console.log(arr);

// 5. push: Este metodo añade un nuevo item a la array AL FINAL
// cuando definimos la variable sin el var al comienzo, es porque la queremos afectar de manera Global O en su estado inicial

arr.push(9);
console.log(arr);

//6. unshift: Añade el elemento al comienzo del array, mala practica revertir cada vez que se agrega

arr.unshift('inicio');
console.log(arr);

// 7. toString: Hace la misma funcion que el split, convierte a string en arreglo pero es mas rapido
console.log(arr.toString());

// 8. pop: Elimina el ultimo elemento del array y lo devuelve, lo debemos guardar en una variable para sacar el elemento eliminado

borrar = arr.pop();
console.log(arr, borrar);

//9. splice: Este metodo modifica el arreglo y recibe los parametros: - pocision inicial del arreglo - mas de cero elimina las pociciones que le indiquemos y 0 agrega mas espacios antes de la pocision inicial - El ultimo parametro es los elementos que quiero agregar a la array

arr.splice(0, 1);
console.log(arr);

// 10. slice: Este metodo corta los elementos de la array desde su pocision inicial, hasta donde le indiquemos en el segundo parametro

arr = arr.slice(2, 4);
console.log(arr);

// Esta funcion muestra siempre en el DOM el valor de arra
Showing(arr);