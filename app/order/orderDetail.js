'use strict';

angular.module('myApp.orderDetail', ['ngRoute', 'ngCart'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/orderDetail', {
    templateUrl: 'order/orderDetail.html',
    controller: 'OrderDetailCtrl',
    controllerAs: 'order'
  });
}])

.controller('OrderDetailCtrl', function($scope, buildOrder) {
    $scope.itemTitle = buildOrder.itemTitle;
    $scope.itemPrice = buildOrder.itemPrice;
});
