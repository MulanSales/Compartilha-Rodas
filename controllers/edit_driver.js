angular.module('CompartilhaRodas.edit_driver', ['ngRoute', 'firebase'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/edit_driver/:id', {
				templateUrl: 'views/edit_driver.html',
				controller: 'EditDriverCtrl'
			});
	}])
	.controller('EditDriverCtrl', function($scope, $window, $firebaseArray, $firebaseObject, $routeParams){

		var id = $routeParams.id;
		var ref = firebase.database().ref("Motoristas/"+id);
		$scope.motorista = $firebaseObject(ref);

		$scope.editMotorista = function(id) {

			ref.update({
				name: $scope.motorista.name,
				date_birth: $scope.motorista.date_birth,
				cpf: $scope.motorista.cpf,
				car_model: $scope.motorista.car_model,
				status: $scope.motorista.status,
				gender: $scope.motorista.gender
			})
			.then ( function(ref) {
				$scope.motorista.name = "";
			    alert("Dados atualizados com sucesso!");
			    $window.location.href = '#!/main_driver'
			},
			function(error){
				console.log(error);
			})
		};
		
	});