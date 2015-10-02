function profileRoute(angular){

	// loads controller
	var controller = require('./profile.controller.js');

	angular.module('app')
		.config(['$stateProvider',
			function($stateProvider){
				$stateProvider
					.state('profile',{
						url:'/profile',
						controller: controller,
						controllerAs: 'ctrl',
						bindToController: true,
						templateUrl: 'app/router/profile/profile.template.html',
						title:'Profile'
					});
			}
		]);
}

module.exports = profileRoute;