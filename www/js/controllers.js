angular.module('starter.controllers', [])

.controller('PasswordCtrl', function($scope, algorithms, Store, $cordovaClipboard) {

  var list = {
    dog: 'prime12',
    cat: 'prime13',
    rabbit: 'prime14',
    dragon: 'prime15',
    llama: 'prime16',
    unicorn: 'prime17',
    eagle: 'prime18',
    dolphin: 'prime19',
    penguin: 'prime20',
    eats: ['prime12', 'prime13'],
    breathes: ['prime13', 'prime14'],
    drinks: ['prime14', 'prime15'],
    dreams: ['prime15', 'prime16'],
    farts: ['prime16', 'prime17'],
    smells: ['prime17', 'prime18'],
    snubs: ['prime18', 'prime19'],
    snorts: ['prime19', 'prime20'],
    summons: ['prime20', 'prime12'],
    eats: ['prime20', 'prime19'],
    red: ['prime12', 'prime19'],
    blue: ['prime13', 'prime20'],
    green: ['prime14', 'prime12'],
    yellow: ['prime15', 'prime13'],
    orange: ['prime16', 'prime14'],
    purple: ['prime17', 'prime15'],
    white: ['prime18', 'prime16'],
    black: ['prime19', 'prime17'],
    rainbow: ['prime20', 'prime18'],
    cheese: ['prime12', 'prime19'],
    fire: ['prime13', 'prime20'],
    poops: ['prime14', 'prime12'],
    cars: ['prime15', 'prime13'],
    donuts: ['prime16', 'prime14'],
    phones: ['prime17', 'prime15'],
    sushi: ['prime18', 'prime16'],
    baseballs: ['prime19', 'prime17'],
    bicycles: ['prime20', 'prime18']
  }

  $scope.test = {};
  $scope.test.siteInput = '';
  $scope.test.magicInput = '';
  $scope.progressBar = '';

  $scope.animals = function(ani) {
    var inputs = $scope.test.siteInput +''+ $scope.test.magicInput
    Store.set('inputs', inputs)
    var input = Store.get('inputs');
    var filtered = algorithms.checkChars(input);
    var extended = algorithms.extend(filtered);
    var mix = algorithms.mixup(extended, list[ani]);
    Store.set('animal', algorithms.changer(mix, list[ani]));
    // $scope.progressBar += ani + ' ';
    $scope.animalChoice = ani;
  };
  $scope.verbs = function(ver) {
    var input = Store.get('animal');
    var change1 = algorithms.changer(input, list[ver][0]);
    Store.set('verb', change1);
    // $scope.progressBar += ver + ' ';
    $scope.verbChoice = ver;
  };
  $scope.colors = function(col) {
    var input = Store.get('verb');
    var change1 = algorithms.changer(input, list[col][0]);
    Store.set('color', change1);
    // $scope.progressBar += col + ' ';
    $scope.colorChoice = col
  };
  $scope.nouns = function(noun) {
    var input = Store.get('color');
    var change1 = algorithms.changer(input, list[noun][0]);
    Store.set('noun', change1);
    // $scope.progressBar += noun;
    $scope.nounChoice = noun;
  }
  $scope.displayPass = function() {
    if(algorithms.validate(Store.get('noun'))) {
      console.log('Good');
    } else {
      console.log('Bad');
    }
    return $scope.returnPass = Store.get('noun');
  };
  $scope.copyPass = function() {
    var value = Store.get('noun');
    $cordovaClipboard
      .copy(value).then(function() {
        console.log("Copied text");
      }, function () {
        console.error("There was an error copying");
      });
  };
  $scope.backButton = function(arg) {
    $scope[arg] = '';
    console.log($scope[arg]);
  }
  $scope.clearAll = function() {
    $scope.test = {};
    $scope.test.siteInput = '';
    $scope.test.magicInput = '';
    $scope.progressBar = '';
    Store.clear();
  }

})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
