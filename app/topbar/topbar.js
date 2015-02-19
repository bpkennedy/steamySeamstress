'use strict';

angular.module('myApp.topbar', ['ngRoute', 'ngAnimate'])

    .controller('TopbarCtrl', function($scope, userService) {
        $scope.checkUser = function() {
            var thisUser = userService.showUser();
            if (thisUser) {
                $scope.userName = thisUser;
                $scope.isLogged = true;
                return $scope.userName;
            } else {
                $scope.isLogged = false;
                console.log("No User logged in");
            }
        };

        $scope.logOut = function() {
            userService.logOut();
        }
    });