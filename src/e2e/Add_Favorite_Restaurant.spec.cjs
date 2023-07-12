const expect = require('chai').expect;

Feature('Add Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Add Favorite Restaurant', async ({ I }) => {
  I.seeElement('#restaurantList li button.btn.btn-secondary');
  I.click('#restaurantList li button.btn.btn-secondary');
  I.seeElement('#restaurantList li button.btn.btn-primary.btn-favorite');
  const text = await I.grabTextFrom(
    '#restaurantList li button.btn.btn-primary.btn-favorite',
  );
  expect(text).contain('Favorit ♥');
});

Scenario('Remove Favorite Restaurant', async ({ I }) => {
  I.seeElement('#restaurantList li button.btn.btn-secondary');
  I.click('#restaurantList li button.btn.btn-secondary');
  I.seeElement('#restaurantList li button.btn.btn-primary.btn-favorite');

  I.seeElement('#restaurantList li button.btn.btn-primary');
  I.click('#restaurantList li button.btn.btn-primary');
  I.seeElement('#restaurantList li button.btn.btn-secondary.btn-favorite');
  const text = await I.grabTextFrom(
    '#restaurantList li button.btn.btn-secondary.btn-favorite',
  );
  expect(text).contain('Tambahkan Favorit');
});
