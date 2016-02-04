var app = angular.module('couponApp', [
	'ngRoute', 'mgcrea.ngStrap'
]);


app.config(['$locationProvider', '$routeProvider',
	function($locationProvider, $routeProvider) {
		
		$routeProvider
			.when('/home', {
				templateUrl: 'src/views/home.html',
				controller: 'homeCtrl'
			})
			.when('/comment/:site/:article_id', {
				templateUrl: 'src/views/comment.html',
				controller: 'commentCtrl'
			})
			
			.otherwise({
				redirectTo: '/home'
			});
			
		$locationProvider.html5Mode(true);
	}
]);