import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should have the correct movie data url", () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toMatchSnapshot();
  });
});
