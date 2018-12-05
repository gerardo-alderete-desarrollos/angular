import { Animal } from './modelo/animal/animal';
import { Gato } from './modelo/animal/gato';

let gato: Animal;
gato = new Gato('garfiel', 'Mongol');

console.log('gato: ', gato);
gato.desplazar();
//Conversion de tipo (Cating)
(gato as Gato).ronronear();
//Set nombre
gato.nombre = 'Tom';
//Get nombre
console.log(gato.nombre);

(<Gato>gato).ronronear();


