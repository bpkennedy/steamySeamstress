'use strict';

angular.module('myApp.orderDetail', ['ngRoute', 'ngCart'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/orderDetail', {
    templateUrl: 'orderDetail/orderDetail.html',
    controller: 'OrderDetailCtrl'
  });
}])

.controller('OrderDetailCtrl', function($scope, buildOrder) {

});
