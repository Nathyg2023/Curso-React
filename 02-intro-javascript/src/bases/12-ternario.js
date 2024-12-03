//Operador condicional ternario:

const activo = true;

//Sin ternario:
/* let mensaje='';
if(activo){
    mensaje='Activo';
}else{
    mensaje='Inactivo';
} */

//Con ternario:
//const mensaje = (!activo) ? 'Activo' : 'Inactivo';

//Si quiero realizar sólo la parte del true y no me importa verificar la parte negativa:

const mensaje = activo && 'Si "activo" existe muestrame esta parte que está después de &&'

console.log(mensaje)


