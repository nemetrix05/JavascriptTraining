/**
 1. Los metodos son funciones dentro de objetos
 2. El objeto this: Quiere decir que nos posiciona dentro del contexto actual, 
 puede ser dentro de un objeto o un mismo metodo
 EJ:
 */

 var objetoPrimerNivel = {
     // Aqui van las propiedades
     pais: "Colombia",
     departamento: "Cundinamarca",
     lugar: "bogota",
     // Aqui creamos el metodo de ciudad
     ciudad: function(){
         // aqui estamos dentro del metodo - el metodo es una funcion dentro de un objeto
         //con el objeto this le preguntamos a javascript donde estamos 
         console.log(this);
         console.log("La ciudad actual es: " + this.lugar);

        // Con esta variable capturo el lugar actual del objeto
         var self = this;

         // Podemos definir otro metodo dentro del actual
         var nuevoPais = function(){
             //Aqui lanza "Error porque va al contexto Global"
             // Si queremos el valor de departamento, tenemos que capturar el this desde el metodo anterior
             console.log("El departamento dentro de un metodo es: "+ self.departamento);
         }

         //asi llamamos una variable que tiene una funcion, ya que la variable se convierte en su valor
         nuevoPais();
     }
 }

 // Asi llamamos el metodo con anotacion por puntos llegamos a la propiedad que tiene el metodo
 objetoPrimerNivel.ciudad();
