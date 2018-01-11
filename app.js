angular.module('CompartilhaRodas', ['ngRoute', 'ngMessages', 'CompartilhaRodas.login'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('!');
		$routeProvider
			.when('/home', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl'
			})
			.otherwise('/')
	}]);