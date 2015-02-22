'use strict';

angular.module('myApp.products', ['ngRoute', 'ngCart'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',
    controller: 'ProductsCtrl'
  });
}])

.controller('ProductsCtrl', function($scope, $document, $timeout, $firebase) {
        var ref = new Firebase("https://steamy.firebaseio.com/products");
        $scope.allProducts = [];
        $timeout(function() {
            $scope.allProducts = $firebase(ref).$asArray();
        }, 50);
});
