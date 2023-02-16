import { render } from "@testing-library/react";
import Header from "./";

test("renders the header component", () => {
  const { container } = render(<Header />);
  const { children } = container;
  expect(children).toMatchInlineSnapshot(`
    HTMLCollection [
      <header
        class="App-header"
      >
        <img
          alt="logo"
          class="App-logo"
          src="logo-light.svg"
        />
      </header>,
    ]
  `);
});
