//Desestructuración de arreglo:

const personajes = ['Jose', 'Mia', 'Omar']

const [ , , p3] = personajes

console.log((p3))

//Otro ejemplo:
const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letra, arreglo] = retornaArreglo();
console.log(letra, arreglo)

//Tarea:
//1. El primer valor del arr se llamará nombre
//2. El segundo se llamará setNombre

const ejemploUseState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre ] = ejemploUseState('Goku')

console.log(nombre, setNombre);
setNombre();


