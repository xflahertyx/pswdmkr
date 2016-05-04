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
    expect(typeof $scope.clearAll).toBe('function');
  });
  it('should have an object', function() {
    expect(typeof $scope.test).toBe('object');
  });

  it('should assign "dog" values to $scope', function() {
    $scope.animals('dog');
    expect($scope.block).toBe('verbs');
    expect($scope.progressBar).toBe('dog ');
    $scope.clearAll();
    expect($scope.progressBar).toBe('');
  });
  it('should assign "eats" values to $scope', function() {
    $scope.animals('cat');
    $scope.verbs('dreams')
    expect($scope.progressBar).toBe('cat dreams ');
    $scope.clearAll();
    expect($scope.progressBar).toBe('');
  });
  it('should assign "colors" values to $scope', function() {
    $scope.animals('llama');
    $scope.verbs('smells');
    $scope.colors('purple');
    expect($scope.progressBar).toBe('llama smells purple ');
    $scope.clearAll();
    expect($scope.progressBar).toBe('');
  });
  it('should assign "nouns" values to $scope', function() {
    $scope.animals('dragon');
    $scope.verbs('breathes');
    $scope.colors('orange');
    $scope.nouns('fire');
    expect($scope.progressBar).toBe('dragon breathes orange fire');
    $scope.clearAll();
    expect($scope.progressBar).toBe('');
  });
  it('should take values, and return a password', function() {
    $scope.test.siteInput = 'pass';
    $scope.test.magicInput = 'word';
    $scope.animals('dragon');
    $scope.verbs('breathes');
    $scope.colors('orange');
    $scope.nouns('fire');
    expect($scope.displayPass()).toBe('K&LV}!tHA?^Y`0`|');
    $scope.clearAll();
    expect($scope.progressBar).toBe('');
  });

});
