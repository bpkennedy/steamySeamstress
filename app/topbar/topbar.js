'use strict';

angular.module('myApp.topbar', ['ngRoute', 'ngAnimate'])

    .controller('TopbarCtrl', function($scope) {
      $scope.isJsReady = false;
      $scope.isJsNav = false;

      $scope.toggleSideNav = function(){
        if ($scope.isJsNav === false) {
          $scope.isJsReady = true;
          $scope.isJsNav = true;
        }
        else {
          $scope.isJsNav = false;
        }
      };
    });
