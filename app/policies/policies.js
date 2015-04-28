'use strict';

angular.module('myApp.policies', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/policies', {
    templateUrl: 'policies/policies.html',
    controller: 'PoliciesCtrl'
  });
}])

.controller('PoliciesCtrl', [function() {


}]);
