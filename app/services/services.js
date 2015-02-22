'use strict';

angular.module('myApp.services', ['ngRoute', 'ngAnimate', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/services', {
    templateUrl: 'services/services.html',
    controller: 'ServicesCtrl',
	controllerAs: 'services'
  });
}])

.controller('ServicesCtrl', function($scope, $timeout, $firebase) {
        var ref = new Firebase("https://steamy.firebaseio.com/services");
        $scope.allServices = [];
        $timeout(function() {
            $scope.allServices = $firebase(ref).$asArray();
        }, 50);
});
