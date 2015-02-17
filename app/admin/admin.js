'use strict';

angular.module('myApp.admin', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/admin', {
            templateUrl: 'admin/admin.html',
            controller: 'AdminCtrl',
            controllerAs: 'admin'
        });
    }])

    .controller('AdminCtrl', function($scope, $timeout, $firebase) {
        window.newServiceReady = false;
        var editMode = false;
        var ref = new Firebase("https://steamy.firebaseio.com/services");
        $scope.allServices = $firebase(ref).$asArray();

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