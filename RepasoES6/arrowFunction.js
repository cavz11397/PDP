const saludar = function (nombre) {
    return `Hola ${nombre} como estas!!`;
}
console.log(saludar("Ana"));

/*
*En forma de arrow funtion () => {}
si no tiene parametros hay que abrir parentesis
si es solo uno no hace falta parentesis
si son varios se necesitan los parentesis

si abro llaves es porque retorno algo
*/

const saludarN = nombre => { return `Hola ${nombre} como estas!!`; }
console.log(saludarN("Ana"));

const saludarM= nombre=> `Hola ${nombre} como estas!!`;
console.log(saludarM("Ana"));


const getCountry = ()=>({
    id:110,
    name: "Colombia",
});
console.log(getCountry());
