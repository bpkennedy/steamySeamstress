'use strict';

angular.module('myApp.topbar', ['ngRoute', 'ngAnimate'])

.directive('scrollToItem', function() {
    return {
        restrict: 'A',
        scope: {
            scrollTo: "@"
        },
        link: function(scope, $elm, attr) {
            $elm.on('click', function() {
                $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top }, "slow");
            });
        }
  }})

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
