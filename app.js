angular.module('CompartilhaRodas', 
	[
	'ngRoute', 
	'ngMessages', 
	'CompartilhaRodas.login',
	'CompartilhaRodas.main_user',
	'CompartilhaRodas.add_user',

	])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('!');
		$routeProvider
			.when('/home', {
				templateUrl: 'views/home.html',
				controllers: 'HomeCtrl'
			})
	}]);