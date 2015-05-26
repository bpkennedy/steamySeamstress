'use strict';

angular.module('myApp.admin', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/SakBpk2', {
            templateUrl: 'admin/admin.html',
            controller: 'AdminCtrl',
            controllerAs: 'admin'
        });
    }])

    .controller('AdminCtrl', ['$scope', '$timeout', '$firebase', function($scope, $timeout, $firebase) {
        window.newServiceReady = false;
        window.newProductReady = false;
        window.newPortfolioReady = false;
        window.newPromotionReady = false;
        var editMode = false;
        var ref = new Firebase("https://steamy.firebaseio.com/services");
        $scope.allServices = $firebase(ref).$asArray();
        var ref2 = new Firebase("https://steamy.firebaseio.com/products");
        $scope.allProducts = $firebase(ref2).$asArray();
        var ref3 = new Firebase("https://steamy.firebaseio.com/portfolio");
        $scope.allPortfolios = $firebase(ref3).$asArray();
        var ref4 = new Firebase("https://steamy.firebaseio.com/Promotion");
        $scope.Promotions = $firebase(ref4).$asArray();

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
        $scope.addPortfolio = function(e) {
            if ($scope.portfolioName && $scope.portfolioDescription && $scope.portfolioActive ) {
                var name = $scope.portfolioName;
                var description = $scope.portfolioDescription;
                var active = $scope.portfolioActive;
                $scope.allPortfolios.$add({projectName: name, projectDescription: description, active: active});
            }
        }
        $scope.addPromotion = function(e) {
            if ($scope.promotionDescription && $scope.promotionType && $scope.promotionActive && $scope.promotionCreatedOn ) {
                var description = $scope.promotionDescription;
                var type = $scope.promotionType;
                var active = $scope.promotionActive;
                var createdOn = $scope.promotionCreatedOn;
                $scope.Promotion.$add({description: description, type: type, active: active, createdOn: createdOn});
            }
        }
    }]);
