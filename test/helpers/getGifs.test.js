import getGifs from "../../src/helpers/getGifs";

describe("Pruebas en getGifs", () => {
  test("Debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBeGreaterThan(0);
  });

  test("Debe de coincidir con la estructura del objeto planteado", async () => {
    const [gif] = await getGifs("One Punch");

    expect(gif).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
