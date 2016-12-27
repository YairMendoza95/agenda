var addressApp = angular.module('addressApp', ['ng-Route'])
.controller('mainController', function (){
	var contact = new Contact({
		first_name: "José Yair",
		last_name: "Mendoza Zamudio",
		email: "joseyair.95@outlook.es",
		country: "mx"
	});
	console.debug(contact);
});