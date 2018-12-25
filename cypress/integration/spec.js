describe("Open Chord Charts app", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("has the correct <h1>", () => {
    cy.contains("h1", "Great success!")
  })

  it("navigates to /charts", () => {
    cy.get("nav a")
      .contains("charts")
      .click()
    cy.url().should("include", "/charts")
  })
})
