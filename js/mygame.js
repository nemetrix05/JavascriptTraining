function Player(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    this.sumaredad = function(seleccionado){
        if(seleccionado.edad < 60){
            this.edad = seleccionado.edad + 1;
            console.log(this.edad);
        }else{
            console.log(this.edad);
        }
    }
}

var hombre = new Player("Andres", 20);
var mujer = new Player("Amanda", 80);



