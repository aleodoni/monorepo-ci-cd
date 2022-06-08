/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Dummy Test", () => {
  it("Deve renderizar o componente", async () => {
    const { container } = render(<span>Hello</span>);

    expect(container).toMatchSnapshot();
  });
});
