angular.module('CompartilhaRodas.main_user', ['ngRoute', 'firebase'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/main_user', {
				templateUrl: 'views/main_user.html',
				controller: 'MainUserCtrl'
			});
	}])
	.controller('MainUserCtrl', function($scope, $window, $firebaseArray){
		
		var ref = firebase.database().ref('Passageiros');
		$scope.data = $firebaseArray(ref);

		$scope.deletePassageiro = function(passageiro) {
			$scope.data.$remove(passageiro)
			.then(function(ref){
				alert("Deletado!");
			},
			function(error) {
				console.log(error);
			})
		};
		
	});