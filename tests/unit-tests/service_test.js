describe('Store service tests', function() {

  var Store;
  beforeEach(module('starter.services'));
  beforeEach(inject(function (_Store_) {
    Store = _Store_;
  }));
  describe('Store', function () {

    it('can get an instance of Store', inject(function(Store) {
      expect(Store).toBeDefined();
    }));
    it('should be an object', function () {
      expect(typeof Store.set()).toBe('object');
    });
    it('should store and retreive a value', function() {
      Store.set('test', 'value');
      expect(Store.get('test')).toBe('value');
    })
  });

});

describe('Algorithms service tests', function() {

  var algorithms;
  beforeEach(module('starter.services'));
  beforeEach(inject(function (_algorithms_) {
    algorithms = _algorithms_;
  }));
  describe('algorithms', function () {
    it('can get an instance of algorithms', inject(function(algorithms) {
      expect(algorithms).toBeDefined();
    }));
    it('should return a string with 16 characters', function() {
      expect(algorithms.extend('test').length).toBe(16);
    });
    it('should filter out a period', function() {
      expect(algorithms.checkChars('test.test')).toBe('testtest');
    });
    it('should scramble letters', function() {
      expect(algorithms.mixup('passtest', 'prime13')).toBe('tepsasst');
    });
    it('should change the input', function() {
      expect(algorithms.changer('passtest', 'prime13')).toBe('5w4NHvJ,');
    });

  });
});
