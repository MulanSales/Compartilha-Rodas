angular.module('CompartilhaRodas', ['ngRoute', 'ngMessages'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl'
			})
			.when('/home', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl'
			})
			.otherwise('/')

	});