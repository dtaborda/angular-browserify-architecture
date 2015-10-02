'use strict'

var angular = require('angular'),
	homeRouter 	= require('./router/home/home.router.js'),
	profileRouter 	= require('./router/profile/profile.router.js');

angular.module('app', [require('ui-router')])
	.config(['$stateProvider',
		function(stateProvider){
			homeRouter(stateProvider);
			profileRouter(stateProvider);
		}
	]);

angular.element(document).ready(function() {
	angular.bootstrap(document.querySelector('html'), [
			'app'
		], {
			//strictDi: true
		});
	});