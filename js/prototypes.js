// Los prototypos en Javascript., sirven para guardar metodos que estan definidos en una clase de javascript.

// Son muy utiles para simplificar los procesos en funciones de primera clase EJ:

function Auto(marca, precio, year){
    this.marca  = marca;
    this.precio = precio;
    this.year   = year;

    return this.marca + ' ' + this.precio + ' ' + this.year
}

// Aqui se llama la funcion y se le asigna aun prototipo un metodo, esto solo se ejecuta una vez, si se declara en la funcion se ejecuta muchas veces el proceso.
Auto.prototype.Show = function(){
    console.log(this.marca + ' ' + this.precio + ' ' + this.year);
} 

// Para pasarle los parametros a la funcion usamos el metodo new en una variable

var ferrari = new Auto('Ferrari', '$60000', '2016');

// Forma por medio de metodos
console.log(ferrari.Show());

// Formar clasica de pararle parametros a la funcion
console.log(Auto('Ferrari', '$60000', '2016'));