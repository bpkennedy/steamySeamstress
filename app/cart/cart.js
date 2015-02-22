'use strict';

angular.module('myApp.cart', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'cart/cart.html',
    controller: 'CartCtrl',
	controllerAs: 'cart'
  });
}])

.controller('CartCtrl', function($scope) {
  
});
