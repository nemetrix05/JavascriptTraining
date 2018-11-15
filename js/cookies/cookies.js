// Las cookies son archivos de texto que almacenan informacion desde el lado del cliente. podemos crearlas desde el DOM.

// Creamos una funcion que creee las cookies automaticamente

function crearCookie( nombre, valor ){

    // Para adicionar un aexpiracion a una cookie, obtenemos la fecha actual y la modificamos para pasarlo como parametro al creador de la cookie
    
    var fecha =  new Date();
    fecha.setHours( fecha.getHours() + 1 );
    // Para separar cada cookie con caracteres HTML usamos el metodo scape()
    // el metodo toUTCString() convierte la fecha en string
    valor = escape(valor);
    document.cookie = nombre+"="+ valor +";expires="+ fecha.toUTCString()+";";
}

//crearCookie( "Equipo","Nacional" );

// ELIMINAR UNA COOKIE

function eliminarCookie(nombre){

    // Se cambia el valor de suma a resta para expirar la cookie
    var fecha =  new Date();

    fecha.setHours( fecha.getHours() - 1 );

    document.cookie = nombre+"=x;expires="+ fecha.toUTCString()+";";

}

//eliminarCookie('Equipo');


// OBTENER UNA COOKIE
function getCookie( nombre ){

    // obtenemos las cookies 
    var cookies = document.cookie;

    // se convierten en array para trabajarlas separadas
    var arrayCookie = cookies.split('; ');
    console.log(arrayCookie);

    for( var i=0; i< arrayCookie.length; i++ ){
        
        var separate = arrayCookie[i].split('=');
        arrayCookie[i] = separate;

        if( separate[0] === nombre ) {
            return unescape(separate[1]);
        }

    }
    
    return undefined;
}

//console.log(getCookie('Equipo'));

// MODIFIQUE LA COOKIE

function EditCookie(nombre, cambio){

    // obtenemos las cookies 
    var cookies = document.cookie;

    console.log(cookies);
    
    return undefined;

}

console.log(EditCookie('sector','Norte'));



