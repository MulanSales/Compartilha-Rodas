angular.module('CompartilhaRodas.main_driver', ['ngRoute', 'firebase'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/main_driver', {
				templateUrl: 'views/main_driver.html',
				controller: 'MainDriverCtrl'
			});
	}])
	.controller('MainDriverCtrl', function($scope, $window, $firebaseArray){
		
		var ref = firebase.database().ref('Motoristas');
		$scope.data = $firebaseArray(ref);

		$scope.deleteMotorista = function(motorista) {
			$scope.data.$remove(motorista)
			.then(function(ref){
				alert("Deletado!");
			},
			function(error) {
				console.log(error);
			})
		};
		
	});