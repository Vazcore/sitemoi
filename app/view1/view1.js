'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$animate', function($scope, $animate) {
	$scope.text_stoped = "";
	$scope.text_stoped = false;
	$scope.overlay = function(element){
		var overlay = document.getElementById("overlay");
		var text = document.getElementById("overlay_text");
		var pr = $animate.animate(overlay, {}, {'background-color':'#babcbe'});		
				
		var onTextStoped = function(){
			var text = document.getElementById("overlay_text");
			$animate.addClass(text, "stoped");
			$scope.text_stoped = true;
		};		
		
	};	
	
	
}]);