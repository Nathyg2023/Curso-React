//Funciones en JS:

/* const saludar = function(nombre){
    return `Hola, ${nombre}`;
} */
//console.log(saludar('Goku'));

//Función de flecha:
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`; //Implícito

const saludar4 = () => `Hola Mundo`;

console.log(saludar2("Vegeta"));
console.log(saludar3("Nathy"));
console.log(saludar4());

const getUser = () => {
  return {
    id: "AB123",
    username: "nygg",
  };
};

//Igual al obj de arriba pero sin return:
/* const getUser = () => ({
    id:'AB123',
    username: 'nygg'
}) */

const user = getUser();
console.log(user);

//Tarea:
//1. Transformar a una función de flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas

function getUsuarioActivo(nombre) {
  return {
    id: "AB456",
    username: "oecv",
  };
}

const usuarioActivo = getUsuarioActivo("Nathy");
console.log(usuarioActivo);

//Función de flecha:

const getUsuarioActivo1 = (nombre) => {
  return {
    id: "AB456",
    username: "oecv",
  };
};

const usuarioActivo1 = getUsuarioActivo1("Nathy");
console.log(usuarioActivo1);

//Implícito:

const getUsuarioActivo2 = (nombre) => ({ id: "AB789", username: "micg" });

const usuarioActivo2 = getUsuarioActivo2('Mia');
console.log(usuarioActivo2);
