'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'firebase',
  'ngCart',
  'myApp.cart',
  'myApp.checkout',
  'myApp.paymentForm',
  'myApp.topbar',
  'myApp.login',
  'myApp.admin',
  'myApp.services',
  'myApp.order',
  'myApp.orderDetail',
  'myApp.products',
  'myApp.onDeck',
  'myApp.policies',
  'myApp.home',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]).
factory('userService', ["$firebaseAuth", function($firebaseAuth, $location) {
    var ref = new Firebase("https://steamy.firebaseio.com");
    var auth = $firebaseAuth(ref);
    var userService = {};
    userService.userId = {};
    userService.userEmail = {};

    return{
        login: function(email, password){
            return auth.$authWithPassword({
                "email": email,
                "password": password
            }).then(function(authData){
                    console.log('Login successful',authData.uid);
                    userService.userId = authData.uid;
                }).catch(function(error) {
                    console.error("Authentication failed:", error);
                });
        },
        showUser: function(){
            var authData = auth.$getAuth();

            if (authData) {
                //console.log("Logged in as:", authData.uid);
                //console.log(authData.password.email);
                userService.userEmail = authData.password.email;
                return userService.userEmail;
            } else {
                console.log("No user");
                return null;
            }
        },
        logOut: function() {
            auth.$unauth();
        },
        createAccount: function(email, password) {
            var passedEmail = email;
            console.log(passedEmail);
            var passedPassword = password;
            if (assertValidAccountProps(passedEmail, passedPassword)) {
                auth.$createUser(passedEmail, passedPassword)
                    .then(function(userData) {
                        console.log("User " + userData.uid + " created successfully!");
                        return auth.$authWithPassword({
                            email: passedEmail,
                            password: passedPassword
                        });
                    }).then(function(authData) {
                        $location.path('/Home');
                        console.log("Logged in as:", authData.uid);
                    }).catch(function(error) {
                        console.error("Error: ", error);
                    });
            } else {
                return err;//TODO make sure to do something with this back in the controller.
            }
        }
    }

    function assertValidAccountProps(email, password) {
        var err = {};
        if( email ) {
            err = 'Please enter an email address';
            return err;
        }
        else if( password ) {
            err = 'Please enter a password';
            return err;
        }
        return !err;
    }
}
]).
factory('buildOrder', function($location) {
    var order = {};
    var itemTitle = "";
    var itemPrice = "";
    var itemColor = "";

    order.setOrderTitle = function(title) {
      itemTitle = title;
      console.log("factory is " + itemTitle);
    }

    order.getOrderTitle = function() {
      return itemTitle;
      console.log("getTitle in factory is " + itemTitle);
    }

    order.setOrderPrice = function(price) {
      itemPrice = price;
    }

    order.getOrderPrice = function() {
      return itemPrice;
    }

    order.setOrderColor = function(color) {
      itemColor = color;
    }

    order.getOrderColor = function() {
      return itemColor;
    }

    return order;
});
