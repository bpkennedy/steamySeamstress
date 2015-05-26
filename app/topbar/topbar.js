'use strict';

angular.module('myApp.topbar', ['ngRoute', 'ngAnimate'])

.directive('scrollToItem', ['$location', '$rootScope', '$timeout', function($location, $rootScope, $timeout) {
    return {
        restrict: 'A',
        scope: {
            scrollTo: "@"
        },
        link: function(scope, $elm, attr) {
                $elm.on('click', function() {
                  var clicked = $(this).attr("scroll-to");
                  var location = $location.$$url;
                  console.log(location);
                  if (location == "/policies" && clicked == "#services" || clicked == "#portfolio" || clicked == "#contactMe") {
                    $rootScope.$apply(function() {
                      $location.path("/home");
                      $timeout(function() {
                        $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top }, "slow");
                      }, 500);
                    })
                  } else {
                    $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top }, "slow");
                  }
                });
        }
  }}])

    .controller('TopbarCtrl', ['$scope', '$location', '$window', '$firebase', function($scope, $location, $window, $firebase) {
      $scope.isJsReady = false;
      $scope.isJsNav = false;
      $scope.hasMessage = false;

      var ref = new Firebase("https://steamy.firebaseio.com/Promotion");
      $scope.Promotion = $firebase(ref).$asArray();

      $scope.toggleSideNav = function(){
        if ($scope.isJsNav === false) {
          $scope.isJsReady = true;
          $scope.isJsNav = true;
        }
        else {
          $scope.isJsNav = false;
        }
      };

      $scope.goToFacebook = function() {
        $window.open("https://www.facebook.com/pages/The-Steamy-Seamstress/425145580904866","_blank");
      };

    }]);
