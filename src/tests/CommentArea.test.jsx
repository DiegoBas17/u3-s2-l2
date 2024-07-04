import { render } from "@testing-library/react";
import CommentArea from "../component/CommentArea";

describe("CommentArea", () => {
  it("esegue il rendering del componente CommentArea", () => {
    render(<CommentArea />);
  });
});
