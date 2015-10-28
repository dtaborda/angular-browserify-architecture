function navBarComponent(angular){

	var controller = require('./nav-bar.controller.js');
	
	angular.module('app')
		.directive('navBarMenu',[
			function(){
				var definition = {
					restrict: 'E',
					scope: {
						
					},
					templateUrl: 'app/components/nav-bar/nav-bar.template.html',
					//template: require('./nav-bar.template.html'),
					controller: controller,
					//controllerAs:'navBarMenuCtrl',
					replace:true
				}
				return definition
			}
		])
		
}

module.exports = navBarComponent;