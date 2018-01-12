angular.module('CompartilhaRodas.add_race', ['ngRoute', 'firebase'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/add_race', {
				templateUrl: 'views/add_race.html',
				controller: 'AddRaceCtrl'
			});
	}])
	.controller('AddRaceCtrl', function($scope, $firebaseArray, $firebaseObject){

		var users_ref = firebase.database().ref('Passageiros');
		var drivers_ref = firebase.database().ref('Motoristas');

		$scope.users = $firebaseArray(users_ref);
		$scope.drivers = $firebaseArray(drivers_ref);

		$scope.selectedUser = "false";
		$scope.selectedDriver = false;


		$scope.selectUser = function(id) {
			var ref = firebase.database().ref("Passageiros/"+id);
			$scope.p = $firebaseObject(ref);
			$scope.selectedUser = true;
		};

		$scope.selectDriver = function(id) {
			var ref = firebase.database().ref("Motoristas/"+id);
			$scope.m = $firebaseObject(ref);
			$scope.selectedDriver = true;

		};

		$scope.addCorrida = function() {
			$scope.corrida.user_name = $scope.p.name
			$scope.corrida.user_cpf = $scope.p.cpf
			$scope.corrida.driver_name = $scope.m.name
			$scope.corrida.driver_cpf= $scope.m.cpf
			var ref = firebase.database().ref('Corridas');
			$firebaseArray(ref).$add($scope.corrida)
				.then(
					function(ref){
						$scope.p.name = "";
						$scope.p.cpf = "";
						$scope.m.name = "";
						$scope.m.cpf = "";
						$scope.m.status = "";
						$scope.corrida.value = "";
						alert("Solicitação de Corrida realizada com sucesso!");
					},
					function(error) {
						console(error);
					})	
		};

		$scope.checkStatus = function(status) {
			if(status == "inativo"){
				alert("O motorista selecionado está inativo ou em férias! Não é possível concluir transação! Tente novamente.");
				$scope.m.name = "";
				$scope.m.cpf = "";
				$scope.m.status = "";
				$scope.selectedDriver = false;
			}
		}

	});