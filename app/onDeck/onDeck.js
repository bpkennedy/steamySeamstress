'use strict';

angular.module('myApp.onDeck', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/onDeck', {
    templateUrl: 'onDeck/onDeck.html',
    controller: 'OnDeckCtrl'
  });
}])

.controller('OnDeckCtrl', [function() {

}]);