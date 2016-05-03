describe('the very first test', function() {
  var magicInput = element(by.model('test.magicInput'));
  var siteInput = element(by.model('test.siteInput'));
  var returnPass = element(by.binding('passReturn()'));


  beforeEach(function() {
    browser.get('http://127.0.0.1:8100');
  });

  it('can enter data', function() {
    magicInput.clear();
    magicInput.sendKeys('abcd');
    siteInput.clear();
    siteInput.sendKeys('efgh.com');
    expect(returnPass.length).toEqual(16);
  })
})
