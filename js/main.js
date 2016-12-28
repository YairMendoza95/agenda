var addressApp = angular.module('addressApp', ['ng-Route'])
/*
.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/list.html',
			controller: 'listController',
			reloadOnSearch: false,
		})
		.when('/contact', {
			templateUrl: 'templates/contact.html',
			controller: 'contactController',
			reloadOnSearch: false,
		})
})*/

.controller('mainController', function ($scope){
	var contact = new Contact({
		first_name: "José Yair",
		last_name: "Mendoza Zamudio",
		email: "joseyair.95@outlook.es",
		country: "mx"
	});
	console.debug(contact);
})

.controller('listController', function($scope){

})

.controller('contactController', function($scope){

})