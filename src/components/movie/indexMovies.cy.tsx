import Ratings from "./components/rating";
import { mount } from "cypress/react";

describe("<Ratings />", () => {
  it("should return five stars", () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Ratings rating={5} />);

    cy.get('[data-cy="five-stars"]').should(
      "contain.html",
      `<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>`
    );
  });
});
