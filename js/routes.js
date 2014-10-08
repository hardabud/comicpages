var routes = angular.module('routes', []);

routes.config(['$routeProvider',
 function($routeProvider) {
 $routeProvider
 	.when('/', {
 		templateUrl: 'partials/index-page.html'
 	})
 	.when('/0', {
 		templateUrl: 'partials/index-page.html'
 	})
 	.when('/26', {
 		templateUrl: 'partials/index-page.html'
 	})
 	.when('/:pageId', {
 		templateUrl: 'partials/comic-page.html',
 		controller: 'comicPageCtrl'
 	})
 	.otherwise({
 		redirectTo: '/'
 	});
 }]);
