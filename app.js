angular.module('CompartilhaRodas', 
	[
	'ngRoute', 
	'ngMessages', 
	'CompartilhaRodas.login',
	'CompartilhaRodas.home',
	'CompartilhaRodas.main_user',
	'CompartilhaRodas.add_user',
	'CompartilhaRodas.edit_user',
	'CompartilhaRodas.main_driver',
	'CompartilhaRodas.add_driver',
	'CompartilhaRodas.edit_driver',
	'CompartilhaRodas.main_race',
	'CompartilhaRodas.add_race'

	])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('!');
		$routeProvider
	}]);