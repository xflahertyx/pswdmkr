describe('the very first test', function() {
  var magicInput = element(by.model('test.magicInput'));
  var siteInput = element(by.model('test.siteInput'));
  var returnPass = element(by.binding('returnPass'));


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
    
    // console.log(returnPass.getText());
    // expect(returnPass.length).toEqual(16);
  })
})
