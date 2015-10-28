function cardComponent(angular){

	var controller = require('./card.controller.js');
	
	angular.module('app')
		.directive('card',[
			function(){
				var definition = {
					restrict: 'E',
					scope: {
						
					},
					templateUrl: 'app/components/card/card.template.html',
					//template: require('./nav-bar.template.html'),
					controller: controller,
					//controllerAs:'navBarMenuCtrl',
					replace:true
				}
				return definition
			}
		])
		
}

module.exports = cardComponent;