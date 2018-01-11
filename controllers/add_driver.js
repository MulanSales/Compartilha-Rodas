angular.module('CompartilhaRodas.add_driver', ['ngRoute', 'firebase'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/add_driver', {
				templateUrl: 'views/add_driver.html',
				controller: 'AddDriverCtrl'
			});
	}])
	.controller('AddDriverCtrl', function($scope, $firebaseArray, $filter){

		$scope.addMotorista = function(){

			var ref = firebase.database().ref("Motoristas");

			$scope.motorista.date_birth = $filter('date')($scope.motorista.date_of_birth, "dd/MM/yyyy");

			$firebaseArray(ref).$add($scope.motorista)
			.then(
				function(ref) {
					$scope.motorista.name = "";
					$scope.motorista.date_of_birth = "";
					$scope.motorista.cpf = "";
					$scope.motorista.gender = "";
					alert("Adicionado com Sucesso!");
				},
				function(error) {
					console.log(error);
				})
		};

	});