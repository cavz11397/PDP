/*
*Operator Rest 
Se utiliza para recibir parametros
se ponen ...
siempre debe ir al final
*/

function calcularDeuda(nombre, ...deudas) {
    let total = 0;/** 
    deudas.forEach(function(valor){
        return (total += valor);
    });*/
    deudas.map(deuda => total += deuda)
    return `La persona ${nombre} debe ${total}`;
}
console.log(calcularDeuda("Ana", 20,30,40,50,60));


/*
*Operator Spread
Se utiliza para enviar argumentos
*/

const deudaInicial= 200;
const deudas=[20,30,40,50,60];
const deudastotal=[deudaInicial,...deudas];
console.log(deudastotal);
console.log(calcularDeuda("Ana",...deudastotal));

