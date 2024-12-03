const persona = {
    nombre:'Nathy',
    apellido: 'Gonzalez',
    edad: 35,
    direccion: {
        ciudad: 'Santiago',
        pais: 'Chile',
        Region: 'Metropolitana',
    }
}

//console.table(persona)

//NO SE DEBE HACER
//const persona2 = persona; //Asignación de referencia
//persona2.nombre = 'María';
//console.log(persona2)

console.log(persona)

//Si necesito hacer una copia, creo otra constante de diferente nombre y lo copio la información, o tambien puedo usar el operador spread

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2)


