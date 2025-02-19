describe('Pruebas en <DemoComponent/>', () => {

test("Esta prueba no debe de fallar", () => {
    //Tres paso para las pruebas:
    //1.-Inicialización
    const message1 = 'Hola mundo';
    //2.-Estimulo: lo aplicamos al sujeto de pruebas
    const message2 = message1.trim();
    //3.-Observar el comportamiento... esperado: condición para que pase la prueba
    expect(message1).toBe(message2);  
});
})


