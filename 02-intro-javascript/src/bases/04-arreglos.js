//Arreglos: colección de información, que se encuentran todos dentro de una misma variable

//const arreglo = new Array(100); ---> ASÍ NO SE DEBE HACER, PERO PUEDE SER QUE VEA ESTE CÓDIGO EN ALGÚN MOMENTO

const arreglo = [1, 2, 3, 4];

let arreglo2 = [...arreglo, 5]

const arreglo3 = arreglo2.map((num) => {
    return num * 2
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);



