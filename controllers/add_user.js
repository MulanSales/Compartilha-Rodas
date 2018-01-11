angular.module('CompartilhaRodas.add_user', ['ngRoute', 'firebase'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/add_user', {
				templateUrl: 'views/add_user.html',
				controller: 'AddUserCtrl'
			});
	}])
	.controller('AddUserCtrl', function($scope, $window, $firebaseArray){

		$scope.addPassageiro = function(){

			var ref = firebase.database().ref("Passageiros");

			$firebaseArray(ref).$add($scope.passageiro)
			.then(
				function(ref) {
					$scope.passageiro.name = "";
				},
				function(error) {
					console.log(error);
				}
				)
		};

	});