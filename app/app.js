'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'firebase',
  'myApp.login',
  'myApp.admin',
  'myApp.services',
  'myApp.products',
  'myApp.onDeck',
  'myApp.policies',
  'myApp.home',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
