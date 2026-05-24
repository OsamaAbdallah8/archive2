describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("submits form successfully", () => {
    cy.get('[data-cy="email-input"]').type("test@test.com");
    cy.get('[data-cy="message-input"]').type("Hello World");
    cy.get('[data-cy="submit-button"]').click();
  });

  it("shows validation error on empty form", () => {
    cy.get('[data-cy="submit-button"]').click();
    cy.contains("cannot be empty");
  });
});
