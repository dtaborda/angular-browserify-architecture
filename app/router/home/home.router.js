function homeRouter(angular){

	// loads controller
	var controller = require('./home.controller.js');
	
	angular.module('app')
		.config(['$stateProvider',
			function($stateProvider){
				$stateProvider
					.state('home',{
						url:'/',
						controller: controller,
						controllerAs: 'ctrl',
						bindToController: true,
						templateUrl: 'app/router/home/home.template.html',
						title:'Home'
					});
			}
	]);

}

module.exports = homeRouter;