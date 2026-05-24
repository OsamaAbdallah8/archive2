describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("navigates to Home", () => {
    cy.get('[data-cy="home-link"]').click();
    cy.contains("Home");
  });

  it("navigates to About", () => {
    cy.get('[data-cy="about-link"]').click();
    cy.contains("About");
  });

  it("navigates to Card Set", () => {
    cy.get('[data-cy="cardset-link"]').click();
    cy.contains("Card");
  });
});