'use strict';

angular.module('myApp.services', ['ngRoute', 'ngAnimate', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/services', {
    templateUrl: 'services/services.html',
    controller: 'ServicesCtrl',
	controllerAs: 'services'
  });
}])

.controller('ServicesCtrl', function($scope, $timeout, $firebase, userService) {
        var ref = new Firebase("https://steamy.firebaseio.com/services");
        $scope.allServices = [];
        $timeout(function() {
            $scope.allServices = $firebase(ref).$asArray();
        }, 50);

        $scope.test = userService.currentUser;


        $scope.addService = function(e) {
            if ($scope.title && $scope.title && $scope.description && $scope.icon && $scope.active ) {
                var name = $scope.title;
                var description = $scope.description;
                var icon = $scope.icon;
                var active = $scope.active;
                $scope.allServices.$add({title: name, description: description, icon: icon, active: active});
            }
        }
});

