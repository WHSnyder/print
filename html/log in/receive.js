var myApp = angular.module('myApp',[]);
myApp.controller("jobListController", function ($scope) {
	$( document ).ready(function() {
		var list = ['1','2','3','4','5'];
		$scope.jobs = list; 
		$scope.$apply(); 
	});
});
