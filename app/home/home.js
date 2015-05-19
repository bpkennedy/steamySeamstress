'use strict';

angular.module('myApp.home', ['ngRoute', 'ngAnimate', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl',
	controllerAs: 'home'
  });
}])

.controller('HomeCtrl', function($scope, $timeout, $firebase, $rootScope, $http) {
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

        //contact form
        $scope.result = 'hidden'
        $scope.resultMessage;
        $scope.formData; //formData is an object holding the name, email, subject, and message
        $scope.submitButtonDisabled = false;
        $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
        $scope.submit = function(contactform) {
           $scope.submitted = true;
           $scope.submitButtonDisabled = true;
           if (contactform.$valid) {
               $http({
                   method  : 'POST',
                   url     : 'contact-form.php',
                   data    : $.param($scope.formData),  //param method from jQuery
                   headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
               }).success(function(data){
                   console.log(data);
                   if (data.success) { //success comes from the return json object
                       $scope.submitButtonDisabled = true;
                       $scope.resultMessage = data.message;
                       $scope.result='bg-success';
                   } else {
                       $scope.submitButtonDisabled = false;
                       $scope.resultMessage = data.message;
                       $scope.result='bg-danger';
                   }
               });
           } else {
               $scope.submitButtonDisabled = false;
               $scope.resultMessage = 'Failed <i class="fa fa-frown"></i>  Please fill out all the fields.';
               $scope.result='bg-danger';
           }
        }
});
