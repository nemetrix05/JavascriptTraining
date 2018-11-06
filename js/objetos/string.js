// Objetos String
// Los string son tomados como objetos simpre que se definen y podemos aplicarle metodos

var nombre = new String(' Gilmar Andres ');
console.log(nombre);

// convierte los caracters a uppercase o lowercase
console.log( nombre.toLowerCase() );
console.log( nombre.toUpperCase() );

// indexOf Busca la pocision de la letra y muestra el numero de pocision
console.log( 'la letra esta en la pocision:', nombre.indexOf('r') );

// lastindexOf si hay una letra repetida busca la ultima con este metodo
console.log( 'la ultima letra r esta en :', nombre.lastIndexOf('r') );

// substr se encarga de cortar el string entre rangos (pocision inicial, pocision final)
console.log( nombre.substr(0, nombre.indexOf(' ')) ); 

// split este metodo separa nuestra string, es similar al join para separar arrays, en este caso lo hace por espacio y con length saca cuantos nombres tiene.
console.log( 
    set = nombre.split(),
    set.length
);

// trim quita los espacios de la string ambos lados
console.log( nombre.trim() );


// Muestra en el DOM y console.log
var boxshow = document.getElementById('context');
boxshow.innerHTML = nombre;

// Mas info en la documentacion: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


