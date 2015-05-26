'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'firebase',
  'myApp.topbar',
  'myApp.admin',
  'myApp.policies',
  'myApp.home',
  'myApp.version'
]).
config(['$routeProvider', '$compileProvider', function($routeProvider, $compileProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
  $compileProvider.debugInfoEnabled(false);
}]);
