var comicControllers = angular.module('comicControllers', []);

comicControllers.controller('comicPageCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.pageId = $routeParams.pageId;
		$scope.next = parseInt($routeParams.pageId) + 1;
		$scope.prev = parseInt($routeParams.pageId) - 1;
	}
]);
