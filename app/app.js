'use strict'

var angular = require('angular'),
	uiRouter = require('ui-router');

angular.module('app', [uiRouter]);

// load routes
require('./router/profile/profile.router.js')(angular);
require('./router/home/home.router.js')(angular);

angular.element(document).ready(function() {
	angular.bootstrap(document.querySelector('html'), ['app'], {});
});