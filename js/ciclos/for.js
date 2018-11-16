// FOR: este ciclo nos permite evaluar una condicion y repetirla segun su valor

// El while solo evalua una condicion

// FORMA BASICA

for(var i = 0; i < 10; i++){
    // Lo que se repite

    var textos =  '<p>Algo</p>'
    console.log(textos);

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
    // Si tiene sus propias valores, Reflejo en javascript
    if( !NewCar.hasOwnProperty( props ) )
    continue;
    // Mostraria cada propiedad del objeto si añadimos mas se muestran
    console.log(props + ':' + NewCar[props]);

}

// Evaluar los arreglos: Se usa el metodo foreach, para saber que valores hay en un arreglo

var Myarreglo = [3,9,true,'string'];

// Se crea una funcion que recibe el index de cada una de las casillas de la array.
console.log('/////////////////Incio ciclo each');
Myarreglo.forEach(function(val){
    console.log(val);
})