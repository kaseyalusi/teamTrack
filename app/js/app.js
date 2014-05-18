var blogApp = angular.module('blogApp', [
	'ngRoute',
	'teamControllers',
	'ui.bootstrap']);

blogApp.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'app/partials/search.html',
			controller: 'searchCont'
		}).otherwise({
			redirectTo: '/'
		});
	});