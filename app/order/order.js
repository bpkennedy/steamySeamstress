'use strict';

angular.module('myApp.order', ['ngRoute', 'ngCart'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/order', {
    templateUrl: 'order/order.html',
    controller: 'OrderCtrl'
  }).when('/orderDetail', {
    templateUrl: 'order/orderDetail.html',
  });
}])

.controller('OrderCtrl', function($scope, $timeout, $location, $firebase, buildOrder) {
        var ref = new Firebase("https://steamy.firebaseio.com/products");
        ref.orderByChild("active").equalTo("true").on("child_added", function(snapshot) {
          console.log(snapshot.key());
        });
        $scope.allProducts = [];
        $timeout(function() {
            $scope.allProducts = $firebase(ref).$asArray();

        }, 50);

        $scope.saveOrderData = function (title, price) {
            buildOrder.setOrderTitle(title);
            buildOrder.setOrderPrice(price);
            $location.path('/orderDetail');
        }

});
