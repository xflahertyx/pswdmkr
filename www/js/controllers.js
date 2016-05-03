angular.module('starter.controllers', [])

.controller('PasswordCtrl', function($scope, algorithms, Store) {

  $scope.animals = {
    Dog: {name: 'Dog', prim: 'prime12'},
    cat: {name: 'Cat', prim: 'prime13'},
    rabbit: {name: 'Rabbit', prim: 'prime14'},
    dragon: {name: 'Dragon', prim: 'prime15'},
    llama: {name: 'Llama', prim: 'prime16'},
    unicorn: {name: 'unicorn', prim: 'prime17'},
    eagle: {name: 'eagle', prim: 'prime18'},
    dolphin: {name: 'dolphin', prim: 'prime19'},
    penguin: {name: 'penguin', prim: 'prime20'}
  }

  $scope.test = {};
  $scope.test.siteInput = '';
  $scope.test.magicInput = '';
  $scope.block = '';
  $scope.passReturn = function() {
    Store.set('inputs', $scope.test.siteInput +''+ $scope.test.magicInput)
    return Store.get();
  };
  $scope.dog = function() {
    var input = Store.get('inputs');
    var mix = algorithms.mixup(input, 'prime12');
    Store.set('animal', algorithms.changer(mix, 'prime12'));
    $scope.block = 'verbs';
    return Store.get();
    console.log(Store.get());
  };
  $scope.displayPass = function() {
    $scope.returnPass = Store.get();
  };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

