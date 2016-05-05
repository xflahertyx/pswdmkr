describe('PasswordCtrl', function() {

  var PasswordCtrl;
  var $scope
  it('should have a test', function() {
    expect(false).toBe(false);
  });

  beforeEach(function () {
    module('starter');
    inject(function ($rootScope, $controller, $q, _$timeout_) {
      $scope = $rootScope.$new();
      $timeout = _$timeout_;
      PasswordCtrl = $controller('PasswordCtrl', {
        $scope: $scope
      });
    });
  });

  it('should have a $scope variable', function() {
    expect($scope).toBeDefined();
  });
  it('should have functions', function() {
    expect(typeof $scope.animals).toBe('function');
    expect(typeof $scope.verbs).toBe('function');
    expect(typeof $scope.colors).toBe('function');
    expect(typeof $scope.nouns).toBe('function');
    expect(typeof $scope.displayPass).toBe('function');
    expect(typeof $scope.copyPass).toBe('function');
    expect(typeof $scope.copyPass).toBe('function');
    expect(typeof $scope.backButton).toBe('function');
  });
  it('should have an object', function() {
    expect(typeof $scope.test).toBe('object');
  });

  it('should values to $scope, and return a password', function() {
    $scope.test.siteInput = 'pass';
    $scope.test.magicInput = 'word';
    $scope.animals('dragon');
    $scope.verbs('breathes');
    $scope.colors('orange');
    $scope.nouns('fire');
    expect($scope.animalChoice).toBe('dragon');
    expect($scope.verbChoice).toBe('breathes');
    expect($scope.colorChoice).toBe('orange');
    expect($scope.nounChoice).toBe('fire');
    expect($scope.displayPass()).toBe('K&LV}!tHA?^Y`0`|');
    $scope.clearAll();
    expect($scope.animalChoice).toBe('');
    expect($scope.verbChoice).toBe('');
    expect($scope.colorChoice).toBe('');
    expect($scope.nounChoice).toBe('');
  });
  it('should take values and then clear them on backButton', function() {
    $scope.test.siteInput = 'pass';
    $scope.test.magicInput = 'word';
    $scope.animals('dragon');
    $scope.verbs('breathes');
    $scope.colors('orange');
    expect($scope.animalChoice).toBe('dragon');
    expect($scope.verbChoice).toBe('breathes');
    expect($scope.colorChoice).toBe('orange');
    $scope.backButton('colorChoice');
    expect($scope.animalChoice).toBe('dragon');
    expect($scope.verbChoice).toBe('breathes');
    expect($scope.colorChoice).toBe('');
    $scope.clearAll();
  });

});
