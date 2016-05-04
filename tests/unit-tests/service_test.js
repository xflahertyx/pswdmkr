describe('services tests', function() {

  var Person;
  beforeEach(module('starter.services'));
  beforeEach(inject(function (_Store_) {
    Store = _Store_;
  }));
  describe('Store', function () {

    it('can get an instance Store', inject(function(Store) {
        expect(Store).toBeDefined();
    }));

    /*it('assigns a value', function () {
      expect(Store.set('test', 'testVal')).to.have.property('test', 'testVal');
    });*/

  });

});
