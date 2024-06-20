/// <reference types="cypress" />

const { addCompareScreenshotCommand } = require('cypress-odiff');

addCompareScreenshotCommand({});

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Screenshot.defaults({
  scale: true,
  onBeforeScreenshot($el) {
    $el.find('html, body').css('height', 'auto');
    $el.find('html, body').css('scroll-behavior', 'auto');
    $el.find('header').css('display', 'none');
    cy.window().then((win) => {
      win.scrollTo({
        top: 0,
        left: document.body.scrollHeight,
        behavior: 'smooth',
      });
      win.scrollTo(0, 0);
    });
  },
  onAfterScreenshot($el) {
    $el.find('header').css('display', 'block');
  },
});

export default {};
