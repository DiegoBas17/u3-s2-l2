import { describe, expect, it } from "vitest";
import BookList from "../component/BookList";
import { fireEvent, render, screen } from "@testing-library/react";
import fantasy from "../books/fantasy.json";
import userEvent from "@testing-library/user-event";

describe("BookList", () => {
  it("le card visualizzate sono effettivamente tutte?", async () => {
    render(<BookList libriDaVisualizzare={fantasy} />);
    const card = await screen.findAllByRole("card");
    expect(card).toHaveLength(150);
  });
  /*  it("returns 2 elements if 'dun' is typed in the input field", async () => {
    render(<BookList libriDaVisualizzare={fantasy} />);
    const inputField = screen.getByPlaceholderText(/cerca/i);
    const user = userEvent.setup();
    await user.type(inputField, "dun");
    const card = await screen.findAllByRole("card");
    expect(card).toHaveLength(2);
  }); */
  it("returns 2 elements if 'id' is typed in the input field", async () => {
    render(<BookList libriDaVisualizzare={fantasy} />);
    const inputField = screen.getByPlaceholderText(/cerca/i);
    const user = userEvent.setup();
    await user.type(inputField, "id");
    const card = await screen.findAllByRole("card");
    expect(card).toHaveLength(10);
  });
  it("la carta selezionata ha il bordo rosso", async () => {
    render(<BookList libriDaVisualizzare={fantasy} />);
    const arrayLibri = await screen.findAllByRole("card");
    fireEvent.click(arrayLibri[0]);

    expect(arrayLibri[0]).toHaveClass("cardSelezionata");
  });
  /* it("la seconda carta selezionata ha il bordo rosso", async () => {
    render(<BookList libriDaVisualizzare={fantasy} />);
    const arrayLibri = await screen.findAllByRole("card");
    fireEvent.click(arrayLibri[1]);
    expect(arrayLibri[1]).toHaveClass("cardSelezionata");
    expect(arrayLibri[0]).not.toHaveClass("cardSelezionata");
  }); */
});
