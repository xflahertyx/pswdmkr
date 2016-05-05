describe('the very first test', function() {
  var magicInput = element(by.model('test.magicInput'));
  var siteInput = element(by.model('test.siteInput'));
  var progressBar = element(by.binding('progressBar'));

  var dogBox = element(by.cssContainingText('.button', 'Dog'));
  var catBox = element(by.cssContainingText('.button', 'Cat'));
  var rabbitBox = element(by.cssContainingText('.button', 'Rabbit'));
  var dragonBox = element(by.cssContainingText('.button', 'Dragon'));
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

  var rPass = element(by.binding('returnPass'));
  var copyButton = element(by.buttonText('Copy to Clipboard'));
  var clearButton = element(by.buttonText('Clear'));



  beforeEach(function(done) {
    browser.get('http://127.0.0.1:8100');
    magicInput.clear();
    magicInput.sendKeys('abcd');
    siteInput.clear();
    siteInput.sendKeys('efgh.com');
    done();
  });

  it('can enter data', function(done) {
    expect(magicInput.getAttribute('value')).toEqual('abcd');
    expect(siteInput.getAttribute('value')).toEqual('efgh.com');
    done();
  })

    it('can click the buttons', function(done) {
      expect(dogBox.isPresent()).toEqual(true);
      llamaBox.click().then(function() {
        progressBar.getText()
          .then(function(text) {
            expect(text).toEqual('llama');
          })
          snubsBox.click().then(function() {
            progressBar.getText()
            .then(function(text) {
              expect(text).toEqual('llama snubs');
            })
            orangeBox.click().then(function() {
              progressBar.getText()
              .then(function(text) {
                expect(text).toEqual('llama snubs orange');
              })
              donutsBox.click().then(function() {
                progressBar.getText()
                .then(function(text) {
                  expect(text).toEqual('llama snubs orange donuts');
                })
                expect(rPass.isPresent()).toEqual(true)
                rPass.getText()
                .then(function(text) {
                  expect(text.length).toEqual(16);
                  clearButton.click()
                  .then(function() {
                    magicInput.getAttribute('value').then(function(value) {
                      expect(value.length).toEqual(0);
                    });
                    siteInput.getAttribute('value').then(function(value) {
                      expect(value.length).toEqual(0);
                    });
                    rPass.getText()
                    .then(function(text) {
                      expect(text.length).toEqual(0);
                      done();
                    });
                  })
                });
              })
            })
          })
      })
    })
})
