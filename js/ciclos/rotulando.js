// Rotular ciclos: Es la accion que permite nombrar cada for y envocarlo desde cualquier otro para hacer un break. Es similar a ponerle un id a cada for

// Examples:
// Luego del rotulo SIEMPRE debe ir el for

for_pricipal:
for(var i = 0; i<3; i++){
    console.log('i', i);

    for_secundario:
    for(var z = 0; z<4; z++ ){
        
        console.log('z', z);
        
        // Rompemos la ejecucion del primer for
        break for_pricipal;
    }

}