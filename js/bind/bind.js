// Existen 3 metodos para suscribirse a funciones de otros objetos

// Metodo bind: Permite que una funcion use las propiedades de otro si es envocada por medio del contexto this

var finalCopa = {
    local: "River Plate",
    Visitante: "Boca Juniors",
    estadio: "Monumental",
    resumen: function(){

        console.log(this.local); 

    }
}

//console.log(finalCopa.resumen());


var Metodo1 = function (arg1, arg2){
    this.resumen();
    console.log(this.Visitante);
    console.log(arg1, arg2);
}

var bindMet = Metodo1.bind( finalCopa );

bindMet("uno", "dos");

// Metodo call: Hace los mismo que el anterior pero le podemos pasa argumentos y el objeto asociado

var WithCall = Metodo1.call(finalCopa, "cinco", "tres");

console.log(WithCall);

// Metodo apply: Hace los mismo que el anterior pero le podemos pasa argumentos y el objeto asociado pero en formato de array [arg1, arg2, etc...]

var Withaply = Metodo1.apply(finalCopa, ["rtret", "dsfsdf"]);

console.log(Withaply);