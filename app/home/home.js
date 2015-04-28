'use strict';

angular.module('myApp.home', ['ngRoute', 'ngAnimate', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl',
	controllerAs: 'home'
  });
}])

.controller('HomeCtrl', function($scope, $timeout, $firebase, $rootScope) {
        var ref = new Firebase("https://steamy.firebaseio.com/services");
        var ref2 = new Firebase("https://steamy.firebaseio.com/portfolio");
        $scope.allServices = [];
        $scope.allPortfolio = [];

        $timeout(function() {
            $scope.allServices = $firebase(ref).$asArray();
        }, 50);

        $timeout(function() {
          $scope.allPortfolio = $firebase(ref2).$asArray();
        }, 50);
});
