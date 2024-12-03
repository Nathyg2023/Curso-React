//Desestructuración: (Asignación desestructurante)

const persona  = {
    nombre: 'Nathy',
    edad: 35,
    clave: 'nygg',
};
//Sin desestructuración:
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.clave)

//Con desestructuración:
const {edad} = persona; //Aquí le indico que me extraiga del objeto 'perona' lo que coloqué entre llaves. 

console.log(edad);

//Desestructuración en el argumento:
const retornaNombre = ({nombre}) => {
    console.log(nombre)
}

retornaNombre(persona)

//Asignación de valores por defecto en el argumento de la función: 

const retornaRango = ({nombre, rango='Capitán'}) => { 
    console.log(nombre, rango)
}

retornaRango(persona)

//Otro ejemplo de uso:

const ejemploUseContext = ({clave, nombre, edad, rango='Capitán'}) => {
    return{
        nombreClave: clave,
        anios: edad,
    }
}
//const {nombreClave, anios} = ejemploUseContext(persona);
//console.log(nombreClave, anios)

//Ejemplo de desestructuración con objetos anidados y asignados a constantes
const desestAnidada =  ({clave, edad, }) => {
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12-.3232,
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = desestAnidada(persona)
console.log(nombreClave, anios);
console.log(lat, lng);







