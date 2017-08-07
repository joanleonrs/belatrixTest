/**
 * Constants Core
 * @namespace Core
 *
 */
 
(function(angular){

	var URL_HOST = window.location.protocol + '//' + window.location.hostname + ':',
		APP_MOCK = true,
		PORT = 9000;


 'use strict';

 	angular
 		.module('core.constants', [])


 		.constant('coreConstants', {

 		})

 		.constant('constantsValues', {

 			'APP_MOCK': APP_MOCK,
 			'PATH_HOME': '/interfaz',
 		});

})(angular);