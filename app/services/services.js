'use strict';

angular.module('myApp.services', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/services', {
    templateUrl: 'services/services.html',
    controller: 'ServicesCtrl',
	controllerAs: 'services'
  });
}])

.controller('ServicesCtrl', function($scope, $timeout) {
	$scope.allServices = [];
	$timeout(function() {
		$scope.allServices = services;
		console.log(services);
	}, 100);
	
	var services = [
		{
			serviceid: 1,
			title: "Alteration",
			description: "Need something hemmed for Prom or a Dance? Need pants taken up or in at the waist? We can do that, but no funny business.",
			icon: 'fa-cut',
			active: 'true'
		},
		{
			serviceid: 2,
			title: "Tailoring",
			description: "Keep it fresh.  Keep it secret.  Keep it tight.",
			icon: 'fa-diamond',
			active: 'true'
		},
		{
			serviceid: 3,
			title: "Shop Here",
			description: "We make stuff that you can buy, too.  Have a look at our wares.  Don't try to skeet us.",
			icon: 'fa-shopping-cart',
			active: 'true'
		},
		{
			serviceid: 4,
			title: "Sewing",
			description: "Those window treatments definitely need some attention.  Come on, son.  You can do better than that.",
			icon: 'fa-bug',
			active: 'true'
		},        
		{
			serviceid: 5,
			title: "Crochet",
			description: "They see me weavin' and bobbin'.  They hatin'.",
			icon: 'fa-asterisk',
			active: 'true'
		},
		{
			serviceid: 6,
			title: "Costumes",
			description: "The Ren. Fair will never recover when you come jaunting in with a dollop of Steamy Seamstress Debonnaire.  Pfff, we were making costumes when you learned that the santa wasn't real.",
			icon: 'fa-user-secret',
			active: 'true'
		},
	];
});

