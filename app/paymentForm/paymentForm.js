'use strict';

angular.module('myApp.paymentForm', ['ngRoute', 'ngAnimate', 'ngCart'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/paymentForm', {
        templateUrl: 'paymentForm/paymentForm.html',
        controller: 'PaymentFormCtrl'
      });
    }])

    .controller('PaymentFormCtrl', function($scope) {
    });
