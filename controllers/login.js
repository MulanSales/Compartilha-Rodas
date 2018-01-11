angular.module('CompartilhaRodas.login', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl'
			});
	}])
	.controller('LoginCtrl', function($scope, $window){
		//Inicialiando variáveis apenas para teste, login não funcional
		$scope.emailInput = "teste@teste.com";
		$scope.passwordInput = "**********";

		$scope.logIn = function() {
			$window.location.href = '#!/home'
		}

	});