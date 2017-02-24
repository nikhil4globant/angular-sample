(function() {
	'use strict';

	var myMod = angular.module("cardModule", []);
	var mainCtrl = myMod.controller("cardcontroller", function($http, $scope) {
		// Header
		$scope.head = {
			fname: "First Name",
			lastName: "Surname",
			movieFav: "Favorite Movie"
		};

		var responsePromise = $http.get('http://localhost:4000/students');
		responsePromise.success(function(data) {
			console.log(data);
			$scope.objectArrary = data;
			$scope.body = data;
		});
	});
})();
