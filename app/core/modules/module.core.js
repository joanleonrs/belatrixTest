/**
 * ModulesCore Core
 * @namespace Core
 */

 (function(angular) {
 	'use strict';

 	angular
 		.module('module.core', [
			'core.constants',
			'ocLazyLoad.view'			
 		]);

 }(angular));