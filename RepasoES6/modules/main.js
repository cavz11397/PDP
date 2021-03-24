import Animal from './animal.js';
import API_KEY, {equipos,saludar} from './util.js';
/**
 * Cuando la importacion es algo que no es default se hace entre llaves
 */

const animal = new Animal('Oso');
console.log(animal.print());
console.log(equipos);
console.log(saludar('Ana'));
console.log(API_KEY);