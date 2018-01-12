angular.module('CompartilhaRodas.main_race', ['ngRoute', 'firebase'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/main_race', {
				templateUrl: 'views/main_race.html',
				controller: 'MainRaceCtrl'
			});
	}])
	.controller('MainRaceCtrl', function($scope, $window, $firebaseArray){
		
		var ref = firebase.database().ref('Corridas');
		$scope.data = $firebaseArray(ref);

		$scope.deleteCorrida = function(corrida) {
			$scope.data.$remove(corrida)
			.then(function(ref){
				alert("Deletado!");
			},
			function(error) {
				console.log(error);
			})
		};
		
	});