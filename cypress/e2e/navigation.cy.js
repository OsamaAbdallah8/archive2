describe("Navigation Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("should load homepage", () => {
    cy.contains("Projects");
  });
});