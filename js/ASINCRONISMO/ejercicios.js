// Curso Asincronismo en Javascript

// Capturar error asincronica

function fail(){
    throw new Error('Required Object');
}

try{
    fail();
}

catch(e){
    console.log(e);
}

finally{
    console.log('error finalizado');
}


/* Ejercicio 1
var fs = require('fs');

fs.stat('archivo.txt', {}, function(err, stats){
	if(!err){
    	console.log('Wii', stats);
    }else{
    	console.log('Buu', err);
    }
});*/

// Ejercicio 2


var url = "http://acamica.com/mi-linda-url";
$.ajax(url,{ 
  success: function(data, textStatus, jqXHR){ 
    console.log('Wii', jqXHR)
  },
  error: function(jqXHR, textStatus, errorThrown){ 
    console.log('Buu', errorThrown)

  }
});


// Ejercicio 3

async1(function (errback, dato){
	if(errback){
    	console.log('fallo async1', errback);
    }else{
      console.log('fallo async1', dato);
      async2( function (errback, dato){
        
        if(errback){
        	console.log('fallo async2', errback);
        }else{
        	console.log('fallo async2', dato);
        }
      
      })
    
    }
});

// Ejercicio 4

async1(
    function (exito){
          console.log('exito async1', exito);
          async2(
              function (exito){
                  console.log('exito async2', exito);
              },
              function (error){
                  console.log('fallo async2', error);
              },
            
          );
    },
    
    function (error){
          console.log('fallo async1', error);
    }
    
);

// PROMESAS EN JAVASCRIPT

// Las promesas sirven para hacer peticiones y recibir resultado afirmativo de las mismas o un resultado negativo en caso de error.

// Su estructura es:

// Si la promesa se cumple THEN haz esto . Luegoi va una funcion de callback que recibe como parametro la respuesta esperada

promesa.then(
    function (valor) {
       // La promesa se cumplio
       // Hacer algo con el valor
       // Puedo llamar una promesa dentro de otra
       conexion.then(

       );
    }, 
    function (err) {
       // La promesa fallo
       // La variable err nos dice porque
       // Manejar el error
    }
);

// Ejecutar PROMESA CON DIFERIDO

function quieroPostre (imagenesDeVerdura) {
  
    // Se crea el valor a futuro con Q.Defer
	var defer = Q.defer();
  
    var url = obtenerUrl(imagenesDeVerdura);
  
  	$.ajax(url,{

        // Se llama la data del metodo
        data: imagenesDeVerdura,

      	success: function(data, textStatus, jqXHR){
            // Se le asigna al defer un valor resolve si esta OK
        	defer.resolve(data);
        },

      	error: function(jqXHR, textStatus, errorThrown){
            // Se le lanza reject si el valor es rechazado
        	defer.reject(errorThrown); 
        }

    });
  
  	return defer.promise;
}

// Promesa a lo guaso
try{
	var promesa = quieroPostre(imagenesDeVerdura);
  	promesa.then(
		function(data){
        	console.log('Wii', data);
        },
      	function(err){
        	console.log('Buu', err);
        }
	);
}

catch(err){
	console.log('Buu', err)
}

// Ejercicio 3
