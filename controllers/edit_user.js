angular.module('CompartilhaRodas.edit_user', ['ngRoute', 'firebase'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/edit_user/:id', {
				templateUrl: 'views/edit_user.html',
				controller: 'EditUserCtrl'
			});
	}])
	.controller('EditUserCtrl', function($scope, $window, $firebaseArray, $firebaseObject, $routeParams){

		var id = $routeParams.id;
		var ref = firebase.database().ref("Passageiros/"+id);
		$scope.passageiro = $firebaseObject(ref);

		$scope.editPassageiro = function(id) {

			ref.update({
				name: $scope.passageiro.name,
				date_birth: $scope.passageiro.date_birth,
				cpf: $scope.passageiro.cpf,
				gender: $scope.passageiro.gender
			})
			.then ( function(ref) {
				$scope.passageiro.name = "";
			    alert("Dados atualizados com sucesso!");
			    $window.location.href = '#!/main_user'
			},
			function(error){
				console.log(error);
			})
		};
		
	});