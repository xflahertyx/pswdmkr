describe('the very first test', function() {
  var magicInput = element(by.model('test.magicInput'));
  var siteInput = element(by.model('test.siteInput'));

  var dogBox = element(by.cssContainingText('.box', 'Dog'));
  var catBox = element(by.cssContainingText('.box', 'Cat'));
  var rabbitBox = element(by.cssContainingText('.box', 'Rabbit'));
  var dragonBox = element(by.cssContainingText('.box', 'Dragon'));
  var llamaBox = element(by.cssContainingText('.box', 'Llama'));
  var unicornBox = element(by.cssContainingText('.box', 'Unicorn'));
  var eagleBox = element(by.cssContainingText('.box', 'Eagle'));
  var dolphinBox = element(by.cssContainingText('.box', 'Dolphin'));
  var penguinBox = element(by.cssContainingText('.box', 'Penguin'));

  var eatsBox = element(by.cssContainingText('.box', 'eats'));
  var breathesBox = element(by.cssContainingText('.box', 'breathes'));
  var drinksBox = element(by.cssContainingText('.box', 'drinks'));
  var dreamsBox = element(by.cssContainingText('.box', 'dreams'));
  var fartsBox = element(by.cssContainingText('.box', 'farts'));
  var smellsBox = element(by.cssContainingText('.box', 'smells'));
  var snubsBox = element(by.cssContainingText('.box', 'snubs'));
  var snortsBox = element(by.cssContainingText('.box', 'snorts'));
  var summonsBox = element(by.cssContainingText('.box', 'summons'));

  var redBox = element(by.cssContainingText('.box', 'Red'));
  var blueBox = element(by.cssContainingText('.box', 'Blue'));
  var greenBox = element(by.cssContainingText('.box', 'Green'));
  var yellowBox = element(by.cssContainingText('.box', 'Yellow'));
  var orangeBox = element(by.cssContainingText('.box', 'Orange'));
  var purpleBox = element(by.cssContainingText('.box', 'Purple'));
  var whiteBox = element(by.cssContainingText('.box', 'White'));
  var blackBox = element(by.cssContainingText('.box', 'Black'));
  var rainbowBox = element(by.cssContainingText('.box', 'Rainbow'));

  var cheeseBox = element(by.cssContainingText('.box', 'Cheeseburgers'));
  var fireBox = element(by.cssContainingText('.box', 'Fire'));
  var poopsBox = element(by.cssContainingText('.box', 'Poops'));
  var carsBox = element(by.cssContainingText('.box', 'Cars'));
  var donutsBox = element(by.cssContainingText('.box', 'Donuts'));
  var phonesBox = element(by.cssContainingText('.box', 'Phones'));
  var sushiBox = element(by.cssContainingText('.box', 'Sushi'));
  var baseballsBox = element(by.cssContainingText('.box', 'Baseballs'));
  var bicyclesBox = element(by.cssContainingText('.box', 'Bicycles'));

  var returnPass = element(by.id('return-pass'));


  beforeEach(function() {
    browser.get('http://127.0.0.1:8100');
  });

  it('can enter data', function() {
    magicInput.clear();
    magicInput.sendKeys('abcd');
    siteInput.clear();
    siteInput.sendKeys('efgh.com');
    expect(magicInput.getAttribute('value')).toEqual('abcd');
    expect(siteInput.getAttribute('value')).toEqual('efgh.com');
    // console.log(llamaBox.getWebElement());
    expect(llamaBox.isPresent()).toEqual(true);
    // console.log(llamaBox);
    llamaBox.click().then(function() {
      snubsBox.click().then(function() {
        orangeBox.click().then(function() {
          donutsBox.click().then(function() {
            // console.log(returnPass);
            // console.log(returnPass.getText());
            // expect(returnPass.length).toEqual(16);
          })
        })
      })
    })



  })
})
