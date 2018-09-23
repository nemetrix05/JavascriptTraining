// El operador NEW crea una especie de constructor que convierte las funciones en un objeto y le envia nuevoas propiedades cada vez que se envoca

function LlenarConNew(estado, hijos){
    // Aqui definimos la propiedades que simulan ser de un objeto, this.nombrepropiedad = valor;
    // el this muestra la pocision del objeto vacio {}
    this.estado = estado;
    this.hijos = hijos;
    this.futuro = function(){
        return this.estado
    }
    
}

// convierte la funcion en objeto, podemos pasarle parametros
var muestreNew = new LlenarConNew("Soltero", 27);

// Asi debo llamar un metodo que esta como propiedad en el objeto
console.log(muestreNew.hijos);