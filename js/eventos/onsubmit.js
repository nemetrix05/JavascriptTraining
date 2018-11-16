// El evento OnSubmit permite ejecutar alguna accion antes de enviar el formulario

// el onsubmit siempre devuelve un boleano

function enviar (){

    return true;
}

// pafa obtener los valores enviados por url accedemos al objeto global windows y al objeto location en donde esta el search

console.log(window.location.search);


// esta funcion obtiene el valor de un parametro por url
function getParamURL(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

function setparam (param){

    if (param){
        return getParamURL(param);
    }

}

console.log(setparam('nombre'));