angular.module('CompartilhaRodas')
	.controller('LoginCtrl', function($scope, $window){
		//Inicialiando variáveis apenas para teste, login não funcional
		$scope.emailInput = "teste@teste.com";
		$scope.passwordInput = "**********";

		$scope.logIn = function() {
			$window.location.href = '#!/home'
		}

	});