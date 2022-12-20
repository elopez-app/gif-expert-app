import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en useFetchGifs", () => {
  test("Debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { gif, isLoading } = result.current;

    expect(gif.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe de retonar un arreglo de imagenes y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    await waitFor(() => expect(result.current.gif.length).toBeGreaterThan(0));

    const { gif, isLoading } = result.current;

    expect(gif.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
