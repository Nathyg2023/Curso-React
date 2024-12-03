import { getHeroeById } from "./bases/08-imp-exp";

//Promesas: es una función asyncrona, es un valor que puede estar disponible ahora, en el futuro o nunca.

//resolve(resolver): es una función de callback y se va ejecutar cuando la promesa se cumpla o es exitosa 

//reject(rechazar): lo voy a ejecutar cuando la promesa falla o no se puede cumplir

//Métodos de las promesas:
//promesa.then-> La promesa se hizo correctamente
//promesa.catch-> Cuando me da un error, allí manejo el reject 
//promesa.finally-> Al go que se va a ejecutar despues del then y después del catch

/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const p1 = getHeroeById(2);
        resolve(p1);
        //reject('No se pudo encontrar el héroe);
    }, 2000);
})

promesa.then((heroe)=>{
    console.log('heroe', heroe)
})
.catch(err=>console.warn(err)); */

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeById(id);
            if(p1){
                resolve(p1);
            }else{
                reject('No se encontró el heroe')
            }
        }, 2000);
    })
}

getHeroeByIdAsync(1)
  .then(console.log)
  .catch(console.warn);

