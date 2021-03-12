/**
 * Funciones declarativas = function declaration
 */

function calcular(numero){
    return numero*500;
}

const resp= calcular(100);
console.log(resp);

/**
 * funciones anonimas = function expressions
 */

const calculo = function(numero){
    return numero*500;
};
const resp2=calculo(100);
console.log(resp2);


/*------------------------------------------------------------ */
const jugador={
    nombre: "Pedro",
    saludar: function(nombre){
        return `hola ${nombre}`
    }
}

console.log(jugador.saludar(jugador.nombre));

/*------------------------------------------------------------ */
function parametros(param=1){
    if(param){
        console.log("Tiene parametro");
    }else{
        console.log("No tiene parametro");
    }
}







