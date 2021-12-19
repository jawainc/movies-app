// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'default e2e tests': browser => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.containsText('h1', 'Movies')
      .waitForElementVisible('.movie-list')
      .assert.elementCount('.movie-list li', 10)
      .click('ul li button')
      .assert.elementPresent('ul li button svg.text-yellow-500')
      .click('.tab-favs')
      .assert.elementCount('.favs ul li', 1)
      .click('.tab-list')
      .setValue('input[type="text"]', 'spiderman')
      .pause(2000)
      .assert.containsText('h2', 'Spiderman')
      .end()
  },

  
}
