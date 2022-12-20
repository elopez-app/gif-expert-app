import { fireEvent, render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  const category = "One Piece";

  test("Deberia de poseer un estado inicial", () => {
    render(<GifExpertApp />);
    const h3 = screen.findByRole("heading", { level: 3 });

    expect(h3).toBeTruthy();
  });

  test("Deberia de cambiarse el texto del input por el deseado", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: category } });

    expect(input.value).toBe(category);
  });

  test("Deberia de agregarse otra categoria al enviar el formulario", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);

    const h3 = screen.findByText(category);

    expect(h3).toBeTruthy();
  });
});
