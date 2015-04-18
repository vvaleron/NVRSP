angular.module('appRoutes', [

])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/prices', {
			templateUrl: 'html/prices.html',
			controller: 'MainController'
		})

		.when('/contacts', {
			templateUrl: 'html/contacts.html',
			controller: 'MainController'
		})

		.when('/delivery', {
			templateUrl: 'html/delivery.html',
			controller: 'MainController'
		})

		.when('/elements', {
			templateUrl: 'html/elements.html',
			controller: 'MainController'
		})

		.when('/examples', {
			templateUrl: 'html/examples.html',
			controller: 'MainController'
		})

		.when('/articles', {
			templateUrl: 'html/articles.html',
			controller: 'MainController'
		})
	
		.otherwise('/');

	//$locationProvider.html5Mode(true);

	}]);
	//.run(['$rootScope', '$location', 'User', function($rootScope, $location){
	//	$rootScope.$on('$routeChangeStart', function (event, next, current) {
	//		if (!User.isLoggedIn()) {
	//			if (next.templateUrl !== "views/login.html") {
	//				$location.path('/login');
	//			}
	//		}
	//	});
	//}]);