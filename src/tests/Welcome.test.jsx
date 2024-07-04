import { describe } from "vitest";
import Welcome from "../component/Welcome";
import { render, screen } from "@testing-library/react";

describe("Welcome", () => {
  it("esegue il rendering del componente App", () => {
    render(<Welcome />);
    screen.debug();
  });
});
