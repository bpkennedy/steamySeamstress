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

        $scope.saveOrderData = function () {
            var newItemTitle = this.product.title;
            var newItemPrice = this.product.price;
            console.log(newItemTitle);
            console.log(newItemPrice);
            buildOrder.buildInitialItem(newItemTitle, newItemPrice);
            $location.path('/orderDetail');
        }

});
