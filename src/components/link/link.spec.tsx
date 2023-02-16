import { render, fireEvent, screen } from "@testing-library/react";
import Link from ".";

test("renders the header component", () => {
  const { baseElement } = render(
    <Link href="http://localhost" target="_blank" rel="noopener noreferrer">
      Here is a link
    </Link>
  );
  expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <a
          class="App-link"
          data-testid=""
          href="http://localhost"
          rel="noopener noreferrer"
          target="_blank"
        >
          Here is a link
        </a>
      </div>
    </body>
  `);
});

test("should open the url in a blank window", () => {
  render(
    <Link
      href="http://localhost"
      target="_blank"
      rel="noopener noreferre"
      dataQa="test-link"
    >
      Here is a link
    </Link>
  );
  const link = screen.getByTestId("test-link");
  fireEvent.click(link);
  expect(window.location.href).toBe("http://localhost/");
});
