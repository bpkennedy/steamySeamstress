'use strict';

angular.module('myApp.orderDetail', ['ngRoute', 'ngCart'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/orderDetail', {
    templateUrl: 'order/orderDetail.html',
    controller: 'OrderDetailCtrl',
    controllerAs: 'order'
  }).when('/cart', {
    templateUrl: 'cart/cart.html',
  });;
}])

.controller('OrderDetailCtrl', function($scope, buildOrder, $location) {
    var orderTitle = buildOrder.getOrderTitle();
    var orderPrice = buildOrder.getOrderPrice();
    $scope.orderTitle = orderTitle;
    $scope.orderPrice = orderPrice;
    $scope.orderSize = "";
    $scope.orderColor = "";

    $scope.saveWholeOrder = function (title, price, size, color) {
        buildOrder.setOrderTitle(title);
        buildOrder.setOrderPrice(price);
        buildOrder.setOrderSize(size);
        buildOrder.setOrderColor(color);
        $location.path('/cart');
    }
});
