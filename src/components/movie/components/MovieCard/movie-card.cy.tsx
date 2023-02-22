import { mount } from "cypress/react";
import MovieCard from ".";

const MovieMock = {
  Title: "Star Wars",
  Poster:
    "https://i.pinimg.com/564x/53/9f/c7/539fc7cdd3e6d5a23f2b8b3e038fb000.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "10/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "100%",
    },
    {
      Source: "Metacritic",
      Value: "100/100",
    },
  ],
};

describe("<MovieCard />", () => {
  beforeEach(() => {
    cy.viewport("iphone-5");
  });
  it("should return five stars", () => {
    // see: https://on.cypress.io/mounting-react
    mount(<MovieCard {...MovieMock} />);

    cy.get('[data-cy="movie-card"]').should("exist");

    cy.get('[data-cy="movie-card"]').contains("Star Wars");

    cy.get('[data-cy="five-stars"]').should("exist");
  });
});
