const pages = {
  'the homepage': '/',
  'the pricing page': '/pricing',
  'the private connectivity use case page': '/for/private-connectivity',
};
const resolutions = {
  iPhone: 'iphone-6+',
  // iPad: 'ipad-2',
  'small Macbook': 'macbook-11',
  // 'large Macbook': 'macbook-16',
  // '4K display': [3840, 2160],
  '8K display': [7680, 4320],
};
for (const page in pages) {
  describe('Visual formatting for ' + page, () => {
    for (const resolution in resolutions) {
      it('should be readable on a ' + resolution, () => {
        const viewport = resolutions[resolution];
        cy.get('html, body').invoke('attr', 'style', 'scroll-behavior: auto;');
        cy.get('html, body').invoke('attr', 'style', 'height: initial;');
        if (Array.isArray(viewport)) {
          cy.viewport(...viewport);
        } else {
          cy.viewport(viewport);
        }
        cy.visit(pages[page]);
        cy.screenshot();
        // cy.compareScreenshot({
        //   screenshotOptions: {
        //     capture: 'fullPage',
        //     disableTimersAndAnimations: true,
        //   },
        // });

        // // Find a link with an href attribute containing "about" and click it
        // cy.get('a[href*="about"]').click()

        // // The new url should include "/about"
        // cy.url().should('include', '/about')

        // // The new page should contain an h1 with "About"
        // cy.get('h1').contains('About')
      });
    }
  });
}
