angular.module('CompartilhaRodas', 
	[
	'ngRoute', 
	'ngMessages', 
	'CompartilhaRodas.login',
	'CompartilhaRodas.main_user',
	'CompartilhaRodas.add_user',
	'CompartilhaRodas.edit_user',
	'CompartilhaRodas.main_driver',
	'CompartilhaRodas.add_driver',
	'CompartilhaRodas.edit_driver'

	])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('!');
		$routeProvider
			.when('/home', {
				templateUrl: 'views/home.html',
				controllers: 'HomeCtrl'
			})
	}]);