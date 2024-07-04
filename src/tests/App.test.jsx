import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("esegue il rendering del componente App", () => {
    render(<App />);

    screen.debug(); // stampa il jsx nel componente App sulla riga di comando
  });
});
