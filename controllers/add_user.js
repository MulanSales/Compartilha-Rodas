angular.module('CompartilhaRodas.add_user', ['ngRoute', 'firebase'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/add_user', {
				templateUrl: 'views/add_user.html',
				controller: 'AddUserCtrl'
			});
	}])
	.controller('AddUserCtrl', function($scope, $firebaseArray, $filter){

		$scope.addPassageiro = function(){

			var ref = firebase.database().ref("Passageiros");

			$scope.passageiro.date_birth = $filter('date')($scope.passageiro.date_of_birth, "dd/MM/yyyy");

			$firebaseArray(ref).$add($scope.passageiro)
			.then(
				function(ref) {
					$scope.passageiro.name = "";
					$scope.passageiro.date_of_birth = "";
					$scope.passageiro.cpf = "";
					$scope.passageiro.gender = "";
					alert("Adicionado com Sucesso!");
				},
				function(error) {
					console.log(error);
				})
		};

	});