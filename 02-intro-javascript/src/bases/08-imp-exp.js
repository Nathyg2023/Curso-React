//Import, export y funciones comunes de arreglos:
import {heroes} from '../data/heroes'; //también puedo sacarlo con imp

export const getHeroeById = (id) => {
    return heroes.find((element)=> element.id === id);
}

//console.log(getHeroeById(2));

export const getHeroeByOwner = (owner) => {
    return heroes.filter((element)=> element.owner === owner);
}

//console.log(getHeroeByOwner('DC'));

//Múltiples exportaciones y exportaciones por defecto:

//Importación por defecto: cuando realizo importación por defecto, la dejo sin el nombre y donde la voy a usar le puedo dar el nombre que yo quiera: (export default [], arriba ) y va sin llaves en la importación, pero la forma recomendable para hacerlo es con colocarle al final: (export default heros;) y también va sin llaves.

//Nueva forma de hacer exportación: y esta es para exportaciones, individuales que se encuantran dentro del mismo archivo de la exportación por defecto, quedaría así la expórtación: import heroes, {owner} from './data/heroes';