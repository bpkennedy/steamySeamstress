'use strict';

angular.module('myApp.login', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
        });
    }])

    .controller('LoginCtrl', ['$scope', 'userService',function($scope, userService) {

        $scope.SignIn = function(event) {
            event.preventDefault();  // To prevent form refresh
            var username = $scope.email;
            var password = $scope.password;
            userService.login(username, password);
        };


        $scope.createAccount = function() {
            $scope.err = null;//TODO return the error correctly from the factory function.
            var username = $scope.email;
            var password = $scope.password;
            userService.createAccount(username, password);
        };

    }]);

