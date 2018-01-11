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
		
	});