describe('the very first test', function() {
  var magicInput = element(by.model('test.magicInput'));
  var siteInput = element(by.model('test.siteInput'));

  var dogBox = element(by.cssContainingText('.button', 'Dog'));
  // var dogBox = element(by.id('dog'));
  var catBox = element(by.cssContainingText('.button', 'Cat'));
  var rabbitBox = element(by.cssContainingText('.button', 'Rabbit'));
  var dragonBox = element(by.cssContainingText('.button', 'Dragon'));
  // var llamaBox = element(by.css('ng-click=\"animals(\'llama\')\"'));
  // var llamaBox = element(by.buttonText('Llama'));
  var llamaBox = element(by.cssContainingText('.button', 'Llama'));
  var unicornBox = element(by.cssContainingText('.button', 'Unicorn'));
  var eagleBox = element(by.cssContainingText('.button', 'Eagle'));
  var dolphinBox = element(by.cssContainingText('.button', 'Dolphin'));
  var penguinBox = element(by.cssContainingText('.button', 'Penguin'));

  var eatsBox = element(by.cssContainingText('.button', 'eats'));
  var breathesBox = element(by.cssContainingText('.button', 'breathes'));
  var drinksBox = element(by.cssContainingText('.button', 'drinks'));
  var dreamsBox = element(by.cssContainingText('.button', 'dreams'));
  var fartsBox = element(by.cssContainingText('.button', 'farts'));
  var smellsBox = element(by.cssContainingText('.button', 'smells'));
  var snubsBox = element(by.cssContainingText('.button', 'snubs'));
  var snortsBox = element(by.cssContainingText('.button', 'snorts'));
  var summonsBox = element(by.cssContainingText('.button', 'summons'));

  var redBox = element(by.cssContainingText('.button', 'Red'));
  var blueBox = element(by.cssContainingText('.button', 'Blue'));
  var greenBox = element(by.cssContainingText('.button', 'Green'));
  var yellowBox = element(by.cssContainingText('.button', 'Yellow'));
  var orangeBox = element(by.cssContainingText('.button', 'Orange'));
  var purpleBox = element(by.cssContainingText('.button', 'Purple'));
  var whiteBox = element(by.cssContainingText('.button', 'White'));
  var blackBox = element(by.cssContainingText('.button', 'Black'));
  var rainbowBox = element(by.cssContainingText('.button', 'Rainbow'));

  var cheeseBox = element(by.cssContainingText('.button', 'Cheeseburgers'));
  var fireBox = element(by.cssContainingText('.button', 'Fire'));
  var poopsBox = element(by.cssContainingText('.button', 'Poops'));
  var carsBox = element(by.cssContainingText('.button', 'Cars'));
  var donutsBox = element(by.cssContainingText('.button', 'Donuts'));
  var phonesBox = element(by.cssContainingText('.button', 'Phones'));
  var sushiBox = element(by.cssContainingText('.button', 'Sushi'));
  var baseballsBox = element(by.cssContainingText('.button', 'Baseballs'));
  var bicyclesBox = element(by.cssContainingText('.button', 'Bicycles'));

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
    // expect(magicInput.isPresent()).toEqual(true);
    expect(siteInput.getAttribute('value')).toEqual('efgh.com');
  })
    // console.log(llamaBox.getWebElement());
    // expect(llamaBox.isPresent()).toEqual(true);
    // console.log(llamaBox);

    it('can click the buttons', function() {
      expect(dogBox.isPresent()).toEqual(true);
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
