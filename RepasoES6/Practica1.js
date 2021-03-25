/**
 * 1) Saber el total de años de experiencia de todos ellos.
 * 2) Encontrar que piloto es mas experimentado (Reto hacerlo solo con reduce)
 * Los dos anteriores realizarlo con y sin funciones flecha (arrow functions)
 */
var pilots = [
    {
    id: 10,
    name: "Poe Dameron",
    years: 14,
    },
    {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
    },
    {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
    },
    {
    id: 99,
    name: "Ello Asty",
    years: 22,
    },
    ];

    /** Arrow function */
    const totalAniosExperiencia = pilots.reduce((total,pos) => total+= pos.years , 0);
    console.log(totalAniosExperiencia);

    /** Not Arrow function*/
    function calcular(piloto){
        let total=0;
        for(let i=0;i<piloto.length;i++){
            total+=piloto[i].years;
        }
        return total;
    };
    const variable = calcular(pilots);
    console.log(variable);

