/**
 * Routes App
 * @namespace Routes
 */

 (function(angular) {
	'use strict';	

	angular	
		.module('routes', [])
		.config(config)
		
	config.$inject = ['$stateProvider', '$urlRouterProvider', 'constantsValues'];
	
	function config($stateProvider,	$urlRouterProvider, constantsValues) {
		
		//caso de ruta por defecto home (vista principal)
		$urlRouterProvider.otherwise(constantsValues.PATH_HOME);
		
		/** Manejo de URL's mediante UI-Router */

		$stateProvider
		.state('home', {
			url:constantsValues.PATH_HOME,
			templateUrl: 'views/home/templates/home.html',
			controller: 'homeController',
			controllerAs: 'homeVM'
		})

	}

}(angular));