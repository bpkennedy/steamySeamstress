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

        $(window).bind('scroll',function(e){
        	parallaxScroll();
        });

        function parallaxScroll(){
        	var scrolled = $(window).scrollTop();
          var theta = $(window).scrollTop() % Math.PI;
          $('#leftGear').css({ transform: 'rotate(' + theta + 'rad)' });
          $('#rightGear').css({ transform: 'rotate(-' + theta + 'rad)' });

        	$('#backgroundLayer').css('top',(0-(scrolled*.85))+'px');
        	$('#middleLayer').css('top',(0-(scrolled*.5))+'px');
        	$('#frontLayer').css('top',(0-(scrolled*.15))+'px');
        }
});
