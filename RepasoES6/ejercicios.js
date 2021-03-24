arr = [
    { name: "luna", sex: "f", age: 7, species: "dog" },
    { name: "jimmy", sex: "m", age: 122, species: "human" },
    { name: "snoop", sex: "m", age: 60, species: "human" },
    { name: "jennifer", sex: "f", age: 250, species: "human" },
    { name: "yeller", sex: "f", age: 20, species: "dog" },
];

/**
 * 1 name de todos los dog
 * 2 name del sex =f
 * 3 total de edades
 * 4 promedio edades de los humanos
 * 5 nombre de los humanos mayores de 50
 */
//1
const nombreDog = arr.filter((pos) => pos.species === "dog").map((pos) => pos.name);
console.log(nombreDog);
//2
const sexo = arr.filter((pos) => pos.sex === "f").map((pos) => pos.name);
console.log(sexo);
//3
const totalEdades = arr.reduce((total,pos)=>total+=pos.age,0);
console.log(totalEdades);
//4
const promedio = arr.filter(pos => pos.species === 'human').reduce((total, pos) => total += pos.age, 0)
    / arr.filter(pos => pos.species === 'human').length;
console.log(promedio);
//5
const mayores = arr.filter(pos => pos.age > 50 && pos.species === 'human').map(pos => pos.name);
console.log(mayores);