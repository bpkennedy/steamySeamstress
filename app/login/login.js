'use strict';

angular.module('myApp.login', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
        });
    }])

    .controller('LoginCtrl', ['$scope','$firebaseAuth', '$location',function($scope, $firebaseAuth, $location) {
        var ref = new Firebase("https://steamy.firebaseio.com");
        $scope.loginObj = $firebaseAuth(ref);

        $scope.SignIn = function(event) {
            event.preventDefault();  // To prevent form refresh
            $scope.num = 'logging in';
            var username = $scope.user.email;
            var password = $scope.user.password;

            $scope.loginObj.$authWithPassword({
                email: username,
                password: password
            })
                .then(function(authData) {
                    // Success callback
                    $location.path('/Home');
                    console.log(authData.password.email);
                }).catch(function(error) {
                    console.log(err);
                    $scope.num = err;
                });
        };

        $scope.showUser = function() {
            var authData = $scope.loginObj.$getAuth();

            if (authData) {
                console.log("Logged in as:", authData.uid);
                console.log(authData.password.email);
                $scope.userName = authData.password.email;
                $scope.isLogged = true;
                return $scope.userName;
            } else {
                $scope.isLogged = false;
                console.log("Logged out");
            }
        };


        $scope.createAccount = function() {
            $scope.err = null;
            if( assertValidAccountProps() ) {
                $scope.loginObj.$createUser($scope.user.email, $scope.user.password)
                    .then(function(userData) {
                        console.log("User " + userData.uid + " created successfully!");
                        return $scope.loginObj.$authWithPassword({
                            email: $scope.user.email,
                            password: $scope.user.password
                        });
                    }).then(function(authData) {
                        $location.path('/Home');
                        console.log("Logged in as:", authData.uid);
                    }).catch(function(error) {
                        console.error("Error: ", error);
                    });
            }
        };

        function assertValidAccountProps() {
            if( !$scope.user.email ) {
                $scope.err = 'Please enter an email address';
            }
            else if( !$scope.user.password ) {
                $scope.err = 'Please enter a password';
            }
            else if( $scope.createMode && $scope.pass !== $scope.confirm ) {
                $scope.err = 'Passwords do not match';
            }
            return !$scope.err;
        };

    }]);

