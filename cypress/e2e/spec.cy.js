describe("Authentication Tests", () => {
  beforeEach(() => {
      cy.visit("/"); 
  });

  it("should allow a user to log in with valid credentials", () => {
  
      cy.get("input[name='email']").first().type('validEmail@example.com'); 
      cy.get("input[name='password']").first().type("validPassword"); 
      cy.get("button[type='submit']").first().click(); 

      cy.url().should("include", "/"); 
     
  });

  it("should not allow a user to log in with invalid credentials", () => {

      cy.get("input[name='email']").first().type("user@example.com"); 
      cy.get("input[name='password']").first().type("invalidPassword"); 
      cy.get("button[type='submit']").first().click(); 

      cy.contains("Invalid ").should("be.visible"); 
  });

  it('should log out with the logout button', () => {
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('validPassword');
    cy.get('button[type="submit"]').click();

    cy.get('button#logout').click(); 
    cy.url().should('include', '/login'); 


  });
});


