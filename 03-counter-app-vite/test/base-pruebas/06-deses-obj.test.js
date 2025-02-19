import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-objetos", () => {
  test("usContext debe retornar un objeto", () => {
    const props = { clave: "IronMan", nombre: "Tony Staark", edad: 45 };

    const expectedOutput = {
      nombreClave: "IronMan",
      anios: 45,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const result = usContext(props);

    expect(result).toEqual(expectedOutput);
  });
});
