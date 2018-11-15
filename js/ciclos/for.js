// FOR: este ciclo nos permite evaluar una condicion y repetirla segun su valor

// El while solo evalua una condicion

// FORMA BASICA

for(var i = 0; i < 10; i++){
    // Lo que se repite
    console.log(i);
}

// FORMA CON IN

var Carro = function (){
    this.marca =  'BMW',
    this.ano   =   2018 
}

var NewCar = new Carro();

// Sew añade una nueva propieda al for
Carro.prototype.Venta = 'Si';

// con este metodo podemos mostrar las propiedades solo que estan definidas.

for( props in NewCar ){
    // Si tiene sus propias valores
    if( !NewCar.hasOwnProperty( props ) )
    continue;
    // Mostraria cada propiedad del objeto si añadimos mas se muestran
    console.log(props + ':' + NewCar[props]);

}