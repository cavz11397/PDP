// Objetos (Propiedades)

const jugador = {
    nombre: "Pedro",
    edad: 10,
    estado: false,
};

/*normalmente
const nombre = jugador.nombre;
const edad = jugador.edad;
const estado = jugador.estado;
console.log(nombre);
*/
/*destructurando*/
const { nombre, edad } = jugador;
console.log(nombre);



// Arreglos

const jugadores=["James","Falcao","Ospina"];
const [,pepe, papo]=jugadores;
console.log(pepe);
console.log(papo);

//antes del ecmascript 
let edadx=10;
let edady=20;
/*
let aux=edadx;
edadx=edady;
edady=aux;
console.log(edady);*/

//con ecmaScript
[edadx,edady]=[edady,edadx]
console.log(edadx);
console.log(edady);