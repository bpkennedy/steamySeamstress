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
    var orderTitle = buildOrder.getOrderTitle();
    var orderPrice = buildOrder.getOrderPrice();
    $scope.orderTitle = orderTitle;
    $scope.orderPrice = orderPrice;
});
