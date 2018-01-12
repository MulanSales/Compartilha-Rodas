angular.module('CompartilhaRodas.home', ['ngRoute', 'firebase'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/home', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl'
			});
	}])

	.controller('HomeCtrl', function($scope, $window, $firebaseArray){
		var ref = firebase.database().ref('Corridas');
		$scope.data = $firebaseArray(ref);
	});