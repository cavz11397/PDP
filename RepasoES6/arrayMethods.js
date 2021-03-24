const ligaColombia = [
    {equipo: 'Nacional', ciudad:'Medellin', ligas:17,libertadores:2},
    {equipo: 'Medellin', ciudad:'Medellin', ligas:8,libertadores:0},
    {equipo: 'Millonarios', ciudad:'Bogota', ligas:16,libertadores:0},
    {equipo: 'Santafe', ciudad:'Bogota', ligas:8,libertadores:0},
    {equipo: 'Once Caldas', ciudad:'Manizales', ligas:8,libertadores:1}
];

/**ES5 */
let nombreEquipos =[];
for (let i=0;i<ligaColombia.length;i++){
    nombreEquipos.push(ligaColombia[i].equipo);
}

console.log(nombreEquipos);

/**ES6 */
//const nomEquipos =ligaColombia.map(function(pos){return pos.equipo;});
const nomEquipos= ligaColombia.map(pos=>pos.equipo);
console.log(nomEquipos);

/**Find Solo devuelve la primer ocurrencia*/
const eqManizales = ligaColombia.find(pos => pos.ciudad === 'Manizales');
console.log(eqManizales);

const eqMedellin = ligaColombia.find(pos => pos.ciudad === 'Medellin');
console.log(eqMedellin);

const eqBogota = ligaColombia.find(pos => pos.ciudad === 'Bogota');
console.log(eqBogota);

/**Every */

const ganaronLibertadores = ligaColombia.every(pos => pos.libertadores>0);
console.log(ganaronLibertadores);

/** Some */

const algunoGanoLibertadores = ligaColombia.some(pos => pos.libertadores>0);
console.log(algunoGanoLibertadores);

/** filter */

const nomEquipoGanaronLibertadores = ligaColombia.filter(pos => pos.libertadores>0).map((pos)=>pos.equipo);
console.log(nomEquipoGanaronLibertadores);

/** 
 * Reduce
 * en este se necesitan dos parametros, un acumulador y una posicion o lo que itera */

const totalLibertadoresGanadas = ligaColombia.reduce((total,pos) => total+= pos.libertadores , 0);
console.log(totalLibertadoresGanadas);

const ligasEqMed = ligaColombia.filter(pos => pos.ciudad==="Medellin").reduce((total,pos)=>(total+= pos.ligas),0);
console.log(ligasEqMed);

const palabras =['El','futuro','de','la','tecnologia'];
const frase = palabras.reduce((antes,actual) => `${antes} ${actual}`);
console.log(frase);
