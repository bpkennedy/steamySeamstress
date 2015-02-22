'use strict';

angular.module('myApp.admin', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/admin', {
            templateUrl: 'admin/admin.html',
            controller: 'AdminCtrl',
            controllerAs: 'admin'
        });
    }])

    .controller('AdminCtrl', function($scope, $timeout, $firebase) {
        window.newServiceReady = false;
        window.newProductReady = false;
        var editMode = false;
        var ref = new Firebase("https://steamy.firebaseio.com/services");
        $scope.allServices = $firebase(ref).$asArray();
        var ref2 = new Firebase("https://steamy.firebaseio.com/products");
        $scope.allProducts = $firebase(ref2).$asArray();

        $scope.addService = function(e) {
            if ($scope.title && $scope.title && $scope.description && $scope.icon && $scope.active ) {
                var name = $scope.title;
                var description = $scope.description;
                var icon = $scope.icon;
                var active = $scope.active;
                $scope.allServices.$add({title: name, description: description, icon: icon, active: active});
            }
        }
        $scope.addProduct = function(e) {
            if ($scope.productTitle && $scope.productDescription && $scope.productPrice && $scope.productActive ) {
                var name = $scope.productTitle;
                var description = $scope.productDescription;
                var price = $scope.productPrice;
                var quantity = $scope.productQuantity;
                var active = $scope.productActive;
                $scope.allProducts.$add({title: name, description: description, price: price, quantity: quantity, active: active});
            }
        }
    });
